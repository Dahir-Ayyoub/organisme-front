import React from 'react';
import featuresData from '../../../variables/featuresData'; 
import LazyLoad from './LazyLoad';

function Features() {
  return (
    <LazyLoad >
    <div className="mx-auto h-full lg:container">
      <div className="flex h-full flex-col items-center justify-center md:flex-col lg:flex-row">
        {featuresData.map((feature, index) => (
          <div key={index} className="col-span-1 flex flex-col items-center gap-6 px-10 py-10 lg:px-4 xl:px-2">
            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-blue-500 transition hover:bg-purple-blue-600 focus:bg-purple-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                  <path d={feature.iconPath} fill="white" />
                </svg>
              </div>
            </div>
            <div className="flex flex-col gap-2 px-2 text-center">
              <h4 className="text-2xl font-extrabold text-dark-grey-900">{feature.title}</h4>
              <p className="text-base font-medium leading-7 text-dark-grey-600 lg:px-8">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </LazyLoad>
  );
}

export default Features;