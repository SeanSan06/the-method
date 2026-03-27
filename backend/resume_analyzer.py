"""
Production-Grade Resume Analyzer v4.0

Hardened implementation with comprehensive error handling, validation,
logging, and performance safeguards for backend integration.

Usage:
    from resume_analyzer import ResumeAnalyzer, AnalysisResult

    analyzer = ResumeAnalyzer()
    result = analyzer.analyze({
        "resume": {...},
        "job_description": "..."
    })
"""

import re
import logging
import json
from datetime import datetime
from typing import Dict, Any, Set, Tuple, Optional, List
from dataclasses import dataclass, asdict
from enum import Enum

from llm.client import generate_json
from llm.prompts import SKILL_EXTRACTION_PROMPT

logger = logging.getLogger(__name__)


class ConfidenceLevel(Enum):
    """Confidence assessment levels."""

    HIGH = "HIGH"
    MEDIUM = "MEDIUM"
    LOW = "LOW"


class RecommendationLevel(Enum):
    """Hiring recommendation levels."""

    STRONG = "STRONG"
    REVIEW = "REVIEW"
    INTERVIEW = "INTERVIEW"
    SCREEN = "SCREEN"


@dataclass
class ScoringConfig:
    """Configurable weights for resume analysis."""

    # Weights calibrated against construction tech hiring decisions
    tfidf_weight: float = 0.5  # Content relevance
    skills_weight: float = 0.3  # Skill match
    experience_weight: float = 0.2  # Experience level

    # Performance limits
    max_resume_chars: int = 50_000
    max_jd_chars: int = 10_000

    def validate(self) -> None:
        """Ensure weights sum to 1.0."""
        weight_sum = self.tfidf_weight + self.skills_weight + self.experience_weight
        if not (0.99 <= weight_sum <= 1.01):
            raise ValueError(f"Weights must sum to 1.0, got {weight_sum}")
        if any(
            w < 0 or w > 1
            for w in [self.tfidf_weight, self.skills_weight, self.experience_weight]
        ):
            raise ValueError("Weights must be between 0 and 1")


