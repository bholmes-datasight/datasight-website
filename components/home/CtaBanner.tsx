"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CtaBanner() {
  return (
    <section className="bg-dark py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C9A84C 0%, transparent 50%)",
        }}
      />
      <div className="absolute top-0 inset-x-0 h-px bg-gold/40" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gold/20" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center"
      >
        <p className="section-label text-gold mb-6">Ready to start?</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white mb-6 leading-tight">
          Let&apos;s turn your data into{" "}
          <span className="text-gold">your advantage</span>
        </h2>
        <p className="text-base text-white/60 leading-relaxed max-w-xl mx-auto mb-10">
          Whether you have a defined project or just a data problem you can&apos;t crack — get in touch and we&apos;ll figure it out together.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" variant="primary">
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button asChild size="lg" variant="outline-light">
            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_URL ?? "/contact"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
