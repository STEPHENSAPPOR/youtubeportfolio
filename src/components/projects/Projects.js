import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, tube, imperial, fleetz } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
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
        />
        <ProjectsCard
          title="RECIPE APP"
          des=" I built a sleek and modern Italian restaurant website using HTML, CSS, and JavaScript.
           The site features a responsive design with rich visuals to showcase the restaurant's menu and ambiance.!"
          src={projectTwo}
        />
        <ProjectsCard
          title="Ghana Hazard Project"
          des=" I developed a Ghana Hazard Reporter platform using React, TypeScript, 
          and Tailwind CSS, focusing on a responsive design and user-friendly interface for reporting and viewing hazards.!"
          src={projectThree}
        />
        <ProjectsCard
          title="YouTube Clone"
          des="I created a YouTube page clone using 
          HTML, CSS, and JavaScript, featuring a responsive design, video thumbnails, and basic interactive elements
           like search and video playback.!"
          src={tube}
        />
        <ProjectsCard
          title="Imperial"
          des=" I built a sleek and modern Italian restaurant website using HTML, CSS, and JavaScript.
           The site features a responsive design with rich visuals to showcase the restaurant's menu and ambiance.!"
          src={imperial}
        />
        <ProjectsCard
          title="Fleetz"
          des=" I built a sleek and modern Car Collection website using HTML, CSS, and JavaScript.
           The site features a  design with rich visuals to showcase Luxurious Cars.!"
          src={fleetz}
        />
      </div>
    </section>
  );
}

export default Projects