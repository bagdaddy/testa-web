import { cn } from "@testa/utils";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark" | "gradient";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

export function Section({
  children,
  className,
  variant = "light",
  padding = "lg",
}: SectionProps) {
  const variantClasses = {
    light: "bg-white",
    dark: "bg-[var(--color-dark-blue)]",
    gradient: "bg-gradient-to-b from-[var(--color-ghost-white)] to-white",
  };

  const paddingClasses = {
    none: "",
    sm: "py-8",
    md: "py-12",
    lg: "py-16 lg:py-24",
    xl: "py-20 lg:py-32",
  };

  return (
    <section
      className={cn(variantClasses[variant], paddingClasses[padding], className)}
    >
      {children}
    </section>
  );
}
