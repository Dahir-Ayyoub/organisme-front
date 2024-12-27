import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import Logo from "../../assets/img/logo/classplus-logo2.svg";
import SidebarCard from "components/sidebar/componentsrtl/SidebarCard";
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  return (
   /* The code you provided is a React component named `Sidebar`. This component is responsible for
   rendering a sidebar menu. Let's break down the code snippet: */
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>
        <div
      className={`w-[300px] fixed z-50 flex min-h-full flex-col bg-white  shadow-2xl dark:bg-navy-800 dark:text-white transition-transform duration-175 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    > 
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 xl:hidden"
        onClick={onClose}
      >
        <HiX size={24} />
      </button>
          <div className="mt-1 flex flex-col items-center">
            <img src={Logo} alt="ClassPlus Logo" className="mb-2 h-28 w-28 rounded-full" />
                <h1 className="text-3xl font-bold text-navy-700 dark:text-white"> Class
                    <span className="font-medium text-gray-600 dark:text-gray-300"> Plus </span>
                </h1>
          </div>

          <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
          {/* Nav item */}

          <ul className="mb-auto pt-1">
            <Links routes={routes} />
          </ul>
        </div>
        </div>














// <div
//       className={`duration-175 fixed z-50 flex min-h-full flex-col bg-white shadow-2xl transition-transform dark:bg-navy-800 dark:text-white ${
//         open ? "translate-x-0" : "-translate-x-full"
//       }`}
//     >
//       <button
//         className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 xl:hidden"
//         onClick={onClose}
//       >
//         <HiX size={24} />
//       </button>

      
//       <div className="mt-10 flex flex-col items-center">
//         <img
//           src={Logo}
//           alt="ClassPlus Logo"
//           className="mb-2 h-28 w-28 rounded-full"
//         />
//         <h1 className="text-3xl font-bold text-navy-700 dark:text-white">
//           Class
//           <span className="font-medium text-gray-600 dark:text-gray-300">
//             Plus
//           </span>
//         </h1>
//       </div>

     
//       <div className="mx-auto mb-6 mt-6 h-px w-3/4 bg-gray-300 dark:bg-white/30" />
          
     
//       <ul className="mb-auto pt-1">
//         <Links routes={routes} />
//       </ul>

      
//       <div className="mt-6 flex justify-center">{/* <SidebarCard /> */}</div> 
//     </div>

    
  );
};

export default Sidebar;
