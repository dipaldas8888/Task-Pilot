import React from "react";
import {
  FiTrendingDown,
  FiTrendingUp,
  FiUsers,
  FiUserPlus,
  FiUpload,
} from "react-icons/fi";

export const StatCards = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
      <Card
        title="Total Agents"
        value="120"
        pillText="12%"
        trend="up"
        period="Last 30 days"
        icon={<FiUsers />}
      />

      <Card
        title="New Agents"
        value="15"
        pillText="5%"
        trend="up"
        period="This month"
        icon={<FiUserPlus />}
      />

      <Card
        title="CSV Uploaded"
        value="8 Files"
        pillText="2%"
        trend="down"
        period="This week"
        icon={<FiUpload />}
      />
    </div>
  );
};

const Card = ({ title, value, pillText, trend, period, icon }) => {
  return (
    <div className="col-span-12 md:col-span-4 p-5 rounded-xl border border-gray-700 bg-gray-800 text-white">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-gray-400 text-sm mb-1">{title}</h3>
          <p className="text-3xl font-bold">{value}</p>
        </div>

        <div className="text-2xl text-blue-400">{icon}</div>
      </div>

      <div className="flex justify-between items-center">
        <span
          className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded ${
            trend === "up"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />}
          {pillText}
        </span>

        <p className="text-xs text-gray-400">{period}</p>
      </div>
    </div>
  );
};
