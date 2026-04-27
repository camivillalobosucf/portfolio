// Responsive navbar with desktop (sticky top) and mobile (fixed bottom) layouts

import Logo from "../assets/cami_logo.svg?react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      setScrolled(scrollY > 5);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Shared click animation class for nav links
  const navLinkClass = `
    hover:text-neutral-800
    focus-visible:text-neutral-800 focus-visible:outline-none focus-visible:underline
    transition-all duration-200
    active:scale-95
  `;

  const mobileNavLinkClass = `
    flex flex-col items-center gap-1
    text-neutral-100 hover:text-white
    focus-visible:text-white focus-visible:outline-none
    transition-all duration-200
    active:scale-90
  `;

  return (
    <>
      {/* Desktop navbar - sticky top */}
      <nav
        className="hidden md:block sticky top-0 z-50 px-4 sm:px-6 pt-4"
        aria-label="Main navigation"
      >
        <div
          className={`
            mx-auto w-full max-w-6xl flex items-center justify-between
            text-neutral-700 transition-all duration-300
            ${scrolled
              ? "rounded-2xl sm:rounded-3xl bg-white/35 backdrop-blur-xl border border-white/50 shadow-md py-2 sm:py-3 px-4 sm:px-6"
              : "bg-transparent py-4 sm:py-6 px-4 sm:px-6"
            }
          `}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded"
          >
            <Logo
              className="w-24 sm:w-28 md:w-32 fill-neutral-700"
              aria-label="Cami logo"
              role="img"
            />
          </button>

          <ul className="flex gap-3 sm:gap-4 md:gap-6 bg-neutral-400/30 text-xs sm:text-sm rounded-full px-4 sm:px-5 md:px-6 py-2 backdrop-blur-sm">
            <li>
              <a href="#projects" className={navLinkClass}>
                Product Design
              </a>
            </li>
            <li>
              <a href="#graphic-design" className={navLinkClass}>
                Graphic Design
              </a>
            </li>
            <li>
              <a href="#about" className={navLinkClass}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className={navLinkClass}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile logo - centered at top */}
      <div className="md:hidden pt-6 pb-4 px-6 flex justify-center">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 rounded"
        >
          <Logo
            className="w-40 fill-neutral-700"
            aria-label="Cami logo"
            role="img"
          />
        </button>
      </div>

      {/* Mobile navbar - fixed bottom */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
        aria-label="Mobile navigation"
      >
        <div
          className="mx-8 mb-3 rounded-2xl bg-neutral-700/70 backdrop-blur-xl border border-white/10 shadow-lg"
          style={{ marginBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}
        >
          <ul className="flex justify-around items-center py-3 px-2">
            <li className="flex-1">
              <a href="#projects" className={mobileNavLinkClass}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span className="text-xs font-medium">Product</span>
              </a>
            </li>

            <li className="flex-1">
              <a href="#graphic-design" className={mobileNavLinkClass}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 012.828 0l.172.172a2 2 0 010 2.828L12 16H9v-3z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18" />
                </svg>
                <span className="text-xs font-medium">Design</span>
              </a>
            </li>

            <li className="flex-1">
              <a href="#about" className={mobileNavLinkClass}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs font-medium">About</span>
              </a>
            </li>

            <li className="flex-1">
              <a href="#contact" className={mobileNavLinkClass}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-medium">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
