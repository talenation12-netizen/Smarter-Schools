// import "./globals.css";
// import Sidebar from "./components/Sidebar";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="h-screen overflow-hidden">

//         <div className="flex h-screen w-full">

//           {/* SIDEBAR */}
//           <div className="w-72 h-full bg-[#0B1F3A] text-white flex flex-col">
//             <Sidebar />
//           </div>

//           {/* MAIN */}
//           <main className="flex-1 h-full overflow-y-auto bg-[#F4F7FB]">
//             {children}
//           </main>

//         </div>

//       </body>
//     </html>
//   );
// }




"use client";

import { useState } from "react";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import { Menu } from "lucide-react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body className="h-screen overflow-hidden">

        <div className="flex h-screen w-full">

          {/* DESKTOP SIDEBAR */}
          <div className="hidden lg:flex w-72 h-full bg-[#0B1F3A] text-white">
            <Sidebar />
          </div>

          {/* MOBILE SIDEBAR (DRAWER) */}
          {open && (
            <div className="fixed inset-0 z-50 flex lg:hidden">

              {/* overlay */}
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setOpen(false)}
              />

              {/* sidebar */}
              <div className="relative w-72 h-full bg-[#0B1F3A] text-white z-50">
                <Sidebar />
              </div>
            </div>
          )}

          {/* MAIN CONTENT */}
          <main className="flex-1 h-full overflow-y-auto bg-[#F4F7FB]">

            {/* MOBILE TOP BAR */}
            <div className="lg:hidden flex items-center p-4 bg-white border-b">
              <button onClick={() => setOpen(true)}>
                <Menu />
              </button>
              <h1 className="ml-3 font-semibold">Smarter Schools</h1>
            </div>

            {children}
          </main>

        </div>

      </body>
    </html>
  );
}