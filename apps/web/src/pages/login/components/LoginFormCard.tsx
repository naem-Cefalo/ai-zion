import type { FormEvent } from 'react';

interface LoginFormCardProps {
  mode: 'login' | 'register';
  email: string;
  password: string;
  isLoading: boolean;
  error: string | null;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onToggleMode: (mode: 'login' | 'register') => void;
  onSubmit: (e: FormEvent) => Promise<void>;
}

export function LoginFormCard({
  mode,
  email,
  password,
  isLoading,
  error,
  onEmailChange,
  onPasswordChange,
  onToggleMode,
  onSubmit,
}: LoginFormCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        {mode === 'login' ? 'Sign In' : 'Create Account'}
      </h2>

      {error && (
        <div className="mb-4 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => onEmailChange(e.target.value)}
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
            onChange={(e) => onPasswordChange(e.target.value)}
            required
            minLength={mode === 'register' ? 6 : undefined}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-gray-900 placeholder-gray-400 transition"
          />
          {mode === 'register' && <p className="mt-1 text-xs text-gray-400">Minimum 6 characters</p>}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold rounded-lg transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center gap-2"
        >
          {isLoading && <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />}
          {isLoading ? 'Please wait...' : mode === 'login' ? 'Sign In' : 'Create Account'}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        {mode === 'login' ? (
          <>
            Don&apos;t have an account?{' '}
            <button
              onClick={() => onToggleMode('register')}
              className="text-indigo-600 hover:text-indigo-700 font-medium underline-offset-2 hover:underline"
            >
              Register
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button
              onClick={() => onToggleMode('login')}
              className="text-indigo-600 hover:text-indigo-700 font-medium underline-offset-2 hover:underline"
            >
              Sign In
            </button>
          </>
        )}
      </div>
    </div>
  );
}
