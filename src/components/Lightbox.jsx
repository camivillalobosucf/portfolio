// Fullscreen lightbox for graphic design gallery
// Zoom: scroll wheel • pinch (mobile) • double-click/tap to toggle
// Pan: drag when zoomed (mouse or single finger)
// Navigate: ← → arrow buttons • dot indicators • keyboard ← → • swipe (when not zoomed)
// Dismiss: close button • Esc • click backdrop

import { useEffect, useRef } from "react";

const MAX_SCALE = 4;

const btnClass =
  "h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur border border-white/20 text-white flex items-center justify-center transition-all duration-200 active:scale-90 disabled:opacity-30 disabled:cursor-not-allowed shrink-0";

export default function Lightbox({ project, imageIndex, onClose, onPrev, onNext, onJumpTo }) {
  const total = project.images.length;

  // DOM refs
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  // Zoom/pan state — kept as refs to avoid re-render on every gesture frame
  const zoom = useRef({ scale: 1, x: 0, y: 0 });
  const drag = useRef({ active: false, startClientX: 0, startClientY: 0, originX: 0, originY: 0 });
  const pinch = useRef({ active: false, startDist: 0, startScale: 1 });
  const touch = useRef({ count: 0, swipeStartX: null, swipeStartY: null });
  const lastTap = useRef(0);

  // Keep latest callbacks in refs so event listeners never go stale
  const onNextRef = useRef(onNext);
  const onPrevRef = useRef(onPrev);
  useEffect(() => { onNextRef.current = onNext; }, [onNext]);
  useEffect(() => { onPrevRef.current = onPrev; }, [onPrev]);

  // Apply CSS transform directly to the img element
  const applyTransform = (animated = false) => {
    const img = imgRef.current;
    if (!img) return;
    const { scale, x, y } = zoom.current;
    img.style.transition = animated ? "transform 0.22s ease" : "none";
    img.style.transform = scale === 1 ? "" : `scale(${scale}) translate(${x / scale}px, ${y / scale}px)`;
    img.style.cursor = scale > 1 ? (drag.current.active ? "grabbing" : "grab") : "";
  };

  // Reset zoom whenever the displayed image changes
  useEffect(() => {
    zoom.current = { scale: 1, x: 0, y: 0 };
    const img = imgRef.current;
    if (img) {
      img.style.transition = "none";
      img.style.transform = "";
      img.style.cursor = "";
    }
  }, [imageIndex]);

  // Keyboard navigation + scroll lock + body class for navbar/scroll-top hiding
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrevRef.current();
      else if (e.key === "ArrowRight") onNextRef.current();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    document.body.classList.add("lightbox-open");
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
      document.body.classList.remove("lightbox-open");
    };
  }, [onClose]);

  // Attach non-passive wheel + touch + mouse events to the image container
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const getDist = (touches) => {
      const dx = touches[0].clientX - touches[1].clientX;
      const dy = touches[0].clientY - touches[1].clientY;
      return Math.sqrt(dx * dx + dy * dy);
    };

    // ── Wheel zoom ──────────────────────────────────────────────────────────
    const onWheel = (e) => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.12 : 0.9;
      const next = Math.min(MAX_SCALE, Math.max(1, zoom.current.scale * factor));
      if (next === 1) zoom.current = { scale: 1, x: 0, y: 0 };
      else zoom.current.scale = next;
      applyTransform();
    };

    // ── Mouse drag ──────────────────────────────────────────────────────────
    const onMouseDown = (e) => {
      if (zoom.current.scale <= 1) return;
      drag.current = {
        active: true,
        startClientX: e.clientX,
        startClientY: e.clientY,
        originX: zoom.current.x,
        originY: zoom.current.y,
      };
      applyTransform();
      e.preventDefault();
    };

    const onMouseMove = (e) => {
      if (!drag.current.active) return;
      zoom.current.x = drag.current.originX + (e.clientX - drag.current.startClientX);
      zoom.current.y = drag.current.originY + (e.clientY - drag.current.startClientY);
      applyTransform();
    };

    const onMouseUp = () => {
      drag.current.active = false;
      applyTransform();
    };

    // ── Double-click to toggle zoom ─────────────────────────────────────────
    const onDblClick = () => {
      if (zoom.current.scale > 1) {
        zoom.current = { scale: 1, x: 0, y: 0 };
      } else {
        zoom.current = { scale: 2.5, x: 0, y: 0 };
      }
      applyTransform(true);
    };

    // ── Touch: pinch-zoom + pan + swipe + double-tap ─────────────────────────
    const onTouchStart = (e) => {
      touch.current.count = e.touches.length;

      if (e.touches.length === 2) {
        e.preventDefault();
        pinch.current = {
          active: true,
          startDist: getDist(e.touches),
          startScale: zoom.current.scale,
        };
        touch.current.swipeStartX = null; // cancel swipe detection
      } else if (e.touches.length === 1) {
        const t = e.touches[0];
        touch.current.swipeStartX = t.clientX;
        touch.current.swipeStartY = t.clientY;

        if (zoom.current.scale > 1) {
          e.preventDefault();
          drag.current = {
            active: true,
            startClientX: t.clientX,
            startClientY: t.clientY,
            originX: zoom.current.x,
            originY: zoom.current.y,
          };
        }

        // Double-tap to toggle zoom
        const now = Date.now();
        if (now - lastTap.current < 300) {
          if (zoom.current.scale > 1) {
            zoom.current = { scale: 1, x: 0, y: 0 };
          } else {
            zoom.current = { scale: 2.5, x: 0, y: 0 };
          }
          applyTransform(true);
          lastTap.current = 0;
        } else {
          lastTap.current = now;
        }
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length === 2 && pinch.current.active) {
        e.preventDefault();
        const newScale = Math.min(
          MAX_SCALE,
          Math.max(1, pinch.current.startScale * (getDist(e.touches) / pinch.current.startDist))
        );
        zoom.current.scale = newScale;
        if (newScale <= 1) { zoom.current.x = 0; zoom.current.y = 0; }
        applyTransform();
      } else if (e.touches.length === 1 && zoom.current.scale > 1 && drag.current.active) {
        e.preventDefault();
        const t = e.touches[0];
        zoom.current.x = drag.current.originX + (t.clientX - drag.current.startClientX);
        zoom.current.y = drag.current.originY + (t.clientY - drag.current.startClientY);
        applyTransform();
      }
    };

    const onTouchEnd = (e) => {
      if (e.touches.length < 2) pinch.current.active = false;
      if (e.touches.length === 0) {
        drag.current.active = false;
        applyTransform();

        // Swipe to navigate — only when not zoomed, single touch, horizontal swipe
        if (
          zoom.current.scale <= 1 &&
          touch.current.count === 1 &&
          touch.current.swipeStartX !== null
        ) {
          const dx = e.changedTouches[0].clientX - touch.current.swipeStartX;
          const dy = Math.abs(e.changedTouches[0].clientY - touch.current.swipeStartY);
          if (Math.abs(dx) > 50 && dy < 100) {
            if (dx < 0) onNextRef.current();
            else onPrevRef.current();
          }
        }

        touch.current.swipeStartX = null;
        touch.current.count = 0;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("dblclick", onDblClick);
    el.addEventListener("touchstart", onTouchStart, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("dblclick", onDblClick);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []); // attach once; callbacks accessed via refs

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-neutral-900/85 backdrop-blur-sm p-4 sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div
        className="w-full max-w-4xl flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar: close button */}
        <div className="flex justify-end w-full">
          <button onClick={onClose} className={btnClass} aria-label="Close lightbox">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Image container — zoom/pan gestures attached here */}
        <div
          ref={containerRef}
          className="w-full h-[58vh] sm:h-[68vh] rounded-2xl overflow-hidden bg-neutral-800/60 border border-white/10 select-none"
          style={{ touchAction: "none" }}
        >
          <img
            ref={imgRef}
            key={imageIndex}
            src={project.images[imageIndex]}
            alt={`${project.title} — image ${imageIndex + 1} of ${total}`}
            className="w-full h-full object-cover"
            draggable={false}
            style={{ transformOrigin: "center center", willChange: "transform" }}
          />
        </div>

        {/* Controls row: prev / title + dots / next */}
        <div className="flex items-center justify-between w-full gap-3">
          <button onClick={onPrev} disabled={total <= 1} className={btnClass} aria-label="Previous image">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex flex-col items-center gap-2 min-w-0 flex-1">
            <p className="text-white/90 text-sm sm:text-base font-medium text-center leading-snug">
              {project.title}
            </p>
            {total > 1 && (
              <div className="flex gap-2 items-center">
                {project.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => onJumpTo(i)}
                    className={`h-2 rounded-full transition-all duration-200 ${
                      i === imageIndex ? "w-5 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <button onClick={onNext} disabled={total <= 1} className={btnClass} aria-label="Next image">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
