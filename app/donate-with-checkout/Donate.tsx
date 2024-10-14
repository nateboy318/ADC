import React from 'react';
import CheckoutForm from "@/components/CheckoutForm";

const Donate: React.FC = () => {
  return (
    <section className=" py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-dirt sm:text-6xl">
            Your Support Saves Lives
          </h2>
          <p className="mt-4 text-xl text-dirt">
            Every donation, no matter the size, provides immediate relief and hope to Appalachian families facing disaster. Your generosity fuels our rapid response efforts, delivers essential supplies, and helps rebuild shattered communities.
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