import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { RiYoutubeFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-[#1c1c1c] text-white ">
      <div className="px-6 pt-32 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24  lg:px-16">
        <div className="mx-auto px-4 text-center">
          <div className="flex flex-col lg:flex-row items-center lg:justify-between align-center pb-20">
            <div className="flex justify-center space-x-4 py-8">
              <img
                className="w-32 object-cover invert"
                src="harsh-bhagat-logo.png"
                alt="harsh bahagat"
              />
            </div>

            <div className="sm:mt-4 md:mt-4 lg:mt-0 xl:mt-0 mt-4">
              <h4 className="text-white font-bold">Find me on</h4>

              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.instagram.com/meharshbhagat"
                  className="text-green-500">
                  <FaSquareInstagram className="w-8 h-8" />
                </a>
                <a
                  href="https://www.youtube.com/@meharshbhagat"
                  className="text-green-500">
                  <RiYoutubeFill className="w-8 h-8" />
                </a>
                <a
                  href="https://telegram.openinapp.co/iueeh"
                  className="text-green-500">
                  <FaTelegram className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 p-5 text-xl">
            <p>
              By <span className="text-[#0ce290]">Minasa Pvt. Ltd.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
