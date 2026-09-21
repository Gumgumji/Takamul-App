import { Bell, Settings, ChevronDown } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-8 py-5">
      <div className="text-center flex-1">
        <h1 className="text-2xl font-extrabold text-brand-dark">مرحبًا بك في منصة تكامل</h1>
        <p className="text-sm text-slate-500 mt-1">
          لتسريع معالجة البلاغات والقضايا التنموية والبيئية متعددة الجهات
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50">
          <Settings size={17} />
        </button>
        <button className="w-9 h-9 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 relative">
          <Bell size={17} />
          <span className="absolute -top-1 -left-1 w-4 h-4 bg-rose-500 text-white text-[10px] rounded-full flex items-center justify-center">3</span>
        </button>
        <div className="flex items-center gap-2 pr-2 border-r border-slate-200">
          <div className="w-9 h-9 rounded-full bg-slate-200" />
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-700">م. محمد قمقمجي</p>
            <p className="text-xs text-slate-400">مهندس المشروع</p>
          </div>
          <ChevronDown size={16} className="text-slate-400" />
        </div>
      </div>
    </header>
  );
}
