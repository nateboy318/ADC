import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="z-50 relative max-w-full overflow-hidden">
      <div className="grid grid-flow-row-dense lg:grid-cols-5 lg:grid-rows-3">
        <div className="lg:order-1 lg:col-span-3 lg:row-span-2">
          <img
            className="object-cover w-full h-full"
            src="https://d3i6fh83elv35t.cloudfront.net/static/2024/10/2024-09-30T224218Z_1699896451_RC29BAAY2VNU_RTRMADP_3_STORM-HELENE-1024x683.jpg"
            alt=""
          />
        </div>

        <div className="relative flex items-center justify-start overflow-hidden bg-dirt lg:justify-end lg:col-span-3 lg:order-3">
          <div className="absolute top-0 left-0 w-40 h-40 lg:w-72 sm:w-64 sm:h-64 -ml-24 -mt-28 lg:h-72 lg:-ml-40 lg:-mt-24 rounded-full border-[20px] border-forest"></div>
          <div className="absolute bottom-0 right-0 -mb-32 -mr-6 sm:w-64 sm:h-64 lg:left-0 w-40 h-40 lg:w-96 lg:h-96 lg:-mb-72 lg:ml-20 rounded-full border-[20px] border-forest"></div>

          <div className="p-12 sm:py-24 lg:px-24 2xl:px-32">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Contact Us
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-start bg-dirt lg:col-span-2 lg:row-span-3 lg:order-2">
          <div className="p-12 sm:py-16 lg:px-24 2xl:px-32">
            <ul className="space-y-12">
              <li>
                <h3 className="text-lg font-semibold text-white">
                  Operational Hours
                </h3>

                <p className="mt-3 text-lg font-normal text-white">
                  Monday-Friday <br />
                  8:00 am to 5:00 pm
                </p>
              </li>

              <li>
                <h3 className="text-lg font-semibold text-white">
                  Get In Touch
                </h3>
                <p className="mt-3 text-lg font-normal text-white">
                  843-957-1600 <br />
                  <span className="break-all">
                    Bradley@Appalachiandisaastercoalition.com
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
