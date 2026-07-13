import React from "react";
import {
  frontendSkills,
  backendSkills,
  toolsPlatforms,
} from "../data/projects";

const Skills = () => {
  return (
    <div
      className="contact w-full bg-black px-3 pt-15 mt-5 text-white"
      id="skills"
    >
      <div className="fof-nav title flex  flex-col justify-center items-center gap-3">
        <h1 className="text-2xl font-semibold lg:text-6xl">
          Technical Arsenal
        </h1>
        <p className="text-md text-center font-light lg:text-xl">
          My go-to weapons for solving complex problems.
        </p>
      </div>
      <div className="techincal fof-nav flex flex-col gap-5 mt-5 justify-center items-center lg:gap-10">
        <div className="one flex flex-col justify-center items-center text-center gap-3">
          <h3 className="text-2xl font-semibold text-center pb-3 lg:text-3xl mt-5">
            {" "}
            frontend tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {frontendSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-8 h-8 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm text-gray-200 lg:text-lg">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
          <p className="text-zinc-500 leading-relaxed">
            Bringing designs to life using React and TailwindCSS, ensuring{" "}
            <br /> the code is modular, performant, and responsive across all
            devices.
          </p>
        </div>
        <div className="togther w-full flex flex-col gap-5 lg:flex-row justify-center items-center lg:gap-25 ">
          <div className="two w-full lg:w-[50%] p-3">
            <h3 className="text-2xl font-semibold text-center pb-3 lg:text-3xl">
              backend tools
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {backendSkills.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-emerald-500 transition-all duration-300 shadow-xl">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-10 h-10"
                    />
                  </div>
                  <span className="text-slate-300 mt-2 text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-zinc-500 leading-relaxed text-center pt-2">
              Powering the experience with Node.js and MongoDB, creating secure
              APIs and databases that can handle growth and complex data.
            </p>
          </div>
          <div className="thre ew-full lg:w-[50%] p-3">
            <h3 className="text-2xl font-semibold text-center pb-3 lg:text-3xl">
              others
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-2 lg:flex justify-center items-center gap-8">
              {toolsPlatforms.map((tool, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center border border-slate-700 group-hover:border-emerald-500 transition-all duration-300 shadow-xl">
                    <img
                      src={tool.logo}
                      alt={tool.name}
                      className="w-10 h-10"
                    />
                  </div>
                  <span className="text-slate-300 mt-2 text-sm font-medium">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-zinc-500 leading-relaxed text-center pt-2" >
              I use Figma to design the vision and GSAP to breathe life into it.
              I rely on Git and GitHub to anchor the code, ensuring code
              tracking, testing, and collabration.
            </p>
          </div>
        </div>
      </div>
      {/* <p className="fof-nav text-md text-center font-light lg:text-xl">"I believe great software is built on a foundation of clean code and thoughtful design. My expertise spans the entire development lifecycle, allowing me to take an idea from a Figma sketch, build it with React, and scale it with Node.js and MongoDB.</p> */}
    </div>
  );
};

export default Skills;
