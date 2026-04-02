import { NavLink } from 'react-router-dom';

interface NavItem {
  label: string;
  icon: React.ReactNode;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: 'Users',
    href: '/users',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5V4H2v16h5m10 0v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5m10 0H7m8-10a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

interface SidebarProps {
  open: boolean;
}

export function Sidebar({ open }: SidebarProps) {
  return (
    <>
      {open && <div className="fixed inset-0 bg-black/20 z-10 lg:hidden" aria-hidden="true" />}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-20
          flex flex-col bg-indigo-900 text-white
          transition-all duration-300 ease-in-out
          ${open ? 'w-64' : 'w-0 lg:w-16'}
          overflow-hidden
        `}
      >
        <div className="h-16 flex items-center justify-center flex-shrink-0">
          {open && <span className="text-indigo-300 text-xs font-semibold uppercase tracking-widest">Menu</span>}
        </div>

        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              title={!open ? item.label : undefined}
              className={({ isActive }) => `
                w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                transition-colors duration-150 group
                ${isActive ? 'bg-indigo-700 text-white shadow-sm' : 'text-indigo-200 hover:bg-indigo-800 hover:text-white'}
              `}
            >
              <span className="flex-shrink-0">{item.icon}</span>
              {open && <span className="truncate">{item.label}</span>}
            </NavLink>
          ))}
        </nav>

        {open && (
          <div className="px-4 py-4 border-t border-indigo-800">
            <p className="text-xs text-indigo-400 text-center">AI Zion v1.0</p>
          </div>
        )}
      </aside>
    </>
  );
}
