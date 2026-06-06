import { NavLink } from "react-router-dom";
import "./SideBar.css";
function SideBar() {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Subjects", path: "/Subject/Sub" },
    { name: "Schedule", path: "/Schedule/Schedule" },
    { name: "Progress", path: "/Progress/Progress" },
    { name: "Notes", path: "/Note/Notes" }
  ];
  return (
    <nav className="sidebar">
      <h2 className="logo">
        📖 Study Planner
      </h2>
      <div className="sidebarMenu">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "linkStyle activeLink" : "linkStyle"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
export default SideBar;