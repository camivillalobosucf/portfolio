// Graphic design gallery section — displayed between project cards and the about section

import { useState } from "react";
import { graphicDesignProjects } from "../data/projects";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import { useInView } from "../hooks/useInView";

function GalleryCard({ item, index, onClick }) {
  const [ref, inView] = useInView();

  return (
    <button
      ref={ref}
      onClick={onClick}
      className={`
        group relative overflow-hidden rounded-2xl mirror-glass
        aspect-square cursor-pointer text-left
        transition-all duration-300 hover:shadow-xl hover:-translate-y-1
        focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 focus-visible:ring-offset-2
        ${inView ? "card-animate" : "opacity-0"}
      `}
      style={{ animationDelay: `${index * 60}ms` }}
      aria-label={`Open ${item.title} gallery`}
    >
      {/* Thumbnail — first image of the project */}
      <img
        src={item.images[0]}
        alt={item.title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-neutral-900/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-4 gap-1">
        <p className="text-white text-sm font-medium leading-snug">{item.title}</p>
        {item.images.length > 1 && (
          <p className="text-white/70 text-xs">{item.images.length} images</p>
        )}
      </div>
    </button>
  );
}

export default function GraphicDesign() {
  const [lightbox, setLightbox] = useState(null); // { project, imageIndex }

  const openLightbox = (project) => setLightbox({ project, imageIndex: 0 });
  const closeLightbox = () => setLightbox(null);

  const goPrev = () =>
    setLightbox((prev) => ({
      ...prev,
      imageIndex: (prev.imageIndex - 1 + prev.project.images.length) % prev.project.images.length,
    }));

  const goNext = () =>
    setLightbox((prev) => ({
      ...prev,
      imageIndex: (prev.imageIndex + 1) % prev.project.images.length,
    }));

  const goTo = (i) => setLightbox((prev) => ({ ...prev, imageIndex: i }));

  return (
    <>
      <section
        id="graphic-design"
        className="scroll-mt-28 py-6 sm:py-12 px-4 sm:px-6"
        aria-labelledby="graphic-design-heading"
      >
        <div className="flex flex-col gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Heading + subtitle grouped tightly */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <Reveal>
              <h2
                id="graphic-design-heading"
                className="text-2xl sm:text-3xl font-semibold text-neutral-700 text-center"
              >
                Graphic Design
              </h2>
            </Reveal>

            <Reveal delay={60}>
              <p className="text-sm sm:text-base text-neutral-700 text-center max-w-2xl mx-auto">
                A selection of print, signage, and branding work created throughout my career in the sign industry and beyond.
              </p>
            </Reveal>
          </div>

          {/* Gallery grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {graphicDesignProjects.map((item, index) => (
              <GalleryCard
                key={item.id}
                item={item}
                index={index}
                onClick={() => openLightbox(item)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox — rendered outside the section so it can cover the full viewport */}
      {lightbox && (
        <Lightbox
          project={lightbox.project}
          imageIndex={lightbox.imageIndex}
          onClose={closeLightbox}
          onPrev={goPrev}
          onNext={goNext}
          onJumpTo={goTo}
        />
      )}
    </>
  );
}
