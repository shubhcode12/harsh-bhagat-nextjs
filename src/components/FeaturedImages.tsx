import React, { useState } from "react";
import { InfiniteMovingCards } from "./Carousel";

function FeaturedImages() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Featured Images
        </h2>

        <InfiniteMovingCards
          items={["place.svg"]}
          direction="right"
          speed="fast"
          className="mt-10"
        />

        {/* <div className="flex justify-center items-center space-x-8 mt-8">
          <div className="bg-gray-300 w-64 h-64"></div>
          <div className="bg-gray-300 w-64 h-64"></div>
          <div className="bg-gray-300 w-64 h-64"></div>
        </div> */}
      </div>
    </section>
  );
}

export default FeaturedImages;
