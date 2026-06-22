"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 bg-dark transition-shadow duration-300",
        scrolled && "shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
      )}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logos/main-logo-light.svg"
            alt="DATASIGHT LTD"
            width={180}
            height={36}
            priority
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-200",
                pathname === href
                  ? "text-gold"
                  : "text-white/70 hover:text-gold"
              )}
            >
              {label}
            </Link>
          ))}
          <a
            href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? "/contact"}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-5 py-2 bg-gold text-dark text-xs font-bold uppercase tracking-[0.15em] hover:bg-gold-hover transition-colors duration-200"
          >
            Book a Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-dark border-t border-white/10"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "text-sm font-semibold uppercase tracking-[0.15em] py-1",
                    pathname === href ? "text-gold" : "text-white/70"
                  )}
                >
                  {label}
                </Link>
              ))}
              <a
                href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? "/contact"}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-5 py-3 bg-gold text-dark text-xs font-bold uppercase tracking-[0.15em] text-center"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
