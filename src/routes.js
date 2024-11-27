import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
// import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdBarChart,
  MdPerson,
  MdLock,
  MdContentCopy,
  MdOutlineSettingsAccessibility,
  MdOutlinePowerSettingsNew,
  
} from "react-icons/md";
import HomePage from "views/user/HomePage";
import Management from "views/admin/management";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Management",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "management",
    component: <Management />,
  },
  {
    name: "Cards",
    layout: "/admin",
    path: "cards",
    icon: <MdContentCopy className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },
  
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "User",
    layout: "/user",
    path: "user",
    icon: <MdOutlineSettingsAccessibility className="h-6 w-6" />,
    component: <HomePage />,
  },
  {
    name: "Log out",
    layout: "/auth",
    path: "sign-in",
    // icon: <MdLock className="h-6 w-6" />,
    icon: <MdOutlinePowerSettingsNew className="h-6 w-6" />,
    component: <SignIn />,
  },
  
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
