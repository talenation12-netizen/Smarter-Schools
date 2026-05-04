// "use client";

// import {
//   Users,
//   CreditCard,
//   School,
//   CalendarCheck,
//   TrendingUp,
//   AlertTriangle,
// } from "lucide-react";

// export default function DashboardPage() {
//   return (
//     <div className="min-h-screen bg-[#F4F7FB] p-6 space-y-6">

//       {/* HEADER */}
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-semibold text-gray-900">
//             School Overview
//           </h1>
//           <p className="text-sm text-gray-500">
//             Real-time performance dashboard
//           </p>
//         </div>

//         <div className="bg-white px-4 py-2 rounded-2xl border shadow-sm text-sm text-gray-600">
//           Premium School OS
//         </div>
//       </div>

//       {/* KPI ROW */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

//         <Kpi icon={Users} label="Students" value="1,284" />
//         <Kpi icon={CreditCard} label="Fees Collected" value="KES 2.4M" />
//         <Kpi icon={School} label="Classes" value="36" />
//         <Kpi icon={CalendarCheck} label="Attendance" value="92%" />

//       </div>

//       {/* MAIN INSIGHT ROW (3 PANELS IN ONE LINE) */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

//         {/* 1. FEE COLLECTION CHART */}
//         <div className="bg-white rounded-2xl border shadow-sm p-4">
//           <h2 className="text-sm font-semibold text-gray-900 mb-3">
//             Fee Collection Overview
//           </h2>

//           <div className="h-40 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl border flex items-center justify-center">
//             <p className="text-xs text-gray-400">
//               Line Graph (Collected vs Expected - 8 Months)
//             </p>
//           </div>
//         </div>

//         {/* 2. CLASS DISTRIBUTION */}
//         <div className="bg-white rounded-2xl border shadow-sm p-4">
//           <h2 className="text-sm font-semibold text-gray-900 mb-3">
//             Fee Collection by Class
//           </h2>

//           <div className="flex items-center justify-between">
//             <div className="w-28 h-28 rounded-full bg-blue-50 border flex items-center justify-center">
//               <span className="text-xs text-gray-500">Pie Chart</span>
//             </div>

//             <div className="text-right space-y-1">
//               <p className="text-lg font-semibold text-gray-900">
//                 KES 2.4M
//               </p>

//               <ul className="text-xs text-gray-500 space-y-1">
//                 <li>• Grade 7</li>
//                 <li>• Grade 8</li>
//                 <li>• Grade 9</li>
//                 <li>• Form 1</li>
//               </ul>

//               <p className="text-xs text-blue-500 cursor-pointer mt-2">
//                 Other classes →
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* 3. ALERTS */}
//         <div className="bg-white rounded-2xl border shadow-sm p-4">
//           <h2 className="text-sm font-semibold text-gray-900 mb-3">
//             Alerts & Reminders
//           </h2>

//           <div className="space-y-2 text-xs">

//             <AlertItem count="56" text="Students have outstanding balance" />
//             <AlertItem count="3" text="Events happening this week" />
//             <AlertItem count="12" text="Assignments pending submission" />
//             <AlertItem count="7" text="New student admissions" />

//           </div>
//         </div>

//       </div>

//     </div>
//   );
// }

// /* KPI CARD */
// function Kpi({
//   icon: Icon,
//   label,
//   value,
// }: {
//   icon: any;
//   label: string;
//   value: string;
// }) {
//   return (
//     <div className="bg-white rounded-2xl border shadow-sm p-4">
//       <Icon size={18} className="text-blue-500" />
//       <p className="text-xs text-gray-500 mt-3">{label}</p>
//       <h3 className="text-xl font-semibold text-gray-900">{value}</h3>
//     </div>
//   );
// }

// /* ALERT ITEM */
// function AlertItem({
//   count,
//   text,
// }: {
//   count: string;
//   text: string;
// }) {
//   return (
//     <div className="flex items-center justify-between p-2 rounded-lg bg-gray-50 border">
//       <span className="font-semibold text-gray-900">{count}</span>
//       <span className="text-gray-600">{text}</span>
//     </div>
//   );
// }






"use client";

