# Tahacom Model — Local RAG Chatbot

A fully **local** Retrieval-Augmented Generation (RAG) chatbot that answers questions from your own PDF source — not from the model's memory. Runs entirely offline with no paid API keys.

> **RAG = the model answers from your source, not from its memory.**
> Retrieval + Generation: the system searches for the most relevant information in your documents, then passes it to the model to generate the answer from it.

---

## Why this project

Large language models tend to **hallucinate** (give confident but wrong answers). RAG grounds the model in a trusted source, so every answer is based on your documents — and the model says "I don't know" when the answer isn't there. Running **100% locally** via Ollama means no API cost and full data privacy.

---

## Architecture

```
PDF source  ->  Read  ->  Chunk  ->  Embed  ->  Store (Vector DB)
                                                     |
User question  ->  Embed  ->  Retrieve closest chunks  ->  Generate answer
```

| Component | Role |
|-----------|------|
| **llama3.2** | Generates the answer (Generation) |
| **nomic-embed-text** | Embedding — converts text into numeric vectors |
| **ChromaDB** | Stores and retrieves the embeddings (Retrieval) |
| **pypdf** | Reads the PDF source |
| **Ollama** | Runs both models locally |
| **Python** | Glue language that wires the pipeline together |

---

## Project files

| File | Purpose |
|------|---------|
| `data.pdf` | The knowledge source the chatbot answers from |
| `ingest.py` | Reads the PDF, chunks it, converts chunks to embeddings, stores them. **Run once** (or when the source changes) |
| `ask.py` | The chatbot interface — ask questions and get answers from the source |

---

## How to run the chatbot

```bash
cd rag-chatbot
venv\Scripts\activate
python ask.py
```
Then type a question (or `exit` to quit). Example: `What is DeskAlerts?`

## Updating the knowledge base

When you change the source (`data.pdf`), rebuild the embeddings:

```bash
rmdir /s /q db     # delete the old database first
python ingest.py   # rebuild the embeddings from data.pdf
```
