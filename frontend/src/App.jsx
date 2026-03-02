import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashBoardLayout } from "./layout/DashBoardLayout";
import { AddAgents } from "./pages/AddAgents";
import { DashBoard } from "./pages/DashBoard";
import { Agents } from "./pages/Agents";
import { TaskAdd } from "./pages/TaskAdd";
import { Login } from "./pages/Login";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashBoardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashBoard />} />
          <Route path="add-agent" element={<AddAgents />} />
          <Route path="agents" element={<Agents />} />
          <Route path="upload" element={<TaskAdd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