import {
  Users,
  CreditCard,
  AlertTriangle,
  TrendingUp,
  BookOpen,
  Calendar,
  MessageSquare,
  FileText,
  UserPlus,
  Receipt,
  Send,
  ClipboardList,
} from "lucide-react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function DashboardPage() {
  const feeTrend = [
    { month: "Jan", collected: 200, expected: 240 },
    { month: "Feb", collected: 260, expected: 280 },
    { month: "Mar", collected: 300, expected: 320 },
    { month: "Apr", collected: 280, expected: 300 },
    { month: "May", collected: 350, expected: 360 },
    { month: "Jun", collected: 400, expected: 420 },
    { month: "Jul", collected: 420, expected: 450 },
    { month: "Aug", collected: 460, expected: 500 },
  ];

  const classData = [
    { name: "Grade 7", value: 620 },
    { name: "Grade 8", value: 540 },
    { name: "Grade 9", value: 510 },
    { name: "Form 1", value: 730 },
  ];

  const COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#1d4ed8"];

  return (
    <div className="min-h-screen bg-[#F4F7FB] p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          School Intelligence Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Financial, Academic & Operational Overview
        </p>
      </div>

      {/* KPI */}
      <div className="grid grid-cols-4 gap-4">
        <KPI label="Students" value="1,284" color="blue" />
        <KPI label="Fees Collected" value="KES 2.4M" color="green" />
        <KPI label="Outstanding" value="KES 680K" color="red" />
        <KPI label="Attendance" value="92%" color="yellow" />
      </div>

      {/* TOP INSIGHTS */}
      <div className="grid grid-cols-3 gap-4">

        {/* FEES TREND */}
        <div className="bg-white p-4 rounded-2xl border">
          <h2 className="text-sm font-semibold mb-2">Fee Collection Overview</h2>

          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={feeTrend}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="collected" stroke="#3b82f6" />
              <Line type="monotone" dataKey="expected" stroke="#ef4444" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* CLASS PIE */}
        <div className="bg-white p-4 rounded-2xl border">
          <h2 className="text-sm font-semibold mb-2">Fee Collection by Class</h2>

          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={classData} dataKey="value" outerRadius={70}>
                {classData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* ALERTS */}
        <div className="bg-white p-4 rounded-2xl border space-y-2">
          <h2 className="text-sm font-semibold">Alerts & Reminders</h2>

          <Alert type="danger" text="56 Students with unpaid fees" />
          <Alert type="info" text="3 events this week" />
          <Alert type="warning" text="12 assignments pending" />
          <Alert type="success" text="7 new admissions" />
        </div>

      </div>

      {/* FINANCIAL + OPERATIONAL ROW */}
      <div className="grid grid-cols-3 gap-4">

        <Section title="Outstanding Fees" value="KES 680,000" color="red" />
        <Section title="Recent Payments" value="KES 420,000" color="green" />
        <Section title="Quick Actions">

          <div className="grid grid-cols-2 gap-2 text-xs">

            <Action icon={Receipt} text="Record Payment" />
            <Action icon={UserPlus} text="Add Student" />
            <Action icon={Send} text="Send Message" />

            <Action icon={FileText} text="Generate Report" />
            <Action icon={ClipboardList} text="Add Assignment" />
            <Action icon={Calendar} text="Create Event" />

          </div>

        </Section>

      </div>

    </div>
  );
}

/* KPI */
function KPI({ label, value, color }: any) {
  const colors: any = {
    blue: "text-blue-500",
    green: "text-green-500",
    red: "text-red-500",
    yellow: "text-yellow-500",
  };

  return (
    <div className="bg-white p-4 rounded-2xl border">
      <p className="text-xs text-gray-500">{label}</p>
      <h2 className={`text-xl font-semibold ${colors[color]}`}>{value}</h2>
    </div>
  );
}

/* ALERT */
function Alert({ type, text }: any) {
  const color =
    type === "danger"
      ? "text-red-500"
      : type === "warning"
      ? "text-yellow-500"
      : type === "success"
      ? "text-green-500"
      : "text-blue-500";

  return <p className={`text-xs ${color}`}>• {text}</p>;
}

/* SECTION */
function Section({ title, value, color, children }: any) {
  const colors: any = {
    red: "text-red-500",
    green: "text-green-500",
  };

  return (
    <div className="bg-white p-4 rounded-2xl border">
      <h3 className="text-sm font-semibold">{title}</h3>

      {value && (
        <p className={`text-lg font-bold ${colors[color]}`}>{value}</p>
      )}

      {children}
    </div>
  );
}

/* ACTION */
function Action({ icon: Icon, text }: any) {
  return (
    <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg border text-xs hover:bg-gray-100 cursor-pointer">
      <Icon size={14} />
      {text}
    </div>
  );
}