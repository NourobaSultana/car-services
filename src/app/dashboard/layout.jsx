import Sidebar from "@/Components/dashboard/Sidebar";
import Topbar from "@/Components/dashboard/Topbar";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar></Sidebar>

      {/* Right Side */}
      <div className="flex-1">
        <Topbar></Topbar>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
