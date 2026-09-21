import { mapPoints } from "../data/mockData";

// ملاحظة: هذي خريطة Placeholder بصرية فقط لغرض العرض السريع اليوم.
// عند ربط الباك اند، تُستبدل بمكتبة خرائط حقيقية (Leaflet / Mapbox) + إحداثيات فعلية من قاعدة البيانات.

export default function CasesMap() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-700">خريطة القضايا</h3>
        <select className="text-xs border border-slate-200 rounded-lg px-2 py-1 text-slate-500">
          <option>تصفية الخريطة: الكل</option>
          <option>بيئية</option>
          <option>تنموية</option>
        </select>
      </div>

      <div className="relative h-64 rounded-xl bg-gradient-to-br from-emerald-50 via-slate-50 to-blue-50 overflow-hidden border border-slate-100">
        {/* شبكة خطوط زخرفية لإيحاء الخريطة */}
        <div className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        {mapPoints.map((p) => (
          <div
            key={p.id}
            className={`absolute w-7 h-7 rounded-full ${p.color} text-white text-xs font-bold flex items-center justify-center shadow-md border-2 border-white`}
            style={{ left: p.x, top: p.y }}
            title={`${p.label} قضية`}
          >
            {p.label}
          </div>
        ))}
        <span className="absolute bottom-2 right-3 text-[11px] text-slate-400">
          المدينة المنورة
        </span>
      </div>
    </div>
  );
}
