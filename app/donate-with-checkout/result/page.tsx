import React from 'react';
import type { Stripe } from "stripe";
import PrintObject from "@/components/PrintObject";
import { stripe } from "@/lib/stripe";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { session_id: string };
}): Promise<JSX.Element> {
  if (!searchParams.session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.retrieve(searchParams.session_id, {
      expand: ["line_items", "payment_intent"],
    });

  const paymentIntent = checkoutSession.payment_intent as Stripe.PaymentIntent;

  const isSuccessful = paymentIntent.status === 'succeeded';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {isSuccessful ? (
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 p-8 text-center">
          Thank you for your donation!
        </h1>
        
      ) : (
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 p-8 text-center">
          Oh No! It looks like something went wrong.
        </h1>
      )}

      <div className="">
        <a href='/' className='px-8 py-3 bg-forest rounded-md text-white text-xl'>Return Home</a>
        
      </div>
    </div>
  );
}