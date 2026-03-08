from fastapi import APIRouter
from services.arxiv_service import search_arxiv

router = APIRouter(prefix="/papers")

@router.get("/search")

def search(query: str):
    papers = search_arxiv(query)
    return papers