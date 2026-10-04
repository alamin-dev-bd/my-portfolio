import { useEffect, useRef, useState } from "react";

const RING_BASE =
  "absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full border transition-[width,height,background-color,border-color,transform,opacity] duration-[450ms] ease-[var(--e-out)]";

const RING_MODE = {
  default:
    "w-[38px] h-[38px] border-[color-mix(in_srgb,var(--fg)_45%,transparent)] bg-transparent",

  link:
    "w-16 h-16 border-[color-mix(in_srgb,var(--fg)_45%,transparent)] bg-[color-mix(in_srgb,var(--fg)_8%,transparent)]",

  cta: "w-[88px] h-[88px] bg-[var(--acc)] border-[var(--acc)]",

  view: "w-[72px] h-[72px] border-[color-mix(in_srgb,var(--acc)_70%,transparent)] bg-[color-mix(in_srgb,var(--acc)_10%,transparent)]",

  hide:
    "w-[38px] h-[38px] border-[color-mix(in_srgb,var(--fg)_45%,transparent)] bg-transparent opacity-0",
  contact:
    "w-[72px] h-[72px] border-[color-mix(in_srgb,var(--acc)_70%,transparent)] bg-[color-mix(in_srgb,var(--acc)_10%,transparent)]",
};

export default function Cursor({ progress = 0 }) {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState("default");
  const [label, setLabel] = useState("View");
  const [down, setDown] = useState(false);
  const [visible, setVisible] = useState(false);
  const [labelColor, setLabelColor] = useState("default");

  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  const mouse = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  // Enable only on devices with a real mouse
  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");

    const update = () => setEnabled(mq.matches);

    update();

    mq.addEventListener("change", update);

    return () => mq.removeEventListener("change", update);
  }, []);

  // Hide native cursor
  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("has-cursor");

    return () => {
      document.body.classList.remove("has-cursor");
    };
  }, [enabled]);

  // Mouse position + animation
  useEffect(() => {
    if (!enabled) return;

    let raf;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      setVisible(true);
    };

    const tick = () => {
      const m = mouse.current;
      const r = ring.current;

      // Smooth ring movement
      r.x += (m.x - r.x) * 0.18;
      r.y += (m.y - r.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${m.x}px, ${m.y}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate3d(${r.x}px, ${r.y}px, 0)`;
      }

      if (labelRef.current) {
        labelRef.current.style.transform =
          `translate3d(${r.x}px, ${r.y}px, 0)`;
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);

    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [enabled]);

  // Hover detection
  useEffect(() => {
    if (!enabled) return;

    const onOver = (e) => {
      const el = e.target.closest?.("[data-cursor], a, button");

      if (!el) {
        setMode("default");
        document.body.classList.add("has-cursor");
        return;
      }

      const type = el.dataset.cursor || "link";

      if (type === "hide") {
        setMode("hide");
        document.body.classList.remove("has-cursor");
        return;
      }

      document.body.classList.add("has-cursor");

      setMode(RING_MODE[type] ? type : "link");

      if (type === "view" || type === "contact") {
        setLabel(el.dataset.cursorLabel || type);
        setLabelColor(el.dataset.cursorLabelColor || "default");
      }
      if (!el) {
        setMode("default");
        setLabelColor("default");
        document.body.classList.add("has-cursor");
        return;
      }
    };

    const onDown = () => setDown(true);
    const onUp = () => setDown(false);

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);

      document.documentElement.removeEventListener(
        "mouseleave",
        onLeave
      );

      document.documentElement.removeEventListener(
        "mouseenter",
        onEnter
      );
    };
  }, [enabled]);

  if (!enabled) return null;

  const hidden = mode === "hide" || !visible;

  const dotHidden =
    hidden ||
    mode === "link" ||
    mode === "cta" ||
    mode === "view" ||
    mode === "contact";

  const ringClass = `${RING_BASE} ${RING_MODE[hidden ? "hide" : mode]
    } ${down ? "scale-[.85]" : ""}`;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-9500"
    >
      {/* Dot */}
      <div
        ref={dotRef}
        className="absolute left-0 top-0 will-change-transform"
      >
        <div
          className={`absolute left-0 top-0 h-1.5 w-1.5
          -translate-x-1/2 -translate-y-1/2 rounded-full
          bg-(--acc)
          transition-opacity duration-300
          ${dotHidden ? "opacity-0" : "opacity-100"}`}
        />
      </div>

      {/* Ring */}
      <div
        ref={ringRef}
        className="absolute left-0 top-0 will-change-transform"
      >
        <div className={ringClass}>
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full -rotate-90"
          >
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="var(--acc)"
              strokeWidth="2.2"
              strokeDasharray="289"
              strokeDashoffset={
                289 - 289 * Math.min(Math.max(progress, 0), 1)
              }
              className="transition-[stroke-dashoffset] duration-350ms ease-(--e-out)"
            />
          </svg>
        </div>
      </div>

      {/* Label */}
      <div
        ref={labelRef}
        className="absolute left-0 top-0 will-change-transform"
      >
        <div
          className={`absolute left-0 top-0
          -translate-x-1/2 -translate-y-1/2
          whitespace-nowrap
          font-(--fz-mono)
          text-[.6rem]
          uppercase
          tracking-[.16em]
          ${labelColor === "white"
              ? "text-white"
              : labelColor === "orange"
                ? "text-(--fg)"
                : "text-[#08080a]"
            }
          transition-opacity duration-300
          ${(mode === "view" || mode === "contact") && !hidden
              ? "opacity-100"
              : "opacity-0"
            }`}
        >
          <span>{label}</span>
        </div>
      </div>
    </div>
  );
}