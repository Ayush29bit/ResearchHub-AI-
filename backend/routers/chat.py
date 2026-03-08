from fastapi import APIRouter
from services.embedding_service import search_context
from services.llm_service import ask_llm

router = APIRouter(prefix="/chat")

@router.post("/ask")

def ask(question: str):

    context = search_context(question)

    answer = ask_llm(question, context)

    return {"answer": answer}