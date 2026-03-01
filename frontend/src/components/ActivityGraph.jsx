import React from "react";
import { FiActivity } from "react-icons/fi";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Line,
  LineChart,
} from "recharts";

const data = [
  { name: "Jan", assigned: 40, completed: 24 },
  { name: "Feb", assigned: 30, completed: 18 },
  { name: "Mar", assigned: 50, completed: 32 },
  { name: "Apr", assigned: 45, completed: 28 },
  { name: "May", assigned: 60, completed: 40 },
  { name: "Jun", assigned: 75, completed: 55 },
  { name: "Jul", assigned: 90, completed: 70 },
];

export const ActivityGraph = () => {
  return (
    <div className="col-span-12 lg:col-span-8 bg-gray-800 rounded-xl border border-gray-700 ">
      <div className="p-4 border-b border-gray-700">
        <h3 className="flex items-center gap-2 font-semibold text-white">
          <FiActivity />
          Task Activity
        </h3>
      </div>

      <div className="h-72 p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 10, left: -20, bottom: 5 }}
          >
            <CartesianGrid stroke="#374151" />

            <XAxis
              dataKey="name"
              stroke="#9ca3af"
              tickLine={false}
              axisLine={false}
            />

            <YAxis stroke="#9ca3af" tickLine={false} axisLine={false} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="assigned"
              stroke="#3b82f6"
              strokeWidth={3}
            />

            <Line
              type="monotone"
              dataKey="completed"
              stroke="#22c55e"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
