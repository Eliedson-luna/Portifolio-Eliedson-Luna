"use client";

import { useEffect, useRef, useState } from "react";

export function HorizontalIndicator({ rootClass, trace }: { rootClass?: string, trace?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(0);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const root = rootClass ? document.querySelector(rootClass) as HTMLElement : (document.querySelector("main") as HTMLElement || null);

    const sections = root
      ? (trace ? Array.from(root.querySelectorAll(trace)) as HTMLElement[] : Array.from(root.querySelectorAll("section")) as HTMLElement[])
      : (trace ? Array.from(document.querySelectorAll(trace)) as HTMLElement[] : Array.from(document.querySelectorAll("section")) as HTMLElement[]);

    sectionsRef.current = sections;
    setCount(sections.length);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target as HTMLElement);
            
            if (index >= 0) setActiveIndex(index);
          }
        });
      },
      {
        root, 
        threshold: 0.6, 
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="items-center-safe flex gap-10 z-50">
      {Array.from({ length: count }).map((_, i) => (
        <button
          key={i}
          onClick={() => {
            const section = sectionsRef.current[i];
            section?.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label={`Ir para seção ${i + 1}`}
          className={`w-20 h-3 rounded-md caret-transparent cursor-pointer transition-all mb-5 last-of-type:mb-0 ${activeIndex === i
            ? "bg-text scale-115"
            : "bg-gray-500/40 hover:bg-gray-400/70"
            }`}
        />
      ))}
    </div>
  );
}