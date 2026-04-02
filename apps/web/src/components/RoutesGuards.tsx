import { Navigate, redirect } from 'react-router-dom';
import { useAuthStore } from '../context/authStore';

interface AuthStateSnapshot {
  user: { id: number; email: string } | null;
}

interface PrivateRouteProps {
  children: React.ReactNode;
  fallbackPath?: string;
}

/**
 * PrivateRoute: Protects routes that require authentication.
 * If user is NOT authenticated, redirects to fallbackPath (default: /login).
 * If user IS authenticated, renders children.
 */
export function PrivateRoute({ children, fallbackPath = '/login' }: PrivateRouteProps) {
  const { user } = useAuthStore();
  return user ? <>{children}</> : <Navigate to={fallbackPath} replace />;
}

interface PublicRouteProps {
  children: React.ReactNode;
  redirectIfAuth?: string;
}

/**
 * PublicRoute: Protects public routes that should not be accessible to authenticated users.
 * If user IS authenticated, redirects to redirectIfAuth (default: /dashboard).
 * If user is NOT authenticated, renders children.
 */
export function PublicRoute({ children, redirectIfAuth = '/dashboard' }: PublicRouteProps) {
  const { user } = useAuthStore();
  return user ? <Navigate to={redirectIfAuth} replace /> : <>{children}</>;
}

export function requireAuth(state: AuthStateSnapshot, redirectTo = '/login') {
  if (!state.user) {
    throw redirect(redirectTo);
  }
  return null;
}

export function requireGuest(state: AuthStateSnapshot, redirectTo = '/dashboard') {
  if (state.user) {
    throw redirect(redirectTo);
  }
  return null;
}
