import {
  FaUser,
  FaChartLine,
  FaUniversity,
  FaCalendarAlt,
  FaFile,
  FaSuitcase,
  FaShoppingCart,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  return (
    <div className="w-64 h-screen bg-white shadow-md p-4 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
              🌿
            </div>
            <h1 className="text-xl font-semibold text-teal-800">clear minds</h1>
          </div>

          {/* Logout Icon with Tooltip */}
          <div
            onClick={handleLogout}
            title="Logout"
            className="cursor-pointer text-gray-500 hover:text-red-500"
          >
            <FaSignOutAlt />
          </div>
        </div>

        {/* Section: Dashboard */}
        <div>
          <h2 className="text-xs font-semibold text-gray-400 mb-2 uppercase">
            Dashboard
          </h2>
          <nav className="flex flex-col gap-1 mb-4">
            <NavItem icon={<FaUsers />} label="App" active />
            <NavItem icon={<FaUser />} label="Managers" />
            <NavItem icon={<FaChartLine />} label="Analytics" />
            <NavItem icon={<FaUniversity />} label="Banking" />
            <NavItem icon={<FaCalendarAlt />} label="Booking" />
            <NavItem icon={<FaFile />} label="File" />
            <NavItem icon={<FaSuitcase />} label="Job" hasDropdown />
          </nav>
        </div>

        {/* Section: Management */}
        <div>
          <h2 className="text-xs font-semibold text-gray-400 mb-2 uppercase">
            Management
          </h2>
          <nav className="flex flex-col gap-1">
            <NavItem icon={<FaUser />} label="User" />
            <NavItem icon={<FaShoppingCart />} label="E-commerce" />
            <NavItem icon={<FaChartLine />} label="Analytics" />
            <NavItem icon={<FaUniversity />} label="Banking" />
            <NavItem icon={<FaCalendarAlt />} label="Booking" />
            <NavItem icon={<FaFile />} label="File" />
            <NavItem icon={<FaSuitcase />} label="Job" hasDropdown />
          </nav>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active = false, hasDropdown = false }) => (
  <div
    className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer 
    ${
      active ? "bg-teal-100 text-teal-700" : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    <div className="flex items-center gap-2">
      <span className="text-lg">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
    {hasDropdown && <span className="text-gray-400">{">"}</span>}
  </div>
);

export default Sidebar;
