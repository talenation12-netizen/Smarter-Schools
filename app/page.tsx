// export default function Page() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
      
//       {/* HEADER */}
//       <div className="flex items-center justify-between mb-6">
//         <h1 className="text-2xl font-bold">School Dashboard</h1>

//         <div className="flex gap-2">
//           <button className="bg-white px-4 py-2 rounded shadow">
//             Notifications
//           </button>
//           <button className="bg-blue-600 text-white px-4 py-2 rounded shadow">
//             + Add Student
//           </button>
//         </div>
//       </div>

//       {/* STATS CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
//         <div className="bg-white p-5 rounded shadow">
//           <p className="text-gray-500">Students</p>
//           <h2 className="text-2xl font-bold">1,240</h2>
//         </div>

//         <div className="bg-white p-5 rounded shadow">
//           <p className="text-gray-500">Fees Collected</p>
//           <h2 className="text-2xl font-bold">KSh 2.4M</h2>
//         </div>

//         <div className="bg-white p-5 rounded shadow">
//           <p className="text-gray-500">Attendance</p>
//           <h2 className="text-2xl font-bold">87%</h2>
//         </div>
//       </div>

//       {/* MAIN GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

//         {/* LEFT PANEL */}
//         <div className="md:col-span-2 bg-white p-5 rounded shadow">
//           <h3 className="font-semibold mb-3">Recent Fees Payments</h3>

//           <div className="space-y-3">
//             {[1, 2, 3, 4, 5].map((item) => (
//               <div
//                 key={item}
//                 className="flex justify-between border-b pb-2"
//               >
//                 <span>Student {item}</span>
//                 <span className="text-green-600">Paid</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* RIGHT PANEL */}
//         <div className="bg-white p-5 rounded shadow">
//           <h3 className="font-semibold mb-3">Quick Actions</h3>

//           <div className="flex flex-col gap-2">
//             <button className="bg-blue-500 text-white py-2 rounded">
//               Record Payment
//             </button>
//             <button className="bg-green-500 text-white py-2 rounded">
//               Add Student
//             </button>
//             <button className="bg-gray-800 text-white py-2 rounded">
//               Generate Report
//             </button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }










export default function Page() {
  const stats = [
    { title: "Students", value: "1,240", color: "text-blue-600" },
    { title: "Fees Collected", value: "KSh 2.4M", color: "text-green-600" },
    { title: "Attendance", value: "87%", color: "text-purple-600" },
    { title: "Pending Fees", value: "312", color: "text-red-600" },
  ];

  const recentPayments = [
    { id: 1, student: "John Kamau", amount: "12,000", status: "Paid" },
    { id: 2, student: "Amina Noor", amount: "8,500", status: "Paid" },
    { id: 3, student: "Brian Otieno", amount: "15,000", status: "Pending" },
    { id: 4, student: "Grace Wanjiku", amount: "10,000", status: "Paid" },
    { id: 5, student: "Samuel Kiptoo", amount: "9,000", status: "Pending" },
  ];

  const StatusBadge = ({ status }) => {
    const styles =
      status === "Paid"
        ? "bg-green-100 text-green-700"
        : "bg-yellow-100 text-yellow-700";

    return (
      <span className={`px-2 py-1 rounded text-xs font-semibold ${styles}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <h1 className="text-2xl font-bold">Operational ERP Dashboard</h1>

        <div className="flex gap-2">
          <button className="bg-white px-4 py-2 rounded shadow hover:bg-gray-50">
            Notifications
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700">
            + Add Student
          </button>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className="bg-white p-5 rounded shadow hover:shadow-md transition"
          >
            <p className="text-gray-500">{item.title}</p>
            <h2 className={`text-2xl font-bold ${item.color}`}>
              {item.value}
            </h2>
          </div>
        ))}
      </div>

      {/* MAIN SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* LEFT: TABLE */}
        <div className="lg:col-span-2 bg-white p-5 rounded shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">Recent Fee Payments</h3>
            <button className="text-sm text-blue-600">View All</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-gray-500 border-b">
                <tr>
                  <th className="py-2">Student</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {recentPayments.map((p) => (
                  <tr key={p.id} className="border-b">
                    <td className="py-2">{p.student}</td>
                    <td>KSh {p.amount}</td>
                    <td>
                      <StatusBadge status={p.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* RIGHT: ACTION PANEL */}
        <div className="bg-white p-5 rounded shadow">
          <h3 className="font-semibold mb-4">Quick Actions</h3>

          <div className="flex flex-col gap-3">
            <button className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Record Payment
            </button>

            <button className="bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Add Student
            </button>

            <button className="bg-gray-900 text-white py-2 rounded hover:bg-black">
              Generate Report
            </button>

            <button className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
              Send Fee Reminder
            </button>
          </div>

          {/* MINI INSIGHTS */}
          <div className="mt-6 p-4 bg-gray-50 rounded">
            <p className="text-xs text-gray-500">System Insight</p>
            <p className="text-sm font-semibold">
              23 students have pending fees this week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}