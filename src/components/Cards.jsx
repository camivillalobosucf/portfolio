// Project cards section with expandable "see more" functionality

import { useState, useRef } from "react";
import { initialProjects, additionalProjects } from "../data/projects";
import { useInView } from "../hooks/useInView";

// Individual project card with alternating layouts
function ProjectCard({ project, index, cardRef }) {
  const [ref, inView] = useInView();
  const isEven = index % 2 === 0;

  return (
    <article
      ref={(el) => {
        ref.current = el;
        if (cardRef) cardRef.current = el;
      }}
      className={`
        flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}
        gap-6 lg:gap-8 items-center
        mirror-glass rounded-2xl lg:rounded-3xl p-6 lg:p-8
        hover:shadow-xl transition-all duration-300
        ${inView ? "card-animate" : "opacity-0"}
      `}
    >
      {/* Image */}
      <div className="flex-1 w-full">
        <div className="bg-neutral-400 rounded-xl lg:rounded-2xl w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Info */}
      <div className={`flex-1 w-full text-center lg:text-left ${isEven ? "lg:text-left" : "lg:text-right"}`}>
        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-700 mb-3 lg:mb-4">
          {project.title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed mb-4 lg:mb-6">
          {project.description}
        </p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-neutral-700 hover:bg-neutral-800 text-white px-5 sm:px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
          aria-label={`View ${project.title} project`}
        >
          See Project
        </a>
      </div>
    </article>
  );
}

export default function Cards() {
  const [showMore, setShowMore] = useState(false);
  const lastInitialCardRef = useRef(null);

  // Toggle visibility and scroll to last card when collapsing
  const handleToggle = () => {
    if (showMore) {
      setShowMore(false);
      setTimeout(() => {
        lastInitialCardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    } else {
      setShowMore(true);
    }
  };

  return (
    <section id="projects" className="py-6 sm:py-12 px-4 sm:px-6" aria-label="Projects">
      <div className="flex flex-col gap-6 sm:gap-8 max-w-6xl mx-auto">
        {/* Initial projects */}
        {initialProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            cardRef={index === initialProjects.length - 1 ? lastInitialCardRef : null}
          />
        ))}

        {/* Additional projects (when expanded) */}
        {showMore && additionalProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={initialProjects.length + index}
          />
        ))}

        {/* Toggle button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={handleToggle}
            className="inline-flex items-center gap-2 bg-white/40 hover:bg-white/60 backdrop-blur-md border border-white/50 text-neutral-700 hover:text-neutral-900 px-6 sm:px-8 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 shadow-md hover:shadow-lg"
            aria-expanded={showMore}
          >
            <span>{showMore ? "Show less" : "See more projects"}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={showMore ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
