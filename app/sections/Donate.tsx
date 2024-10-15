import React from 'react';
import CheckoutForm from "@/components/CheckoutForm";

const Donate: React.FC = () => {
  return (
    <section className=" pt-6 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-dirt sm:text-6xl">
            Your Support Saves Lives
          </h2>
          <p className="mt-4 text-xl text-dirt">
            Every donation provides a lifeline to families who have been uprooted and devastated by the hurricane. Your generosity fuels our rapid response efforts, delivers essential supplies, and helps us rebuild entire communities. With your help, we can restore hope and create a sustainable future for Appalachian families.
          </p>
        </div>
        <div className="">
          <CheckoutForm uiMode="hosted" />
        </div>
      </div>
    </section>
  );
};

export default Donate;