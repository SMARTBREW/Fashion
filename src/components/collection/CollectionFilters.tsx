"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { CollectionFilterGroup } from "@/lib/collection-types";

interface CollectionFiltersProps {
  filters: CollectionFilterGroup[];
  selected: Record<string, string[]>;
  onToggle: (groupId: string, option: string) => void;
}

export function CollectionFilters({
  filters,
  selected,
  onToggle,
}: CollectionFiltersProps) {
  const [openGroups, setOpenGroups] = useState<string[]>(["price", "type"]);

  const toggleGroup = (groupId: string) => {
    setOpenGroups((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId],
    );
  };

  return (
    <aside className="w-full shrink-0 lg:w-[210px]">
      {filters.map((group) => {
        const isOpen = openGroups.includes(group.id);
        return (
          <div key={group.id} className="border-t border-neutral-300 py-4">
            <button
              type="button"
              onClick={() => toggleGroup(group.id)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="font-serif text-[12px] tracking-[0.08em] uppercase">
                {group.label}
              </span>
              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {isOpen && (
              <div className="mt-3 space-y-2">
                {group.options.map((option) => {
                  const checked = selected[group.id]?.includes(option) ?? false;
                  return (
                    <label
                      key={option}
                      className="flex cursor-pointer items-center gap-2 text-[11px] text-neutral-700"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => onToggle(group.id, option)}
                        className="h-3.5 w-3.5 accent-black"
                      />
                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
}
