import React from 'react'

const Stats = () => {
  return (
    <div className='relative z-10 bg-lightbrown pt-20'>
      <section className="py-10 sm:py-16 lg:py-16">
            <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-dirt sm:text-4xl lg:text-5xl">Appalachia Needs Your Help Now</h2>
                    <p className="mt-3 text-xl leading-relaxed text-dirt md:mt-4">Your contribution directly addresses these critical issues, offering immediate relief and long-term support to Appalachian communities in need.</p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-18 sm:gap-x-8 md:grid-cols-3">
                    <div className='bg-forest p-4 rounded-md hover:ring-forest hover:ring-4 transition-all duration-500'>
                        <h3 className="font-bold text-[5rem] lg:text-[7rem]">
                            <span className="text-white"> 3K </span>
                        </h3>
                        <p className=" text-xl font-medium text-white">Homes Destroyed</p>
                        <p className="text-base mt-0.5 text-white">Because of recent natural disaster</p>
                    </div>

                    <div className='bg-forest p-4 rounded-md hover:ring-forest hover:ring-4 transition-all duration-500'>
                        <h3 className="font-bold text-[5rem] lg:text-[7rem]">
                            <span className="text-white"> 900+ </span>
                        </h3>
                        <p className=" text-xl font-medium text-white">Families Displaced</p>
                        <p className="text-base mt-0.5 text-white">Because of recent natural disaster</p>
                    </div>

                    <div className='bg-forest p-4 rounded-md hover:ring-forest hover:ring-4 transition-all duration-500'>
                        <h3 className="font-bold text-[5rem] lg:text-[7rem]">
                            <span className="text-white"> 423+ </span>
                        </h3>
                        <p className=" text-xl font-medium text-white">Communties Affected</p>
                        <p className="text-base mt-0.5 text-white">Because of recent natural disaster</p>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Stats
