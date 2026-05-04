"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  UserRound,
  CreditCard,
  BookOpen,
  CalendarCheck,
  ClipboardCheck,
  MessageSquare,
  UserCog,
  FileText,
  Settings,
  ClipboardList,
  Lock,
  LogOut,
  Sparkles,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/" },
    { name: "Students", icon: Users, href: "/students" },
    { name: "Parents", icon: UserRound, href: "/parents" },
    { name: "Fee & Payments", icon: CreditCard, href: "/fees" },
    { name: "Academics", icon: BookOpen, href: "/academics" },
    { name: "Attendance", icon: CalendarCheck, href: "/attendance" },
    { name: "Exams", icon: ClipboardCheck, href: "/exams" },
    { name: "Communication", icon: MessageSquare, href: "/communication" },
    { name: "Staff", icon: UserCog, href: "/staff" },
    { name: "Reports", icon: FileText, href: "/reports" },
    { name: "Settings", icon: Settings, href: "/settings" },
  ];

  return (
    <aside className="h-screen w-72 flex flex-col bg-gradient-to-b from-[#071A33] via-[#0B1F3A] to-[#071A33] text-white border-r border-blue-900/40">
      {/* BRAND */}
      <div className="p-5 border-b border-blue-900/40">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
            <Sparkles size={18} className="text-blue-300" />
          </div>

          <div>
            <h1 className="text-base font-bold tracking-wide">
              Smarter Schools
            </h1>
            <p className="text-xs text-blue-200">
              Premium School OS
            </p>
          </div>
        </div>

        <p className="text-[11px] text-blue-300 mt-3 leading-relaxed">
          Excellence • Discipline • Success
        </p>
      </div>

      {/* MENU */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
        {menu.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`group flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all duration-200
              ${
                active
                  ? "bg-blue-500 text-white shadow-md shadow-blue-500/20"
                  : "text-blue-100/80 hover:bg-blue-400/20 hover:text-white"
              }`}
            >
              <item.icon
                size={18}
                className={active ? "text-white" : "text-blue-300 group-hover:text-white"}
              />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* INFO CARD */}
      <div className="mx-3 mb-3 p-4 rounded-2xl bg-blue-950/60 border border-blue-800/40 backdrop-blur">
        <div className="flex items-center gap-2 text-blue-200">
          <ClipboardList size={16} />
          <Lock size={16} />
        </div>

        <p className="text-xs text-blue-200 mt-2">
          Secure, intelligent school management system built for modern education
        </p>

        <button className="text-xs mt-2 text-blue-300 hover:text-white transition">
          Learn more →
        </button>
      </div>

      {/* ADMIN */}
      <div className="p-4 border-t border-blue-900/40 bg-[#071A33]/60">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">Admin Name</p>
            <p className="text-xs text-blue-300">Administrator</p>
          </div>

          <button className="p-2 rounded-xl hover:bg-blue-500/20 transition">
            <LogOut size={18} className="text-blue-300" />
          </button>
        </div>
      </div>
    </aside>
  );
}