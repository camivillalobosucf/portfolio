// Root app component with layout, navigation, and scroll-to-top button

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll-to-top button after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      setShowScrollTop(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-[100dvh] bg-oval flex justify-center">
      <div className="w-full max-w-7xl min-h-[100dvh] px-4 sm:px-6 flex flex-col">
        <Navbar />

        <main id="main-content" className="grainy flex-1 flex flex-col pb-20 sm:pb-0">
          <Hero />
          <Cards />
          <About />
          <Contact />

          <footer className="mt-4 pb-10 sm:pb-4 text-center text-sm text-neutral-500">
            Developed by Camila Villalobos © 2026
          </footer>
        </main>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`
          fixed z-50
          bottom-24 right-4 sm:bottom-8 sm:right-8
          h-11 w-11 sm:h-12 sm:w-12 rounded-full
          bg-white/50 hover:bg-white/70
          backdrop-blur-md border border-white/50
          text-neutral-700 hover:text-neutral-900
          flex items-center justify-center
          shadow-lg hover:shadow-xl
          transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2
          ${showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
