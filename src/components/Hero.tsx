import React from "react";
import { Spotlight } from "./Spotlight";
import { TextGenerateEffect } from "@/ui/TextGenEffect";

function Hero() {
  const words =
    "Introducing Harsh Bhagat, a seasoned full-time trader and dynamic speaker featured on Josh Talks.";

  return (
    <div>
      <div className="absolute w-full h-full overflow-hidden">
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
      <section className="container mx-auto px-4 py-16 text-center mt-10 overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-black font-bold">
              Hi, I'm <span className="text-[#0ce290]">Harsh</span>
            </h2>

            <div
              id="divider"
              className="w-60 h-1 bg-[#0ce290] mx-auto my-8 lg:mx-auto"
            />

            <TextGenerateEffect words={words} />
          </div>
          <div className="flex flex-col items-center">
            <img
              src="man.jpeg"
              alt="Harsh Bhagat"
              className="w-64 md:w-80 lg:w-full h-auto object-cover"
            />
            <button
              type="submit"
              className="bg-[#0ce290] text-white px-4 py-2 rounded-lg mt-6">
              <a href="#privateCommunity">Join Private Community</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
