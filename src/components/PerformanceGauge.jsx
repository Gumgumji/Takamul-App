import { PieChart, Pie, Cell } from "recharts";
import { performance } from "../data/mockData";

export default function PerformanceGauge() {
  const data = [
    { value: performance.completionRate },
    { value: 100 - performance.completionRate },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      <h3 className="font-bold text-slate-700 mb-2">مؤشرات الأداء</h3>
      <div className="flex items-center justify-center relative">
        <PieChart width={140} height={140}>
          <Pie
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            innerRadius={48}
            outerRadius={62}
            stroke="none"
          >
            <Cell fill="#12513c" />
            <Cell fill="#e2e8f0" />
          </Pie>
        </PieChart>
        <div className="absolute text-center">
          <p className="text-2xl font-extrabold text-slate-800">{performance.completionRate}%</p>
          <p className="text-[10px] text-slate-400">نسبة إنجاز القضايا</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4 text-center">
        <div>
          <p className="font-bold text-slate-700">{performance.avgDays} يوم</p>
          <p className="text-[11px] text-slate-400">متوسط مدة المعالجة</p>
        </div>
        <div>
          <p className="font-bold text-slate-700">{performance.satisfaction} / 5</p>
          <p className="text-[11px] text-slate-400">رضا الجهات المشاركة</p>
        </div>
      </div>
    </div>
  );
}
