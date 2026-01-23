from backend.llm.prompts import RESUME_SYSTEM_PROMPT, ATS_OPTIMIZATION_PROMPT
from backend.llm.client import generate_json
import json


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