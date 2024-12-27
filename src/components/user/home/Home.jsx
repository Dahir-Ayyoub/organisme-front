import React, { useState } from 'react';

import headerImage from '../../../assets/img/user-homepage/header1.png';

const Home = () => {

  return (
    <>
        
        <div className="min-h-screen my-auto mb-8 mt-12 w-full grid-cols-1 justify-center md:flex md:gap-5 lg:grid lg:grid-cols-2">
          <div className="col-span-1 flex flex-col justify-center text-center md:w-3/5 lg:w-full lg:justify-center lg:text-left">
            <div className="mb-4 flex items-center justify-center lg:justify-start">
              {/* <img className="h-5" src={logo1} alt="logo" /> */}
              <h4 className="ml-2 text-sm font-bold tracking-widest text-primary">Lorem ipsum dolor sit amet</h4>
            </div>
            <h1 className="mb-8 text-4xl font-extrabold leading-tight text-dark-grey-900 lg:text-5xl xl:w-11/12 xl:text-6xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h1>
            <p className="mb-10 text-base font-medium leading-7 text-dark-grey-600 xl:w-3/4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="flex flex-col items-center lg:flex-row">
              <button className="flex items-center rounded-xl bg-purple-blue-500 px-5 py-4 text-sm font-medium text-white transition hover:bg-purple-blue-600 focus:bg-purple-blue-700">Get started now</button>
              <button className="flex items-center rounded-xl px-5 py-4 text-sm font-medium text-dark-grey-900">
                {/* <img className="mr-2 h-6" src={phoneIcon} alt="phone icon" /> */}
                Start Now
              </button>
            </div>
          </div>
          <div className="col-span-1 hidden items-center justify-end lg:flex">
            <img className="w-4/5 rounded-2xl" src={headerImage} alt="" />
          </div>
        </div>
    </>
  );
};

export default Home;