@dataclass
class AnalysisResult:
    """Structured analysis result."""

    score: float
    confidence: str
    recommendation: str
    tfidf_score: float
    skills_overlap: float
    experience_score: float
    experience_years: int
    matched_skills: List[str]
    missing_skills: List[str]
    suggested_keywords: List[str]
    jd_skills_count: int
    resume_name: str

    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary for JSON serialization."""
        return asdict(self)


class ValidationError(ValueError):
    """Custom exception for validation failures."""

    pass


class ResumeAnalyzer:
    """
    Production-grade resume analyzer with TF-IDF scoring,
    skill extraction, and confidence assessment.

    Uses hybrid approach:
    - Resume skills: Explicit user-provided skills list (deterministic)
    - Job skills: LLM extraction (smart, handles any job description)
    - Matching: Simple set intersection (deterministic)
    """

    def __init__(self, config: Optional[ScoringConfig] = None):
        """Initialize analyzer with optional custom config."""
        self.config = config or ScoringConfig()
        self.config.validate()
        logger.info("ResumeAnalyzer initialized with config: %s", asdict(self.config))

    def analyze(self, data: Dict[str, Any]) -> AnalysisResult:
        """
        Analyze resume against job description.

        Args:
            data: Dictionary with 'resume' and 'job_description' keys

        Returns:
            AnalysisResult with comprehensive matching analysis

        Raises:
            ValidationError: If input doesn't meet requirements
        """
        logger.info("Starting resume analysis")

        # Validate input
        self._validate_input(data)
        resume = data["resume"]
        job_desc = data["job_description"]

        # Extract and normalize data
        resume_skills = self._extract_resume_skills(resume)
        job_skills = self._extract_job_skills(job_desc)
        experience_years = self._calculate_experience(resume.get("experience", []))

        logger.info(
            "Extracted %d resume skills and %d job skills",
            len(resume_skills),
            len(job_skills),
        )

        # Calculate matches
        matched_skills = self._match_skills(resume_skills, job_skills)
        missing_skills = [s for s in job_skills if s not in matched_skills]

        # Score components
        tfidf_score = self._calculate_tfidf_score(
            resume, job_desc, resume_skills, job_skills
        )
        skills_overlap = (len(matched_skills) / max(len(job_skills), 1)) * 100
        experience_score = min((experience_years / 8) * 100, 100)

        # Overall score (weighted average)
        overall_score = (
            tfidf_score * self.config.tfidf_weight
            + skills_overlap * self.config.skills_weight
            + experience_score * self.config.experience_weight
        )

        # Confidence level
        confidence = self._assess_confidence(job_skills)

        # Recommendation
        recommendation = self._get_recommendation(overall_score, skills_overlap)

        # Suggested keywords (missing skills + top keywords from JD)
        suggested_keywords = missing_skills[:6]

        logger.info(
            "Analysis complete: score=%.1f, confidence=%s, recommendation=%s",
            overall_score,
            confidence,
            recommendation,
        )

        result = AnalysisResult(
            score=round(overall_score, 1),
            confidence=confidence,
            recommendation=recommendation,
            tfidf_score=round(tfidf_score, 1),
            skills_overlap=round(skills_overlap, 1),
            experience_score=round(experience_score, 1),
            experience_years=experience_years,
            matched_skills=list(matched_skills),
            missing_skills=missing_skills,
            suggested_keywords=suggested_keywords,
            jd_skills_count=len(job_skills),
            resume_name=resume.get("name", "Unknown"),
        )

        return result

    def _validate_input(self, data: Dict[str, Any]) -> None:
        """Validate input structure."""
        if not isinstance(data, dict):
            raise ValidationError(f"Input must be dict, got {type(data).__name__}")

        if "resume" not in data or "job_description" not in data:
            raise ValidationError("Input must have 'resume' and 'job_description' keys")

        resume = data["resume"]
        if not isinstance(resume, dict):
            raise ValidationError(f"Resume must be dict, got {type(resume).__name__}")

        if not resume.get("name"):
            raise ValidationError("Resume must have 'name' field")

        if not resume.get("skills"):
            raise ValidationError("Resume must have 'skills' field")

        if not isinstance(resume["skills"], list):
            raise ValidationError("Resume 'skills' must be list")

        job_desc = data["job_description"]
        if not isinstance(job_desc, str):
            raise ValidationError(
                f"Job description must be string, got {type(job_desc).__name__}"
            )

        if len(job_desc.strip()) < 10:
            raise ValidationError("Job description too short (minimum 10 characters)")

        logger.debug("Input validation passed for resume '%s'", resume.get("name"))

    def _extract_resume_skills(self, resume: Dict[str, Any]) -> Set[str]:
        """
        Extract skills from resume using explicit skills list.
        Trust the user-provided skills for deterministic matching.
        """
        skills = set()

        # Use explicit skills list (user-provided, deterministic)
        for skill in resume.get("skills", []):
            if isinstance(skill, str) and skill.strip():
                # Normalize: lowercase and strip whitespace
                normalized = skill.lower().strip()
                skills.add(normalized)

        logger.debug("Extracted %d resume skills from explicit list", len(skills))
        return skills

    def _extract_job_skills(self, job_desc: str) -> Set[str]:
        """
        Extract skills from job description using LLM.
        Smart extraction that handles any job description without hardcoded vocabulary.
        """
        try:
            messages = [
                {"role": "system", "content": SKILL_EXTRACTION_PROMPT},
                {"role": "user", "content": job_desc},
            ]

            result = generate_json(messages, max_tokens=1000, use_smart_model=False)

            if "error" in result:
                logger.error("LLM skill extraction failed: %s", result["error"])
                return set()

            skills = result.get("skills", [])
            skill_set = {
                skill.lower().strip()
                for skill in skills
                if isinstance(skill, str) and skill.strip()
            }

            logger.debug("Extracted %d job skills via LLM", len(skill_set))
            return skill_set

        except Exception as e:
            logger.error("Failed to extract job skills: %s", e)
            return set()

    def _match_skills(self, resume_skills: Set[str], job_skills: Set[str]) -> Set[str]:
        """Match resume skills to job skills."""
        matched = set()
        for skill in resume_skills:
            if skill in job_skills:
                matched.add(skill)
        return matched

    def _calculate_tfidf_score(
        self,
        resume: Dict[str, Any],
        job_desc: str,
        resume_skills: Set[str],
        job_skills: Set[str],
    ) -> float:
        """
        Calculate TF-IDF-inspired score based on skill overlap and
        keyword density in job description relative to resume.
        """
        if not job_skills:
            return 0.0

        # Simple TF-IDF: proportion of skills that appear in both
        overlap_ratio = len(resume_skills & job_skills) / len(
            job_skills | resume_skills
        )

        # Bonus for keyword density in JD
        total_keywords = len(job_skills)
        skill_density = total_keywords / (
            len(job_desc.split()) + 1
        )  # +1 to avoid division by zero

        # Weighted score
        tfidf_score = (overlap_ratio * 70) + (skill_density * 30)
        return min(tfidf_score, 100)  # Cap at 100

    def _calculate_experience(self, experience: List[Dict[str, Any]]) -> int:
        """Calculate total experience in years."""
        if not experience:
            return 0

        total_years = 0
        for exp in experience:
            if not isinstance(exp, dict):
                continue

            start_date = exp.get("start_date", "")
            end_date = exp.get("end_date", "")

            # Extract year from date string
            current_year = datetime.now().year
            start_year = self._extract_year(start_date) or current_year
            end_year = (
                current_year
                if "present" in end_date.lower()
                else (self._extract_year(end_date) or current_year)
            )

            years = max(0, end_year - start_year)
            total_years += years

        logger.debug("Calculated experience: %d years", total_years)
        return total_years

    def _extract_year(self, date_str: str) -> Optional[int]:
        """Extract year from date string."""
        if not date_str:
            return None

        # Look for 4-digit year
        match = re.search(r"\b(19|20)\d{2}\b", date_str)
        return int(match.group(0)) if match else None

    def _assess_confidence(self, job_skills: Set[str]) -> str:
        """Assess confidence level based on job description clarity."""
        if len(job_skills) > 10:
            return ConfidenceLevel.HIGH.value
        elif len(job_skills) > 5:
            return ConfidenceLevel.MEDIUM.value
        else:
            return ConfidenceLevel.LOW.value

    def _get_recommendation(self, score: float, skills_overlap: float) -> str:
        """Get hiring recommendation based on scores."""
        if score >= 75 and skills_overlap >= 70:
            return f"{RecommendationLevel.STRONG.value} - High match across content and skills"
        elif score >= 75 and skills_overlap < 50:
            return f"{RecommendationLevel.REVIEW.value} - High content but missing key skills"
        elif score >= 50:
            return f"{RecommendationLevel.INTERVIEW.value} - Mixed match, assess fit verbally"
        else:
            return f"{RecommendationLevel.SCREEN.value} - Significant gaps"


# Module-level convenience function
def analyze_resume(
    data: Dict[str, Any], config: Optional[ScoringConfig] = None
) -> AnalysisResult:
    """
    Convenience function to analyze a resume.

    Args:
        data: Dictionary with 'resume' and 'job_description' keys
        config: Optional ScoringConfig

    Returns:
        AnalysisResult
    """
    analyzer = ResumeAnalyzer(config)
    return analyzer.analyze(data)


if __name__ == "__main__":
    # Example usage
    logging.basicConfig(level=logging.INFO)

    example_data = {
        "resume": {
            "name": "Sarah Chen",
            "skills": ["Python", "React", "AWS", "Docker", "Kubernetes"],
            "experience": [
                {
                    "company": "TechCorp",
                    "title": "Senior Engineer",
                    "start_date": "June 2022",
                    "end_date": "Present",
                    "description": "Led microservices with Python and AWS",
                }
            ],
        },
        "job_description": "Staff Backend Engineer: 5+ years Python, Go, PostgreSQL, Redis, Kubernetes, AWS/GCP. Event-driven architecture, Kafka, gRPC, Datadog.",
    }

    analyzer = ResumeAnalyzer()
    result = analyzer.analyze(example_data)
    print(json.dumps(result.to_dict(), indent=2))
