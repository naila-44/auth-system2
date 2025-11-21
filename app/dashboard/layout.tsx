"use client";

import Sidebar from "@/app/components/sidebar";
import DashboardHeader from "@/app/dashboard/DashboardHeader";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-gradient-to-br from-[#fdf7f0] to-[#f7efe6] min-h-screen">
      
      <DashboardHeader />
      <div className="flex">
        <aside className="w-56 h-screen sticky top-13 border-r ">
          <Sidebar />
        </aside>
        <section className="flex-1 p-5 overflow-y-auto">{children}</section>
      </div>
    </main>
  );
}
