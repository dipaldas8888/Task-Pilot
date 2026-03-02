import { ActivityGraph } from "../components/ActivityGraph";
import { QuickActions } from "../components/QuickActions";
import { StatCards } from "../components/StatCards";
export const DashBoard = () => {
  return (
    <div className="p-3 space-y-4">
      <ActivityGraph />
      <QuickActions />
    </div>
  );
};
