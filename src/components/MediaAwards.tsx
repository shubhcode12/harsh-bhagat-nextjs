import React from "react";
import Image from "next/image";
import { InfiniteMovingCards } from "./Carousel";
import { MediaCarousel } from "./MediaCarousel";

function MediaAwards() {
  const awardsArray = [
    "joshtalks.png",
    "joshtalks.png",
    "joshtalks.png",
    "joshtalks.png",
  ];
  return (
    <section id="awards" className="py-16">
      <div className="bg-gray-100 mx-auto px-4 py-8 text-center">
        {/* <h3 className="text-6xl font-normal">Media & Awards</h3> */}
        <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Media & Awards
        </h2>
      </div>
      <div className="flex justify-around p-0 bg-white">
        {/* {awardsArray.map((logo, index) => (
          <div key={index}>
            <Image src={`/${logo}`} alt="Media Logo" width={100} height={50} />
          </div>
        ))} */}

        <MediaCarousel
          items={awardsArray}
          direction="right"
          speed="normal"
          className=""
        />
      </div>
    </section>
  );
}
export default MediaAwards;
