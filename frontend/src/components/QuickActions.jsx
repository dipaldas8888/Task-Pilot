import React from "react";
import { FiUserPlus, FiUpload, FiUsers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Add Agent",
      desc: "Create and assign new agent",
      icon: <FiUserPlus />,
      color: "from-blue-500 to-indigo-600",
      path: "/add-agent",
    },
    {
      title: "Upload CSV",
      desc: "Import and distribute tasks",
      icon: <FiUpload />,
      color: "from-emerald-500 to-teal-600",
      path: "/upload",
    },
    {
      title: "View Agents",
      desc: "Manage your agents",
      icon: <FiUsers />,
      color: "from-pink-500 to-rose-600",
      path: "/agents",
    },
  ];

  return (
    <div className="col-span-12 bg-gray-800/60 backdrop-blur-xl p-6 rounded-2xl border border-gray-700 shadow-lg">
      <h3 className="text-white text-lg font-semibold mb-6">
        ⚡ Quick Actions
      </h3>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {actions.map((action, i) => (
          <div
            key={i}
            onClick={() => navigate(action.path)}
            className="cursor-pointer group rounded-xl p-5 bg-gray-900 border border-gray-700 hover:border-transparent hover:shadow-2xl transition duration-300"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-r ${action.color} text-white text-xl mb-4 group-hover:scale-110 transition`}
            >
              {action.icon}
            </div>

            <h4 className="text-white font-semibold mb-1">{action.title}</h4>

            <p className="text-sm text-gray-400">{action.desc}</p>

            <div className="mt-4 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition">
              Go →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
