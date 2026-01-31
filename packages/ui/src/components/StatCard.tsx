import { cn } from "@testa/utils";

export interface StatCardProps {
  value: string;
  label: string;
  className?: string;
  variant?: "light" | "dark";
}

export function StatCard({
  value,
  label,
  className,
  variant = "light",
}: StatCardProps) {
  const variantClasses = {
    light: "bg-white text-[var(--color-dark-blue)]",
    dark: "bg-[var(--color-light-blue)] text-white",
  };

  return (
    <div
      className={cn(
        "rounded-xl p-6 text-center",
        variantClasses[variant],
        className
      )}
    >
      <div className="text-3xl font-bold mb-2">{value}</div>
      <div
        className={cn(
          "text-sm",
          variant === "light"
            ? "text-[var(--color-dark-grey-blue)]"
            : "text-[var(--color-grey-blue)]"
        )}
      >
        {label}
      </div>
    </div>
  );
}
