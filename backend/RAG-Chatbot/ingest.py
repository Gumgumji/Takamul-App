# المكتبات المطلوبة 
from pypdf import PdfReader   # لقراءة ملف الـPDF
import chromadb              # قاعدة البيانات المتجهية (تخزّن الـembeddings)
import ollama                # للتواصل مع النماذج المحلية (embeddings + التوليد)
# -----------------------------------------
# 1-  قراءة نص البي دي إف

reader = PdfReader("لائحة وزارة البلديات والإسكان.pdf")   #  وهنا اضع اسم الملف المرجعي 
text = ""                        # متغيّر فاضي نجمّع فيه النص
for page in reader.pages:        # نمر على كل صفحة
    text += page.extract_text()  # نطلّع نص الصفحة ونضيفه
# -------------------------------------------------------

# 2- تقطيع النص لمقاطع 
# ليش؟ البحث بالمعنى أدق على مقاطع صغيرة بدل نص ضخم دفعة وحدة
chunk_size = 500   # حجم كل مقطع (500 حرف)
chunks = [text[i:i + chunk_size] for i in range(0, len(text), chunk_size)]
print(f"Document split into {len(chunks)} chunks")
# ----------------------------------------

# 3-   تجهيز قاعدة Chroma
client = chromadb.PersistentClient(path="db")   # قاعدة تُحفظ في مجلد اسمه db
collection = client.get_or_create_collection(name="docs")  # "جدول" نخزّن فيه المقاطع
# -------------------------------------------------

# 4-  تحويل كل مقطع لـembedding وتخزينه 
for i, chunk in enumerate(chunks):   # نمر على كل مقطع مع رقمه
    # نحوّل المقطع لأرقام عبر النموذج المحلي
    response = ollama.embeddings(model="nomic-embed-text", prompt=chunk)
    collection.add(
        ids=[str(i)],                       # معرّف فريد لكل مقطع
        embeddings=[response["embedding"]],  # تمثيل المعنى بالأرقام
        documents=[chunk]                    # النص الأصلي (نحتاجه وقت الإجابة)
    )
    print(f"Stored chunk {i + 1} of {len(chunks)}")

print("Done, Base is Ready")