/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";

// Import SVG icons
import landingPageIcon from "../../../assets/svg/landing-page.svg";
import tentangIcon from "../../../assets/svg/tentang.svg";
import pengelolaanIcon from "../../../assets/svg/pengelolaan.svg";
import kawasanKonservasiIcon from "../../../assets/svg/kawasan-konservasi.svg";
import layananIcon from "../../../assets/svg/layanan.svg";
import publikasiIcon from "../../../assets/svg/publikasi.svg";

// Map route names/paths to icons
const iconMap = {
  "default": landingPageIcon,
  "Landing Page": landingPageIcon,
  "nft-marketplace": tentangIcon,
  "Tentang Kami": tentangIcon,
  "evika": pengelolaanIcon,
  "EVIKA": pengelolaanIcon,
  "Pengelolaan Kawasan": pengelolaanIcon,
  "data-tables": kawasanKonservasiIcon,
  "Kawasan Konservasi": kawasanKonservasiIcon,
  "profile": layananIcon,
  "Layanan Kami": layananIcon,
  "Layanan": layananIcon,
  "artikel": publikasiIcon,
  "Berita": publikasiIcon,
  "Publikasi": publikasiIcon,
  "rams": publikasiIcon,
  "RAMS": publikasiIcon,
};

// Badge counts for menu items
const badgeCounts = {
  "Tentang": 3,
  "Tentang Kami": 3,
  "Layanan": 16,
  "Layanan Kami": 16,
};

// Section label component
const SectionLabel = ({ label, collapsed }) => {
  if (collapsed) return null;

  return (
    <div className="mb-2 mt-4 first:mt-0 px-3">
      <span
        className="text-[10px] font-semibold uppercase tracking-wider text-white/40"
        style={{ letterSpacing: '0.1em' }}
      >
        {label}
      </span>
    </div>
  );
};

export function SidebarLinks(props) {
  let location = useLocation();

  const { routes, collapsed } = props;

  // verifies if routeName is the one active
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  // Get custom icon based on route
  const getIcon = (route) => {
    const iconSrc = iconMap[route.path] || iconMap[route.name];
    const isActive = activeRoute(route.path);

    if (iconSrc) {
      return (
        <div className={`flex items-center justify-center transition-all duration-200 ${collapsed ? 'w-6 h-6' : 'w-5 h-5'}`}>
          <img
            src={iconSrc}
            alt={route.name}
            className="w-full h-full object-contain"
            style={{
              filter: isActive
                ? "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)"
                : "brightness(0) saturate(100%) invert(85%) sepia(5%) saturate(100%) hue-rotate(180deg) brightness(95%) contrast(90%)"
            }}
          />
        </div>
      );
    }
    return (
      <div className={`flex items-center justify-center transition-all duration-200 ${collapsed ? 'w-6 h-6' : 'w-5 h-5'}`}>
        {route.icon ? route.icon : <DashIcon />}
      </div>
    );
  };

  // Get badge count for route
  const getBadge = (route) => {
    return badgeCounts[route.name] || route.badge;
  };

  const createLinks = (routes) => {
    // Group routes by section
    const menuUtama = routes.filter(r =>
      !r.hidden &&
      (r.layout === "/admin" || r.layout === "/auth" || r.layout === "/rtl") &&
      !["Manajemen Pengguna", "Log Aktivitas"].includes(r.name)
    );

    const administrasi = routes.filter(r =>
      !r.hidden &&
      (r.layout === "/admin" || r.layout === "/auth" || r.layout === "/rtl") &&
      ["Manajemen Pengguna", "Log Aktivitas"].includes(r.name)
    );

    const renderLink = (route, index) => {
      const isActive = activeRoute(route.path);
      const badge = getBadge(route);

      return (
        <Link key={index} to={route.layout + "/" + route.path}>
          <div
            className={`
              relative mb-1 flex cursor-pointer items-center rounded-lg 
              transition-all duration-200 ease-out
              ${collapsed ? "justify-center px-2 py-3" : "px-3 py-2.5"}
              ${isActive
                ? "bg-[#0D2847]"
                : "hover:bg-white/5"
              }
            `}
            title={collapsed ? route.name : ""}
          >

            <span className={`flex items-center justify-center flex-shrink-0 ${collapsed ? '' : 'ml-0.5'}`}>
              {getIcon(route)}
            </span>

            {!collapsed && (
              <div className="flex items-center justify-between flex-1 ml-3 overflow-hidden">
                <p
                  className={`text-[13px] whitespace-nowrap transition-all duration-200 ${isActive
                    ? "font-semibold text-white"
                    : "font-medium text-white/70"
                    }`}
                >
                  {route.name}
                </p>

                {/* Badge for items with count */}
                {badge && (
                  <span className="ml-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-white/15 px-1.5 text-[10px] font-semibold text-white">
                    {badge}
                  </span>
                )}
              </div>
            )}
          </div>
        </Link>
      );
    };

    return (
      <>
        {/* Menu Utama Section */}
        <SectionLabel label="Menu Utama" collapsed={collapsed} />
        {menuUtama.map((route, index) => renderLink(route, `main-${index}`))}

        {/* Administrasi Section */}
        {administrasi.length > 0 && (
          <>
            <SectionLabel label="Administrasi" collapsed={collapsed} />
            {administrasi.map((route, index) => renderLink(route, `admin-${index}`))}
          </>
        )}
      </>
    );
  };

  return createLinks(routes);
}

export default SidebarLinks;
