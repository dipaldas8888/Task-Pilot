import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { DashBoardLayout } from "./layout/DashBoardLayout";
import { AddAgents } from "./pages/AddAgents";
import { DashBoard } from "./pages/DashBoard";
import { Agents } from "./pages/Agents";
import { TaskAdd } from "./pages/TaskAdd";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DashBoardLayout />}>
          <Route path="/" element={<DashBoard />} />
          <Route path="/add-agent" element={<AddAgents />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/upload" element={<TaskAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
