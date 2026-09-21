import { PieChart, Pie, Cell } from "recharts";
import { caseTypeDistribution } from "../data/mockData";

export default function CaseTypeDonut() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      <h3 className="font-bold text-slate-700 mb-2">توزيع القضايا حسب النوع</h3>
      <div className="flex items-center gap-4">
        <PieChart width={120} height={120}>
          <Pie
            data={caseTypeDistribution}
            dataKey="value"
            innerRadius={32}
            outerRadius={55}
            stroke="none"
          >
            {caseTypeDistribution.map((entry, i) => (
              <Cell key={i} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
        <ul className="space-y-1.5 text-xs">
          {caseTypeDistribution.map((entry) => (
            <li key={entry.name} className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: entry.color }} />
              <span className="text-slate-600">{entry.name}</span>
              <span className="text-slate-400">{entry.value}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
