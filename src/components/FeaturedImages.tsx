import React, { useState } from "react";
import { InfiniteMovingCards } from "./Carousel";

function FeaturedImages() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Featured Images
        </h2>
      </div>

      <div className="flex justify-around p-0">
        <InfiniteMovingCards
          items={["f1.jpg", "f3.jpg", "f4.jpg"]}
          direction="right"
          speed="slow"
          className="mt-10"
        />
      </div>
    </section>
  );
}

export default FeaturedImages;
