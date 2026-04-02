import { UsersListPage } from '../pages/users';
import { PrivateRoute, requireAuth } from '../components/RoutesGuards';
import { hydrateUserIfNeeded } from './root';

/**
 * Loader for protected users list route.
 * Ensures user is authenticated before rendering.
 * If not authenticated, redirects to login.
 */
export async function usersListLoader() {
  const state = await hydrateUserIfNeeded();
  return requireAuth(state);
}

export const usersListRoute = {
  path: 'users',
  element: (
    <PrivateRoute>
      <UsersListPage />
    </PrivateRoute>
  ),
  loader: usersListLoader,
};
