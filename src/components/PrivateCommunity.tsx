import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Image from "next/image";

function PrivateCommunity() {
  const handleButtonClick = (url: string) => {
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
      alert("Try between 10 AM to 5:30 PM");
    }
  };

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
        <li className="mb-4">
          <div className="flex items-center">
            <span className="mr-2">
              <IoIosArrowDroprightCircle className="w-7 h-7" />
            </span>
            <p>
              Login krliya sit relax. Link 3 days mein ajayega on WhatsApp from
              this number 8700153496
            </p>
          </div>
          <div className="flex space-x-4 mt-2 ml-8">
            <button
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={() => handleButtonClick("https://wa.me/919833322784")}>
              Open Account
            </button>
            <button
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={() => handleButtonClick("https://wa.me/917738091457")}>
              For KYC
            </button>
            <button
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={() => handleButtonClick("https://wa.me/918655953255")}>
              How To Trade
            </button>
          </div>
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
