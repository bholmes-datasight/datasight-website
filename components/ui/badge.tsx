import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "gold" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block text-[10px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1",
        variant === "default" && "bg-light text-mid",
        variant === "gold" && "bg-gold/10 text-gold border border-gold/30",
        variant === "outline" && "border border-dark/20 text-dark/60",
        className
      )}
    >
      {children}
    </span>
  );
}
