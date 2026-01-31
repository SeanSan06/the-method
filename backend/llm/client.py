from groq import Groq # type: ignore
from dotenv import load_dotenv
import json
import time


load_dotenv()

MODEL_FAST = "llama-3.1-8b-instant"
MODEL_SMART = "llama-3.3-70b-versatile"
client = Groq()


# only for llm testing
def chat(messages, max_tokens=300, temperature=0.3):
    """
    Send chat-style message to the LLM and return raw text output.
    """
    try:
        completion = client.chat.completions.create(
            model=MODEL_FAST,
            messages=messages,
            max_tokens=max_tokens,
            temperature=temperature
        )
        return completion.choices[0].message.content

    except Exception as e:
        print(f"Error occurred: {e}")
        return "Error occurred while processing the request."


def generate_json(messages, max_tokens=2000, temperature=0.2, retries=2, use_smart_model=False):
    """
    Send chat messages to the LLM and parse the JSON output.
    Retries on JSON parsing errors.

    Args:
        messages (list): List of message dicts for the chat.
        max_tokens (int): Max tokens for the response.
        temperature (float): Sampling temperature.
        retries (int): Number of retries on JSON parse error.

    Returns:
        dict: Parsed JSON output.
    """
    model = MODEL_SMART if use_smart_model else MODEL_FAST

    for attempt in range(retries + 1):
        try:
            completion = client.chat.completions.create(
                model=model,
                messages=messages,
                max_tokens=max_tokens,
                temperature=temperature,
                response_format={"type": "json_object"}
            )
            
            raw_response = completion.choices[0].message.content
            return json.loads(raw_response)

        except json.JSONDecodeError as e:
            print(f"JSON parse error (attempt {attempt + 1}): {e}")
            if attempt < retries:
                time.sleep(1)
                continue
            return {"error": "Failed to parse JSON from LLM response."}
        
        except Exception as e:
            print(f"Error occurred (attempt {attempt + 1}): {e}")
            if attempt < retries:
                time.sleep(1)
                continue
            return {"error": str(e)}
