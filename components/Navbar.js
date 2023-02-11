import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-veryDarkGray">
      <h1 className="text-redOrange text-5xl font-audio px-4 py-8 sm:px-8">
        PM
      </h1>
      <nav className="px-2 sm:px-10">
        <Link
          href="#about"
          className="text-white text-sm font-changa px-2 py-6 hover:text-lightBeige sm:px-4 sm:text-base"
        >
          About
        </Link>
        <Link
          href="#myWork"
          className="text-white text-sm font-changa px-2 py-6 hover:text-lightBeige sm:px-4 sm:text-base"
        >
          My Work
        </Link>
        <Link
          href="#contact"
          className="text-white text-sm font-changa px-2 py-6 hover:text-lightBeige sm:px-4 sm:text-base"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
