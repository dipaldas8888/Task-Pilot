import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";
export const DashBoardLayout = () => {
  return (
    <>
      <div className="flex h-screen bg-[#0f172a] text-white">
        <Sidebar />
        <div className="min-h-screen w-full ">
          <Outlet />
        </div>
      </div>
    </>
  );
};
