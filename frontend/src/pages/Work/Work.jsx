import React, { useState, useLayoutEffect, useRef } from "react";
import { majorProjects } from "../../data/projects";
import { ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { gsap } from "gsap";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const containerRef = useRef(null);

  const filters = ["All", "Technology", "E-Commerce", "Marketing", "Design", "Video"];

  const filteredProjects = activeFilter === "All"
    ? majorProjects
    : majorProjects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animations
      gsap.from(".work-header > *", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      });
      gsap.from(".filter-pills", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });
      gsap.from(".project-card", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.3,
      });
    }, containerRef);
    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <div ref={containerRef} className="pt-20 min-h-screen bg-warm-bg text-left">
      {/* Portfolio Header */}
      <section className="work-header pt-24 pb-12 px-mobile-margin max-w-container-max mx-auto text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 bg-botanical-green/5 border border-botanical-green/10 rounded-full">
          <Sparkles className="w-4.5 h-4.5 text-botanical-green" />
          <span className="font-headline text-[12px] font-bold uppercase tracking-widest text-botanical-green">
            OUR WORK
          </span>
        </div>

        <h1 className="font-headline text-headline-xl md:text-[64px] mb-8 leading-tight tracking-tight text-ink-black max-w-3xl mx-auto font-extrabold">
          Ideas We've Turned Into
          <br />
          <span className="text-botanical-green relative inline-block mt-2">
            Digital Impact.
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-botanical-green/30"
              preserveAspectRatio="none"
              viewBox="0 0 100 10"
            >
              <path
                d="M0,5 Q25,0 50,5 T100,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </span>
        </h1>

        <p className="font-body text-body-2xl text-secondary max-w-3xl mx-auto leading-relaxed text-center">
          Explore selected projects across technology, e-commerce, branding, digital marketing, and creative solutions.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="filter-pills max-w-container-max mx-auto px-mobile-margin mb-12 flex justify-center">
        <div className="flex flex-wrap gap-2 md:gap-3 bg-surface p-1.5 rounded-full border border-border-muted overflow-x-auto max-w-full justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold font-headline uppercase tracking-wider transition-all cursor-pointer ${activeFilter === filter
                  ? "bg-botanical-green text-surface shadow-sm"
                  : "text-secondary hover:text-ink-black hover:bg-ink-black/5"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Portfolio Cards Grid */}
      <section className="max-w-container-max mx-auto px-mobile-margin pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="project-card group bg-surface border border-border-muted rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                {/* Project Image */}
                <div className="aspect-[16/10] overflow-hidden border-b border-border-muted bg-surface-container relative">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={project.image}
                    alt={project.projectName}
                  />
                  {/* Category Pill Overlay */}
                  <span className="absolute top-4 left-4 px-3 py-1 bg-surface/90 backdrop-blur-sm border border-border-muted rounded text-[10px] font-bold font-headline uppercase tracking-widest text-secondary">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <h3 className="font-headline text-2xl font-bold text-ink-black group-hover:text-botanical-green transition-colors">
                    {project.projectName}
                  </h3>
                  <p className="font-body text-sm text-secondary leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="p-8 pt-0 flex gap-4">
                {project.liveLink !== "#" ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-botanical-green font-bold text-sm flex items-center gap-1.5 group/link hover:opacity-85 transition-opacity"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </a>
                ) : (
                  <span className="text-secondary font-bold text-sm flex items-center gap-1.5 cursor-not-allowed opacity-50">
                    View Case Study
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
                {project.github !== "#" && project.github !== "" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-secondary hover:text-ink-black font-bold text-sm flex items-center gap-1.5 transition-colors"
                  >
                    GitHub
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-surface border border-border-muted rounded-xl max-w-md mx-auto">
            <span className="material-symbols-outlined text-4xl text-botanical-green mb-4">folder_open</span>
            <p className="font-body text-secondary text-sm">No projects found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Work;
