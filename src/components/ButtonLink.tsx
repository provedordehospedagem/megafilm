import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "light" | "outline" | "whatsapp";
  className?: string;
  target?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  target
}: ButtonLinkProps) {
  const variants = {
    primary:
      "bg-mega-red text-white border-mega-red hover:bg-mega-ink hover:border-mega-ink",
    dark:
      "bg-mega-ink text-white border-mega-ink hover:bg-white hover:text-mega-ink",
    light:
      "bg-white text-mega-ink border-white hover:bg-mega-red hover:text-white hover:border-mega-red",
    outline:
      "bg-transparent text-mega-ink border-mega-ink hover:bg-mega-ink hover:text-white",
    whatsapp:
      "bg-[#25D366] text-white border-[#25D366] hover:bg-[#1EBE5D] hover:border-[#1EBE5D]"
  };

  return (
    <Link
      href={href}
      target={target}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md border px-5 py-3 text-center font-body text-sm font-bold uppercase leading-tight tracking-[0.12em] transition hover:-translate-y-0.5 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
