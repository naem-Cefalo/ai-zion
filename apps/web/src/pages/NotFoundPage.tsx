import { Link } from 'react-router-dom';
import { useAuthStore } from '../context/authStore';

export function NotFoundPage() {
  const { user } = useAuthStore();

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-xl rounded-2xl border border-amber-100 bg-white p-8 shadow-sm">
        <p className="mb-3 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
          404
        </p>
        <h1 className="text-2xl font-bold text-gray-900">Page not found</h1>
        <p className="mt-3 text-sm text-gray-600">
          The page you requested does not exist or may have been moved.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            to={user ? '/dashboard' : '/login'}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
          >
            {user ? 'Go to Dashboard' : 'Go to Login'}
          </Link>
          <Link
            to="/"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
