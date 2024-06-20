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
          <ul className="list-decimal list-inside">
            <li>
              <span
                onClick={() => handleButtonClick("https://wa.me/919833322784")}
                className="text-blue-500 cursor-pointer underline">
                Click here
              </span>{" "}
              To Open Account.
            </li>
            <li>
              <a
                onClick={() => handleButtonClick("https://wa.me/917738091457")}
                className="text-blue-500 cursor-pointer underline">
                Click here
              </a>{" "}
              For KYC
            </li>
            <li>
              <a
                onClick={() => handleButtonClick("https://wa.me/918655953255")}
                className="text-blue-500 cursor-pointer underline">
                Click here
              </a>{" "}
              How To Trade
            </li>
          </ul>
        </section>

        <section className="bg-gray-100 p-10 rounded-lg">
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
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}
