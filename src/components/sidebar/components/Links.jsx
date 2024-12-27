import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import DashIcon from "components/icons/DashIcon";

export function SidebarLinks(props) {
  let location = useLocation();
  const { routes } = props;

  // State to manage dropdown visibility
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter routes for "Dashboard" (dropdown) and "Log out" (standalone)
  const dashboardRoutes = routes.filter((route) => route.name !== "Log out");
  const logoutRoute = routes.find((route) => route.name === "Log out");

  // Determine if a route is active
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <ul className="mb-auto pt-1">
      {/* Dashboard Dropdown */}
      <li className="relative mb-3">
        <div
          className="flex items-center px-8 cursor-pointer"
          onClick={toggleDropdown}
        >
          <span className="text-brand-500 dark:text-white">
            <DashIcon /> {/* Custom Dashboard Icon */}
          </span>
          <p className="ml-4 font-bold text-navy-700 dark:text-white">
            Menu
          </p>
          <span className="ml-auto">
            {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </div>
        {isDropdownOpen && (
          <ul
            className="ml-8 mt-2 max-h-80 space-y-2 overflow-y-auto"
            style={{ scrollbarWidth: "thin", scrollbarColor: "#A0AEC0 #EDF2F7" }}
          >
            {dashboardRoutes.map((route, index) => (
              <li key={index}>
                <Link
                  to={route.layout + "/" + route.path}
                  className={`flex items-center px-4 py-2 rounded-md ${
                    activeRoute(route.path)
                      ? "bg-brand-500 text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  <span className="mr-2">{route.icon || <DashIcon />}</span>
                  <span>{route.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>

      {/* Log out Link */}
      {logoutRoute && (
        <li className="relative mb-3">
          <Link
            to={logoutRoute.layout + "/" + logoutRoute.path}
            className={`flex items-center px-8 py-2 rounded-md ${
              activeRoute(logoutRoute.path)
                ? "bg-brand-500 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <span className="mr-2">{logoutRoute.icon || <DashIcon />}</span>
            <span>{logoutRoute.name}</span>
          </Link>
        </li>
      )}
    </ul>
  );
}

export default SidebarLinks;

















// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import DashIcon from "components/icons/DashIcon";
// // chakra imports

// export function SidebarLinks(props) {
//   // Chakra color mode
//   let location = useLocation();

//   const { routes } = props;

//   // verifies if routeName is the one active (in browser input)
//   const activeRoute = (routeName) => {
//     return location.pathname.includes(routeName);
//   };
// /* Iterates over the `routes` array and filters routes with layouts: "/admin", "/auth", or "/user". */

//   const createLinks = (routes) => {
//     /* The code snippet `return routes.map((route, index) => { if ( route.layout === "/admin" ||
//     route.layout === "/auth" || route.layout === "/user" )` is iterating over the `routes` array and
//     filtering out routes that have specific layouts. Specifically, it is checking if the `layout`
//     property of each route object is equal to "/admin", "/auth", or "/user". */
//     return routes.map((route, index) => {
//       if (
//         route.layout === "/admin" ||
//         route.layout === "/auth" ||
//         route.layout === "/user" 
//       ) 
//       {
//         return (
//           /* Creates a dynamic sidebar link using React Router's `Link` component. 
//           * - Constructs the `to` path from the `layout` and `path` properties.
//           * - Applies conditional styling to highlight the active route.
//           * - Displays an icon (or default `DashIcon`) and the route's name.
//           * - Adds an underline indicator when the route is active. */

//           <Link key={index} to={route.layout + "/" + route.path}>
//             <div className="relative mb-3 flex hover:cursor-pointer">
//               <li
//                 className="my-[3px] flex cursor-pointer items-center px-8"
//                 key={index}
//               >
//                 <span
//                   className={`${
//                     activeRoute(route.path) === true
//                       ? "font-bold text-brand-500 dark:text-white"
//                       : "font-medium text-gray-600"
//                   }`}
//                 >
//                   {route.icon ? route.icon : <DashIcon />}{" "}
//                 </span>
//                 <p
//                   className={`leading-1 ml-4 flex ${
//                     activeRoute(route.path) === true
//                       ? "font-bold text-navy-700 dark:text-white"
//                       : "font-medium text-gray-600"
//                   }`}
//                 >
//                   {route.name}
//                 </p>
//               </li>
//               {activeRoute(route.path) ? (
//                 <div class="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500 dark:bg-brand-400" />
//               ) : null}
//             </div>
//           </Link>
//         );
//       }
//     });
//   };
//   /* Calls the `createLinks` function with the `routes` array, 
//  * which filters routes by layout and generates dynamic sidebar links with conditional styling, icons, and route names. */
//   return createLinks(routes);
// }

// export default SidebarLinks;
