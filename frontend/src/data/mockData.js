// بيانات وهمية مؤقتة — يتم استبدالها لاحقاً بنتائج API الباك اند الحقيقي

export const statCards = [
  { id: 1, label: "مغلقة", value: 128, unit: "قضية", color: "bg-emerald-50 text-emerald-600", icon: "check" },
  { id: 2, label: "قيد المعالجة", value: 84, unit: "قضية", color: "bg-amber-50 text-amber-600", icon: "clock" },
  { id: 3, label: "قيد الإسناد", value: 36, unit: "قضية", color: "bg-blue-50 text-blue-600", icon: "send" },
  { id: 4, label: "متأخرة", value: 15, unit: "قضية", color: "bg-rose-50 text-rose-600", icon: "alert" },
  { id: 5, label: "إجمالي القضايا", value: 263, unit: "قضية", color: "bg-slate-100 text-slate-700", icon: "layers" },
];

export const recentCases = [
  { id: 1, title: "تلوث في مجرى وادي العقيق", status: "قيد المعالجة", statusColor: "amber", time: "منذ ساعتين", entity: "أمانة المنطقة" },
  { id: 2, title: "تعديات على الأراضي الحكومية", status: "قيد الإسناد", statusColor: "blue", time: "منذ 5 ساعات", entity: "وزارة الشؤون البلدية والقروية" },
  { id: 3, title: "تجمع مياه في حي بني ظفر", status: "متأخرة", statusColor: "rose", time: "منذ يوم", entity: "أمانة المنطقة" },
  { id: 4, title: "تشجير طريق الملك عبدالله", status: "قيد المعالجة", statusColor: "amber", time: "منذ يومين", entity: "المركز الوطني لتنمية الغطاء النباتي" },
];

export const caseTypeDistribution = [
  { name: "قضايا بيئية", value: 40, color: "#22c55e" },
  { name: "قضايا تنموية", value: 35, color: "#3b82f6" },
  { name: "قضايا تنظيمية", value: 15, color: "#a855f7" },
  { name: "قضايا عامة", value: 10, color: "#f59e0b" },
];

export const topDepartments = [
  { name: "أمانة المنطقة", value: 94, max: 100, color: "bg-emerald-500" },
  { name: "وزارة الشؤون البلدية والقروية", value: 68, max: 100, color: "bg-blue-500" },
  { name: "المركز الوطني لتنمية الغطاء النباتي", value: 36, max: 100, color: "bg-emerald-400" },
  { name: "هيئة تطوير المنطقة", value: 24, max: 100, color: "bg-purple-400" },
];

export const performance = {
  completionRate: 72,
  avgDays: 8.6,
  satisfaction: 4.6,
};

export const mapPoints = [
  { id: 1, x: "35%", y: "30%", color: "bg-emerald-500", label: "12" },
  { id: 2, x: "55%", y: "22%", color: "bg-amber-500", label: "8" },
  { id: 3, x: "22%", y: "58%", color: "bg-blue-500", label: "3" },
  { id: 4, x: "48%", y: "55%", color: "bg-rose-500", label: "5" },
  { id: 5, x: "65%", y: "45%", color: "bg-emerald-500", label: "7" },
];
