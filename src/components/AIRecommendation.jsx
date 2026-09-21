import { useState } from "react";
import { Bot, CheckCircle2, MessageCircleQuestion, Loader2 } from "lucide-react";

export default function AIRecommendation({ caseTitle, caseDescription, onAskWhy }) {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const getRecommendation = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ case_title: caseTitle, case_description: caseDescription }),
      });
      const data = await res.json();
      setResult(data.recommendation);
    } catch (err) {
      setResult("تعذر الاتصال بخدمة الذكاء الاصطناعي.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-emerald-100 shadow-sm p-5">
      <div className="flex items-center gap-2 mb-3">
        <Bot size={18} className="text-brand-accent" />
        <h3 className="font-bold text-slate-700">توصية الذكاء الاصطناعي</h3>
      </div>

      {!result && !loading && (
        <button
          onClick={getRecommendation}
          className="text-sm bg-brand-accent text-white px-4 py-2 rounded-lg"
        >
          احصل على توصية
        </button>
      )}

      {loading && (
        <div className="flex items-center gap-2 text-sm text-slate-400">
          <Loader2 size={16} className="animate-spin" /> جارٍ التحليل بناءً على اللوائح...
        </div>
      )}

      {result && (
        <>
          <pre className="text-sm text-slate-700 whitespace-pre-wrap font-sans bg-slate-50 rounded-lg p-3">
            {result}
          </pre>
          <div className="flex gap-2 mt-3">
            <button className="flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg">
              <CheckCircle2 size={14} /> اعتماد التوصية
            </button>
            <button
              onClick={() => onAskWhy && onAskWhy(caseTitle)}
              className="flex items-center gap-1 text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg"
            >
              <MessageCircleQuestion size={14} /> اسأل عن السبب
            </button>
          </div>
        </>
      )}
    </div>
  );
}