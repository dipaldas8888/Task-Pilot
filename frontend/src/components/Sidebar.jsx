import { NavLink } from "react-router-dom";
import { FiHome, FiUserPlus, FiUsers, FiUpload } from "react-icons/fi";

export const Sidebar = () => {
  const menus = [
    { name: "Dashboard", path: "/", icon: <FiHome /> },
    { name: "Add Agents", path: "/add-agent", icon: <FiUserPlus /> },
    { name: "Agents", path: "/agents", icon: <FiUsers /> },
    { name: "CSV Upload", path: "/upload", icon: <FiUpload /> },
  ];

  return (
    <div className="w-64 bg-gray-800 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-6 text-white">Admin</h1>

      <nav className="space-y-3">
        {menus.map((menu, id) => (
          <NavLink
            key={id}
            to={menu.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-2 py-2 rounded text-white transition ${
                isActive ? "bg-blue-500" : "hover:bg-gray-700"
              }`
            }
          >
            <span className="text-lg">{menu.icon}</span>
            <span>{menu.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};
