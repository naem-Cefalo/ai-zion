import { DashboardPage } from '../pages/dashboard';
import { PrivateRoute, requireAuth } from '../components/RoutesGuards';
import { hydrateUserIfNeeded } from './root';

export async function dashboardLoader() {
  const state = await hydrateUserIfNeeded();
  return requireAuth(state);
}

export const dashboardRoute = {
  path: 'dashboard',
  element: (
    <PrivateRoute>
      <DashboardPage />
    </PrivateRoute>
  ),
  loader: dashboardLoader,
};
