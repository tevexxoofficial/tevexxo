import { cn } from "@/lib/utils";

export function Logo({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <span className={cn("relative inline-flex aspect-square shrink-0", className)}>
      <img
        src="/tevexxo-logo.svg"
        alt="Tevexxo logo"
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className="absolute inset-0 h-full w-full object-contain"
      />
    </span>
  );
}

export function Brand({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <Logo className="h-8 w-8" />
      <span
        className={cn(
          "text-lg font-extrabold tracking-tight leading-none",
          light ? "text-white" : "text-slate-950",
        )}
      >
        Tevexxo
      </span>
    </span>
  );
}
