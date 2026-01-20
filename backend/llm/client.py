from groq import Groq
from dotenv import load_dotenv

load_dotenv()

MODEL = "llama-3.1-8b-instant"
client = Groq()


def chat(messages, max_tokens=300, temperature=0.3):
    """
    Send chat-style message to the LLM and return raw text output.
    """
    try:
        completion = client.chat.completions.create(
            model=MODEL,
            messages=messages,
            max_tokens=max_tokens,
            temperature=temperature
        )
        return completion.choices[0].message.content

    except Exception as e:
        print(f"Error occurred: {e}")
        return "Error occurred while processing the request."