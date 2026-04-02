import { useAuthStore } from '../../context/authStore';
import { StatsGrid } from './components/StatsGrid';
import { RecentActivity } from './components/RecentActivity';

export function DashboardPage() {
  const { user } = useAuthStore();

  return (
    <>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Welcome back, <span className="font-medium text-indigo-600">{user?.email}</span>!
        </p>
      </div>

      <StatsGrid />
      <RecentActivity />
    </>
  );
}
