import React, { useEffect, useState } from "react";
import API from "../api/axios";

export const AgentsTable = () => {
  const [agents, setAgents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAgents = async () => {
    try {
      const res = await API.get("/agents");

      setAgents(res.data.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch agents");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);

  if (loading) {
    return <p className="text-white p-4">Loading agents...</p>;
  }

  if (error) {
    return <p className="text-red-400 p-4">{error}</p>;
  }

  return (
    <div className="relative overflow-x-auto bg-gray-800 shadow-md rounded-xl border border-gray-700">
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className="text-white font-semibold text-lg">Agents List</h2>
        <span className="text-sm text-gray-400">Total: {agents.length}</span>
      </div>

      <table className="w-full text-sm text-left text-gray-300">
        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
          <tr>
            <th className="px-6 py-3">Agent</th>
            <th className="px-6 py-3">Phone</th>
            <th className="px-6 py-3">Created</th>
          </tr>
        </thead>

        <tbody>
          {agents.length > 0 ? (
            agents.map((agent) => (
              <tr
                key={agent._id}
                className="border-b border-gray-700 hover:bg-gray-700 transition"
              >
                <td className="px-6 py-4">
                  <p className="font-medium text-white">{agent.name}</p>
                  <p className="text-xs text-gray-400">{agent.email}</p>
                </td>

                <td className="px-6 py-4">{agent.mobile}</td>

                <td className="px-6 py-4 text-gray-400 text-xs">
                  {new Date(agent.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-6 py-4 text-center" colSpan="3">
                No agents found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
