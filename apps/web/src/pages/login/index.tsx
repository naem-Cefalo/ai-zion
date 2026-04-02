import { useState, type FormEvent } from 'react';
import { useAuthStore } from '../../context/authStore';
import { LoginBrand } from './components/LoginBrand';
import { LoginFormCard } from './components/LoginFormCard';

export function LoginPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, register, isLoading, error } = useAuthStore();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (mode === 'login') {
      await login(email, password);
      return;
    }
    await register(email, password);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <LoginBrand mode={mode} />

        <LoginFormCard
          mode={mode}
          email={email}
          password={password}
          isLoading={isLoading}
          error={error}
          onEmailChange={setEmail}
          onPasswordChange={setPassword}
          onToggleMode={setMode}
          onSubmit={handleSubmit}
        />

        <p className="text-center text-xs text-gray-400 mt-6">
          © {new Date().getFullYear()} AI Zion. All rights reserved.
        </p>
      </div>
    </div>
  );
}
