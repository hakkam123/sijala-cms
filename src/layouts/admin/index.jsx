import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import routes from "routes.js";

export default function Admin(props) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [collapsed, setCollapsed] = React.useState(false);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  // Updated sidebar width with proper margin values
  const sidebarMargin = collapsed ? "xl:ml-[72px]" : "xl:ml-[260px]";

  document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full">
      {/* Sidebar - Full height, fixed position, highest z-index */}
      <Sidebar
        open={open}
        onClose={() => setOpen(false)}
        collapsed={collapsed}
        onToggleCollapse={() => setCollapsed(!collapsed)}
      />

      {/* Main Content Area */}
      <div
        className={`h-full w-full bg-lightPrimary dark:!bg-navy-900 transition-all duration-300 ${sidebarMargin}`}
      >
        {/* Main Content */}
        <main className="mx-0 h-full flex-none">
          {/* Routes */}
          <div className="h-full">
            {/* Navbar - positioned below sidebar z-index */}
            <div className="relative z-40">
              <Navbar
                onOpenSidenav={() => setOpen(true)}
                logoText={"Horizon UI Tailwind React"}
                brandText={currentRoute}
                secondary={getActiveNavbar(routes)}
                {...rest}
              />
            </div>

            {/* Page Content */}
            <div className="mx-auto mb-auto h-full min-h-[84vh] p-4">
              <Routes>
                {getRoutes(routes)}

                <Route
                  path="/"
                  element={<Navigate to="/admin/default" replace />}
                />
              </Routes>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
