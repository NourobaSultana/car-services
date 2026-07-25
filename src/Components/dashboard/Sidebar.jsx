"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

const menus = [
  {
    title: "Dashboard",
    path: "/dashboard",
  },
  {
    title: "Users",
    path: "/dashboard/users",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [openSettings, setOpenSettings] = useState(
    pathname.startsWith("/dashboard/settings"),
  );

  return (
    <aside className="w-64 bg-white shadow-lg">
      <div className="text-2xl font-bold p-6 border-b">CMS</div>

      <ul className="p-4 space-y-2">
        {/* Dashboard & Users */}
        {menus.map((menu) => (
          <li key={menu.path}>
            <Link
              href={menu.path}
              className={`block px-4 py-3 rounded-lg transition ${
                pathname === menu.path
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {menu.title}
            </Link>
          </li>
        ))}

        {/* Settings Dropdown */}
        <li>
          <button
            onClick={() => setOpenSettings(!openSettings)}
            className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            <span>Settings</span>

            {openSettings ? <FiChevronDown /> : <FiChevronRight />}
          </button>

          {openSettings && (
            <ul className="ml-5 mt-2 space-y-2 border-l pl-4">
              <li>
                <Link
                  href="/dashboard/settings/navbar"
                  className={`block px-3 py-2 rounded-md transition ${
                    pathname === "/dashboard/settings/navbar"
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Navbar Management
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}
