import React from "react";
import Title from "../layouts/Title";
import {
  projectOne,
  projectTwo,
  projectThree,
  tube,
  imperial,
  fleetz,
} from "../../assets/index";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="MSDE EVENT"
          des=" I created a responsive event website using React and Tailwind CSS,
           featuring a modern design with seamless user interaction.
           The site includes detailed event information to enhance user experience.!"
          src={projectOne}
          githubLink="https://github.com/M-S-D-E/M-S-D-E-Event-Frontend"
        />
        <ProjectsCard
          title="DevLink"
          des="I developed a dynamic and user-friendly platform using the React framework for Devlink,
 where developers can create profiles, bid on projects, and get paid. 
 The site enables clients to post projects.!"
          src={projectTwo}
          githubLink="https://github.com/DevLink-hub/DevLink-Frontend"
        />
        <ProjectsCard
          title="Ghana Hazard Project"
          des=" I developed a Ghana Hazard Reporter platform using React, TypeScript, 
          and Tailwind CSS, focusing on a responsive design and user-friendly interface for reporting and viewing hazards.!"
          src={projectThree}
          githubLink="https://github.com/STEPHENSAPPOR/ghana-hazard-reporter"
        />
         <ProjectsCard
          title="RoxyApps"
          des="I built a digital solutions platform using React for a software company.
           The platform streamlines existing business processes across web, mobile, and desktop platforms,
           offering comprehensive solutions.!"
          src={fleetz}
          githubLink="https://github.com/STEPHENSAPPOR/RoxyApps"
        />
         <ProjectsCard
          title="Imperial"
          des=" I built a sleek and modern Italian restaurant website using HTML, CSS, and JavaScript.
           The site features a responsive design with rich visuals to showcase the restaurant's menu and ambiance.!"
          src={imperial}
          githubLink="https://github.com/STEPHENSAPPOR/Imperial"
        />
        <ProjectsCard
          title="YouTube Clone"
          des="I created a YouTube page clone using 
          HTML, CSS, and JavaScript, featuring a responsive design, video thumbnails, and basic interactive elements
           like search and video playback.!"
          src={tube}
          githubLink="https://github.com/STEPHENSAPPOR/youtube"
        />
       
       
      </div>
    </section>
  );
};

export default Projects;
