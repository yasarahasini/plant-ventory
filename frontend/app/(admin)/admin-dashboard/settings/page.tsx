import React from "react";
import { Leaf, Package, AlertTriangle, Users } from "lucide-react";
import Link from "next/link";

type StatCardProps = {
  title: string;
  value: string;
  icon: React.ReactNode;
};

const StatCard: React.FC<StatCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white shadow-md  rounded-2xl p-5 flex items-center justify-between hover:shadow-lg transition">
      <div>
        <h4 className="text-gray-500 text-sm">{title}</h4>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
      <div className="text-green-600">{icon}</div>
    </div>
  );
};

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen py-20">
      
     
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">🌿 Plant-Ventory Dashboard</h1>
        <p className="text-gray-500">Manage your plant inventory efficiently</p>
      </div>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Plants"
          value="120"
          icon={<Leaf size={28} />}
        />
        <StatCard
          title="In Stock"
          value="95"
          icon={<Package size={28} />}
        />
        <StatCard
          title="Low Stock"
          value="15"
          icon={<AlertTriangle size={28} />}
        />
        <StatCard
          title="Suppliers"
          value="8"
          icon={<Users size={28} />}
        />
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
    
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Recent Activity
          </h2>

          <ul className="space-y-4">
            <li className="flex justify-between text-black border-b pb-2">
              <span>Added new plant: Monstera</span>
              <span className="text-gray-900 text-sm">2h ago</span>
            </li>
            <li className="flex justify-between text-black border-b pb-2">
              <span>Updated stock: Snake Plant</span>
              <span className="text-gray-900 text-sm">5h ago</span>
            </li>
            <li className="flex justify-between text-black border-b pb-2">
              <span>Low stock alert: Aloe Vera</span>
              <span className="text-gray-900 text-sm">1 day ago</span>
            </li>
          </ul>
        </div>

   
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Quick Actions
          </h2>

          <div className="flex flex-col gap-4">
            <button className="bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
             <Link href="/admin-dashboard/shop"> + Add Plant</Link>
            </button>
            <button className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">
             <Link href="/admin-dashboard"> Manage Inventory</Link>
            </button>
            <button className="bg-yellow-500 text-white py-2 rounded-xl hover:bg-yellow-600 transition">
             <Link href="/admin-dashboard"> View Reports</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;