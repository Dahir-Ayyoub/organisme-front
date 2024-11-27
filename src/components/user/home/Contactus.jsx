import React from 'react';
import LazyLoad from './LazyLoad';

function ContactUs() {
  return (
    <LazyLoad >
    <section className="bg-white dark:bg-gray-800" id='contactus'>
      <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
          <span className="block">Vous avez des questions ?</span>
          <span className="block text-indigo-500">Contactez-nous dès aujourd'hui.</span>
        </h2>
        <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
          Nous sommes là pour vous aider. N'hésitez pas à nous faire part de vos préoccupations ou de vos demandes.
        </p>
        <div className="lg:mt-0 lg:flex-shrink-0">
          <div className="mt-12 inline-flex rounded-md shadow">
          <button class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
              Contactez-nous
            </button>
          </div>
        </div>
      </div>
    </section>
    </LazyLoad>
  );
}

export default ContactUs;