import { GhostButton } from "@/components/ui/GhostButton";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

interface HallOfFameSectionProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  cta: string;
  href: string;
}

export function HallOfFameSection({
  image,
  imageAlt,
  title,
  description,
  cta,
  href,
}: HallOfFameSectionProps) {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-8 md:px-10 md:py-12">
      <article className="group relative aspect-[1400/834] overflow-hidden border border-black">
        <div className="absolute inset-[5px] border border-white">
          <PlaceholderImage
            src={image}
            alt={imageAlt}
            sizes="100vw"
            className="transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 w-[88%] max-w-[480px] -translate-x-1/2 bg-black/60 px-6 py-7 text-center text-white md:bottom-10 md:px-8 md:py-8">
          <h2 className="font-serif text-[26px] tracking-[0.08em] uppercase md:text-[32px]">
            {title}
          </h2>
          <p className="font-serif mt-3 text-[13px] leading-relaxed italic text-white/90 md:text-[14px]">
            {description}
          </p>
          <div className="mt-5">
            <GhostButton href={href}>{cta}</GhostButton>
          </div>
        </div>
      </article>
    </section>
  );
}
