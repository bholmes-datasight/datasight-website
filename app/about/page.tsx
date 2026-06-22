import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "DATASIGHT LTD — a UK data science consultancy built on a foundation of rigorous academic research and applied to real business challenges.",
};

const values = [
  {
    title: "Rigour over speed",
    body: "We apply the same standards of analysis to a business problem as we would to a peer-reviewed study. That means asking hard questions before running code.",
  },
  {
    title: "Clarity of output",
    body: "Analytical work is only valuable if it can be understood and acted on. Everything we produce is designed to communicate, not impress.",
  },
  {
    title: "Independence",
    body: "We have no vendor relationships and no platform incentives. Our recommendations are based entirely on what fits the problem.",
  },
  {
    title: "Long-term thinking",
    body: "The best data infrastructure compounds. We build things that your team can own, extend, and trust — not things that require us to stick around.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="bg-dark pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="section-label text-gold mb-4">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide text-white max-w-2xl leading-tight">
            Built on research. Focused on results.
          </h1>
        </div>
      </div>
      <div className="h-px bg-gold/40" />

      {/* Story */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 max-w-3xl">
            <p className="section-label text-gold mb-6">Our Story</p>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-dark mb-8">
              Where academic rigour meets business impact
            </h2>
            <div className="flex flex-col gap-5 text-sm text-dark/70 leading-relaxed">
              <p>
                DATASIGHT LTD was founded with a clear conviction: that the analytical techniques developed in academic research environments are underused in the business world — and that bridging that gap creates real, measurable value.
              </p>
              <p>
                Our background is in delivering data science projects for universities and research institutions, where the standards for statistical validity, reproducibility, and clarity of communication are high. We bring those same standards to commercial engagements.
              </p>
              <p>
                The result is a consultancy that moves fast, builds well, and doesn&apos;t cut corners — whether the deliverable is a board-level dashboard or a production machine learning system.
              </p>
            </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-light py-20 border-t border-dark/8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 border-t border-gold pt-8">
            <p className="section-label text-gold mb-3">How We Work</p>
            <h2 className="text-3xl font-bold uppercase tracking-wide text-dark max-w-xl">
              Principles we don&apos;t compromise on
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-dark/10">
            {values.map(({ title, body }) => (
              <div key={title} className="bg-light p-10">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-dark mb-3">
                  {title}
                </h3>
                <p className="text-sm text-dark/65 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 border-t border-gold/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-wide text-dark mb-2">
              Ready to work together?
            </h3>
            <p className="text-sm text-dark/60">
              Get in touch with a brief description of your project.
            </p>
          </div>
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Us <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
