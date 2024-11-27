import React, { useEffect } from 'react';
import { CountUp } from 'countup.js'
import statisticsData from '../../../variables/statisticsData';
import imgSrc from '../../../assets/img/user-homepage/header.png';
import LazyLoad from './LazyLoad';

function Statistics() {
  useEffect(() => {
    if (document.querySelector("[countTo]")) {
      let numbers = document.querySelectorAll("[countTo]");

      numbers.forEach((number) => {
        let ID = number.getAttribute("id");
        let value = number.getAttribute("countTo");
        let countUp;

        if (number.hasAttribute("data-decimal")) {
          const options = {
            decimalPlaces: 1,
          };
          countUp = new CountUp(ID, value, options);
        } else {
          countUp = new CountUp(ID, value);
        }

        if (!countUp.error) {
          countUp.start();
        } else {
          console.error(countUp.error);
          number.innerHTML = value;
        }
      });
    }
  }, []);

  return (
    <LazyLoad >
    <div className="flex min-h-screen flex-col justify-center">
      <div className="w-full">
        <div className="container mx-auto my-32 flex flex-col items-center gap-16">
          <div className="grid w-full grid-cols-1 gap-32 lg:grid-cols-2">
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-2 text-center lg:text-left">
                <h2 className="text-3xl font-extrabold leading-7 text-dark-grey-900 md:text-3xl">
                  Boost your workflow with Horizon
                </h2>
                <p className="text-base font-medium leading-7 text-dark-grey-600">
                  Urna duis convallis convallis tellus interdum velit laoreet pellentesque aliquam tortor consequat porta.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2">
                {statisticsData.map((stat) => (
                  <div key={stat.id} className="flex flex-col items-start gap-1">
                    <h3 className="text-4xl font-extrabold leading-tight text-dark-grey-900">
                      {stat.currency ? `89` : (
                        <span id={stat.id} countTo={stat.value}></span>
                      )}+
                    </h3>
                    <h3 className="text-base font-bold leading-tight text-dark-grey-900">
                      {stat.label}
                    </h3>
                    <p className="text-base font-medium leading-7 text-dark-grey-600">
                      {stat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden rounded-2xl bg-cover bg-center lg:block"
                style={{ backgroundImage: `url(${imgSrc})` }}
              ></div>
          </div>
        </div>
      </div>
    </div>
    </LazyLoad>
  );
}

export default Statistics;