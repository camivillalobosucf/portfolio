import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el || el.dataset.animated) return;
    el.dataset.animated = "true";

    // Typewriter effect
    const text = el.textContent;
    el.textContent = "";
    let i = 0;
    let typingInterval = null;

    const startTyping = () => {
      typingInterval = setInterval(() => {
        el.textContent += text[i];
        i++;
        if (i === text.length) {
          clearInterval(typingInterval);
          // Remove cursor after typing completes
          setTimeout(() => {
            el.classList.add("typing-complete");
          }, 1900);
        }
      }, 130);
    };

    startTyping();

    // Fade-up animation for subtitle
    const loadAnime = async () => {
      try {
        const mod = await import("https://cdn.jsdelivr.net/npm/animejs@3.2.2/lib/anime.es.js");
        const anime = mod.default || mod;
        anime({
          targets: ".subtitle",
          opacity: [0, 1],
          translateY: ["0.5em", 0],
          easing: "easeOutExpo",
          duration: 2000,
          delay: 1200,
        });
      } catch (e) {
        console.error("Failed to load anime.js:", e);
        // Fallback: show subtitle with CSS animation
        const subtitle = document.querySelector(".subtitle");
        if (subtitle) {
          subtitle.style.animation = "fadeUp 2s ease-out 1.2s forwards";
        }
      }
    };

    loadAnime();

  }, []);

  return (
<section className="hero-animate flex flex-col items-center justify-center text-center select-none pt-20 pb-0">      <h1
        ref={titleRef}
        className="ml16 text-5xl sm:text-6xl font-semibold text-neutral-700 overflow-hidden"
      >
        I am Cami
      </h1>

      <p className="subtitle text-lg sm:text-xl mt-2 text-neutral-600 opacity-0">
        and this is what I've built!
      </p>
    </section>
  );
}