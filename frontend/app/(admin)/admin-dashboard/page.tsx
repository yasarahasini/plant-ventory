"use client";

import { useState } from "react";
import {
  FiPackage,
  FiAlertCircle,
  FiTrendingUp,
  FiPlus,
  FiDownload,
  FiMoreVertical,
  FiHome,
  FiShoppingCart,
  FiTruck,
  FiSettings,
} from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminDashboard() {
  const pathname = usePathname();

  const [plants] = useState([
    { id: 1, name: "Snake Plant", stock: 25, price: 15, status: "Active", growth: "+12%" },
    { id: 2, name: "Aloe Vera", stock: 8, price: 10, status: "Low Stock", growth: "+5%" },
    { id: 3, name: "Peace Lily", stock: 18, price: 20, status: "Active", growth: "-2%" },
  ]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex">

    
      <aside className="w-64 bg-emerald-950 text-white hidden lg:flex flex-col p-6 sticky top-0 h-screen">
        <div className="mb-10 flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg" />
          <span className="font-bold tracking-tight text-xl">AdminPanel</span>
        </div>

        <nav className="space-y-1 flex-1">
          <NavItem icon={<FiHome />} label="Overview" href="/admin" active={pathname === "/admin"} />
          <NavItem icon={<FiPackage />} label="Inventory" href="/admin/inventory" active={pathname === "/admin/inventory"} />
          <NavItem icon={<FiShoppingCart />} label="Orders" href="/admin/contact" active={pathname === "/admin/contact"} />
          <NavItem icon={<FiTruck />} label="Suppliers" href="/admin/shop" active={pathname === "/admin/shop"} />
          <NavItem icon={<FiSettings />} label="Settings" href="/admin/settings" active={pathname === "/admin/settings"} />
        </nav>

        <div className="pt-6 border-t border-emerald-900 mt-auto">
          <p className="text-xs text-emerald-400 uppercase font-bold">Logged in as</p>
          <p className="text-sm font-medium">Head Botanist</p>
        </div>
      </aside>

      <main className="flex-1 p-8 lg:p-12 overflow-y-auto">

        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Inventory Dashboard</h1>
            <p className="text-slate-500 text-sm">Real-time oversight of botanical assets.</p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-50 transition">
              <FiDownload /> Export CSV
            </button>

            <button className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 transition">
              <FiPlus /> Add New Plant
            </button>
          </div>
        </header>

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard
            title="Total Stock Value"
            value="$14,280"
            icon={<FiTrendingUp />}
            trend="+4.5%"
            color="emerald"
          />

          <StatCard
            title="Active Inventory"
            value="842 Units"
            icon={<FiPackage />}
            trend="Stable"
            color="blue"
          />

          <StatCard
            title="Restock Alerts"
            value="12 Items"
            icon={<FiAlertCircle />}
            trend="Requires Action"
            color="orange"
          />
        </div>

    
        <section className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-6 border-b border-slate-100 flex justify-between items-center">
            <h2 className="font-bold text-slate-800">Recent Plant Records</h2>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Auto-syncing live data
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">

              <thead className="bg-slate-50 text-slate-400 text-[11px] uppercase tracking-wider font-bold">
                <tr>
                  <th className="px-6 py-4">Species Name</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Stock Level</th>
                  <th className="px-6 py-4">Unit Price</th>
                  <th className="px-6 py-4">Performance</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-100 text-sm">
                {plants.map((plant) => (
                  <tr key={plant.id} className="hover:bg-slate-50 transition-colors">

                    <td className="px-6 py-4 font-semibold text-slate-700">
                      {plant.name}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-md text-[10px] font-bold ${
                          plant.status === "Low Stock"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-emerald-100 text-emerald-700"
                        }`}
                      >
                        {plant.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-slate-500 font-mono">
                      {plant.stock} units
                    </td>

                    <td className="px-6 py-4 text-slate-500">
                      ${plant.price}
                    </td>

                    <td className="px-6 py-4 text-emerald-600 font-medium">
                      {plant.growth}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <button className="p-2 hover:bg-slate-200 rounded-lg transition text-slate-400">
                        <FiMoreVertical />
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </section>

      </main>
    </div>
  );
}



function StatCard({ title, value, icon, trend, color }: any) {
  const colorMap: any = {
    emerald: "text-emerald-600 bg-emerald-50",
    blue: "text-blue-600 bg-blue-50",
    orange: "text-orange-600 bg-orange-50",
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 flex items-start justify-between">

      <div>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
          {title}
        </p>

        <h3 className="text-2xl font-bold text-slate-900">
          {value}
        </h3>

        <p className="text-xs mt-2 font-medium text-slate-500">
          {trend}
        </p>
      </div>

      <div className={`p-3 rounded-xl ${colorMap[color]}`}>
        {icon}
      </div>

    </div>
  );
}



function NavItem({ icon, label, href, active }: any) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
        active
          ? "bg-emerald-500/10 text-emerald-400 border-l-4 border-emerald-500"
          : "text-emerald-100/60 hover:text-white hover:bg-white/5"
      }`}
    >
      {icon}
      {label}
    </Link>
  );
}