import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import StatCard from "./components/StatCard";
import CasesMap from "./components/CasesMap";
import RecentCases from "./components/RecentCases";
import PerformanceGauge from "./components/PerformanceGauge";
import CaseTypeDonut from "./components/CaseTypeDonut";
import TopDepartments from "./components/TopDepartments";
import BottomFeatures from "./components/BottomFeatures";
import { statCards } from "./data/mockData";
import AIRecommendation from "./components/AIRecommendation";

export default function App() {
  return (
    <div className="flex min-h-screen bg-slate-50" dir="rtl">
      <Sidebar />

      <main className="flex-1 px-6 py-4 space-y-6">
        <Topbar />

        {/* بطاقات الإحصائيات */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {statCards.map((s) => (
            <StatCard key={s.id} {...s} />
          ))}
        </div>

        {/* الخريطة + أحدث القضايا */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <CasesMap />
          </div>
          <RecentCases />
        </div>

        {/* مؤشرات الأداء + توزيع الأنواع + الجهات */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <PerformanceGauge />
          <CaseTypeDonut />
          <TopDepartments />
        </div>

            <AIRecommendation
  caseTitle="تلوث في مجرى وادي العقيق"
  caseDescription="رصد تسرب مياه ملوثة في مجرى الوادي أثر على الغطاء النباتي المحيط"
/>
        <BottomFeatures />
      </main>
    </div>
  );
}
