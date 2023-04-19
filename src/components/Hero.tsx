// components/Navbar.tsx
import Link from "next/link";
import React from "react";
import Image from 'next/image'

import heroBg from '../assets/img/heroBg.svg'

const Hero = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-6 flex flex-col sm:py-12">
      {/* <!-- ROW 1 --> */}
      <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:items-stretch">
        {/* <!-- LEFT --> */}
        <div className="w-5/6 px-4 py-12 text-left sm:w-1/2 sm:max-w-3xl mt-40">

            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-green-600">Estar com nós, é apoiar a Natureza.</span></h1>
            <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                <p className="text-xl font-medium leading-relaxed text-gray-900 dark:text-white">Descubra uma nova forma de se conectar com a natureza e cultivar um ambiente mais verde.</p>
            </blockquote>
    
            <div className="flex justify-center mt-8">
                <button className="inline-flex text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                <button className="ml-4 inline-flex text-gray-700 bg-secondary-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">Button</button>
            </div>
        </div>
        {/* <!-- RIGHT --> */}
        <div className="w-5/6 px-4 py-12 relative sm:w-1/2 sm:max-w-3xl">
          <Image src={heroBg} alt="Menino segurando um vaso de planta com quadrados verde em volta." width={500} height={550}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
