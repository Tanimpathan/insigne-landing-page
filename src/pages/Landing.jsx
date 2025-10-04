import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Download from "../components/Download";
import Testimonials from "../components/Testimonials";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";
import DataStorage from "../components/DataStorage";
import TryForFree from "../components/TryForFree";

export default function Landing() {
  return (
    <>
      <Header />
      <main className="min-h-screen text-white">
        <Hero />
        <section className="px-6">
          <DataStorage />
        </section>
        <section className="px-6 mt-[80px]">
          <Features />
        </section>
        <section className="px-6 mt-[80px] mb-5">
          <Download />
        </section>
        <Subscribe />
        <div className="h-[1px] bg-[#808080]"/>
        <div className="h-[1px] bg-[#ffc0cb7d] mt-[1px]"/>
        <TryForFree />
      </main>
      <Footer />
    </>
  );
}
