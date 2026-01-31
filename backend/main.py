from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from llm.client import chat
from llm.prompts import RESUME_SYSTEM_PROMPT
from models import ResumeRequest, GenerateResumeRequest, OptimizeResumeRequest, AnalyzeResumeRequest, CoverLetterRequest
from llm.service import generate_resume, optimize_resume, generate_cover_letter
from resume_analyzer import ResumeAnalyzer, ValidationError


from database import init_db, get_db

app = FastAPI()
resume_analyzer = ResumeAnalyzer()


# For local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event('startup')
def startup_db():
    init_db()


@app.post('/chat')
async def chat_endpoint(request: ResumeRequest):
    """
    Endpoint to handle chat requests for resume assistance.

    Args:
        request (ResumeRequest): The request body containing the user's prompt.
    Returns:
        dict: The LLM's response or an error message.
    """

    # Prepend system prompt to messages
    messages = [{"role": "system", "content": RESUME_SYSTEM_PROMPT}] + request.messages

    # Call the chat function
    response = chat(messages)

    if response.startswith("Error:"):
        raise HTTPException(status_code=500, detail=response)

    return {"response": response}
  
  

@app.post('/llm/generate-resume')
async def generate_resume_endpoint(request: GenerateResumeRequest):
    """
    HTTP route handler. Deals with FastAPI/HTTP specifics

    Args:
        request (GenerateResumeRequest): The request body containing the user's prompt.
    Returns:
        dict: The LLM's response or an error message.
    """

    # extract data from HTTP request
    resume_dict = request.resume.model_dump()

    # call service func
    enhanced_resume = generate_resume(resume_dict)

    if "error" in enhanced_resume:
        raise HTTPException(status_code=500, detail=enhanced_resume["error"])

    # return http response
    return {"resume": enhanced_resume}

  

@app.post('/llm/optimize-resume')
async def optimize_resume_endpoint(request: OptimizeResumeRequest):
  """
  Optimize resume for ATS according to job description.

  Args:
       request (OptimizeResumeRequest): The request body containing the user's prompt.
  Returns:
       dict: The LLM's response or an error message.
  """

  resume_dict = request.resume.model_dump()
  job_description = request.job_description

  optimized_resume = optimize_resume(resume_dict, job_description)

  if "error" in optimized_resume:
      raise HTTPException(status_code=500, detail=optimized_resume["error"])

  return {"resume": optimized_resume}



@app.post('/analyze-resume')
async def analyze_resume_endpoint(request: AnalyzeResumeRequest):
    """
    Analyze resume against job description.

    Args:
        request (AnalyzeResumeRequest): The request body containing the user's prompt.
    Returns:
        dict: The analysis results or an error message.
    """

    try:
        resume_dict = request.resume.model_dump()

        result = resume_analyzer.analyze({
            "resume": resume_dict,
            "job_description": request.job_description
        })

        return result.to_dict()
    
    except ValidationError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.post('/llm/generate-cover-letter')
async def generate_cover_letter_endpoint(request: CoverLetterRequest):
    """
    Generate a cover letter based on resume and job description.

    Args:
        request (OptimizeResumeRequest): The request body containing the user's prompt.
    Returns:
        dict: The generated cover letter or an error message.
    """

    resume_dict = request.resume.model_dump()
    job_description = request.job_description
    company_name = request.company_name
    position_title = request.position_title
    hiring_manager_name = request.hiring_manager_name

    result = generate_cover_letter(resume_dict, job_description, company_name, position_title, hiring_manager_name)

    if "error" in result:
        raise HTTPException(status_code=500, detail=result["error"])

    return result
