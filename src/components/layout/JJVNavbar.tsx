"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnnouncementTicker } from "@/components/ui/AnnouncementTicker";
import { announcements, jjvNavLinks } from "@/lib/data";

export function JJVNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-maroon text-white">
      <div className="mx-auto flex h-11 max-w-[1440px] items-center px-5 md:h-12 md:px-8 lg:px-10">
        <nav className="flex items-center">
          {jjvNavLinks.map((link, i) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.label} className="flex items-center">
                {i > 0 && (
                  <span className="mx-2.5 h-3.5 w-px bg-white/25 md:mx-3" aria-hidden />
                )}
                <Link
                  href={link.href}
                  className={`px-1.5 py-0.5 text-[10px] tracking-[0.2em] uppercase transition-colors md:text-[11px] ${
                    isActive ? "bg-white/12" : "hover:opacity-70"
                  }`}
                >
                  {link.label}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-white/10 py-2">
        <AnnouncementTicker items={announcements} />
      </div>
    </header>
  );
}
