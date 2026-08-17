import Link from "next/link";
import { footerLinks } from "@/lib/data";
import { FacebookIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { NewsletterForm } from "./NewsletterForm";

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase">
        {title}
      </h4>
      <div className="mt-4 space-y-2">{children}</div>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block text-[12px] leading-relaxed text-neutral-700 transition-colors hover:text-black"
    >
      {label}
    </Link>
  );
}

function SocialGroup({ brand }: { brand: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[11px] tracking-[0.15em] uppercase">{brand}</span>
      <Link href="#" aria-label={`${brand} Instagram`} className="hover:opacity-60">
        <InstagramIcon />
      </Link>
      <Link href="#" aria-label={`${brand} Facebook`} className="hover:opacity-60">
        <FacebookIcon />
      </Link>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-cream px-6 pb-10 pt-16 md:px-10">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <FooterColumn title="Explore">
            {footerLinks.explore.map((link) => (
              <FooterLink key={link.label} {...link} />
            ))}
          </FooterColumn>

          <FooterColumn title="Customer Care">
            {footerLinks.customerCare.map((link) => (
              <FooterLink key={link.label} {...link} />
            ))}
          </FooterColumn>

          <FooterColumn title="Legal">
            {footerLinks.legal.map((link) => (
              <FooterLink key={link.label} {...link} />
            ))}
          </FooterColumn>

          <FooterColumn title="Newsletter">
            <p className="text-[12px] leading-relaxed text-neutral-700">
              Sign up to our newsletter to receive exclusive offers.
            </p>
            <NewsletterForm />
          </FooterColumn>

          <FooterColumn title="JJ Valaya">
            <p className="font-serif text-[13px] leading-relaxed text-neutral-700 italic">
              JJ Valaya is one of India&apos;s leading couture houses, known for
              its distinctive blend of tradition and modernity. Celebrated as the
              Czar of Indian Fashion, Valaya has redefined luxury for over three
              decades.
            </p>
          </FooterColumn>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-neutral-300 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
            <SocialGroup brand="JJ Valaya" />
            <SocialGroup brand="JJV" />
          </div>
          <p className="font-serif text-[12px] text-neutral-600">
            © 2026 — JJ Valaya. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
