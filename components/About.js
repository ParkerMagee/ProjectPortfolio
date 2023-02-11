import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="relative -my-72 items-center md:-my-42 xl:-my-32"
    >
      <div className="h-36 bg-gradient-to-b from-transparent to-veryDarkGray"></div>
      <div className="bg-veryDarkGray -mt-4 pt-20 pb-32">
        <div className="flex flex-col items-center mx-20 pb-10 lg:mx-64">
          <h1 className="text-4xl text-white text-center font-changa sm:text-5xl">
            About Me
          </h1>
          <div className="flex flex-col items-center">
            <div className="text-grayBeige text-center font-changa mt-8 md:text-start">
              Hey! My name is Parker and I create and design applications for
              the web. I originally went to school and completed a bachelor of
              science, with the intention of entering the medical field, however
              after introducing myself to software development I have found this
              industry to be the perfect fit for me and my skill set. I&#39;ve
              now been creating web applications for several months and can tell
              that my web development journey has just begun.
            </div>
            <div className="text-grayBeige text-center font-changa mt-4 mb-10 md:text-start">
              Since the begining of my journey, my coding language of choice has
              been JavaScript. This has led to me building a chat application, a
              web page for daily exercises and even a full-stack ecommerce
              website with many more ideas that are yet to be realized.
            </div>
            <h1 className="text-grayBeige text-center font-changa mb-6">
              Here are some of the technologies that I work with most often:
            </h1>
            <div className="flex w-64 mb-12 justify-between md:w-96 lg:mb-0">
              <ul className="font-changa text-grayBeige list-point marker:text-redOrange">
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
              </ul>
              <ul className="font-changa text-grayBeige list-point marker:text-redOrange">
                <li>Tailwind</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
