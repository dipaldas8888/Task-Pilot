import React from "react";

const agents = [
  {
    id: 1,
    name: "John Doe",
    email: "john@mail.com",
    phone: "+91 9876543210",
    tasks: 24,
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@mail.com",
    phone: "+91 9123456780",
    tasks: 18,
    status: "Inactive",
  },
  {
    id: 3,
    name: "David Lee",
    email: "david@mail.com",
    phone: "+91 9988776655",
    tasks: 30,
    status: "Active",
  },
];

export const AgentsTable = () => {
  return (
    <div className="relative overflow-x-auto bg-gray-800 shadow-md rounded-xl border border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-white font-semibold text-lg">Agents List</h2>
      </div>

      <table className="w-full text-sm text-left text-gray-300">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr>
            <th className="px-6 py-3">Agent</th>
            <th className="px-6 py-3">Phone</th>
            <th className="px-6 py-3">Tasks</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>

        <tbody>
          {agents.map((agent) => (
            <tr
              key={agent.id}
              className="border-b border-gray-700 hover:bg-gray-700 transition"
            >
              <td className="px-6 py-4">
                <div>
                  <p className="font-medium text-white">{agent.name}</p>
                  <p className="text-xs text-gray-400">{agent.email}</p>
                </div>
              </td>

              <td className="px-6 py-4">{agent.phone}</td>

              <td className="px-6 py-4">
                <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">
                  {agent.tasks} Tasks
                </span>
              </td>

              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    agent.status === "Active"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {agent.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
