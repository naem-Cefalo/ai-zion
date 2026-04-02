const ACTIVITIES = [
  { action: 'New user registered', time: '2 min ago' },
  { action: 'Project "Alpha" updated', time: '15 min ago' },
  { action: 'Report generated', time: '1 hr ago' },
  { action: 'Settings changed', time: '3 hrs ago' },
];

export function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {ACTIVITIES.map((item, i) => (
          <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
              <p className="text-sm text-gray-700">{item.action}</p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
