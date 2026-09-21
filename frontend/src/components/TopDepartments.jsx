import { topDepartments } from "../data/mockData";

export default function TopDepartments() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      <h3 className="font-bold text-slate-700 mb-4">الجهات الأكثر معالجة</h3>
      <ul className="space-y-3">
        {topDepartments.map((d) => (
          <li key={d.name}>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-slate-600">{d.name}</span>
              <span className="font-semibold text-slate-700">{d.value}</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${d.color}`}
                style={{ width: `${(d.value / d.max) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
