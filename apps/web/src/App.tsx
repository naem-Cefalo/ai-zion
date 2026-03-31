import { useEffect, useRef } from 'react';
import { useAuthStore } from './context/authStore';
import { AuthPage } from './pages/AuthPage';
import { DashboardPage } from './pages/DashboardPage';

function App() {
  const { user, token, fetchMe, isLoading } = useAuthStore();
  const fetchMeRef = useRef(fetchMe);
  fetchMeRef.current = fetchMe;

  useEffect(() => {
    if (token && !user) {
      fetchMeRef.current();
    }
  }, [token, user]);

  if (isLoading) {
    return <div style={{ textAlign: 'center', paddingTop: 80 }}>Loading...</div>;
  }

  return user ? <DashboardPage /> : <AuthPage />;
}

export default App;
