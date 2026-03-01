import { ActivityGraph } from "../components/ActivityGraph";
import { QuickActions } from "../components/QuickActions";
import { StatCards } from "../components/StatCards";
export const DashBoard = () => {
  return (
    <div className="p-4 space-y-4">
      <StatCards />
      <ActivityGraph />
      <QuickActions />
    </div>
  );
};
