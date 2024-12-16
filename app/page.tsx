import type { Metadata } from "next";
import Hero from "./sections/Hero";
import Donate from "./sections/Donate";
import Header from "./sections/Header";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Roadmap from "./sections/Roadmap";
import Footer from "./sections/Footer";
import Link from "next/link";
import Video from "./sections/Video";
import Banner from "./sections/Banner";
import Contact from "./sections/Contact";

export const metadata: Metadata = {
  title: "Home | Appalachian Disaster Coalition",
};

export default function IndexPage(): JSX.Element {
  return (
    <main>
      <Banner />
      <div id="header">
        <Header />
      </div>
      <div id="hero">
        <Hero />
      </div>
      <div id="stats">
        <Stats />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="roadmap">
        <Roadmap />
      </div>
      <div id="video">
        <Video />
      </div>
      <div id="donate">
        <Donate />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </main>
  );
}
