import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "@/ui/TextGenEffect";

function Hero() {
  const words =
    "Introducing Harsh Bhagat, a seasoned full-time trader and dynamic speaker featured on Josh Talks.";

  return (
    <section className="container mx-auto px-4 py-16 text-center fade-in mt-10 overflow-hidden lg:overflow-visible sm:overflow-hidden">
      <div className="relative w-full h-full">
        <Spotlight
          className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="#0ce290"
        />
        <Spotlight
          className="absolute h-[80vh] w-[50vw] top-10 left-full"
          fill="#0ce290"
        />
        <Spotlight
          className="absolute left-80 top-28 h-[80vh] w-[50vw]"
          fill="#0ce290"
        />
      </div>

      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-6xl text-black font-bold text-center lg:text-center">
            Hi, I'm <span className="text-[#0ce290]">Harsh</span>
          </h2>

          <div
            id="divider"
            className="w-60 h-1 bg-[#0ce290] mx-auto my-8 lg:mx-auto"
          />

          <TextGenerateEffect words={words} />
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src="man.jpeg"
            alt="Harsh Bhagat"
            className="w-100 h-100 object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
