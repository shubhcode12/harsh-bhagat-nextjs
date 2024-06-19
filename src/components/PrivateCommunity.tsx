import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Image from "next/image";

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
          Open Account with given link 👉
          <a href="#">
            <Image
              className="p-2"
              src="/samco.png"
              alt="Media Logo"
              width={100}
              height={50}
            />
          </a>
          <a href="#">
            <Image
              className="p-2"
              src="/angelone.webp"
              alt="Media Logo"
              width={100}
              height={50}
            />
          </a>
        </li>
        <li className="mb-4 flex items-center">
          <span className="mr-2">
            <IoIosArrowDroprightCircle className="w-7 h-7" />
          </span>
          Login your Account after Successful opening after 24 hours
        </li>
        <li className="mb-4 flex items-center">
          <span className="mr-2">
            <IoIosArrowDroprightCircle className="w-7 h-7" />
          </span>
          Login krliya sit relax Link 3 days mein ajayega on WhatsApp from this
          number 8700153496
        </li>
        <li className="mb-4 flex items-center">
          <span className="mr-2">
            <IoIosArrowDroprightCircle className="w-7 h-7" />
          </span>
          Welcome to Private Community 😎🚀
        </li>
      </ul>
    </section>
  );
}

export default PrivateCommunity;
