import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routes from "routes.js";

export default function Admin(props) {
  /* 
 * - Extracts all remaining props into `rest`.
 * - Uses `useLocation` to get the current location object.
 * - Manages sidebar state (`open`) with a default value of `true`.
 * - Tracks the current route name, defaulting to "Main Dashboard". 
 */

  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

/* This `useEffect` toggles the sidebar state based on window width. 
 * If width < 1200px, it closes the sidebar; otherwise, it opens it. */
  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  


/* This `useEffect` runs `getActiveRoute(routes)` whenever `location.pathname` changes. */
  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);


/* Determines the active route based on the current URL. 
 * If the URL matches a route's layout and path, it updates the current route state. 
 * Defaults to "Main Dashboard" if no match is found. */
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

  /* Checks the current URL to find a matching route. 
 * Returns the `secondary` property of the matched route, or `false` if no match is found. */

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


  /* Generates React Route components for routes with the "/admin" layout. 
 * Returns null for non-admin routes. */
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


  document.documentElement.dir = "ltr";
  return (
    <div className="flex h-full w-full">
      {/* Sidebar Content */}

      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
        {/* Main Content */}
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
        >
          {/* Routes */}
          <div className="h-full">

      {/*  Renders the `Navbar` component with:
      * - `onOpenSidenav`: Opens the sidebar when triggered.
      * - `logoText`: Sets the logo text.
      * - `brandText`: Displays the current route name.
      * - `secondary`: Fetches the active navbar item.
      * - Passes additional props with `...rest`. */}
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"Horizon UI Tailwind React"}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />
            <div className="pt-5s mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
            {/*   Sets up routing with React Router:
                * - Renders routes returned by `getRoutes(routes)`.
                * - Redirects the root path ("/") to "/admin/default".  */}
              <Routes>
                {getRoutes(routes)}

                <Route
                  path="/"
                  element={<Navigate to="/admin/default" replace />}
                />
              </Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
