"""
This module defines Pydantic models for resume-related data structures and requests.
"""

from typing import Optional
from pydantic import BaseModel


class ResumeRequest(BaseModel):
    """Request model for sending a list of messages related to a resume."""

    messages: list


class Education(BaseModel):
    """Represents an education entry in a resume."""

    school: str | None = None
    major: str | None = None
    gpa: str | None = None
    activities: str | None = None
    start_year: str | None = None
    end_year: str | None = None


class Experience(BaseModel):
    """Represents a work experience entry in a resume."""

    company: str | None = None
    title: str | None = None
    location: str | None = None
    description: str | None = None
    start_date: str | None = None
    end_date: str | None = None


class Project(BaseModel):
    """Represents a project entry in a resume."""

    name: str | None = None
    description: str | None = None
    link: str | None = None
    start_date: str | None = None
    end_date: str | None = None


class Link(BaseModel):
    """Represents a link (e.g., LinkedIn, GitHub) in a resume."""

    type: str | None = None  # linkedin, github, portfolio, other
    url: str | None = None


class Certification(BaseModel):
    """Represents a certification in a resume."""

    name: str | None = None
    issuer: str | None = None
    date: str | None = None


class Award(BaseModel):
    """Represents an award or honor in a resume."""

    name: str | None = None
    issuer: str | None = None
    date: str | None = None


class Resume(BaseModel):
    """Main resume model containing all user information."""

    name: str  # required
    phone: str | None = None
    email: str | None = None
    is_us_citizen: bool | None = None
    links: list[Link] | None = None
    about_section: str | None = None
    education: list[Education] | None = None
    relevant_coursework: list[str] | None = None
    experience: list[Experience] | None = None
    projects: list[Project] | None = None
    skills: list[str] | None = None
    certifications: list[Certification] | None = None
    awards: list[Award] | None = None


class GenerateResumeRequest(BaseModel):
    """Request model for generating a resume."""

    resume: Resume


class OptimizeResumeRequest(BaseModel):
    """Request model for optimizing a resume for a job description."""

    resume: Resume
    job_description: str


class AnalyzeResumeRequest(BaseModel):
    """Request model for analyzing a resume against a job description."""

    resume: Resume
    job_description: str


class AnalyzeResumeResponse(BaseModel):
    """Response model for resume analysis results."""

    score: float
    confidence: str
    recommendation: str
    tfidf_score: float
    skills_overlap: float
    experience_score: float
    experience_years: int
    matched_skills: list[str]
    missing_skills: list[str]
    suggested_keywords: list[str]
    jd_skills_count: int
    resume_name: str


class CoverLetterRequest(BaseModel):
    """Request model for generating a cover letter."""

    resume: Resume
    job_description: str
    company_name: Optional[str] | None = None
    position_title: Optional[str] | None = None
    hiring_manager_name: Optional[str] | None = None


class CoverLetterResponse(BaseModel):
    """Response model for a generated cover letter."""

    cover_letter: str
    word_count: int
    suggestions: list[str] | None = None
