from backend.llm.prompts import RESUME_SYSTEM_PROMPT, ATS_OPTIMIZATION_PROMPT, COVER_LETTER_PROMPT
from backend.llm.client import generate_json
import json
from typing import Optional

def generate_resume(resume_dict: dict) -> dict:
    """
    Enhance raw resume data using the llm.

    Args:
        resume_data (dict): The raw resume data with resume model fields
    Returns:
        dict: The enhanced resume data - same structure as input
    """
    messages = [
        {"role": "system", "content": RESUME_SYSTEM_PROMPT},
        {"role": "user", "content": json.dumps(resume_dict)}
    ]

    result = generate_json(messages, use_smart_model=False)

    if "error" in result:
        return {"error": result["error"], "original": resume_dict}
    
    return result


def optimize_resume(resume_dict: dict, job_description: str) -> dict:
    """
    Optimize resume data for ATS based on job description.

    Args:
        resume_dict (dict): The raw resume data with resume model fields
        job_description (str): The job description text to optimize against
    
    Returns:
        dict: The optimized resume data - same structure as input
    """
    user_content = f"""Resume Data:
{json.dumps(resume_dict, indent=2)}

Job Description:
{job_description}"""

    messages = [
        {"role": "system", "content": ATS_OPTIMIZATION_PROMPT},
        {"role": "user", "content": user_content}
    ]

    result = generate_json(messages, use_smart_model=True)
    
    if "error" in result:
        return {"error": result["error"], "original": resume_dict}
    
    return result


def generate_cover_letter(resume_dict: dict, job_description: str, company_name: Optional[str], position_title: Optional[str], hiring_manager_name: Optional[str]) -> dict:
    """
    Generate a cover letter based on resume data and job description.

    Args:
        resume_dict (dict): The raw resume data with resume model fields
        job_description (str): The job description text to tailor the cover letter to
        company_name (str | None): Optional company name for personalization
        position_title (str | None): Optional position title for personalization
        hiring_manager_name (str | None): Optional hiring manager name for personalization
    Returns:
        dict: The generated cover letter data with cover_letter, word_count, and suggestions
    """
    user_content = f"""Resume Data:
{json.dumps(resume_dict, indent=2)}

Job Description:
{job_description}

Company Name: {company_name or "Not provided"}
Position Title: {position_title or "Not provided"}
Hiring Manager Name: {hiring_manager_name or "Not provided"}"""

    messages = [
        {"role": "system", "content": COVER_LETTER_PROMPT},
        {"role": "user", "content": user_content}
    ]

    result = generate_json(messages, max_tokens=1000, temperature=0.5, use_smart_model=True)

    if "error" in result:
        return {"error": result["error"]}

    return result