import { LayoutDashboard, GitMerge, Network, Bot } from "lucide-react";

const features = [
  { icon: LayoutDashboard, label: "لوحة معلومات تفاعلية", desc: "لمتابعة الأداء لحظياً" },
  { icon: GitMerge, label: "مسار موحد للقضية", desc: "من البلاغ حتى الإغلاق" },
  { icon: Network, label: "تكامل بين الجهات", desc: "تحديد الأدوار والصلاحيات" },
  { icon: Bot, label: "ذكاء اصطناعي", desc: "لتصنيف وتوجيه القضايا" },
];

export default function BottomFeatures() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {features.map((f) => (
        <div key={f.label} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-dark/5 text-brand-dark flex items-center justify-center shrink-0">
            <f.icon size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">{f.label}</p>
            <p className="text-[11px] text-slate-400">{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
