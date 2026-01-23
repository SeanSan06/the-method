from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from backend.llm.client import chat
from backend.llm.prompts import RESUME_SYSTEM_PROMPT
from backend.models import ResumeRequest, GenerateResumeRequest, OptimizeResumeRequest
from backend.llm.service import generate_resume, optimize_resume


app = FastAPI()


# For local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


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




"""
FRONTEND ROUTES
"""

app.mount('/assets', StaticFiles(directory='static/assets'), 'static')

@app.get('/')
async def serve_index():
    return FileResponse('static/index.html')
