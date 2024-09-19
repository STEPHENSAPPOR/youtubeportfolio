import React from 'react';
import { FaTwitter, FaLinkedinIn, FaReact, FaFilePdf } from "react-icons/fa"; // Imported FaFilePdf for the CV icon
import { SiTailwindcss, SiFigma } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me on
        </h2>
        <div className="flex gap-4">
          <a href="https://x.com/De_audacity" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/stephensappor/" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
          {/* Added the CV link */}
          <a href="https://drive.google.com/file/d/1QRZtsa8fWzUSukaKR_gPjVXbjZQPBMmu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaFilePdf /> {/* CV icon */}
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
