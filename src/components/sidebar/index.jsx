/* eslint-disable */

import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import Links from "./components/Links";
import routes from "routes.js";
import logo from "../../assets/img/logo.png";
import motifSidebar from "../../assets/svg/motif-sidebar.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ open, onClose, collapsed, onToggleCollapse }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here
    navigate("/auth/sign-in");
  };

  const sidebarWidth = collapsed ? "w-[72px]" : "w-[260px]";

  // User data (can be replaced with actual user data from context/props)
  const user = {
    name: "Rudi Hartono",
    role: "Admin Utama",
    initials: "RH"
  };

  return (
    <div
      className={`sm:none duration-300 linear fixed !z-50 flex h-screen flex-col transition-all ease-out md:!z-50 lg:!z-50 xl:!z-50 ${sidebarWidth} ${open ? "translate-x-0" : "-translate-x-full"
        }`}
      style={{
        background: "linear-gradient(180deg, #122A46 0%, #0F2337 40%, #0B1C2E 70%, #081422 100%)",
        top: 0,
        left: 0,
        height: "100vh",
      }}
    >
      {/* Background motif */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-full w-full overflow-hidden"
        style={{
          backgroundImage: `url(${motifSidebar})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom left",
          backgroundSize: "auto 60%",
          opacity: 0.7
        }}
      />

      {/* Floating Toggle Button - positioned on the outer edge */}
      <button
        onClick={onToggleCollapse}
        className={`
          absolute z-[60] flex h-8 w-8 items-center justify-center rounded-full
          bg-[#1E3A5F] border-2 border-[#0A1628]
          text-white/90 shadow-lg
          transition-all duration-300 ease-out
          hover:bg-[#2A4A6F] hover:text-white hover:scale-110
          focus:outline-none focus:ring-2 focus:ring-[#2DD4BF]/50
        `}
        style={{
          top: "88px",
          right: "-16px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        }}
        title={collapsed ? "Perbesar sidebar" : "Perkecil sidebar"}
      >
        {collapsed ? (
          <HiChevronRight className="h-4 w-4" />
        ) : (
          <HiChevronLeft className="h-4 w-4" />
        )}
      </button>

      {/* Close button for mobile */}
      <span
        className="absolute top-4 right-4 block cursor-pointer text-white xl:hidden"
        onClick={onClose}
      >
        <HiX className="h-5 w-5" />
      </span>

      {/* Logo/Brand section */}
      <div className={`relative z-10 mx-auto mt-5 flex w-full items-center ${collapsed ? "justify-center px-3" : "px-4"}`}>
        <div className={`flex items-center ${collapsed ? "justify-center" : "gap-3"}`}>
          {/* Logo */}
          <div
            className={`flex-shrink-0 overflow-hidden rounded-xl bg-white p-2 transition-all duration-300 ${collapsed ? "h-10 w-10" : "h-12 w-12"
              }`}
          >
            <img
              src={logo}
              alt="Logo"
              className="h-full w-full object-contain"
            />
          </div>

          {/* Brand text - only show when expanded */}
          {!collapsed && (
            <div className="flex flex-col overflow-hidden">
              <span className="text-[15px] font-bold text-white leading-tight">KKP Raja Ampat</span>
              <span className="text-[11px] font-medium text-white/50">Content Management System</span>
            </div>
          )}
        </div>
      </div>

      {/* Section header spacer */}
      <div className="relative z-10 mt-6" />

      {/* Navigation items */}
      <nav className={`relative z-10 mt-2 flex-1 overflow-y-auto overflow-x-hidden ${collapsed ? "px-2" : "px-3"}`}>
        <Links routes={routes} collapsed={collapsed} />
      </nav>

      {/* User profile section */}
      <div className={`relative z-10 border-t border-white/10 ${collapsed ? "px-2 py-4" : "px-3 py-4"}`}>
        <div
          className={`flex items-center ${collapsed ? "justify-center" : "gap-3"}`}
        >
          {/* Avatar */}
          <div
            className={`
              flex-shrink-0 flex items-center justify-center rounded-full 
              bg-[#1E3A5F] text-white font-semibold
              transition-all duration-300
              ${collapsed ? "h-10 w-10 text-sm" : "h-10 w-10 text-sm"}
            `}
            title={collapsed ? user.name : ""}
          >
            {user.initials}
          </div>

          {/* User info - only show when expanded */}
          {!collapsed && (
            <>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-semibold text-white truncate">{user.name}</p>
                <p className="text-[11px] text-[#4FD1C5] font-medium">{user.role}</p>
              </div>

              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-white/50 transition-all hover:bg-white/10 hover:text-white"
                title="Logout"
              >
                <HiArrowRightOnRectangle className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        {/* Collapsed logout button */}
        {collapsed && (
          <button
            onClick={handleLogout}
            className="mt-3 flex h-10 w-full items-center justify-center rounded-lg text-white/50 transition-all hover:bg-white/10 hover:text-white"
            title="Logout"
          >
            <HiArrowRightOnRectangle className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
