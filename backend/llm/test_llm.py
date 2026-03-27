from client import chat

messages = [
    {"role": "system", "content": "You are an expert resume writer."},
    {
        "role": "user",
        "content": "Write 1 strong bullet point for a backend engineer experience.",
    },
]

result = chat(messages)
print("LLM output:", result)
