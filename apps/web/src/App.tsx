import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalLoading } from './components/GlobalLoading';
import { rootRoute } from './routes/root';
import { indexRoute, wildcardRoute } from './routes/index';
import { loginRoute } from './routes/login';
import { dashboardRoute } from './routes/dashboard';
import { usersListRoute } from './routes/users';
import { AppShellLayout } from './layouts/AppShellLayout';
import { PrivateRoute, requireAuth } from './components/RoutesGuards';
import { hydrateUserIfNeeded } from './routes/root';

async function protectedShellLoader() {
  const state = await hydrateUserIfNeeded();
  return requireAuth(state);
}

const router = createBrowserRouter([
  {
    ...rootRoute,
    children: [
      indexRoute,
      loginRoute,
      {
        element: (
          <PrivateRoute>
            <AppShellLayout />
          </PrivateRoute>
        ),
        loader: protectedShellLoader,
        children: [dashboardRoute, usersListRoute],
      },
      wildcardRoute,
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<GlobalLoading label="Booting app..." />} />;
}

export default App;
