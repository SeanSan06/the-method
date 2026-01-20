from fastapi import FastAPI
from pydantic import BaseModel
from backend.llm.client import chat
from backend.llm.prompts import RESUME_SYSTEM_PROMPT
from backend.models import ResumeRequest, GenerateResumeRequest
app = FastAPI()


# basic test route
@app.get('/')
def index():
  return 'hello world!'


@app.post('/chat')
async def chat_endpoint(request: ResumeRequest):
  """
  Endpoint to handle chat requests for resume assistance.

  Args:
      request (ResumeRequest): The request body containing the user's prompt.
  Returns:
      dict: The LLM's response or an error message.
  """

  try:
      # Prepend system prompt to messages
      messages = [{"role": "system", "content": RESUME_SYSTEM_PROMPT}] + request.messages

      # Call the chat function
      response = chat(messages)

      return {"response": response}
  
  except Exception as e:
      return {"error": str(e)}
  

@app.post('/llm/generate-resume')
async def generate_resume_endpoint(request: GenerateResumeRequest):
  """
  Endpoint to generate and enhance a full resume.
  """
  try:
      resume_data = request.resume.model_dump_json(exclude_none=True)
      
      messages = [
          {"role": "system", "content": RESUME_SYSTEM_PROMPT},
          {"role": "user", "content": resume_data}
      ]
      
      response = chat(messages, max_tokens=1500)
      
      # Parse the JSON response back to dict
      import json
      enhanced_resume = json.loads(response)
      return {"resume": enhanced_resume}

  except Exception as e:
      return {"error": str(e)}
