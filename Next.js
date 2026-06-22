// app/dashboard/page.tsx
'use client';
import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const menuItems = [
  { name: 'Monitoring SVA', sub: ['Target & Pencapaian', 'Kurva S'] },
  { name: 'Monitoring PM', sub: ['Target & Pencapaian', 'Kurva S'] },
  { name: 'Monitoring MBP', sub: ['Total RH', 'Analisa BBM'] },
  { name: 'Monitoring Asset KUT', sub: ['Biaya Service', 'Depresiasi', 'Biaya Sewa'] },
];

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('Monitoring SVA');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar Profesional */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">Dashboard Reg Kal</h1>
        {menuItems.map((item) => (
          <div key={item.name} className="mb-4">
            <button onClick={() => setActiveMenu(item.name)} className="w-full text-left font-semibold hover:text-blue-400">
              {item.name}
            </button>
            <ul className="ml-4 mt-2 text-sm text-gray-400">
              {item.sub.map(s => <li key={s} className="py-1 cursor-pointer hover:text-white">- {s}</li>)}
            </ul>
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6">{activeMenu}</h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-bold mb-4">Grafik Data {activeMenu}</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={[{name: 'Juli', val: 4000}, {name: 'Agustus', val: 3000}]}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="val" stroke="#3b82f6" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
