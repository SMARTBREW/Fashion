import Link from "next/link";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { CategoryItem } from "@/lib/types";

interface ShopByCategoryProps {
  categories: CategoryItem[];
}

export function ShopByCategory({ categories }: ShopByCategoryProps) {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-10">
        <h2 className="text-center text-[11px] tracking-[0.28em] uppercase md:text-[12px]">
          Shop By Category
        </h2>

        <div className="mt-10 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max justify-center gap-8 px-2 md:gap-10 lg:gap-12">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group flex w-[88px] flex-col items-center md:w-[100px]"
              >
                <div className="relative h-[88px] w-[88px] overflow-hidden rounded-full md:h-[100px] md:w-[100px]">
                  <PlaceholderImage
                    src={category.image}
                    alt={category.imageAlt}
                    sizes="100px"
                    className="transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                <span className="mt-3 text-center text-[9px] leading-tight tracking-[0.14em] uppercase md:text-[10px]">
                  {category.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
