import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DownloadsDashboard() {
  // Sample data for donut chart
  const platformData = [
    { name: "iOS", value: 8726, color: "#00C49F" },
    { name: "Android", value: 2634, color: "#00C49F" },
    { name: "Windows", value: 1012, color: "#FFBB28" },
    { name: "Mac", value: 615, color: "#FF8042" },
  ];

  // Sample data for line chart
  const monthlyData = [
    { name: "Jan", Asia: 10, Americas: 30 },
    { name: "Feb", Asia: 15, Americas: 40 },
    { name: "Mar", Asia: 20, Americas: 45 },
    { name: "Apr", Asia: 30, Americas: 50 },
    { name: "May", Asia: 40, Americas: 45 },
    { name: "Jun", Asia: 50, Americas: 40 },
    { name: "Jul", Asia: 60, Americas: 35 },
    { name: "Aug", Asia: 70, Americas: 30 },
    { name: "Sep", Asia: 75, Americas: 25 },
    { name: "Oct", Asia: 65, Americas: 20 },
    { name: "Nov", Asia: 50, Americas: 15 },
    { name: "Dec", Asia: 40, Americas: 10 },
  ];

  // Calculate total downloads
  const totalDownloads = platformData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div className="flex flex-row p-6 bg-white rounded-lg shadow-md font-sans w-full">
      {/* Left Side - Donut Chart */}
      <div className="w-1/3 flex flex-col items-center mr-8 ">
        <h2 className="text-lg font-medium text-gray-700 mb-1 mr-60 fw-bold">
          Current Download
        </h2>
        <div className="relative">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={platformData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {platformData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                formatter={(value) => new Intl.NumberFormat().format(value)}
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-xs text-gray-500">Total</p>
            <p className="text-2xl font-bold">
              {new Intl.NumberFormat().format(totalDownloads)}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
            <span className="text-xs text-gray-600">Mac</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
            <span className="text-xs text-gray-600">Windows</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
            <span className="text-xs text-gray-600">iOS</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
            <span className="text-xs text-gray-600">Android</span>
          </div>
        </div>
      </div>

      {/* Right Side - Line Chart */}
      <div className="w-2/3 flex flex-col">
        <h2 className="text-lg font-medium text-gray-700 mb-1">
          Area Installed
        </h2>
        <p className="text-sm text-gray-500 mb-4">(+43%) than last year</p>

        <div className="flex items-center gap-6 mb-2">
          <div className="flex items-center ml-160">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm text-gray-600 ">Asia</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
            <span className="text-sm text-gray-600">Americas</span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={220}>
          <LineChart
            data={monthlyData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Asia"
              stroke="#00C49F"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="Americas"
              stroke="#FFBB28"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
