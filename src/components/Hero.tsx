import React from "react";
import { motion } from "framer-motion";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "@/ui/TextGenEffect";

function Hero() {
  const words =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo convallis tortor, et consequat neque malesuada quis. Proin nec libero scelerisque, efficitur arcu quis, porta massa. Donecluctus nibh quis imperdiet maximus.";

  return (
    <section className="container mx-auto px-4 py-16 text-center fade-in mt-10">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#0ce290"
      />
      <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h2 className="text-6xl text-black font-bold text-center">
            Hi, I'm <span className="text-[#0ce290]">Harsh</span>
          </h2>

          <div id="divider" className="w-60 h-1 bg-[#0ce290] mx-auto my-8" />

          <TextGenerateEffect
            words={words}            
          />

          {/* <p className="mt-4 text-lg text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            commodo convallis tortor, et consequat neque malesuada quis. Proin
            nec libero scelerisque, efficitur arcu quis, porta massa. Donec
            luctus nibh quis imperdiet maximus.
          </p> */}
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
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