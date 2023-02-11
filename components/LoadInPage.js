import React, { useEffect } from "react";
import timeout from "../functions/timeout";

const LoadInPage = () => {
  useEffect(() => {
    const loadInPage = document.getElementById("loadInPage");
    loadInPage.classList += " loadPage";

    const logo = document.getElementById("logo");
    logo.classList += " loadLogo";
    logo.classList.toggle("opacity-0");

    const waitTime = async () => {
      await timeout(4000);
      loadInPage.classList.toggle("visually-hidden");
    };
    return waitTime;
  }, []);

  return (
    <div
      id="loadInPage"
      className="flex flex-col absolute z-40 justify-center items-center h-screen w-screen bg-veryDarkGray"
    >
      <h1
        id="logo"
        className="text-redOrange text-6xl font-audio opacity-0 px-4 py-8 sm:px-8 md:text-8xl"
      >
        PM
      </h1>
    </div>
  );
};

export default LoadInPage;
