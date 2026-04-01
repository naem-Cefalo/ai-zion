import { useState } from 'react';
import { useAuthStore } from '../context/authStore';
import { Header } from '../components/dashboard/Header';
import { Sidebar } from '../components/dashboard/Sidebar';

const STATS = [
  { label: 'Total Users', value: '1,284', change: '+12%', positive: true },
  { label: 'Active Projects', value: '34', change: '+5%', positive: true },
  { label: 'Tasks Done', value: '890', change: '-3%', positive: false },
  { label: 'Revenue', value: '$24.5k', change: '+18%', positive: true },
];

export function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeNav, setActiveNav] = useState('Dashboard');
  const { user } = useAuthStore();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header sidebarOpen={sidebarOpen} onToggleSidebar={() => setSidebarOpen((v) => !v)} />

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} activeItem={activeNav} onSelectItem={setActiveNav} />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Page heading */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{activeNav}</h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Welcome back, <span className="font-medium text-indigo-600">{user?.email}</span>!
            </p>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-2"
              >
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                <span
                  className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit ${
                    stat.positive
                      ? 'bg-green-50 text-green-600'
                      : 'bg-red-50 text-red-500'
                  }`}
                >
                  {stat.change} this month
                </span>
              </div>
            ))}
          </div>

          {/* Content placeholder */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { action: 'New user registered', time: '2 min ago' },
                { action: 'Project "Alpha" updated', time: '15 min ago' },
                { action: 'Report generated', time: '1 hr ago' },
                { action: 'Settings changed', time: '3 hrs ago' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{item.action}</p>
                  </div>
                  <span className="text-xs text-gray-400 whitespace-nowrap">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

