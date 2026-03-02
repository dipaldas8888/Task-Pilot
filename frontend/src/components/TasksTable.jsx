import React, { useEffect, useState } from "react";
import API from "../api/axios";

export const TasksTable = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks"); // your endpoint
      setTasks(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) {
    return <p className="text-white p-4">Loading tasks...</p>;
  }

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-md">
      <div className="p-4 border-b border-gray-700 flex justify-between">
        <h2 className="text-white font-semibold text-lg">Task Distribution</h2>
        <span className="text-gray-400 text-sm">Total: {tasks.length}</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-gray-300">
          <thead className="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Notes</th>
              <th className="px-6 py-3">Assigned Agent</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr
                key={task._id}
                className="border-b border-gray-700 hover:bg-gray-700 transition"
              >
                <td className="px-6 py-4 font-medium text-white">
                  {task.firstName || "—"}
                </td>

                <td className="px-6 py-4">{task.phone || "—"}</td>

                <td className="px-6 py-4 text-xs text-gray-400">
                  {task.notes || "No notes"}
                </td>

                <td className="px-6 py-4">
                  <div>
                    <p className="text-white text-sm">
                      {task.assignedTo?.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {task.assignedTo?.email}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-4 text-xs text-gray-400">
                  {new Date(task.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
