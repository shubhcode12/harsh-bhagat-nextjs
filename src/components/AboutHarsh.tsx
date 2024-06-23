import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { RiYoutubeFill } from "react-icons/ri";

function AboutHarsh() {
  return (
    <section id="about" className="container mx-auto px-4 sm:py-8 lg:py-32 text-center">
      <h3 className="text-6xl text-black dark:text-black font-normal">
        Who is <span className="text-green-500">Harsh Bhagat?</span>
      </h3>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Introducing Harsh Bhagat, a seasoned full-time trader and dynamic
        speaker featured on Josh Talks. With over six years of hands-on
        experience in the stock market, Harsh has garnered a substantial
        following of over 200,000 subscribers across various social media
        platforms. His mission is clear: to empower and guide individuals
        towards becoming successful traders and investors. Through his expertise
        and engaging talks, Harsh endeavors to demystify the complexities of the
        financial markets and provide actionable insights for all. Join him on
        his journey towards financial empowerment and prosperity.
      </p>

      <div className="mt-8 flex justify-center space-x-4 py-8">
        <h4 className="text-2xl text-black dark:text-black font-normal">Connect with me :</h4>
        <a href="#" className="text-green-500">
          <IoLogoInstagram className="w-8 h-8" />
        </a>
        <a href="#" className="text-green-500">
          <RiYoutubeFill className="w-8 h-8" />
        </a>
        <a href="https://telegram.openinapp.co/iueeh" className="text-green-500">
          <FaTelegram className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}

export default AboutHarsh;
