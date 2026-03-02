import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { StatCards } from "../components/StatCards";
export const DashBoardLayout = () => {
  return (
    <>
      <div className="flex  min-h-screen bg-[#0f172a] text-white">
        <Sidebar />

        <div className="min-h-screen w-full p-3">
          <StatCards />
          <Outlet />
        </div>
      </div>
    </>
  );
};
