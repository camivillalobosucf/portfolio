import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef(null);

useEffect(() => {
  const run = async () => {
    const el = titleRef.current;
    if (!el || el.dataset.animated) return;
    el.dataset.animated = "true";

    // Typewriter effect
    const text = el.textContent;
    el.textContent = "";
    let i = 0;
    const typing = setInterval(() => {
      el.textContent += text[i];
      i++;
      if (i === text.length) clearInterval(typing);
    }, 130); // speed per letter

    // Fade-up animation for subtitle
    try {
      const mod = await import("https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js");
      const anime = mod.default || mod;
      anime({
        targets: ".subtitle",
        opacity: [0, 1],
        translateY: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 2000,
        delay: 1200, // starts after typing
      });
    } catch (e) {
      console.error("Failed to load anime.js:", e);
    }
  };

  run();
}, []);


  return (
    <section className="hero-animate flex flex-col items-center justify-center min-h-screen text-center select-none">

        <h1
        ref={titleRef}
        className="ml16 text-5xl sm:text-6xl font-semibold text-neutral-700 overflow-hidden"
        >
        I am Cami
        </h1>

        <p className="subtitle text-lg sm:text-xl mt-2 text-neutral-600">
        and this is what I’ve built!
        </p>
    </section>
  );
}
