import chromadb
import ollama
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

client = chromadb.PersistentClient(path="D:/RAG-Chatbot/db")
collection = client.get_or_create_collection(name="docs")


class Question(BaseModel):
    question: str


@app.post("/chat")
def chat(payload: Question):
    question = payload.question

    q_embed = ollama.embeddings(model="nomic-embed-text", prompt=question)

    results = collection.query(
        query_embeddings=[q_embed["embedding"]],
        n_results=3
    )
    context = "\n".join(results["documents"][0])

    prompt = f"""Answer the question using ONLY the context below.
If the answer is not in the context, say you don't know.

Context:
{context}

Question: {question}
"""
    response = ollama.chat(
        model="llama3.2",
        messages=[{"role": "user", "content": prompt}]
    )

    return {"answer": response["message"]["content"]}


class CaseInfo(BaseModel):
    case_title: str
    case_description: str


@app.post("/recommend")
def recommend(payload: CaseInfo):
    query = f"{payload.case_title} {payload.case_description}"

    q_embed = ollama.embeddings(model="nomic-embed-text", prompt=query)

    results = collection.query(
        query_embeddings=[q_embed["embedding"]],
        n_results=3
    )
    context = "\n".join(results["documents"][0])

    prompt = f"""أنت مساعد حكومي متخصص. مهمتك تحديد الجهة المختصة بمعالجة القضية التالية، بالاستناد حصراً على النصوص اللائحية أدناه.

قواعد صارمة يجب الالتزام بها:
1. أجب بالتنسيق المطلوب فقط أدناه، بدون أي مقدمات أو شرح أو تكرار للنصوص المرجعية.
2. إذا كانت النصوص المرجعية لا تغطي هذه القضية بوضوح كافٍ، اكتب "غير محدد" في حقل الجهة المختصة، واجعل درجة الثقة أقل من 40%، ووضح في التبرير أن اللوائح المتاحة حالياً لا تغطي هذه الحالة بشكل صريح.
3. لا تخترع أرقام مواد أو جهات غير موجودة صراحة في النصوص المرجعية.

النصوص اللائحية المرجعية:
{context}

القضية:
العنوان: {payload.case_title}
الوصف: {payload.case_description}

أجب بهذا التنسيق بالضبط، بدون أي نص إضافي قبله أو بعده:
الجهة المختصة: [اسم الجهة أو "غير محدد"]
المادة المستند إليها: [رقم المادة كما ورد حرفياً في النص، أو "غير محدد"]
درجة الثقة: [نسبة مئوية]
التبرير المختصر: [جملة أو جملتين]
"""

    response = ollama.chat(
        model="llama3.2",
        messages=[{"role": "user", "content": prompt}]
    )

    return {"recommendation": response["message"]["content"]}