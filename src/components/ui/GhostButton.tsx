import Link from "next/link";

interface GhostButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "ghost" | "outline";
  className?: string;
}

export function GhostButton({
  href,
  children,
  variant = "ghost",
  className = "",
}: GhostButtonProps) {
  const base =
    "inline-block px-5 py-2 text-[10px] tracking-[0.24em] uppercase transition-all duration-300";
  const variants = {
    ghost: "border border-white text-white hover:bg-white hover:text-black",
    outline: "border border-white text-white hover:bg-white/10",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
