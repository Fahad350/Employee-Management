import { NavLink, useNavigate } from "react-router-dom";
import { FaUser, FaClock, FaBoxOpen, FaHistory, FaHome } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Dashboard", icon: FaHome },
  { to: "/attendance", label: "Attendance", icon: FaClock },
  { to: "/asset", label: "My Assets", icon: FaBoxOpen },
  { to: "/history", label: "History", icon: FaHistory },
  { to: "/profile", label: "Profile", icon: FaUser },
  { to: "/logout", label: "Logout", icon: IoIosLogOut },
];

export default function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await fetch("http://localhost:4000/api/v1/logout", {
        method: "POST",
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        navigate("/login");
      } else {
        console.error(data.message);
      }
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  return (
    <>
      <aside
        className={`
          fixed md:static z-30 inset-y-0 left-0 w-60 bg-gray-800 text-gray-200 
          border-r border-gray-700 shadow-sm transform transition-transform duration-300 ease-in-out
          ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0
        `}
      >
        <div className="p-4 font-bold text-lg bg-gray-800 text-white border-b">
          Employee Portal
        </div>

        <nav className="mt-3 flex flex-col gap-1">
          {NAV_ITEMS.map(({ to, label, icon: Icon }) =>
            label === "Logout" ? (
              <button
                key={to}
                onClick={handleLogout}
                className="flex items-center gap-3 px-4 py-2 cursor-pointer rounded-lg text-sm font-medium text-gray-200 hover:bg-gray-600 transition"
              >
                {Icon && <Icon className="h-4 w-4" />}
                {label}
              </button>
            ) : (
              <NavLink
                key={to}
                to={to}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition
                  ${
                    isActive
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-200 hover:bg-gray-600"
                  }`
                }
              >
                {Icon && <Icon className="h-4 w-4" />}
                {label}
              </NavLink>
            )
          )}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
}
