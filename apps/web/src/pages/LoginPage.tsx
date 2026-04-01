import { useState, FormEvent } from 'react';
import { useAuthStore } from '../context/authStore';

export function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, register, isLoading, error } = useAuthStore();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      await login(email, password);
    } else {
      await register(email, password);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 shadow-lg mb-4">
            <span className="text-white text-2xl font-bold">A</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">AI Zion</h1>
          <p className="text-gray-500 mt-1 text-sm">
            {mode === 'login' ? 'Welcome back! Please sign in.' : 'Create your account to get started.'}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </h2>

          {error && (
            <div className="mb-4 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-gray-900 placeholder-gray-400 transition"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={mode === 'register' ? 6 : undefined}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-gray-900 placeholder-gray-400 transition"
              />
              {mode === 'register' && (
                <p className="mt-1 text-xs text-gray-400">Minimum 6 characters</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center gap-2"
            >
              {isLoading && (
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              )}
              {isLoading ? 'Please wait…' : mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-500">
            {mode === 'login' ? (
              <>
                Don&apos;t have an account?{' '}
                <button
                  onClick={() => setMode('register')}
                  className="text-indigo-600 hover:text-indigo-700 font-medium underline-offset-2 hover:underline"
                >
                  Register
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setMode('login')}
                  className="text-indigo-600 hover:text-indigo-700 font-medium underline-offset-2 hover:underline"
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} AI Zion. All rights reserved.
        </p>
      </div>
    </div>
  );
}
