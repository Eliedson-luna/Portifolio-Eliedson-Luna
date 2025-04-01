"use client";

import React, { ReactNode, useEffect, useRef, useState } from "react";

export default function Carrousel({ children }: { children: ReactNode }) {
    const slidesRef = useRef<HTMLDivElement>(null);
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const totalSlides = slidesRef.current?.children.length || 0;

        if (totalSlides === 0) return;

        const interval = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full overflow-hidden relative flex justify-center rounded">
            <div
                ref={slidesRef}
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
                {React.Children.map(children, (child) => (
                    <div className="w-full flex-shrink-0 flex justify-center">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
}
