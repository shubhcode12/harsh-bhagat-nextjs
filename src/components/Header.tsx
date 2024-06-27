"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Awards", link: "https://harshbhagat.com/#awards" },
    { title: "About", link: "https://harshbhagat.com/#about" },
    { title: "Support", link: "/support" },
    {
      title: "Private Community",
      link: "https://harshbhagat.com/#privateCommunity",
    },
    { title: "Contact", link: "https://harshbhagat.com/#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-between bg-transparent backdrop-blur-lg border-solid border-b-2 border-[#c1ffe7] items-center p-5 shadow-md bg-white">
      <a href="/">
        <img
          className="w-24 object-cover"
          src="harsh-bhagat-logo.png"
          alt="harsh bahagat"
        />
      </a>
      <nav className="text-xl hidden md:flex">
        {menuItems.map((item, i) => (
          <Link href={item.link} className="px-3">
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <IoMdClose color="black" className="h-6 w-6" />
          ) : (
            <RiMenu3Fill color="black" className="h-6 w-6" />
          )}
        </button>
      </div>
      {menuOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-slate-200 md:hidden">
          <ul className="flex flex-col items-center space-y-4 px-2 py-4">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link href={item.link} className="text-black px-3">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
