import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { CaseStudyMeta } from "@/lib/mdx";

export default function CaseStudyCard({ cs }: { cs: CaseStudyMeta }) {
  return (
    <article className="bg-white group border-t-2 border-t-gold">
      <Link href={`/case-studies/${cs.slug}`} className="block p-8 h-full flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-mid mb-1">
              {cs.sector}
            </p>
            <h3 className="text-base font-bold text-dark uppercase tracking-wide group-hover:text-gold transition-colors duration-200">
              {cs.client}
            </h3>
          </div>
          <ArrowRight
            size={16}
            className="text-gold mt-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          />
        </div>

        <p className="text-sm text-dark/65 leading-relaxed flex-1">{cs.summary}</p>

        {cs.metrics?.length > 0 && (
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-dark/8">
            {cs.metrics.slice(0, 3).map((m) => (
              <div key={m.label}>
                <p className="text-lg font-bold text-gold">{m.value}</p>
                <p className="text-[10px] uppercase tracking-[0.12em] text-mid mt-0.5">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        )}

        {cs.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {cs.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </Link>
    </article>
  );
}
