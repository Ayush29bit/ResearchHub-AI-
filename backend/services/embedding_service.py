from sentence_transformers import SentenceTransformer
import chromadb

model = SentenceTransformer('all-MiniLM-L6-v2')

client = chromadb.Client()
collection = client.get_or_create_collection("papers")

def store_paper(title, summary):

    embedding = model.encode(summary).tolist()

    collection.add(
        documents=[summary],
        embeddings=[embedding],
        ids=[title]
    )

def search_context(query):

    embedding = model.encode(query).tolist()

    results = collection.query(
        query_embeddings=[embedding],
        n_results=3
    )

    return results["documents"]