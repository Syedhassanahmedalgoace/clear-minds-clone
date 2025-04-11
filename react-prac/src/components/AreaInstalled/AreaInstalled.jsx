import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", Asia: 10, Americas: 30 },
  { month: "Feb", Asia: 15, Americas: 50 },
  { month: "Mar", Asia: 25, Americas: 60 },
  { month: "Apr", Asia: 40, Americas: 45 },
  { month: "May", Asia: 55, Americas: 40 },
  { month: "Jun", Asia: 60, Americas: 42 },
  { month: "Jul", Asia: 58, Americas: 38 },
  { month: "Aug", Asia: 70, Americas: 30 },
  { month: "Sep", Asia: 80, Americas: 20 },
  { month: "Oct", Asia: 90, Americas: 15 },
  { month: "Nov", Asia: 65, Americas: 10 },
  { month: "Dec", Asia: 40, Americas: 8 },
];

const AreaInstalledChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">Area Installed</h3>
        <span className="text-green-500 text-sm font-medium">
          +43% than last year
        </span>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Asia"
            stroke="#22c55e"
            strokeWidth={2.5}
          />
          <Line
            type="monotone"
            dataKey="Americas"
            stroke="#fbbf24"
            strokeWidth={2.5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaInstalledChart;
