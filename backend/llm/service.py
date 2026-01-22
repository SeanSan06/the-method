from backend.llm.client import chat
from backend.llm.prompts import RESUME_SYSTEM_PROMPT, ATS_OPTIMIZATION_PROMPT
import json


def generate_resume(resume_data: dict) -> dict:
    """
    Enhance raw resume data using the llm

    Args:
        resume_data (dict): The raw resume data with resume model fields

    Returns:
        dict: The enhanced resume data - same structure as input
    
    """
    messages = [
        {"role": "system", "content": RESUME_SYSTEM_PROMPT},
        {"role": "user", "content": json.dumps(resume_data)}
    ]

    response = chat(messages, max_tokens=1500, temperature=0.3)

    enhanced_resume = json.loads(response)

    return enhanced_resume


def optimize_resume(resume_data: dict, job_description: str) -> dict:
    """
    Optimize resume data for ATS based on job description.

    Args:
        resume_data (dict): The raw resume data with resume model fields
        job_description (str): The job description text to optimize against
    Returns:
        dict: The optimized resume data - same structure as input
    """
    messages = [
        {"role": "system", "content": ATS_OPTIMIZATION_PROMPT},
        {"role": "user", "content": f"Resume Data: {json.dumps(resume_data)}\n\nJob Description: {job_description}"}
    ]

    response = chat(messages, max_tokens=2000, temperature=0.3)

    optimized_resume = json.loads(response)

    return optimized_resume