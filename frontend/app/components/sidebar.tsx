"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiPackage,
  FiShoppingCart,
  FiTruck,
  FiSettings,
} from "react-icons/fi";

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-emerald-950 text-white hidden lg:flex flex-col p-6 sticky top-0 h-screen">
      
      <div className="mb-10 flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-500 rounded-lg" />
        <span className="font-bold tracking-tight text-xl">AdminPanel</span>
      </div>

      <nav className="space-y-1 flex-1">
        <NavItem icon={<FiHome />} label="Overview" href="/admin" active={pathname === "/admin"} />
        <NavItem icon={<FiPackage />} label="Inventory" href="/admin/inventory" active={pathname === "/admin/inventory"} />
        <NavItem icon={<FiShoppingCart />} label="Contact" href="/admin/contact" active={pathname === "/admin/contact"} />
        <NavItem icon={<FiTruck />} label="Shop" href="/admin/shop" active={pathname === "/admin/shop"} />
        <NavItem icon={<FiSettings />} label="Settings" href="/admin/settings" active={pathname === "/admin/settings"} />
      </nav>

      <div className="pt-6 border-t border-emerald-900 mt-auto">
        <p className="text-xs text-emerald-400 uppercase font-bold">Logged in as</p>
        <p className="text-sm font-medium">Head Botanist</p>
      </div>

    </aside>
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