"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { CaseStudyMeta } from "@/lib/mdx";
import { ArrowRight } from "lucide-react";

interface Props {
  caseStudies: CaseStudyMeta[];
}

export default function CaseStudyTeaser({ caseStudies }: Props) {
  const featured = caseStudies.filter((c) => c.featured).slice(0, 3);

  if (featured.length === 0) return null;

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 border-t border-gold pt-8">
          <p className="section-label text-gold mb-3">Case Studies</p>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide text-dark max-w-xl">
            Work that speaks for itself
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark/10">
          {featured.map((cs, i) => (
            <motion.article
              key={cs.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white group"
            >
              <Link href={`/case-studies/${cs.slug}`} className="block p-10 h-full flex flex-col gap-5 hover:bg-light transition-colors duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-mid mb-1">
                      {cs.sector}
                    </p>
                    <h3 className="text-base font-bold text-dark uppercase tracking-wide group-hover:text-gold transition-colors duration-200">
                      {cs.client}
                    </h3>
                  </div>
                  <ArrowRight size={16} className="text-gold mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>

                <p className="text-sm text-dark/65 leading-relaxed flex-1">
                  {cs.summary}
                </p>

                {cs.metrics?.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-dark/8">
                    {cs.metrics.slice(0, 2).map((m) => (
                      <div key={m.label}>
                        <p className="text-xl font-bold text-gold">{m.value}</p>
                        <p className="text-[11px] uppercase tracking-[0.12em] text-mid mt-0.5">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {cs.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cs.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline">{tag}</Badge>
                    ))}
                  </div>
                )}
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 text-right">
          <Link
            href="/case-studies"
            className="text-xs font-semibold uppercase tracking-[0.15em] text-gold hover:text-gold-hover transition-colors duration-200 inline-flex items-center gap-2"
          >
            All Case Studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
