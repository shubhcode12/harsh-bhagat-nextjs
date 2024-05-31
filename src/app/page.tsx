"use client";
import React, { useRef } from "react";
import AboutHarsh from "@/components/AboutHarsh";
import FeaturedImages from "@/components/FeaturedImages";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MediaAwards from "@/components/MediaAwards";
import PrivateCommunity from "@/components/PrivateCommunity";
import Image from "next/image";
import Demo from "@/components/Demo";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <MediaAwards />
      <AboutHarsh />
      <FeaturedImages />
      <PrivateCommunity />
      <Contact />
      <Footer />
    </div>
  );
}
