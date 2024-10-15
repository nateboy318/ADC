"use client";

import React from 'react';
import Link from 'next/link';
import img1 from '../../public/4.png'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <div className="relative z-40">
      

      <section className="bg-lightbrown overflow-hidden ">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px] h-screen">
          <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="absolute bottom-0 right-0 hidden lg:block z-0">
              <svg className='object-contain w-[100vw] h-auto max-w-full lg:w-[50vw] xl:w-[40vw]' width="841" height="680" viewBox="0 0 841 680" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M105.461 719.606L262.278 564.266L274.305 579.073L288.223 589.134L318.345 605.331V625.916L357.388 652.674L407.031 674.973L431.014 711.221L415.383 633.73L375.233 600.835L358.495 571.865L343.435 541.754L336.19 528.518L431.729 422.06L436.297 465.05L471.451 503.51V534.05L501.573 544.931L523.343 593.024L549.681 623.564L572.7 671.229L580.231 626.917C580.231 626.917 563.493 603.906 563.493 602.658C563.493 601.409 559.317 583.427 559.317 583.427L553.643 571.297L602.965 586.71L608.282 616.464L622.487 640.297L627.091 665.378L658.461 673.726L693.187 701.34L735.442 719.607H773.63L621.774 564.55L562.673 546.07L636.548 463.763L641.117 506.753L676.271 545.213V575.753L706.392 586.635L728.162 634.727L754.501 665.267L777.52 712.932L785.05 668.621C785.05 668.621 768.312 645.609 768.312 644.361C768.312 643.112 764.137 625.131 764.137 625.131L758.462 613.001L807.784 628.413L813.102 658.168L827.306 682L831.91 707.117L863.281 715.465L868.562 719.675H937.621L826.522 606.221L758.606 584.958L641.551 418.064L543.015 527.847L436.805 376.398L315.356 511.681L247.118 541.649L67.4239 719.603L105.461 719.606Z" fill="#241F1C"/>
              </svg>
            </div>

            <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              <h1 className="text-4xl font-bold text-dirt sm:text-6xl xl:text-8xl">
                Rebuilding Hope.<br />
                Uniting People.
              </h1>
              <p className="mt-8 text-xl text-dirt">Providing rapid response and long-term recovery for our mountain communities, ensuring resilience and sustainability in the face of challenges. </p>
              
              <div className="max-w-xl mx-auto mt-8 lg:mx-0 lg:mt-12 z-50">
      <a 
                href="#donate"
                
                className="inline-block w-full sm:w-auto px-16 py-4 text-lg font-semibold text-white transition-all duration-200 bg-forest rounded-md hover:bg-dirt focus:bg-dirt cursor-pointer"
              >
                Give Now
              </a>
    </div>
              
            </div>

            
          </div>

          <div className="relative w-[100vw] overflow-hidden lg:order-1 h-full lg:h-auto lg:w-5/12">
            <div className="absolute inset-0">
                          
                            <Image 
                className="object-cover w-full h-full"
                src={img1}
                alt="Hero Image"
                layout="fill"
                priority
                placeholder="blur"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

            <div className="absolute bottom-0 left-0">
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-12 h-12 fill-lightbrown mr-2 mb-2">
                        <path d="M84.6,9.5h-4.2l-1.2,4.4c-1,4-4.9,7-8.9,7c-2.2,0-4.3-0.9-5.5-2.6c-1.3-1.7-1.7-4-1.1-6.2l0.7-2.6H50.9l-1.2,4.4     c-1.1,4-4.9,7-9,7c-2.2,0-4.2-0.9-5.5-2.6c-1.3-1.7-1.7-4-1.1-6.2l0.7-2.6h-4.4c-6.7,0-13.4,5.2-15.1,11.9L2.9,67.1     c-1,3.6-0.4,7.2,1.7,9.8c2,2.6,5.1,4.1,8.6,4.1h6.1v2.7c0,7.1,5.8,12.9,12.9,12.9h52.4c7.1,0,12.9-5.8,12.9-12.9V22.4     C97.5,15.3,91.7,9.5,84.6,9.5z M13.3,73.2c-0.8,0-1.8-0.2-2.4-1c-0.6-0.7-0.7-1.8-0.3-3l10.2-38.2h62.2l-9.7,36.2     c-0.9,3.3-4.4,6.1-7.6,6.1H13.3z M89.7,83.7c0,2.8-2.3,5.1-5.1,5.1H32.3c-2.8,0-5.1-2.3-5.1-5.1V81h38.5     c6.7,0,13.4-5.2,15.1-11.9L89.7,36V83.7z"/>
                        <path d="M40.7,17.3c2.4,0,4.8-1.9,5.4-4.3l1.4-5.3c0.6-2.4-0.8-4.3-3.1-4.3c-2.4,0-4.8,1.9-5.4,4.3L37.6,13     C37,15.3,38.4,17.3,40.7,17.3z"/>
                        <path d="M70.3,17.3c2.4,0,4.8-1.9,5.4-4.3l1.4-5.3c0.6-2.4-0.8-4.3-3.1-4.3c-2.4,0-4.8,1.9-5.4,4.3L67.1,13     C66.5,15.3,67.9,17.3,70.3,17.3z"/>
                        <path d="M50.2,54.5h-9.3c-0.6,0-1.3,0.5-1.5,1.1l-1.8,6.8c-0.2,0.6,0.2,1.1,0.8,1.1h9.3c0.6,0,1.3-0.5,1.5-1.1l1.8-6.8     C51.2,55,50.8,54.5,50.2,54.5z"/>
                        <path d="M33.8,54.5h-9.3c-0.6,0-1.3,0.5-1.5,1.1l-1.8,6.8c-0.2,0.6,0.2,1.1,0.8,1.1h9.3c0.6,0,1.3-0.5,1.5-1.1l1.8-6.8     C34.8,55,34.5,54.5,33.8,54.5z"/>
                        <path d="M66.6,54.5h-9.3c-0.6,0-1.3,0.5-1.5,1.1L54,62.4c-0.2,0.6,0.2,1.1,0.8,1.1h9.3c0.6,0,1.3-0.5,1.5-1.1l1.8-6.8     C67.6,55,67.2,54.5,66.6,54.5z"/>
                        <path d="M54,40.2h-9.3c-0.6,0-1.3,0.5-1.5,1.1l-1.8,6.8c-0.2,0.6,0.2,1.1,0.8,1.1h9.3c0.6,0,1.3-0.5,1.5-1.1l1.8-6.8     C55,40.7,54.7,40.2,54,40.2z"/>
                        <path d="M37.7,40.2h-9.3c-0.6,0-1.3,0.5-1.5,1.1l-1.8,6.8c-0.2,0.6,0.2,1.1,0.8,1.1h9.3c0.6,0,1.3-0.5,1.5-1.1l1.8-6.8     C38.7,40.7,38.3,40.2,37.7,40.2z"/>
                        <path d="M58.7,49.3H68c0.6,0,1.3-0.5,1.5-1.1l1.8-6.8c0.2-0.6-0.2-1.1-0.8-1.1h-9.3c-0.6,0-1.3,0.5-1.5,1.1l-1.8,6.8     C57.7,48.7,58,49.3,58.7,49.3z"/>
                    </svg>
                  <h2 className="font-bold text-white text-5xl sm:text-7xl ml-2.5">EST. 2024</h2>
                </div>
                <p className="max-w-xs mt-1.5 text-xl text-white">Helping Restore Appalachia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;