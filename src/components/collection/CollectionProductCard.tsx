import Link from "next/link";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { CollectionProduct } from "@/lib/collection-types";
import { formatCollectionPrice } from "@/lib/collection-data";

interface CollectionProductCardProps {
  product: CollectionProduct;
  compact?: boolean;
}

export function CollectionProductCard({
  product,
  compact = false,
}: CollectionProductCardProps) {
  return (
    <Link href={product.href} className="group block">
      <article
        className={`border border-neutral-300 bg-[#eceae6] ${
          compact ? "p-3" : "p-4 md:p-5"
        }`}
      >
        <div
          className={`relative mx-auto overflow-hidden bg-[#e3e1dd] ${
            compact ? "aspect-[4/5] max-w-[220px]" : "aspect-[4/5] max-w-[280px]"
          }`}
        >
          <PlaceholderImage
            src={product.image}
            alt={product.imageAlt}
            sizes="(max-width: 768px) 50vw, 280px"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <div className="mt-4 text-center">
          <p className="text-[10px] tracking-[0.18em] uppercase">{product.brand}</p>
          <h3 className="font-serif mt-2 text-[11px] leading-snug tracking-[0.04em] uppercase md:text-[12px]">
            {product.name}
          </h3>
          <p className="mt-2 text-[10px] tracking-[0.06em] text-neutral-700 md:text-[11px]">
            {formatCollectionPrice(product.price)}
          </p>
        </div>
      </article>
    </Link>
  );
}
