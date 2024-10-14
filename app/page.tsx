import type { Metadata } from "next";
import Hero from "./sections/Hero";
import Donate from "./sections/Donate";
import Header from "./sections/Header";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Roadmap from "./sections/Roadmap";
import Footer from "./sections/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Next.js + TypeScript Example",
};

export default function IndexPage(): JSX.Element {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Roadmap />
      <Donate />
      <Footer />
    </main>
  );
}