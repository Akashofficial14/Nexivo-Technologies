import React from "react";
import { majorProjects } from "../data/projects";
import { ArrowUpRight, Github } from "lucide-react";

const Work = () => {
  return (
    <div className="fof-nav work w-full pt-5 mt-5 px-4 lg:px-8" id='work'>
      <div className="title flex  flex-col justify-center items-center gap-3 ">
        <h1 className="text-4xl font-semibold lg:text-6xl mt-5">Work & Play</h1>
        <p className="text-md text-center font-light lg:text-xl">
          {" "}
          A collection of things I’m proud to have built.
        </p>
      </div>
      <div className="cards w-full flex flex-col gap-5 mt-5 ">
        {majorProjects.map((project, idx) => {
          return (
            <div
              key={idx}
              style={{ backgroundColor: project.bgColor }}
              className={`card w-full p-3 rounded-xl flex flex-col gap-3 lg:flex-row lg:gap-20 lg:p-5`}
            >
              <img
                className="w-full h-50 object-cover rounded-xl lg:h-120 lg:w-175  "
                src={project.image}
                alt="data"
              />
              <div className="right lg:flex flex-col justify-center items-center gap-4">
                <h1 className="text-2xl font-semibold text-center lg:text-4xl">
                  {project.projectName}
                </h1>
                <p className="text-md font-light text-center lg:text-xl">
                  {project.description}
                </p>
                <div className="btn flex gap-5 justify-center items-center mt-2">
                  <a href={project.liveLink} className="flex justify-center gap-2 text-md font-ultralight items-center px-2 py-1 bg-black text-white rounded-md lg:px-4 py-2 ">
                    <ArrowUpRight size={20} />
                    Explore
                  </a>
                  <a href={project.github} className="flex justify-center gap-2 text-md font-ultralight items-center px-2 py-1 bg-black text-white rounded-md lg:px-4 py-2 ">
                    <Github size={20} />
                    Github
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
