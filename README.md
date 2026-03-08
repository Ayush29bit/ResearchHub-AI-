# ResearchHub AI

![Python](https://img.shields.io/badge/Python-3.10+-blue?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-Backend-green?logo=fastapi)
![HuggingFace](https://img.shields.io/badge/HuggingFace-Embeddings-yellow?logo=huggingface)
![React](https://img.shields.io/badge/React-Frontend-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Language-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-BuildTool-646CFF?logo=vite)

ResearchHub AI is an **Agentic AI-powered research assistant** that helps researchers efficiently discover, organize, and analyze academic papers. The system integrates external academic databases, vector embeddings, and large language models to provide contextual insights and summaries from research literature.

## Features

- Research paper discovery via **arXiv API**
- AI-powered contextual research assistant
- Semantic retrieval using **vector embeddings**
- Workspace organization for research projects
- Fast and responsive **React + TypeScript frontend**
- **FastAPI backend** with modular architecture
- Integration with **Groq Llama 3.3 70B LLM**

---

## System Architecture

The system follows a modular architecture separating frontend, backend, AI services, and data storage.

              +----------------------+
              |      React UI        |
              |  (Vite + TypeScript) |
              +----------+-----------+
                         |
                         | REST API (Axios)
                         |
              +----------v-----------+
              |      FastAPI API     |
              |   Backend Services   |
              +----------+-----------+
                         |
         +---------------+----------------+
         |                                |
         |                                |
+--------v---------+            +---------v--------+
|   arXiv API      |            |  Embedding Model |
| (Paper Retrieval)|            | SentenceTransformers |
+------------------+            +---------+--------+
                                          |
                                          |
                                +---------v--------+
                                |    ChromaDB      |
                                |  Vector Database |
                                +---------+--------+
                                          |
                                          |
                                +---------v--------+
                                |      Groq LLM    |
                                |  Llama 3.3 70B   |
                                +------------------+

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Axios

### Backend
- FastAPI
- Python

### AI / ML
- Sentence Transformers
- ChromaDB (Vector Database)
- Groq API (Llama 3.3 70B)

### Data Sources
- arXiv API
- pubmed API

---

## System Flow

The workflow of the ResearchHub AI system:

User Query
   |
   v
React Frontend
(Search / Chat Interface)
   |
   v
FastAPI Backend
   |
   +----------------------+
   |                      |
   v                      v
arXiv API           Workspace Manager
(Paper Retrieval)        |
   |                     |
   v                     v
Paper Summaries   Stored Research Papers
   |
   v
Embedding Model
(Sentence Transformers)
   |
   v
Vector Database
(ChromaDB)
   |
   v
Similarity Search
   |
   v
Relevant Paper Context
   |
   v
LLM Reasoning
(Groq - Llama 3.3 70B)
   |
   v
AI Generated Answer
   |
   v
Returned to Frontend

---

## Example Workflow

1. Search research papers using the **Search Papers** page.
2. Papers are retrieved from **arXiv API**.
3. Paper summaries are converted into **vector embeddings**.
4. Embeddings are stored in **ChromaDB**.
5. Users ask research questions in the **AI Chatbot**.
6. Relevant papers are retrieved and sent to the **LLM for contextual answers**.

---

## Author

Developed as part of an **Agentic AI systems course project**.



