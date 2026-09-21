import { Home, FileText, Map, BarChart3, Users, Bell, Settings } from "lucide-react";

const menuItems = [
  { icon: Home, label: "الرئيسية", active: true },
  { icon: FileText, label: "القضايا والبلاغات" },
  { icon: Map, label: "خريطة القضايا" },
  { icon: BarChart3, label: "التقارير والمؤشرات" },
  { icon: Users, label: "الجهات المشاركة" },
  { icon: Bell, label: "التنبيهات" },
  { icon: Settings, label: "الإعدادات" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-brand-dark text-white flex flex-col h-screen sticky top-0">
      <div className="px-6 py-6 border-b border-white/10">
        <div className="flex items-center gap-2 justify-center">
          <div className="w-9 h-9 rounded-lg bg-brand-accent/20 flex items-center justify-center text-lg">
            ◈
          </div>
          <span className="text-xl font-bold">تكامل</span>
        </div>
        <p className="text-center text-xs text-white/50 mt-1">منصة تكامل الجهات</p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
              item.active
                ? "bg-brand-accent text-white font-semibold"
                : "text-white/70 hover:bg-white/5 hover:text-white"
            }`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="px-4 py-5 border-t border-white/10 text-center">
        <p className="text-sm font-semibold">المدينة المنورة</p>
        <p className="text-xs text-white/40 mt-0.5">1447 هـ - 2026 م</p>
      </div>
    </aside>
  );
}
