const STATS = [
  { label: 'Total Users', value: '1,284', change: '+12%', positive: true },
  { label: 'Active Projects', value: '34', change: '+5%', positive: true },
  { label: 'Tasks Done', value: '890', change: '-3%', positive: false },
  { label: 'Revenue', value: '$24.5k', change: '+18%', positive: true },
];

export function StatsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col gap-2"
        >
          <p className="text-sm text-gray-500">{stat.label}</p>
          <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit ${
              stat.positive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'
            }`}
          >
            {stat.change} this month
          </span>
        </div>
      ))}
    </div>
  );
}
