import React from 'react'
import FadeImageCarousel from '../components/FadeImgCarousel'  // Adjust the import path as needed

const About: React.FC = () => {
  const carouselImages = [
    "https://cdn.pixabay.com/photo/2012/10/26/01/19/hurricane-63005_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/04/05/09/27/tornado-5005297_1280.jpg",
    "https://cdn.pixabay.com/photo/2014/12/14/08/48/forward-567664_1280.jpg"
  ];

  return (
    <div className='relative z-10 bg-lightbrown pb-16'>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center lg:grid-cols-2 lg:gap-x-20 gap-y-10">
            <div className="relative pl-8 pr-8 lg:pl-0 xl:pr-0 lg:order-2">
              <div className="relative max-w-xl mx-auto lg:ml-auto">
                <div className="w-full h-[500px] overflow-hidden"> {/* Adjust height as needed */}
                  <FadeImageCarousel images={carouselImages} interval={4000} />
                </div>

                <div className="hidden lg:block absolute -bottom-16 -left-16">
                  <div className="bg-forest rounded-md">
                    <div className="py-4 pl-4 pr-10 sm:py-6 sm:pl-8 sm:pr-16">
                      <span className="block mt-3 text-xl font-bold text-white sm:mt-6 sm:text-4xl lg:text-5xl"> 2,984 </span>
                      <span className="block mt-2 text-sm font-medium leading-snug text-white sm:text-base"> Customer chat<br />served on July </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-1 lg:max-w-md">
              <h2 className="text-3xl font-bold leading-tight text-dirt sm:text-4xl lg:text-7xl">Our Mission</h2>
              <p className="mt-4 text-base leading-relaxed text-dirt mb-6 lg:mb-24">
                Your contribution directly addresses these critical issues, providing immediate relief and long-term support to Appalachian communities in need. Your contribution directly addresses these critical issues, providing immediate relief and long-term support to Appalachian communities in need. Your contribution 
              </p>

              <button 
                type="button" 
                className="w-full sm:w-auto px-10 py-4 text-lg font-semibold text-white transition-all duration-200 bg-forest rounded-md hover:bg-dirt focus:bg-dirt"
              >
                Give Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About