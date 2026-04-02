interface LoginBrandProps {
  mode: 'login' | 'register';
}

export function LoginBrand({ mode }: LoginBrandProps) {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 shadow-lg mb-4">
        <span className="text-white text-2xl font-bold">A</span>
      </div>
      <h1 className="text-3xl font-bold text-gray-900">AI Zion</h1>
      <p className="text-gray-500 mt-1 text-sm">
        {mode === 'login' ? 'Welcome back! Please sign in.' : 'Create your account to get started.'}
      </p>
    </div>
  );
}
