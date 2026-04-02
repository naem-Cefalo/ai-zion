interface GlobalLoadingProps {
  label?: string;
}

export function GlobalLoading({ label = 'Loading...' }: GlobalLoadingProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3 rounded-xl border border-gray-100 bg-white px-6 py-5 shadow-lg">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
        <p className="text-sm font-medium text-gray-600">{label}</p>
      </div>
    </div>
  );
}
