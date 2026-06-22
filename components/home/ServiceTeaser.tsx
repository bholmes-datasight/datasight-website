"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BarChart3, FlaskConical, Compass } from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Transform raw data into clear, actionable insights. We build custom dashboards, machine learning pipelines, and automated reporting systems that give your team real-time visibility.",
  },
  {
    icon: FlaskConical,
    title: "Research",
    description:
      "Rigorous, publication-grade analysis applied to real business problems — from statistical modelling and A/B testing to predictive systems and causal inference.",
  },
  {
    icon: Compass,
    title: "Strategy",
    description:
      "Data architecture, tooling decisions, and capability-building. We help organisations invest in the right infrastructure so their data compounds in value over time.",
  },
];

export default function ServiceTeaser() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 border-t border-gold pt-8">
          <p className="section-label text-gold mb-3">What We Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wide text-dark max-w-xl">
            Three pillars. One outcome.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-dark/10">
          {services.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-white p-10 flex flex-col gap-5 group hover:bg-light transition-colors duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center border border-gold/40 group-hover:border-gold transition-colors duration-300">
                <Icon size={18} className="text-gold" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-dark">
                {title}
              </h3>
              <p className="text-sm text-dark/65 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-right">
          <Link
            href="/services"
            className="text-xs font-semibold uppercase tracking-[0.15em] text-gold hover:text-gold-hover transition-colors duration-200 inline-flex items-center gap-2"
          >
            Full Services Overview →
          </Link>
        </div>
      </div>
    </section>
  );
}
