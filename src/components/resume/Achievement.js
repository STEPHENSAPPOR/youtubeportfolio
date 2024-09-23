import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div>
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-lg lg:text-xl text-designColor font-bold">CERTIFICATES</h2>
        </div>
        <div className="mt-8 lg:mt-14 w-full h-auto lg:h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 lg:gap-10">
          <ResumeCard
            title="Frontend Web Developer"
            subTitle="Mest Africa"
            result="August - 2024"
          />
          <ResumeCard
            title="AWS Certified Cloud Practitioner"
            subTitle="Amalitech Ghana"
            result="May - 2024"
          />
          <ResumeCard
            title="Cybersecurity"
            subTitle="Cargill Ghana"
            result="July - 2023"
          />
        </div>
      </div>
      
      <div>
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-lg lg:text-xl text-designColor font-bold">ONLINE COURSE CERTIFICATES</h2>
        </div>
        <div className="mt-8 lg:mt-14 w-full h-auto lg:h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 lg:gap-10">
          <ResumeCard
            title="Open Source Models"
            subTitle="UNICEF"
            result="September - 2024"
          />
          <ResumeCard
            title="Google Data Analytics"
            subTitle="Coursera"
            result="October - 2023"
          />
          <ResumeCard
            title="Python"
            subTitle="DataCamp"
            result="December - 2023"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
