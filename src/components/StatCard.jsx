import { CheckCircle2, Clock, Send, AlertTriangle, Layers } from "lucide-react";

const icons = {
  check: CheckCircle2,
  clock: Clock,
  send: Send,
  alert: AlertTriangle,
  layers: Layers,
};

export default function StatCard({ label, value, unit, color, icon }) {
  const Icon = icons[icon] || Layers;
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4 flex items-center gap-3">
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${color}`}>
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xl font-extrabold text-slate-800 leading-tight">{value}</p>
        <p className="text-xs text-slate-400">{unit}</p>
        <p className="text-xs text-slate-500 mt-0.5">{label}</p>
      </div>
    </div>
  );
}
