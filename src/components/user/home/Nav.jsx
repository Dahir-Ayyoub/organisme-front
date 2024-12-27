import React, { useState } from 'react';
import logoNav from '../../../assets/img/logo/logo.svg';
import { Link } from 'react-router-dom';

function Nav() {
  /* The code snippet `const [isOpen, setIsOpen] = useState(false);` is using the `useState` hook from
  React to create a state variable `isOpen` and a function `setIsOpen` to update the value of
  `isOpen`. The initial value of `isOpen` is set to `false`. */
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="group relative flex w-full shrink-0 flex-wrap items-center justify-between bg-white py-7">
        <div className="flex items-center">
          <img className="h-16 mr-2" src={logoNav} alt="Logo" /> 
          {/* <span className="text-xl font-semibold">ClassPlus</span> */}
          <span className="text-2xl font-bold">
            <span className="text-black">Class</span>
            <span className="text-blue-700">Plus</span> 
          </span>
        </div>
        <div className="hidden items-center justify-between gap-12 text-black md:flex">
          <a className="text-sm font-medium text-dark-grey-900" href="#services">Services</a>
          <a className="text-sm font-medium text-dark-grey-900" href="#features">Features</a>
          <a className="text-sm font-medium text-dark-grey-900" href="#aboutus">About us</a>
          <a className="text-sm font-medium text-dark-grey-900" href="#contactus">Contact us</a>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/auth/sign-in" className="flex items-center text-sm font-medium text-black">Log In</Link>
          {/* <Link to="/auth/sign-in" className="flex items-center text-sm font-medium text-black">
            Log In
          </Link> */}

          <button className="flex items-center rounded-xl bg-purple-blue-100 px-4 py-2 text-sm font-medium text-purple-blue-500 transition hover:bg-opacity-80 focus:bg-opacity-70">Sign Up</button>
        </div>
        <button onClick={toggleMenu} className="flex md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z" fill="black" />
          </svg>
        </button>
        <div className={`absolute top-full flex max-h-0 w-full flex-col items-start justify-center gap-3 overflow-hidden rounded-2xl bg-white px-4 shadow-main transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 py-4' : ''} md:hidden`}>
          <a className="text-sm font-medium text-dark-grey-900" href="#product">Product</a>
          <a className="text-sm font-medium text-dark-grey-900" href="#features">Features</a>
          <a className="text-sm font-medium text-dark-grey-900" href="#pricing">Pricing</a>
          <a className="text-sm font-medium text-dark-grey-900" href="#company">Company</a>
          <button className="flex items-center text-sm font-medium text-black">
            <Link to='auth/sign-in' >Log In</Link>
          </button>
          <button className="flex items-center rounded-xl bg-purple-blue-100 px-4 py-2 text-sm font-medium text-purple-blue-500 transition hover:bg-opacity-80 focus:bg-opacity-70">Sign Up</button>
        </div>
      </div>
    </>
  );
}

export default Nav;