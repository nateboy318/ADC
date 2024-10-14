import type { Metadata } from "next";
import Header from "app/sections/Header";

export const metadata: Metadata = {
  title: "Checkout Session Result",
};

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="page-container">
      <Header />
      {children}
    </div>
  );
}
