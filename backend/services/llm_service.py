from groq import Groq

client = Groq(api_key="YOUR_GROQ_KEY")

def ask_llm(question, context):

    prompt = f"""
    Use the research papers below to answer the question.

    Context:
    {context}

    Question:
    {question}
    """

    completion = client.chat.completions.create(
        model="llama3-70b-8192",
        messages=[{"role": "user", "content": prompt}]
    )

    return completion.choices[0].message.content