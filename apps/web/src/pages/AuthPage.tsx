import { useState } from 'react';
import { AuthForm } from '../components/AuthForm';

export function AuthPage() {
  const [mode, setMode] = useState<'login' | 'register'>('login');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 80 }}>
      <AuthForm mode={mode} />
      <p style={{ marginTop: 16 }}>
        {mode === 'login' ? (
          <>
            Don&apos;t have an account?{' '}
            <button onClick={() => setMode('register')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'blue', textDecoration: 'underline', fontSize: 'inherit' }}>
              Register
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button onClick={() => setMode('login')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'blue', textDecoration: 'underline', fontSize: 'inherit' }}>
              Sign In
            </button>
          </>
        )}
      </p>
    </div>
  );
}
