"use client";

import React, { useState } from "react";
import type Stripe from "stripe";
import CustomDonationInput from "@/components/CustomDonationInput";
import StripeTestCards from "@/components/StripeTestCards";
import { formatAmountForDisplay } from "@/utils/stripe-helpers";
import * as config from "@/config";
import { createCheckoutSession } from "@/actions/stripe";
import getStripe from "@/utils/get-stripejs";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";

interface CheckoutFormProps {
  uiMode: Stripe.Checkout.SessionCreateParams.UiMode;
}

export default function CheckoutForm(props: CheckoutFormProps): JSX.Element {
  const [loading] = useState<boolean>(false);
  const [input, setInput] = useState<{ customDonation: number }>({
    customDonation: config.MIN_AMOUNT, // This sets the default value to $10 (assuming MIN_AMOUNT is 10)
  });
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const handleInputChange = (
    value: number | string,
    inputType: 'slider' | 'text'
  ): void => {
    let newValue = typeof value === 'string' ? parseFloat(value) : value;
    newValue = Math.max(config.MIN_AMOUNT, Math.min(newValue, config.MAX_AMOUNT));
    if (inputType === 'slider') {
      newValue = Math.round(newValue / config.AMOUNT_STEP) * config.AMOUNT_STEP;
    }
    setInput({ customDonation: newValue });
  };

  const formAction = async (data: FormData): Promise<void> => {
    const uiMode = data.get("uiMode") as Stripe.Checkout.SessionCreateParams.UiMode;
    const { client_secret, url } = await createCheckoutSession(data);
    if (uiMode === "embedded") return setClientSecret(client_secret);
    window.location.assign(url as string);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center"></h2>
      <form action={formAction} className="space-y-4">
        <input type="hidden" name="uiMode" value={props.uiMode} />
        <div className="mb-4">
          <label htmlFor="customDonation" className="block text-sm font-medium text-dirt mb-4 text-center">
            Please Enter an amount between $10.00-$5,000.00
          </label>
          <div className="flex flex-col items-center space-y-4 w-full">
            <input
              type="number"
              name="customDonation"
              value={input.customDonation}
              onChange={(e) => handleInputChange(e.target.value, 'text')}
              className="w-full px-3 py-2 border-2 border-forest bg-transparent focus:outline-none"
              min={config.MIN_AMOUNT}
              max={config.MAX_AMOUNT}
              step={0.01}
              style={{ 
                appearance: 'textfield',
                WebkitAppearance: 'none',
                MozAppearance: 'textfield'
              }}
            />
            <CustomDonationInput
              className="w-full checkout-style"
              name="customDonationSlider"
              min={config.MIN_AMOUNT}
              max={config.MAX_AMOUNT}
              step={config.AMOUNT_STEP}
              currency={config.CURRENCY}
              onChange={(e) => handleInputChange(parseFloat(e.target.value), 'slider')}
              value={input.customDonation}
            />
          </div>
        </div>
        <StripeTestCards />
        <div className="flex justify-center">
        <button
              className="checkout-style-background  bg-forest text-white py-3.5 px-16 rounded-md hover:opacity-70 transition duration-200 mx-auto"
              type="submit"
              disabled={loading}
            >
              Donate {formatAmountForDisplay(input.customDonation, config.CURRENCY)}
          </button>
          </div>
      </form>
      {clientSecret ? (
        <div className="mt-6">
          <EmbeddedCheckoutProvider
            stripe={getStripe()}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </div>
      ) : null}
    </div>
  );
}





    
            
        