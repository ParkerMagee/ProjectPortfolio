import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="relative bg-darkGray pb-12">
      <div className="mt-32 py-36 flex flex-col items-center">
        <h1 className="text-white text-5xl text-center font-changa font-bold my-10">
          Let&#39;s Work Together
        </h1>
        <div className="text-grayBeige text-2xl text-center w-2/3 lg:w-1/3">
          Shoot me an email whenever you like, my inbox is always open.
        </div>

        <Link href="mailto:magee.pg@gmail.com">
          <div className="text-redOrange text-3xl cursor-pointer font-audio text-center my-20 py-1 px-4 border-2 border-redOrange rounded-md hover:bg-redOrange hover:bg-opacity-20">
            Shoot
          </div>
        </Link>
        <div className="flex">
          <div className="border-t border-grayBeige w-24 mt-3 sm:w-36"></div>
          <div className="flex relative mx-2 w-24 justify-between">
            <Link href="mailto:magee.pg@gmail.com" className="cursor-pointer">
              <EmailIcon className="text-grayBeige" />
            </Link>
            <Link
              href={{ pathname: "https://github.com/ParkerMagee" }}
              className="cursor-pointer"
            >
              <GitHubIcon className="text-grayBeige" />
            </Link>
            <Link
              href={{
                pathname: "https://www.linkedin.com/in/parker-magee-b6a504230/",
              }}
              className="cursor-pointer"
            >
              <LinkedInIcon className="text-grayBeige" />
            </Link>
          </div>
          <div className="border-t border-grayBeige w-24 mt-3 sm:w-36"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
