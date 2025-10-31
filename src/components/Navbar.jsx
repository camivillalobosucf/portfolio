// src/components/Navbar.jsx
import Logo from "../assets/cami_logo.svg?react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 text-neutral-600" aria-label="Main navigation">
      <Logo className="w-32 fill-neutral-700" aria-label="Cami logo" />
      <ul className="flex gap-6 bg-neutral-400/30 text-sm rounded-full px-6 py-2 backdrop-blur-sm">
        <li><a href="#projects" className="hover:text-neutral-800 focus-visible:text-neutral-800 focus-visible:outline-none transition-colors">Projects</a></li>
        <li><a href="#about" className="hover:text-neutral-800 focus-visible:text-neutral-800 focus-visible:outline-none transition-colors">About</a></li>
        <li><a href="#contact" className="hover:text-neutral-800 focus-visible:text-neutral-800 focus-visible:outline-none transition-colors">Contact</a></li>
      </ul>
    </nav>
  );
}