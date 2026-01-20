from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from backend.llm.client import chat
from backend.llm.prompts import RESUME_SYSTEM_PROMPT


app = FastAPI()

class ResumeRequest(BaseModel):
    messages: list

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
  
"""
FRONTEND ROUTES
"""

app.mount('/assets', StaticFiles(directory='static/assets'), 'static')

@app.get('/')
async def serve_index():
    return FileResponse('static/index.html')
