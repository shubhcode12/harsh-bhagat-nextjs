import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { RiYoutubeFill } from "react-icons/ri";

function AboutHarsh() {
  return (
    <section id="about" className="container mx-auto px-4 py-32 text-center">
      <h3 className="text-6xl font-normal">
        Who is <span className="text-green-500">Harsh Bhagat?</span>
      </h3>
      <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla commodo
        convallis tortor, et consequat neque malesuada quis. Proin nec libero
        scelerisque, efficitur arcu quis, porta massa. Donec luctus nibh quis
        imperdiet maximus. Donec eleifend, justo varius.
      </p>

      <div className="mt-8 flex justify-center space-x-4 py-8">
        <h4 className="text-2xl font-normal">Connect with me :</h4>
        <a href="#" className="text-green-500">
          <IoLogoInstagram className="w-8 h-8" />
        </a>
        <a href="#" className="text-green-500">
          <RiYoutubeFill className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}

export default AboutHarsh;
