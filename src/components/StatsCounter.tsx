"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function Stat({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const count = useCountUp(value, active);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1">
      <span className="font-serif text-4xl text-accent-green sm:text-5xl">
        {count}
        {value >= 30 && "+"}
      </span>
      <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-foreground/60">
        {label}
      </span>
    </div>
  );
}

export default function StatsCounter({
  trips,
  countries,
}: {
  trips: number;
  countries: number;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
      <Stat value={trips} label="Trips documented" />
      <Stat value={countries} label="Countries explored" />
    </div>
  );
}
