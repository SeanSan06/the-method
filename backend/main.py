from fastapi import FastAPI

app = FastAPI()

# basic test route
@app.get('/')
def index():
  return 'hello world!'