import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

function PrivateCommunity() {
  return (
    <section
      id="privateCommunity"
      className="bg-[#0ce290] py-16 text-white text-center">
      {/* <h3 className="text-6xl text-black font-normal">
        Join my private community
      </h3> */}
      <h2 className="text-3xl text-black font-bold tracking-tighter sm:text-4xl md:text-5xl">
      Join my private community
      </h2>

      
      {/* <ul className="mt-8 px-4 max-w-4xl text-lg text-black mx-auto text-left"> */}


      <ul className="mt-8 px-4 max-w-2xl text-lg text-black mx-auto text-left">
        <li className="mb-4 flex items-center">
          <span className="mr-2">
            <IoIosArrowDroprightCircle className="w-7 h-7" />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo
          convallis tortor.
        </li>
        <li className="mb-4 flex items-center">
          <span className="mr-2">
            <IoIosArrowDroprightCircle className="w-7 h-7" />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo
          convallis tortor.
        </li>
        <li className="mb-4 flex items-center">
          <span className="mr-2">
            <IoIosArrowDroprightCircle className="w-7 h-7" />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo
          convallis tortor.
        </li>
        <li className="mb-4 flex items-center">
          <span className="mr-2">
            <IoIosArrowDroprightCircle className="w-7 h-7" />
          </span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo
          convallis tortor.
        </li>
      </ul>
    </section>
  );
}

export default PrivateCommunity;
