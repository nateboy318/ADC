import React from 'react'
import logo from '../../public/adclogo.png'
import Image from 'next/image'

const Header = () => {
  return (
    <div>
       <header className="fixed bg-dirt inset-x-0 top-0 z-20 w-full bg-gradient ">
        {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black to-black"></div> */}
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
               <a href="#" title="" className="flex">
                <Image 
                  className="w-auto h-16 mix-blend-screen" 
                  src={logo} 
                  alt="ADC Logo" 
                  width={64} // Adjust based on your logo's dimensions
                  height={64} // Adjust based on your logo's dimensions
                />
              </a>
            </div>

            <button type="button" className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100">
              <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <a href="#" title="" className="text-xl font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Our Story </a>
              <a href="#" title="" className="text-xl font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Our Mission </a>
              
              <a href="#" title="" className="text-xl font-semibold text-white transition-all duration-200 hover:text-opacity-80"> Pricing </a>
              <a href="#" title="" className="inline-flex items-center justify-center px-5 py-2.5 text-xl font-semibold transition-all duration-200 rounded-md bg-forest text-white hover:bg-dirt focus:bg-dirt" role="button"> 501-C Form </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
