"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(20, "Please tell us a bit more (at least 20 characters)"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <CheckCircle size={40} className="text-gold" />
        <h3 className="text-lg font-bold uppercase tracking-wide text-dark">
          Message received
        </h3>
        <p className="text-sm text-dark/60 max-w-sm">
          Thanks for getting in touch. We&apos;ll come back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-gold hover:text-gold-hover transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Input
          id="name"
          label="Name *"
          placeholder="Your name"
          error={errors.name?.message}
          {...register("name")}
        />
        <Input
          id="email"
          label="Email *"
          type="email"
          placeholder="you@company.com"
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <Input
        id="company"
        label="Company"
        placeholder="Your organisation (optional)"
        {...register("company")}
      />

      <Textarea
        id="message"
        label="Message *"
        placeholder="Tell us about your project or data challenge..."
        rows={6}
        error={errors.message?.message}
        {...register("message")}
      />

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle size={16} />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="self-start"
      >
        {status === "loading" ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
