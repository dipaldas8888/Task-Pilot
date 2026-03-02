import { AddAgent } from "../components/AddAgent";
import { TasksTable } from "../components/TasksTable";

export const AddAgents = () => {
  return (
    <div className="grid grid-cols-12 gap-6 min-h-screen overflow-y-hidden">
      <div className="col-span-12 lg:col-span-5">
        <AddAgent />
      </div>

      <div className="col-span-12 lg:col-span-7 p-4">
        <TasksTable />
      </div>
    </div>
  );
};
