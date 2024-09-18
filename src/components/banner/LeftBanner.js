import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Frontend Web Developer.",
      "AWS Cloud Practitioner.",
      "Graphic Designer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Stephen Sappor</span>
        </h1>
        <h2 className="text-4xl font-bold text-designColor">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#FF014F"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a Frontend Web Developer, coupled with AWS Certified Cloud
          Practitioner. I am dedicated to creating intuitive and dynamic user
          interfaces using HTML, CSS, JavaScript, and learning modern frameworks
          such as React. I am proactive, results-oriented, and excel
          at prioritizing workloads to ensure end-to-end execution.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
