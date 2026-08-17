"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { BestSellersData } from "@/lib/types";

interface BestSellersProps {
  data: BestSellersData;
}

type Tab = "men" | "women";

function formatPrice(price: number) {
  return `₹ ${price.toLocaleString("en-IN")}`;
}

export function BestSellers({ data }: BestSellersProps) {
  const [activeTab, setActiveTab] = useState<Tab>("men");
  const scrollRef = useRef<HTMLDivElement>(null);

  const products = activeTab === "men" ? data.men : data.women;

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <h2 className="font-serif text-center text-[22px] tracking-[0.06em] uppercase md:text-[26px]">
          Our Best Sellers
        </h2>

        <div className="mt-6 flex justify-center gap-8 md:mt-8 md:gap-10">
          {(["men", "women"] as Tab[]).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`pb-1 text-[10px] tracking-[0.22em] uppercase transition-colors md:text-[11px] ${
                activeTab === tab
                  ? "border-b border-black text-black"
                  : "text-neutral-500 hover:text-black"
              }`}
            >
              {tab === "men" ? "MEN" : "WOMEN"}
            </button>
          ))}
        </div>

        <div className="relative mt-8 md:mt-10">
          <button
            type="button"
            aria-label="Scroll products left"
            onClick={() => scroll("left")}
            className="absolute top-[38%] -left-1 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 transition-colors hover:border-black hover:text-black md:-left-4 md:h-9 md:w-9"
          >
            <ChevronLeft size={16} strokeWidth={1.5} />
          </button>

          <div
            className="border border-dashed border-[#c9a96e]/70 px-4 py-6 md:px-8 md:py-8"
          >
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] md:gap-6 [&::-webkit-scrollbar]:hidden"
            >
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="group w-[calc(50%-10px)] shrink-0 sm:w-[calc(33.333%-16px)] md:w-[calc(25%-18px)]"
                >
                  <div className="relative aspect-square overflow-hidden bg-neutral-100">
                    <PlaceholderImage
                      src={product.image}
                      alt={product.imageAlt}
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <button
                      type="button"
                      aria-label="Add to wishlist"
                      onClick={(e) => e.preventDefault()}
                      className="absolute top-3 right-3 text-[#c9a96e] transition-colors hover:text-[#a8864f]"
                    >
                      <Heart size={16} strokeWidth={1.25} />
                    </button>
                  </div>
                  <p className="mt-4 text-center text-[10px] leading-snug tracking-[0.08em] uppercase md:text-[11px]">
                    {product.name}
                  </p>
                  <p className="mt-1.5 text-center text-[11px] text-neutral-700 md:text-[12px]">
                    {formatPrice(product.price)}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Scroll products right"
            onClick={() => scroll("right")}
            className="absolute top-[38%] -right-1 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-300 bg-white text-neutral-600 transition-colors hover:border-black hover:text-black md:-right-4 md:h-9 md:w-9"
          >
            <ChevronRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
