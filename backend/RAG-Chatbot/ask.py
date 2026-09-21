# ===== المكتبات المطلوبة =====
import chromadb   # نفس قاعدة Chroma اللي خزّنّا فيها
import ollama     # للتواصل مع النماذج المحلية

# ===== نتصل بالقاعدة الموجودة =====
client = chromadb.PersistentClient(path="db")        # نفتح نفس مجلد db
collection = client.get_or_create_collection(name="docs")  # نفس "الجدول"

# ===== حلقة سؤال وجواب =====
while True:   # تظل تسأل لين توقف
    question = input("\nYour question (type exit to quit): ")
    if question.lower() == "exit":   # شرط الخروج
        break

    # 1) نحوّل السؤال لـembedding (نفس نموذج التضمين)
    q_embed = ollama.embeddings(model="nomic-embed-text", prompt=question)

    # 2) Retrieval: نجيب أقرب 3 مقاطع للسؤال
    results = collection.query(
        query_embeddings=[q_embed["embedding"]],
        n_results=3
    )
    context = "\n".join(results["documents"][0])   # نجمّع المقاطع المسترجعة

    # 3) Generation: نعطي السياق + السؤال للنموذج
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

    # 4) نطبع الجواب
    print("\nAnswer:", response["message"]["content"])