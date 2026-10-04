import { useEffect, useRef } from 'react';


const HeroBackground = () => {
  const rootRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const hero = rootRef.current?.parentElement;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    // no cursor on touch devices -> glow just rests at its default spot
    if (!window.matchMedia('(hover: hover)').matches) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const SIZE = 520; // keep in sync with .hero-cursor-glow width/height
    const start = hero.getBoundingClientRect();
    let x = start.width * 0.65;
    let y = start.height * 0.3;
    let tx = x;
    let ty = y;
    let raf = 0;

    const paint = () => {
      glow.style.transform = `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0)`;
    };

    const tick = () => {
      // ease toward the cursor (0.08 = lazier, 0.2 = snappier)
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      paint();
      if (Math.abs(tx - x) > 0.3 || Math.abs(ty - y) > 0.3) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };

    const onMove = (e) => {
      const r = hero.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      if (reduceMotion) {
        x = tx;
        y = ty;
        paint();
      } else if (!raf) {
        raf = requestAnimationFrame(tick);
      }
    };

    paint();
    hero.addEventListener('mousemove', onMove);
    return () => {
      hero.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden dark:block"
    >
      {/* static blurred blobs */}
      <span className="hero-blob hero-blob-orange" />
      <span className="hero-blob hero-blob-red" />
      <span className="hero-blob hero-blob-amber" />

      {/* faded grid */}
      <span className="hero-grid-lines" />

      {/* cursor glow */}
      <span ref={glowRef} className="hero-cursor-glow" />
    </div>
  );
};

export default HeroBackground;
