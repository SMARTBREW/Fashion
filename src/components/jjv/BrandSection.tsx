import type { BrandSectionData } from "@/lib/types";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function BrandSection({
  image,
  imageAlt,
  title,
  description,
  signature,
}: BrandSectionData) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-8 md:px-10 md:py-12">
      <div className="relative overflow-hidden border border-neutral-300">
        <div className="relative aspect-[1600/801] w-full">
          <PlaceholderImage
            src={image}
            alt={imageAlt}
            sizes="100vw"
            priority
          />
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 w-[92%] max-w-[640px] -translate-x-1/2 bg-black/65 px-6 py-7 text-center text-white md:bottom-10 md:px-10 md:py-9">
          <h2 className="font-serif text-[26px] tracking-[0.1em] uppercase md:text-[32px]">
            {title}
          </h2>
          <p className="mt-3 text-[12px] leading-[1.7] text-white/92 md:text-[13px]">
            {description}
          </p>
          <p className="font-serif mt-5 text-[15px] tracking-[0.18em] uppercase md:text-[17px]">
            {signature}
          </p>
        </div>
      </div>
    </section>
  );
}
