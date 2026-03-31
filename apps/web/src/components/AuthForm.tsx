import { useState, FormEvent } from 'react';
import { useAuthStore } from '../context/authStore';

interface AuthFormProps {
  mode: 'login' | 'register';
}

export function AuthForm({ mode }: AuthFormProps) {
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
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
      <h2>{mode === 'login' ? 'Sign In' : 'Create Account'}</h2>

      {error && (
        <p style={{ color: 'red', margin: 0 }}>{error}</p>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        style={{ padding: 8, fontSize: 16 }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        minLength={mode === 'register' ? 6 : undefined}
        style={{ padding: 8, fontSize: 16 }}
      />

      <button
        type="submit"
        disabled={isLoading}
        style={{ padding: 10, fontSize: 16, cursor: isLoading ? 'not-allowed' : 'pointer' }}
      >
        {isLoading ? 'Loading...' : mode === 'login' ? 'Sign In' : 'Register'}
      </button>
    </form>
  );
}
