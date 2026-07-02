import Link from "next/link";
import { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[2.5px] text-[color:var(--accent)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
      {children}
    </p>
  );
}

type BtnProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "accent" | "dark" | "outline";
  disabled?: boolean;
  className?: string;
};

const base =
  "inline-flex items-center justify-center px-8 py-4 text-[14px] font-bold uppercase tracking-[1.5px] transition [border-radius:var(--radius)] disabled:cursor-not-allowed";

const variants = {
  accent: "bg-[color:var(--accent)] text-[color:var(--accent-ink)] hover:brightness-[1.06]",
  dark: "bg-[#0e0e0e] text-white hover:brightness-[1.2]",
  outline: "border-[1.5px] border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-[color:var(--bg)]",
};

export function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "accent",
  disabled,
  className = "",
}: BtnProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href && !disabled) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
