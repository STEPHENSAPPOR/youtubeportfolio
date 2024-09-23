import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl lg:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-8 lg:mt-14 w-full h-auto lg:h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-8 lg:gap-10">
          <ResumeCard
            title="Frontend Web Developer Trainee"
            subTitle="Mest Africa - (June 2024 - August 2024)"
            result="Accra"
            des={[
              "Enthusiastic and detail-oriented front-end web developer with a strong passion for creating intuitive and dynamic user interfaces.",
              "Skilled in HTML, CSS, JavaScript, and modern frameworks such as React and Angular.",
              "Adept at translating design mockups into responsive, accessible, and interactive web pages.",
              "Committed to continuous learning and staying updated with the latest trends in web development to deliver cutting-edge solutions.",
              "Proven ability to collaborate effectively with cross-functional teams to achieve project goals and enhance user experience."
            ]}
          />
          <ResumeCard
            title="AWS Cloud Practitioner Trainee"
            subTitle="Amalitech Ghana - (Feb 2024 - May 2024)"
            result="Accra"
            des={[
              "Skilled in designing scalable and secure cloud architectures using AWS services like EC2, S3, RDS, and Lambda.",
              "Proficient in implementing cost-effective strategies, ensuring compliance with security standards.",
              "Experienced in automating tasks using CloudFormation and Lambda.",
              "Known for troubleshooting and resolving issues promptly.",
              "Committed to ongoing learning and integrating the latest advancements in AWS technology."
            ]}
          />
          <ResumeCard
            title="IT Support"
            subTitle="RoxyApps - (Jan 2020 - May 2021)"
            result="Accra"
            des={[
              "Proficient in software sales, training, customer support, and IT solutions.",
              "Skilled in selling software, conducting training sessions, resolving issues, and installing essential software like Windows and Microsoft Office."
            ]}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
