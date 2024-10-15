import type { Metadata } from "next";
import Link from "next/link";
import { Aleo } from 'next/font/google'
import "../styles.css";

const aleo = Aleo({
  subsets: ['latin'],
  variable: '--font-aleo',
  display: 'swap',
  weight: ['300', '400', '700'],
})

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Appalachian Disaster Coalition",
    template: "%s | Appalachian Disaster Coalition",
  },
  description: "Helping Appalachia rebuild their communities after disasters",
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