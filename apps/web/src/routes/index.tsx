import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../context/authStore';
import { NotFoundPage } from '../pages/NotFoundPage';

function IndexRedirect() {
  const { user } = useAuthStore();
  return <Navigate to={user ? '/dashboard' : '/login'} replace />;
}

export const indexRoute = {
  index: true,
  element: <IndexRedirect />,
};

export const wildcardRoute = {
  path: '*',
  element: <NotFoundPage />,
};
