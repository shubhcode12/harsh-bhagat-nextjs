"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Support() {
  const handleButtonClick = (url) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const startHour = 10;
    const endHour = 17;
    const endMinute = 30;

    if (
      (currentHour > startHour && currentHour < endHour) ||
      (currentHour === startHour && currentMinute >= 0) ||
      (currentHour === endHour && currentMinute <= endMinute)
    ) {
      window.open(url, "_blank");
    } else {
      toast(
        "Try between 10 AM to 5:30 PM </br> 10 baje se sham ko 5:30 baje tak support service available hai"
      );
      //alert("Try between 10 AM to 5:30 PM");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <div className="px-10 pt-32 pb-10">
        <section className="bg-gray-100 p-10 rounded-lg mb-10">
          <h2 className="text-2xl font-semibold text-green-500 mb-5">
            Account related issues
          </h2>
          <ul className="list-decimal text-black list-inside">
            <li>
              <span
                onClick={() => handleButtonClick("https://wa.me/919833322784")}
                className="text-blue-500 cursor-pointer underline">
                Click here
              </span>{" "}
              for Account opening issues
            </li>
            <li>
              <a
                onClick={() => handleButtonClick("https://wa.me/917738091457")}
                className="text-blue-500 cursor-pointer underline">
                Click here
              </a>{" "}
              For KYC (verification issues)
            </li>
            <li>
              <a
                onClick={() => handleButtonClick("https://wa.me/918655953255")}
                className="text-blue-500 cursor-pointer underline">
                Click here
              </a>{" "}
              to learn How to trade
            </li>
          </ul>
        </section>

        <section className="bg-gray-100 p-10 rounded-lg mb-10">
          <h2 className="text-2xl font-semibold text-green-500 mb-5">
            Private Community related issues
          </h2>
          <p>
            If you haven't received the private community link yet,{" "}
            <a href="#" className="text-blue-500">
              fill out this form
            </a>{" "}
            to get link in the next 72 hours.
          </p>
        </section>

        <section className="bg-gray-100 p-10 rounded-lg">
          <h2 className="text-2xl font-semibold text-green-500 mb-5">
            How to use SAMCO like a pro.
          </h2>
          <div className="flex flex-wrap gap-4 justify-left">
            <div className="card w-full md:w-1/2 lg:w-1/4">
              <iframe
                className="w-full h-54 md:h-80 lg:h-60"
                src="https://www.youtube.com/embed/5GnsFslWhyg?si=uKwylYMIeFSsP3f0"
                title="How to Buy and Sell Like A Pro"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
              <div class="px-2 py-4">
                <p class="text-black text-xl mb-2">
                  How to Buy and Sell Like A Pro
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4">
              <iframe
                className="w-full h-54 md:h-80 lg:h-60"
                src="https://www.youtube.com/embed/LnaaI8dKXYM?si=_bos2nyyvJePIG8T"
                title="How to add Stocks in Watchlist"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>

              <div class="px-2 py-4">
                <p class="text-black text-xl mb-2">
                  How to add Stocks in Watchlist
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4">
              <iframe
                className="w-full h-54 md:h-80 lg:h-60"
                src="https://www.youtube.com/embed/XOnWnxRoIrc?si=woCJbpfVZMhpjiKs"
                title="Harsh Bhagat favourite features in Samco"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>

              <div class="px-2 py-4">
                <p class="text-black text-xl mb-2">
                  Harsh Bhagat favourite features in Samco
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
