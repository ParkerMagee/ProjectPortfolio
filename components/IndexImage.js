import React from "react";
import Image from "next/image";
import Link from "next/link";

const IndexImage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-veryDarkGray to-transparent">
      <div>
        <Image
          className="absolute object-cover w-screen h-screen mix-blend-overlay z-0"
          src="/western-sunset1.png"
          alt="sunset"
          layout="fill"
        />
      </div>
      <div className="absolute flex flex-col items-center w-screen py-24 px-6 z-20">
        <h1 className="text-4xl text-white text-center font-russo sm:text-5xl md:text-6xl">
          Hi, I&#39;m Parker.
        </h1>
        <h1 className="text-3xl text-white text-center font-russo py-6 sm:text-4xl md:text-5xl">
          I&#39;m a Full-Stack Web Developer.
        </h1>
        <p className="text-lightBeige text-xl text-center font-changa py-14 px-4 sm:text-2xl md:py-20 md:px-24 xl:px-64">
          My focus is to create functional, user friendly and visually appealing
          web applications.
        </p>
        <div className="md:py-4 lg:py-24">
          <Link
            href="#contact"
            className="text-redOrange text-xl cursor-pointer font-audio text-center py-1 px-2 border-2 border-redOrange rounded-md hover:bg-redOrange hover:bg-opacity-20 sm:text-2xl"
          >
            Lets Build Something
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IndexImage;
