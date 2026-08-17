import { CollectionCard } from "@/components/ui/CollectionCard";
import type { CollectionItem } from "@/lib/types";

interface CollectionGridProps {
  items: CollectionItem[];
  priority?: boolean;
  id?: string;
}

export function CollectionGrid({ items, priority = false, id }: CollectionGridProps) {
  return (
    <section
      id={id}
      className="mx-auto max-w-[1400px] px-6 py-8 md:px-10 md:py-12"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {items.map((item) => (
          <CollectionCard key={item.id} item={item} priority={priority} />
        ))}
      </div>
    </section>
  );
}
