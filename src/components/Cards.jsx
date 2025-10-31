import { projectsData } from "../data/projects";
import { useEffect, useRef } from "react";

export default function Cards() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const animateCards = () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 3600 + (index * 400)); // 3600ms = after hero animation completes, then 400ms between each card
        }
      });
    };

    animateCards();
  }, []);

  return (
    <section id="projects" className="py-0 px-6">
      <div className="flex flex-col gap-8 max-w-6xl mx-auto">
        {projectsData.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`flex ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-8 items-center bg-neutral-100/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
              style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease-out, transform 0.8s ease-out' }}
            >
              <div className="flex-1">
                <div className="bg-neutral-400 rounded-2xl w-full h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
            <div className={`flex-1 ${isEven ? 'text-left' : 'text-right'}`}>
                <h3 className="text-2xl font-semibold text-neutral-700 mb-4">
                  {project.title}
                </h3>
                
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-neutral-700 hover:bg-neutral-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300"
                >
                  See Project
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}