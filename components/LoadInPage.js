import React, { useEffect } from "react";
import timeout from "../functions/timeout";

const LoadInPage = () => {
  useEffect(() => {
    const page = document.getElementById("page");
    page.classList += " visually-hidden";
    const loadInPage = document.getElementById("loadInPage");
    loadInPage.classList += " loadPage";

    const logo = document.getElementById("logo");
    logo.classList += " loadLogo";
    logo.classList.toggle("opacity-0");
  }, []);

  return (
    <div id="page" className="absolute z-40 h-screen w-screen">
      <div
        id="loadInPage"
        className="flex flex-col justify-center items-center h-screen w-screen bg-veryDarkGray"
      >
        <h1
          id="logo"
          className="text-redOrange text-6xl font-audio opacity-0 px-4 py-8 sm:px-8 md:text-8xl"
        >
          PM
        </h1>
      </div>
    </div>
  );
};

export default LoadInPage;
