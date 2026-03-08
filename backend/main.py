from fastapi import FastAPI
from routers import papers, chat

app = FastAPI(title="ResearchHub AI")

app.include_router(papers.router)
app.include_router(chat.router)

@app.get("/")
def home():
    return {"message": "ResearchHub AI Backend Running"}