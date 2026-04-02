import { useAuthStore } from '../../../context/authStore';

interface HeaderProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export function Header({ sidebarOpen, onToggleSidebar }: HeaderProps) {
  const { user, logout } = useAuthStore();

  const initials = user?.email ? user.email.slice(0, 2).toUpperCase() : 'U';

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 gap-4 z-20 sticky top-0">
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          aria-label={sidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}
          className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="text-lg font-bold text-indigo-600 tracking-tight">AI Zion</span>
      </div>

      <div className="flex-1" />

      <div className="relative group">
        <button className="flex items-center gap-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400 p-1">
          <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-semibold select-none">
            {initials}
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-sm font-medium text-gray-800 leading-none">{user?.email}</p>
            <p className="text-xs text-gray-400 mt-0.5">Logged in</p>
          </div>
        </button>

        <div className="absolute right-0 mt-1 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1 invisible opacity-0 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-150">
          <div className="px-4 py-2 border-b border-gray-100">
            <p className="text-xs text-gray-500 truncate">{user?.email}</p>
          </div>
          <button
            onClick={logout}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition"
          >
            Sign Out
          </button>
        </div>
      </div>
    </header>
  );
}
