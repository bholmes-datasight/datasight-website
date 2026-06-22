import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, FlaskConical, Compass, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "DATASIGHT LTD offers data science consultancy across analytics, research, and strategy — helping businesses make confident, data-driven decisions.",
};

const services = [
  {
    icon: BarChart3,
    title: "Analytics",
    tagline: "From raw numbers to clear signals",
    body: [
      "We design and build analytics systems that give your team genuine visibility into what's happening in your business. From custom Python dashboards to automated ML pipelines, every deliverable is built to be understood and acted on — not just admired.",
      "We work across the full stack: data ingestion, transformation, modelling, and visualisation. We favour open, maintainable solutions over black-box platforms.",
    ],
    capabilities: [
      "Custom dashboards (Plotly, Streamlit, Power BI)",
      "Machine learning model development and deployment",
      "Automated reporting pipelines",
      "Data warehouse design",
      "Real-time monitoring and alerting",
    ],
  },
  {
    icon: FlaskConical,
    title: "Research",
    tagline: "Rigorous analysis, practical conclusions",
    body: [
      "We bring publication-grade statistical rigour to business questions. Whether you need to validate a new product hypothesis, understand customer behaviour, or evaluate a strategic decision — we deliver analysis you can trust and present to a board.",
      "Our research background means we don't just run the numbers: we help you ask the right question first.",
    ],
    capabilities: [
      "Statistical modelling and inference",
      "A/B testing and experiment design",
      "Causal analysis and forecasting",
      "Survey analysis and qualitative data",
      "Predictive customer behaviour models",
    ],
  },
  {
    icon: Compass,
    title: "Strategy",
    tagline: "Data decisions that compound",
    body: [
      "Data strategy is about making the right bets on infrastructure, tooling, and ways of working before they become expensive to reverse. We help organisations avoid common pitfalls and build data capabilities that scale.",
      "We work as an independent advisor — no vendor relationships, no incentives to recommend specific platforms. Just the approach that fits your business.",
    ],
    capabilities: [
      "Data maturity assessment",
      "Technology and tooling selection",
      "Data team structure and hiring",
      "Data governance and quality frameworks",
      "Roadmapping and prioritisation",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <div className="bg-dark pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="section-label text-gold mb-4">Services</p>
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide text-white max-w-2xl leading-tight">
            What we bring to the table
          </h1>
          <p className="mt-6 text-base text-white/60 max-w-xl leading-relaxed">
            We don&apos;t sell packages. We work with you to understand the problem, then apply the right combination of analytics, research, and strategy to solve it.
          </p>
        </div>
      </div>
      <div className="h-px bg-gold/40" />

      {/* Service sections */}
      <div className="bg-white">
        {services.map(({ icon: Icon, title, tagline, body, capabilities }, i) => (
          <div key={title}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 flex items-center justify-center border border-gold/40">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="section-label text-gold">{`0${i + 1}`}</p>
                  </div>
                </div>
                <h2 className="text-3xl font-bold uppercase tracking-wide text-dark mb-2">
                  {title}
                </h2>
                <p className="text-gold text-sm font-semibold uppercase tracking-[0.15em] mb-8">
                  {tagline}
                </p>
                {body.map((para, j) => (
                  <p key={j} className="text-dark/70 leading-relaxed mb-4 text-sm">
                    {para}
                  </p>
                ))}
              </div>

              <div className="bg-light p-8 border-t-2 border-t-gold">
                <p className="section-label text-dark mb-6">Capabilities</p>
                <ul className="flex flex-col gap-3">
                  {capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3 text-sm text-dark/70">
                      <span className="text-gold mt-0.5 flex-shrink-0">—</span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {i < services.length - 1 && <div className="border-t border-dark/8 mx-6 lg:mx-8" />}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-light py-20 border-t border-gold/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-wide text-dark mb-2">
              Have a project in mind?
            </h3>
            <p className="text-sm text-dark/60">
              Tell us what you&apos;re working on and we&apos;ll come back to you quickly.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <Button asChild size="lg">
              <Link href="/contact">
                Get in Touch <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
