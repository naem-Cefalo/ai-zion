import { useAuthStore } from '../context/authStore';

export function DashboardPage() {
  const { user, logout } = useAuthStore();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 80 }}>
      <h2>Welcome, {user?.email}!</h2>
      <p>You are successfully authenticated.</p>
      <button
        onClick={logout}
        style={{ padding: '10px 20px', fontSize: 16, cursor: 'pointer', marginTop: 16 }}
      >
        Sign Out
      </button>
    </div>
  );
}
