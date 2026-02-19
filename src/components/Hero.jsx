// Hero section with typewriter animation

import { useEffect, useRef } from "react";

const TYPEWRITER_TEXT = "I am Cami";
const TYPING_SPEED = 130;
const CURSOR_HIDE_DELAY = 1500;

export default function Hero() {
  const titleRef = useRef(null);
  const textRef = useRef(TYPEWRITER_TEXT);

  // Typewriter effect
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    el.classList.remove("typing-complete");
    el.textContent = "";

    let i = 0;
    const text = textRef.current;

    const typeInterval = setInterval(() => {
      el.textContent += text[i];
      i += 1;

      if (i >= text.length) {
        clearInterval(typeInterval);
        setTimeout(() => el.classList.add("typing-complete"), CURSOR_HIDE_DELAY);
      }
    }, TYPING_SPEED);

    return () => {
      clearInterval(typeInterval);
      if (el) el.textContent = "";
    };
  }, []);

  return (
    <section
      className="hero-animate flex flex-col items-center justify-center text-center select-none pt-4 sm:pt-15 pb-4 sm:pb-5 px-4"
      aria-labelledby="hero-title"
    >
      <h1
        id="hero-title"
        ref={titleRef}
        className="typewriter text-4xl sm:text-5xl md:text-6xl font-semibold text-neutral-700"
      />
      <p className="subtitle text-base sm:text-lg md:text-xl mt-2 text-neutral-600">
        and this is what I've designed!
      </p>
    </section>
  );
}
