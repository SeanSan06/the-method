from huggingface_hub import InferenceClient
import os


MODEL = "meta-llama/Meta-Llama-3-8B-Instruct"


client = InferenceClient(
    model=MODEL,
    token=os.getenv("HF_API_TOKEN"),
)


def chat(messages, max_tokens=300, temperature=0.3):
    """
    Send chat-style messsage to the LLM and return raw text output.
    """

    response = client.chat_completion(
        messages=messages,
        max_tokens=max_tokens,
        temperature=temperature,
    )

    return response.choices[0].message["content"]