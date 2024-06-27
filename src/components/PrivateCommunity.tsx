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
          Open account with given link. 👉
          <a href="https://sam-co.in/RWFSMXk2b2U1b0NndXpsRnBJT05TUT09">
            <Image
              className="p-2"
              src="/samco.png"
              alt="Media Logo"
              width={100}
              height={50}
            />
          </a>
          <a href="https://tinyurl.com/28wuyeob">
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
          ⁠Your account will be activated within 24 hours. Please log in after
          that time.
        </li>
        <li className="mb-4">
          <div className="flex items-center">
            <span className="mr-2">
              <IoIosArrowDroprightCircle className="w-7 h-7" />
            </span>
            <p>
              ⁠Now sit back and relax. You will receive the private community
              link in your WhatsApp inbox from this contact +91 87001 53496
            </p>
          </div>
        </li>
        <li className="mb-4 flex items-center">
          <span className="mr-2">
            <IoIosArrowDroprightCircle className="w-7 h-7" />
          </span>
          Welcome to our Private community. 🚀
        </li>
      </ul>

      <button
        type="submit"
        className="bg-white text-black px-4 py-2 rounded-lg mt-6">
        <a href="/support">Need Help?</a>
      </button>
    </section>
  );
}

export default PrivateCommunity;
