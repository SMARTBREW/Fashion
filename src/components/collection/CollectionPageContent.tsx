"use client";

import { LayoutGrid, LayoutList, Rows3 } from "lucide-react";
import {
  collectionFilters,
  collectionProducts,
  matchesPriceRange,
  sortOptions,
  type SortValue,
} from "@/lib/collection-data";
import { CollectionFilters } from "./CollectionFilters";
import { CollectionProductCard } from "./CollectionProductCard";
import { useMemo, useState } from "react";

type ViewMode = "grid-3" | "grid-4" | "list";

export function CollectionPageContent() {
  const [sort, setSort] = useState<SortValue>("featured");
  const [view, setView] = useState<ViewMode>("grid-3");
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});

  const toggleFilter = (groupId: string, option: string) => {
    setSelectedFilters((prev) => {
      const current = prev[groupId] ?? [];
      const next = current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option];
      return { ...prev, [groupId]: next };
    });
  };

  const filteredProducts = useMemo(() => {
    let items = [...collectionProducts];

    const priceFilters = selectedFilters.price ?? [];
    const typeFilters = selectedFilters.type ?? [];
    const colorFilters = selectedFilters.color ?? [];
    const categoryFilters = selectedFilters.category ?? [];
    const sizeFilters = selectedFilters.size ?? [];

    if (priceFilters.length > 0) {
      items = items.filter((item) =>
        priceFilters.some((range) => matchesPriceRange(item.price, range)),
      );
    }
    if (typeFilters.length > 0) {
      items = items.filter((item) => typeFilters.includes(item.type));
    }
    if (colorFilters.length > 0) {
      items = items.filter((item) => colorFilters.includes(item.color));
    }
    if (categoryFilters.length > 0) {
      items = items.filter((item) => categoryFilters.includes(item.category));
    }
    if (sizeFilters.length > 0) {
      items = items.filter((item) => sizeFilters.includes(item.size));
    }

    switch (sort) {
      case "price-asc":
        items.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        items.sort((a, b) => b.price - a.price);
        break;
      case "name-asc":
        items.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return items;
  }, [selectedFilters, sort]);

  const gridClass =
    view === "grid-4"
      ? "grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-3 xl:grid-cols-4"
      : view === "list"
        ? "grid grid-cols-1 gap-y-10"
        : "grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 xl:grid-cols-3";

  return (
    <div className="bg-cream">
      <div className="border-b border-neutral-300 bg-cream">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-4 md:px-8 lg:px-10">
          <div className="flex items-center gap-3 text-neutral-700">
            <button
              type="button"
              aria-label="3 column grid"
              onClick={() => setView("grid-3")}
              className={`transition-colors ${view === "grid-3" ? "text-black" : "hover:text-black"}`}
            >
              <LayoutGrid size={16} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="4 column grid"
              onClick={() => setView("grid-4")}
              className={`transition-colors ${view === "grid-4" ? "text-black" : "hover:text-black"}`}
            >
              <Rows3 size={16} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="List view"
              onClick={() => setView("list")}
              className={`transition-colors ${view === "list" ? "text-black" : "hover:text-black"}`}
            >
              <LayoutList size={16} strokeWidth={1.5} />
            </button>
          </div>

          <p className="font-serif text-[12px] tracking-[0.08em] uppercase">
            {filteredProducts.length} Products
          </p>

          <label className="flex items-center gap-2 text-[10px] tracking-[0.18em] uppercase">
            Sort By
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortValue)}
              className="border border-neutral-300 bg-white px-2 py-1 text-[10px] tracking-[0.12em] uppercase outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-8 md:px-8 lg:flex-row lg:px-10 lg:py-10">
        <CollectionFilters
          filters={collectionFilters}
          selected={selectedFilters}
          onToggle={toggleFilter}
        />

        <div className="min-w-0 flex-1">
          {filteredProducts.length > 0 ? (
            <div className={gridClass}>
              {filteredProducts.map((product) => (
                <CollectionProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="border border-neutral-300 bg-white px-6 py-16 text-center">
              <p className="font-serif text-lg uppercase">No products found</p>
              <p className="mt-2 text-sm text-neutral-600">
                Try adjusting your filters to see more items.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
