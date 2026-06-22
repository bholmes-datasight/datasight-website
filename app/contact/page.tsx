import type { Metadata } from "next";
import { Mail, CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with DATASIGHT LTD to discuss your data science project.",
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-dark pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="section-label text-gold mb-4">Contact</p>
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide text-white max-w-2xl leading-tight">
            Let&apos;s talk about your data
          </h1>
          <p className="mt-4 text-white/50 text-sm max-w-lg">
            Whether you have a fully scoped project or just a problem you can&apos;t crack — reach out and we&apos;ll figure out the best way to help.
          </p>
        </div>
      </div>
      <div className="h-px bg-gold/40" />

      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Primary CTA */}
          <div>
            <p className="section-label text-dark mb-8">Get in Touch</p>
            <p className="text-sm text-dark/65 leading-relaxed mb-10">
              Drop us an email with a brief description of your project or challenge and we&apos;ll come back to you within one business day.
            </p>
            <a
              href="mailto:b.holmes@datasightuk.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-dark text-xs font-bold uppercase tracking-[0.15em] hover:bg-gold-hover transition-colors duration-200"
            >
              <Mail size={15} />
              b.holmes@datasightuk.com
            </a>
          </div>

          {/* Side details */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <a
                href="mailto:b.holmes@datasightuk.com"
                className="flex items-start gap-4 group"
              >
                <div className="w-9 h-9 border border-gold/40 flex items-center justify-center flex-shrink-0 group-hover:border-gold transition-colors">
                  <Mail size={15} className="text-gold" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-mid mb-0.5">
                    Email
                  </p>
                  <p className="text-sm text-dark group-hover:text-gold transition-colors">
                    b.holmes@datasightuk.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 border border-gold/40 flex items-center justify-center flex-shrink-0">
                  <CalendarDays size={15} className="text-gold" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-mid mb-0.5">
                    Response Time
                  </p>
                  <p className="text-sm text-dark">
                    Within one business day
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
