/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import Logo from "../../assets/img/logo/classplus-logo2.svg";
import SidebarCard from "components/sidebar/componentsrtl/SidebarCard";
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  return (
    // <div
    //   className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
    //     open ? "translate-x-0" : "-translate-x-96"
    //   }`}
    // >
    //   <span
    //     className="absolute top-4 right-4 block cursor-pointer xl:hidden"
    //     onClick={onClose}
    //   >
    //     <HiX />
    //   </span>

    //   <div className={`mx-[56px] mt-[50px] flex items-center`}>
    //     <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
    //       <img alt='logo' src={Logo } className=""/>
    //       Class<span class="font-medium">Plus</span>
    //     </div>
    //   </div>





//     <div
//   className={`fixed z-50 flex min-h-full flex-col bg-white shadow-2xl dark:bg-navy-800 dark:text-white transition-transform duration-175 ${
//     open ? "translate-x-0" : "-translate-x-full"
//   }`}
// >
//   <button
//     className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 xl:hidden"
//     onClick={onClose}
//   >
//     <HiX size={24} />
//   </button>

//   <div className="mt-12 flex flex-col items-center">
//     <img
//       src={Logo}
//       alt="logo"
//       className="w-16 h-16 rounded-full shadow-lg mb-4"
//     />
//     <h1 className="text-2xl font-bold text-navy-700 dark:text-white">
//       Class<span className="font-medium text-gray-600 dark:text-gray-300">Plus</span>
//     </h1>
//   </div>


//       <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
//       {/* Nav item */}

//       <ul className="mb-auto pt-1">
//         <Links routes={routes} />
//       </ul>

//       {/* Free Horizon Card */}
//       <div className="flex justify-center">
//         <SidebarCard />
//       </div>

//       {/* Nav item end */}
//     </div>




<div
      className={`fixed z-50 flex min-h-full flex-col bg-white shadow-2xl dark:bg-navy-800 dark:text-white transition-transform duration-175 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 xl:hidden"
        onClick={onClose}
      >
        <HiX size={24} />
      </button>

      {/* Logo Section */}
      <div className="mt-10 flex flex-col items-center">
        <img
          src={Logo}
          alt="ClassPlus Logo"
          className="w-28 h-28 rounded-full mb-2"
        />
        <h1 className="text-3xl font-bold text-navy-700 dark:text-white">
          Class
          <span className="font-medium text-gray-600 dark:text-gray-300">
            Plus
          </span>
        </h1>
      </div>

      {/* Divider */}
      <div className="mt-6 mb-6 h-px w-3/4 bg-gray-300 dark:bg-white/30 mx-auto" />

      {/* Navigation Links */}
      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Sidebar Card */}
      <div className="flex justify-center mt-6">
        {/* <SidebarCard /> */}
      </div>
    </div>
  );
};

export default Sidebar;
