import { useAuthStore } from '../context/authStore';
import { RootLayout } from '../layouts/RootLayout';
import { ErrorPage } from '../pages/ErrorPage';

export async function hydrateUserIfNeeded() {
  const { token, user, fetchMe } = useAuthStore.getState();

  if (token && !user) {
    await fetchMe();
  }

  return useAuthStore.getState();
}

export async function rootLoader() {
  await hydrateUserIfNeeded();
  return null;
}

export async function rootAction() {
  return null;
}

export const rootRoute = {
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  loader: rootLoader,
  action: rootAction,
};
