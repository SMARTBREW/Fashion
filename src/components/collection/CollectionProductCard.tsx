import Link from "next/link";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { CollectionProduct } from "@/lib/collection-types";
import { formatCollectionPrice } from "@/lib/collection-data";

interface CollectionProductCardProps {
  product: CollectionProduct;
}

function CornerMarks() {
  const corner =
    "pointer-events-none absolute z-10 h-[10px] w-[10px] border-neutral-500/70";
  return (
    <>
      <span className={`${corner} top-0 left-0 border-t border-l`} />
      <span className={`${corner} top-0 right-0 border-t border-r`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} bottom-0 right-0 border-b border-r`} />
    </>
  );
}

export function CollectionProductCard({ product }: CollectionProductCardProps) {
  return (
    <Link href={product.href} className="group block">
      <div className="relative border border-neutral-400/50 p-[5px]">
        <CornerMarks />
        <div className="border border-white/90 p-[4px]">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#d4d2ce]">
            <PlaceholderImage
              src={product.image}
              alt={product.imageAlt}
              sizes="(max-width: 768px) 50vw, 33vw"
              className="!object-contain !object-center"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 px-1 text-center">
        <p className="font-serif text-[11px] tracking-[0.1em] uppercase">
          {product.brand}
        </p>
        <h3 className="font-serif mx-auto mt-2 max-w-[240px] text-[11px] leading-[1.45] tracking-[0.02em] uppercase md:text-[12px]">
          {product.name}
        </h3>
        <p className="font-serif mt-2 text-[11px] tracking-[0.03em] text-neutral-900 md:text-[12px]">
          {formatCollectionPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
