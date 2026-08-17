"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import type { AnnouncementItem } from "@/lib/types";

interface AnnouncementTickerProps {
  items: AnnouncementItem[];
}

export function AnnouncementTicker({ items }: AnnouncementTickerProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [items.length]);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <div className="flex items-center justify-center gap-3 text-white md:gap-4">
      <button
        type="button"
        onClick={prev}
        aria-label="Previous announcement"
        className="opacity-60 transition-opacity hover:opacity-100"
      >
        <ChevronLeft size={13} strokeWidth={1.5} />
      </button>
      <p className="min-w-[200px] text-center font-serif text-[12px] tracking-[0.12em] underline underline-offset-[5px] md:min-w-[240px] md:text-[13px]">
        {items[index].text}
      </p>
      <button
        type="button"
        onClick={next}
        aria-label="Next announcement"
        className="opacity-60 transition-opacity hover:opacity-100"
      >
        <ChevronRight size={13} strokeWidth={1.5} />
      </button>
    </div>
  );
}
