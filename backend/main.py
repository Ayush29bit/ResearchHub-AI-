from fastapi import FastAPI
from routers import papers, chat
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="ResearchHub AI")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(papers.router)
app.include_router(chat.router)

@app.get("/")
def home():
    return {"message": "ResearchHub AI Backend Running"}