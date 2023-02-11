import React from "react";
import Image from "next/image";
import Link from "next/link";

const MyWork = () => {
  return (
    <div id="myWork" className="relative -my-36 mt-10 lg:mt-20 xl:mt-0">
      <div className="bg-gradient-to-b from-transparent to-darkGray h-28"></div>
      <div className="bg-darkGray flex flex-col items-center pb-10">
        <h1 className="text-5xl text-center text-redOrange my-16 font-russo">
          Things I&#39;ve Built
        </h1>
        <div className="flex flex-col items-center mx-28 space-x-1 lg:flex-row">
          <div className="my-10 lg:my-0">
            <h1 className="text-3xl text-center text-white my-2 font-changa">
              Project 1
            </h1>
            <Link
              href="#"
              className="relative w-72 h-48 object-contain flex flex-col-reverse md:w-96 md:h-64 lg:w-80 lg:h-56 xl:w-96 xl:h-64"
            >
              <Image
                className="absolute object-cover rounded-lg w-full h-full"
                src="/honda-parts-webpage.png"
                alt="mock image"
                layout="fill"
              />
              <p className="text-sm relative w-full block text-white px-5 py-1 bg-mediumGray bg-opacity-70 rounded-lg md:text-base">
                A fully functional, full-stack, e-commerce website designed to
                appear as though it sells performance parts for Hondas. I built
                this website using the MERN tech stack and styled it using
                Tailwind CSS.
              </p>
              <div className="absolute w-full h-full rounded-lg bg-redOrange bg-opacity-20 hover:bg-transparent"></div>
            </Link>
          </div>
          <div className="my-10 lg:my-0">
            <h1 className="text-3xl text-center text-white my-2 font-changa">
              Project 2
            </h1>
            <Link
              href="#"
              className="relative w-72 h-48 object-contain flex flex-col-reverse md:w-96 md:h-64 lg:w-80 lg:h-56 xl:w-96 xl:h-64"
            >
              <Image
                className="absolute object-cover rounded-lg w-full h-full"
                src="/daily-exercise-webpage.png"
                alt="mock image"
                layout="fill"
              />
              <p className="text-sm relative w-full block text-white px-5 py-1 bg-mediumGray bg-opacity-70 rounded-lg md:text-base">
                A simple webpage allowing users to generate a daily, full body
                workout. This application was built using Express, React and
                Node.js, where the exercises were retrieved from an exercise
                database API.
              </p>
              <div className="absolute w-full h-full rounded-lg bg-redOrange bg-opacity-20 hover:bg-transparent"></div>
            </Link>
          </div>
          <div className="my-10 lg:my-0">
            <h1 className="text-3xl text-center text-white my-2 font-changa">
              Project 3
            </h1>
            <Link
              href="#"
              className="relative w-72 h-48 object-contain flex flex-col-reverse md:w-96 md:h-64 lg:w-80 lg:h-56 xl:w-96 xl:h-64"
            >
              <Image
                className="absolute object-cover rounded-lg w-full h-full"
                src="/developer-chat-site.png"
                alt="mock image"
                layout="fill"
              />
              <p className="text-sm relative w-full block text-white px-5 py-1 bg-mediumGray bg-opacity-70 rounded-lg md:text-base">
                A chat application built using google firebase for its database
                and hosting. Using firebase allowed for full user
                authentication, and simple storage solutions. This was the first
                application that I ever built using React, JavaScript and SCSS
                to style it.
              </p>
              <div className="absolute w-full h-full rounded-lg bg-redOrange bg-opacity-20 hover:bg-transparent"></div>
            </Link>
          </div>
        </div>
        {/* <div className="flex flex-col items-center mx-28 space-x-1 lg:flex-row">
          <div className="my-10 lg:my-0">
            <h1 className="text-3xl text-center text-white my-2 font-changa">
              Project 4
            </h1>
            <Link
              href="#"
              className="relative w-72 h-48 object-contain flex flex-col-reverse md:w-96 md:h-64"
            >
              <Image
                className="absolute object-cover rounded-lg w-full h-full"
                src="/western-sunset2.png"
                alt="mock image"
                layout="fill"
              />
              <p className="relative w-full block text-grayBeige px-5 py-1 bg-mediumGray bg-opacity-80 rounded-lg">
                This is mock text in place of future project descriptions. This
                text will be replaced with a new description of my project soon.
                This is mock text in place of future project descriptions. This
              </p>
              <div className="absolute w-full h-full rounded-lg bg-redOrange bg-opacity-20 hover:bg-transparent"></div>
            </Link>
          </div>
        </div> */}
        <div className="text-2xl text-grayBeige text-center font-russo  border-b border-redOrange mx-10 px-1 py-2 my-16 md:px-5">
          There are always more projects to come
        </div>
      </div>
    </div>
  );
};

export default MyWork;
