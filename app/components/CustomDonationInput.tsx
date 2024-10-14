import React from 'react';
import { formatAmountForDisplay } from "@/utils/stripe-helpers";

export default function CustomDonationInput({
  name,
  min,
  max,
  currency,
  step,
  onChange,
  value,
  className,
}: {
  name: string;
  min: number;
  max: number;
  currency: string;
  step: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  className?: string;
}): JSX.Element {
  return (
    <label className="block w-full">
      
      <div className="relative w-full h-16 flex items-center">
        <input
          type="range"
          name={name}
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          value={value}
          className={`absolute top-1/2 -translate-y-1/2 w-full ${className}`}
          style={{
            WebkitAppearance: 'none',
            appearance: 'none',
            outline: 'none',
            height: '16px',
            background: '#3F583B', // Forest color
          }}
        />
      </div>
      <style jsx>{`
        input[type='range'] {
          width: 100%;
        }

        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 32px;
          height: 32px;
          background: #241F1C; /* Dirt color */
          cursor: pointer;
          border-radius: 0; /* Square shape */
          margin-top: -8px; /* Center vertically */
        }

        input[type='range']::-moz-range-thumb {
          width: 32px;
          height: 32px;
          background: #241F1C;
          cursor: pointer;
          border-radius: 0;
          border: none;
        }

        input[type='range']::-ms-thumb {
          width: 32px;
          height: 32px;
          background: #241F1C;
          cursor: pointer;
          border-radius: 0;
        }

        input[type='range']::-webkit-slider-runnable-track {
          width: 100%;
          height: 16px;
          cursor: pointer;
          background: #3F583B;
        }

        input[type='range']::-moz-range-track {
          width: 100%;
          height: 16px;
          cursor: pointer;
          background: #3F583B;
        }

        input[type='range']::-ms-track {
          width: 100%;
          height: 16px;
          cursor: pointer;
          background: transparent;
          border-color: transparent;
          color: transparent;
        }

        input[type='range']::-ms-fill-lower,
        input[type='range']::-ms-fill-upper {
          background: #3F583B;
        }
      `}</style>
    </label>
  );
}