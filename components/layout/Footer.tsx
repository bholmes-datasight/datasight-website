import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="border-t border-gold/40" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 flex flex-col items-center text-center gap-10">
        {/* Logo */}
        <Image
          src="/logos/main-logo-light-tagline.svg"
          alt="DATASIGHT LTD"
          width={280}
          height={56}
          className="h-14 w-auto"
        />

        {/* Tagline */}
        <p className="text-sm text-white/55 leading-relaxed max-w-sm">
          Data science consultancy delivering analytics, research, and
          strategy for businesses ready to act on their data.
        </p>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-white/55 hover:text-gold transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Book a call */}
        <a
          href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? "/contact"}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 border border-gold text-gold text-xs font-semibold uppercase tracking-[0.15em] hover:bg-gold hover:text-dark transition-all duration-200"
        >
          Book a Call
        </a>

        <a
          href="mailto:b.holmes@datasightuk.com"
          className="text-xs text-white/40 hover:text-gold transition-colors duration-200"
        >
          b.holmes@datasightuk.com
        </a>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-center gap-2">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} DATASIGHT LTD. All rights reserved. &nbsp;·&nbsp; datasightuk.com
          </p>
        </div>
      </div>
    </footer>
  );
}
