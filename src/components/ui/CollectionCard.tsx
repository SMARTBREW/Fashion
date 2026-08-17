import Link from "next/link";
import type { CollectionItem } from "@/lib/types";
import { PlaceholderImage } from "./PlaceholderImage";

interface CollectionCardProps {
  item: CollectionItem;
  priority?: boolean;
}

export function CollectionCard({ item, priority = false }: CollectionCardProps) {
  return (
    <Link href={item.href} className="group block">
      <article className="relative aspect-[1400/1807] overflow-hidden border border-black">
        <div className="absolute inset-[5px] border border-white">
          <PlaceholderImage
            src={item.image}
            alt={item.imageAlt}
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 w-[78%] max-w-[280px] -translate-x-1/2 bg-black/60 px-5 py-5 text-center text-white md:bottom-8 md:py-6">
          <p className="text-[9px] tracking-[0.28em] uppercase md:text-[10px]">
            {item.subtitle}
          </p>
          <h3 className="font-serif mt-1.5 text-[28px] leading-none tracking-[0.06em] uppercase md:text-[34px]">
            {item.title}
          </h3>
          <p
            className={`mt-4 text-[9px] tracking-[0.22em] uppercase md:text-[10px] ${
              item.ctaVariant === "outline"
                ? "mx-auto inline-block border border-white px-4 py-1.5"
                : ""
            }`}
          >
            {item.cta}
          </p>
        </div>
      </article>
    </Link>
  );
}
