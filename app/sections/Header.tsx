"use client";
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../public/adclogo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (event: { keyCode: number; }) => {
      if (event.keyCode === 27) setIsModalOpen(false)
    }
    window.addEventListener('keydown', handleEsc)
    return () => {
      window.removeEventListener('keydown', handleEsc)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div>
      <header className="fixed bg-dirt inset-x-0 top-0 z-50 w-full bg-gradient">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#hero" title="" className="flex" onClick={closeMenu}>
                <Image 
                  className="w-auto h-16 mix-blend-screen" 
                  src={logo} 
                  alt="ADC Logo" 
                  width={64}
                  height={64}
                />
              </a>
            </div>

            <button 
              type="button" 
              className="inline-flex p-2 text-white transition-all duration-200 rounded-md lg:hidden focus:bg-white/10 hover:bg-white/10"
              onClick={toggleMenu}
            >
              <svg 
                className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
              <svg 
                className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`} 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            <div 
              className={`
                lg:flex lg:items-center lg:justify-center lg:space-x-10 
                ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} 
                absolute top-16 left-0 w-full bg-dirt lg:static lg:w-auto lg:bg-transparent lg:max-h-screen lg:opacity-100
                transition-all duration-300 ease-in-out overflow-hidden
              `}
            >
              <div className="flex flex-col items-center py-4 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-10">
                <a href="#roadmap" title="" className="block text-lg font-semibold text-white transition-all duration-200 hover:text-opacity-80 lg:inline-block" onClick={closeMenu}> Our Roadmap </a>
                <a href="#about" title="" className="block text-lg font-semibold text-white transition-all duration-200 hover:text-opacity-80 lg:inline-block" onClick={closeMenu}> Our Mission </a>
                <button 
                  className="inline-flex items-center justify-center px-5 py-2 text-lg font-semibold transition-all duration-200 rounded-md bg-forest text-white hover:bg-dirt focus:bg-dirt"
                  onClick={() => {
                    setIsModalOpen(true)
                    closeMenu()
                  }}
                >
                  501-C Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
          <div className="relative bg-forest rounded-lg max-w-md w-full m-4 p-6">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-white/60"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal content */}
            <div className="mt-3">
              <h3 className="text-2xl font-bold text-center text-white mb-4">
                501-C Form Status
              </h3>
              <div className="space-y-4">
                <p className="text-center text-white">
                  Our 501-C form is currently pending approval.
                </p>
                <p className="text-center text-sm text-white">
                  Please check back later for updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header