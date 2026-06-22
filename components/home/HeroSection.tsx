"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const GOLD = "#C9A84C";
    const WHITE = "#FFFFFF";
    const COUNT = 55;
    const MAX_DIST = 130;

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * window.devicePixelRatio;
      canvas.height = H * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2 + 1.5,
      opacity: Math.random() * 0.5 + 0.3,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.4;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle =
              i % 3 === 0
                ? `rgba(201,168,76,${alpha})`
                : `rgba(255,255,255,${alpha * 0.5})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle =
          p.radius > 2.5
            ? `rgba(201,168,76,${p.opacity})`
            : `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
      }

      raf.current = requestAnimationFrame(draw);
    };

    raf.current = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-70"
      aria-hidden="true"
    />
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] bg-dark flex items-center overflow-hidden pt-16">
      <ParticleCanvas />

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gold/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Copy */}
        <div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="section-label text-gold mb-6"
          >
            Data Science Consultancy
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight uppercase"
          >
            Turning complex{" "}
            <span className="text-gold">data</span>{" "}
            into business{" "}
            <span className="relative">
              decisions
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gold" />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-8 text-base sm:text-lg text-white/65 leading-relaxed max-w-lg"
          >
            DATASIGHT LTD delivers analytics, research, and strategy that help
            organisations move from raw data to confident, measurable outcomes.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button asChild size="lg" variant="primary">
              <Link href="/services">
                Explore Services <ArrowRight size={16} />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline-light">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats strip — appears on large screens */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={4}
          className="hidden lg:grid grid-cols-1 gap-px bg-white/10"
        >
          {[
            { value: "Analytics", desc: "Custom dashboards and ML pipelines that make sense of your data at scale." },
            { value: "Research", desc: "Rigorous, publication-grade statistical analysis applied to real business problems." },
            { value: "Strategy", desc: "Data architecture, tooling, and capability decisions that compound over time." },
          ].map(({ value, desc }) => (
            <div key={value} className="bg-dark/80 p-8 border-l-2 border-l-gold/60">
              <p className="text-gold text-sm font-bold uppercase tracking-[0.2em] mb-2">
                {value}
              </p>
              <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
