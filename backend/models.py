"""
This module defines Pydantic models for resume-related data structures and requests.
"""


from pydantic import BaseModel


class ResumeRequest(BaseModel):
    messages: list

class Education(BaseModel):
    school: str | None = None
    major: str | None = None
    gpa: str | None = None
    activities: str | None = None
    start_year: str | None = None
    end_year: str | None = None

class Experience(BaseModel):
    company: str | None = None
    title: str | None = None
    location: str | None = None
    description: str | None = None
    start_date: str | None = None
    end_date: str | None = None

class Project(BaseModel):
    name: str | None = None
    description: str | None = None
    link: str | None = None
    start_date: str | None = None
    end_date: str | None = None


class Link(BaseModel):
    type: str | None = None  # linkedin, github, portfolio, other
    url: str | None = None

class Certification(BaseModel):
    name: str | None = None
    issuer: str | None = None
    date: str | None = None

class Award(BaseModel):
    name: str | None = None
    issuer: str | None = None
    date: str | None = None

class Resume(BaseModel):
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
    resume: Resume

class OptimizeResumeRequest(BaseModel):
    resume: Resume
    job_description: str


class AnalyzeResumeRequest(BaseModel):
    resume: Resume
    job_description: str



class AnalyzeResumeResponse(BaseModel):
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
