import { useState } from "react";
import Link from "next/link";
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
  ChevronUp,
  LogOut,
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/" },
    { name: "Students", icon: Users, href: "/students" },
    { name: "Parents", icon: UserRound, href: "/parents" },
    { name: "Fee & Payment", icon: CreditCard, href: "/fees" },
    { name: "Academics", icon: BookOpen, href: "/academics" },
    { name: "Attendance", icon: CalendarCheck, href: "/attendance" },
    { name: "Examination", icon: ClipboardCheck, href: "/exams" },
    { name: "Communication", icon: MessageSquare, href: "/communication" },
    { name: "Staff", icon: UserCog, href: "/staff" },
    { name: "Reports", icon: FileText, href: "/reports" },
    { name: "Settings", icon: Settings, href: "/settings" },
  ];

  return (
    <div className="h-screen w-72 bg-gray-600 text-white flex flex-col justify-between p-4">
      {/* TOP */}
      <div>
        <h1 className="text-xl font-bold mb-6">📚 Smarter Schools</h1>

        <nav className="space-y-2">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-800"
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* MIDDLE INFO CARD */}
      <div className="bg-gray-800 p-4 rounded-xl space-y-2">
        <div className="flex items-center gap-2">
          <ClipboardList size={18} />
          <Lock size={18} />
        </div>
        <p className="text-sm">Secure School Management</p>
        <button className="text-blue-400 text-sm flex items-center gap-1">
          Learn more <span>→</span>
        </button>
      </div>

      {/* BOTTOM USER */}
      <div className="border-t border-gray-700 pt-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-semibold">Admin Name</p>
            <p className="text-xs text-gray-400">Administrator</p>
          </div>

          <button className="flex items-center gap-1 text-red-400">
            <ChevronUp size={16} />
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
