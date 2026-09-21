import { recentCases } from "../data/mockData";

const dotColor = {
  amber: "bg-amber-500",
  blue: "bg-blue-500",
  rose: "bg-rose-500",
};

export default function RecentCases() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-slate-700">أحدث القضايا</h3>
      </div>

      <ul className="space-y-3 flex-1">
        {recentCases.map((c) => (
          <li key={c.id} className="flex items-start gap-3 pb-3 border-b border-slate-50 last:border-0">
            <span className={`mt-1.5 w-2 h-2 rounded-full ${dotColor[c.statusColor]} shrink-0`} />
            <div className="flex-1">
              <p className="text-sm font-semibold text-slate-700">{c.title}</p>
              <p className="text-xs text-slate-400 mt-0.5">{c.entity}</p>
            </div>
            <div className="text-left shrink-0">
              <p className="text-xs text-slate-400">{c.time}</p>
              <p className="text-xs mt-0.5 font-medium" style={{ color: c.statusColor === "amber" ? "#d97706" : c.statusColor === "blue" ? "#2563eb" : "#e11d48" }}>
                {c.status}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <button className="text-emerald-600 text-sm font-semibold mt-2 hover:underline">
        عرض جميع القضايا ←
      </button>
    </div>
  );
}
