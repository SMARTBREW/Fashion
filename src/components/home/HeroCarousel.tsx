"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { GhostButton } from "@/components/ui/GhostButton";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { HeroSlide } from "@/lib/types";

interface HeroCarouselProps {
  slides: HeroSlide[];
}

const SLIDE_DURATION = 30000;
const FADE_DURATION = 1400;

export function HeroCarousel({ slides }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [overlayOpacity, setOverlayOpacity] = useState(0);
  const [textVisible, setTextVisible] = useState(true);
  const transitioning = useRef(false);
  const currentRef = useRef(0);

  currentRef.current = current;

  const transitionTo = useCallback(
    (nextIndex: number) => {
      if (transitioning.current || slides.length <= 1) return;
      transitioning.current = true;

      setTextVisible(false);
      setOverlayOpacity(1);

      setTimeout(() => {
        setCurrent(nextIndex);
        setTextVisible(true);

        requestAnimationFrame(() => {
          setOverlayOpacity(0);
          setTimeout(() => {
            transitioning.current = false;
          }, FADE_DURATION);
        });
      }, FADE_DURATION);
    },
    [slides.length],
  );

  const goToNext = useCallback(() => {
    transitionTo((currentRef.current + 1) % slides.length);
  }, [slides.length, transitionTo]);

  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;

    const timer = setInterval(goToNext, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [isPlaying, goToNext, slides.length]);

  const slide = slides[current];

  return (
    <section className="relative h-[calc(100vh-68px)] min-h-[540px] w-full overflow-hidden bg-black md:h-[calc(100vh-72px)]">
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 ${i === current ? "z-0" : "z-0 opacity-0"}`}
          aria-hidden={i !== current}
        >
          <PlaceholderImage
            src={s.image}
            alt={s.imageAlt}
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        </div>
      ))}

      <div
        className="pointer-events-none absolute inset-0 z-10 bg-black transition-opacity ease-in-out"
        style={{
          opacity: overlayOpacity,
          transitionDuration: `${FADE_DURATION}ms`,
        }}
      />

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="mx-auto w-full max-w-[1440px] px-6 md:px-10">
          <div
            className="max-w-md text-white transition-opacity ease-in-out md:max-w-lg"
            style={{
              opacity: textVisible ? 1 : 0,
              transitionDuration: `${FADE_DURATION / 2}ms`,
            }}
          >
            <div className="mb-3 flex items-center gap-4 md:mb-4">
              <span className="h-px w-12 bg-white/75 md:w-16" />
              <h1 className="font-serif shrink-0 text-[46px] leading-none tracking-[0.14em] uppercase md:text-[58px]">
                {slide.title}
              </h1>
              <span className="h-px w-12 bg-white/75 md:w-16" />
            </div>

            <p className="text-[10px] tracking-[0.34em] uppercase md:text-[11px]">
              {slide.subtitle}
            </p>

            <div className="mt-6 space-y-0 md:mt-7">
              <p className="text-[11px] leading-relaxed tracking-[0.12em] uppercase md:text-[12px]">
                {slide.tagline}
              </p>
              <p className="font-script -mt-1 text-[42px] leading-[1.1] normal-case tracking-normal md:text-[52px]">
                {slide.taglineScript}
              </p>
              <p className="-mt-1 text-[11px] tracking-[0.12em] uppercase md:text-[12px]">
                JOURNEYS
              </p>
            </div>

            <p className="mt-5 text-[9px] tracking-[0.34em] uppercase md:mt-6 md:text-[10px]">
              {slide.description}
            </p>

            <div className="mt-7 md:mt-8">
              <GhostButton href={slide.href}>{slide.cta}</GhostButton>
            </div>
          </div>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="absolute right-6 bottom-6 z-30 flex items-center gap-2.5 md:right-10 md:bottom-8">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                if (i !== current && !transitioning.current) transitionTo(i);
              }}
              className={`h-[7px] w-[7px] rounded-full transition-colors ${
                i === current ? "bg-white" : "bg-white/35 hover:bg-white/60"
              }`}
            />
          ))}
          <button
            type="button"
            aria-label={isPlaying ? "Pause carousel" : "Play carousel"}
            onClick={() => setIsPlaying((p) => !p)}
            className="ml-1.5 text-white/70 transition-colors hover:text-white"
          >
            {isPlaying ? (
              <Pause size={14} strokeWidth={1.5} />
            ) : (
              <Play size={14} strokeWidth={1.5} />
            )}
          </button>
        </div>
      )}
    </section>
  );
}
