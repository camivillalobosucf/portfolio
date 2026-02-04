// Reusable scroll-triggered fade-up animation wrapper

import { useInView } from "../hooks/useInView";

export default function Reveal({ children, className = "", delay = 0 }) {
  const [ref, inView] = useInView();

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "reveal-show" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
