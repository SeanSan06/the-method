# LLM Module

This folder contains the logic for interacting with LLMs used in the project.

- `client.py` — wraps Hugging Face Inference API calls
- `prompts.py` — reusable prompt templates

The LLM access is currently implemented using Meta LLaMA 3 via Hugging Face.

## Testing the LLM
1. Copy .env.example to .env and add the token

2. Create a virtual environment and install dependencies:
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt

3. Run the test script: python3 backend/llm/test_llm.py

Example schema for the post request:

{
    "messages": [
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Can you help me write a resume for a software engineer?"}
    ]
}
