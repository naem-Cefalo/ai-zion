import { LoginPage } from '../pages/login';
import { PublicRoute, requireGuest } from '../components/RoutesGuards';
import { hydrateUserIfNeeded } from './root';

export async function loginLoader() {
  const state = await hydrateUserIfNeeded();
  return requireGuest(state);
}

export const loginRoute = {
  path: 'login',
  element: (
    <PublicRoute>
      <LoginPage />
    </PublicRoute>
  ),
  loader: loginLoader,
};
