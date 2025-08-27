'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function Slide() {
  const slides: string[] = [
    '/home1.webp','/home2.webp','/home3.webp','/home4.webp','/home5.webp'
  ];

  const [index, setIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const delay: number = 3000;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, delay);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, isPaused, slides.length]);

  return (
    <section className="w-full relative overflow-hidden my-10 select-none">
      <div
        className="w-full h-[25vh] sm:h-[60vh] md:h-[60vh] lg:h-[65vh] flex transition-transform duration-700"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-roledescription="carousel"
      >
        <div
          className="flex w-full h-full"
          style={{ transform: `translateX(-${index * 100}%)`, transition: 'transform 700ms ease' }}
        >
          {slides.map((src, i) => (
            <div key={i} className="w-full flex-shrink-0 h-full relative">
              <Image
                src={src}
                alt={`slide-${i}`}
                fill
                priority={i === 0}
                placeholder="empty"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
