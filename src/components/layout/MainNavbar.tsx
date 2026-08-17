import Link from "next/link";
import {
  Heart,
  MessageCircle,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";
import { mainNavLinks } from "@/lib/data";

export function MainNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white">
      <div className="relative mx-auto flex h-[68px] max-w-[1440px] items-center px-5 md:h-[72px] md:px-8 lg:px-10">
        <nav className="hidden items-center gap-5 lg:flex lg:gap-7">
          {mainNavLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-[10px] tracking-[0.22em] uppercase transition-opacity hover:opacity-50 md:text-[11px] ${
                link.highlight ? "text-sale-red" : "text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="font-serif absolute left-1/2 -translate-x-1/2 text-[22px] tracking-[0.14em] uppercase md:text-[26px]"
        >
          JJ Valaya
        </Link>

        <div className="ml-auto flex items-center gap-4 text-black md:gap-5">
          <Link href="#" aria-label="Wishlist" className="transition-opacity hover:opacity-50">
            <Heart size={17} strokeWidth={1.2} />
          </Link>
          <Link href="#" aria-label="WhatsApp" className="transition-opacity hover:opacity-50">
            <MessageCircle size={17} strokeWidth={1.2} />
          </Link>
          <Link href="#" aria-label="Account" className="transition-opacity hover:opacity-50">
            <User size={17} strokeWidth={1.2} />
          </Link>
          <Link href="#" aria-label="Search" className="transition-opacity hover:opacity-50">
            <Search size={17} strokeWidth={1.2} />
          </Link>
          <Link href="#" aria-label="Cart" className="transition-opacity hover:opacity-50">
            <ShoppingBag size={17} strokeWidth={1.2} />
          </Link>
        </div>
      </div>
    </header>
  );
}
