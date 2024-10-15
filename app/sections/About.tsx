import React from 'react'
import FadeImageCarousel from '../components/FadeImgCarousel'  // Adjust the import path as needed
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className='relative z-10 bg-lightbrown pb-16'>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid items-center lg:grid-cols-2 lg:gap-x-20 gap-y-10">
            <div className="relative pl-8 pr-8 lg:pl-0 xl:pr-0 lg:order-2">
              <div className="relative max-w-xl mx-auto lg:ml-auto">
                <div className="w-full h-[500px] overflow-hidden"> {/* Adjust height as needed */}
                  <FadeImageCarousel interval={4000} />
                </div>

                <div className="hidden lg:block absolute -bottom-16 -left-16">
                  <div className="bg-forest rounded-md">
                    <div className="py-4 pl-4 pr-10 sm:py-6 sm:pl-8 sm:pr-16">
                      <span className="block mt-3 text-xl font-bold text-white sm:mt-6 sm:text-4xl lg:text-5xl"> Thousands </span>
                      <span className="block mt-2 text-sm font-medium leading-snug text-white sm:text-base"> Of appalachian lives impacted </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-1 lg:max-w-xl">
              <h2 className="text-3xl font-bold leading-tight text-dirt sm:text-4xl lg:text-7xl">Our Mission</h2>
              <p className="mt-4 text-base leading-relaxed text-dirt mb-6 lg:mb-24">
               At the heart of our organization is the dedication to restoring and preserving the rich history of our Appalachian ancestors while ensuring the integrity of our mountain communities. Our co-founder, a native of Western North Carolina, has a deep-rooted passion for bringing aid and relief to the region, especially in the aftermath of the devastation caused by Hurricane Helen. We are committed to providing long-term assistance to families who have lost everything, many of whom are now displaced and homeless. <br></br>

               <br></br> For the families of these mountain communities, particularly those with children, the road to recovery has been an uphill battle. Countless individuals who had no insurance or were denied claims have been left with little hope. Even those who sought help from FEMA have faced barriers. That's why we are here—to fill that gap and offer the support they desperately need. We are devoted to helping these communities rebuild, providing homes, resources, and hope for a brighter future.
              </p>

                <div className="flex justify-center lg:justify-start">
                    <Link href="#donate">
                        <span 
                        className="inline-block   sm:w-auto px-16 py-4 text-lg font-semibold text-white transition-all duration-200 bg-forest rounded-md hover:bg-dirt focus:bg-dirt cursor-pointer"
                        >
                        Give Now
                        </span>
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About