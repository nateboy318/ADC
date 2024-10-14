import type { Metadata } from "next";
import Link from "next/link";
import { Aleo } from 'next/font/google'
import "../styles.css";

const aleo = Aleo({
  subsets: ['latin'],
  variable: '--font-aleo',
  display: 'swap',
  weight: ['300', '400', '700'],  // Add the weights you need
})

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "TypeScript Next.js Stripe Example",
    template: "%s | Next.js + TypeScript Example",
  },
  twitter: {
    card: "summary_large_image",
    description:
      "Full-stack TypeScript example using Next.js, react-stripe-js, and stripe-node.",
    images: [
      {
        url: "https://nextjs-typescript-react-stripe-js.vercel.app/social_card.png",
      },
    ],
    site: "@StripeDev",
    title: "TypeScript Next.js Stripe Example",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${aleo.variable}`}>
      <body className={`bg-lightbrown text-custom-brown font-sans`}>
        <div className="min-h-screen flex flex-col">
          <main className="flex-grow">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}