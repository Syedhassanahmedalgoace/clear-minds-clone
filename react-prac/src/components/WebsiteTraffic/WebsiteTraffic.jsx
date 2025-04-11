import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Direct", value: 400 },
  { name: "Referral", value: 300 },
  { name: "Organic", value: 300 },
  { name: "Social", value: 200 },
];

const COLORS = ["#34d399", "#60a5fa", "#facc15", "#f472b6"];

const WebsiteTraffic = () => {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow-sm dark:bg-gray-800 p-6 mx-auto">
      {/* Header */}
      <div className="flex justify-between mb-3">
        <div className="flex items-center">
          <h5 className="text-xl font-bold text-gray-900 dark:text-white me-1">
            Website Traffic
          </h5>
          <svg
            className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
          </svg>
        </div>
      </div>

      {/* Donut Chart */}
      <div className="py-6 flex justify-center">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WebsiteTraffic;
