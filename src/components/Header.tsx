"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems, site, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-mega-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="MegaFilm home">
          <span className="relative h-14 w-44 overflow-hidden md:h-16 md:w-52">
            <Image
              src="/logo-transparent.png"
              alt="MegaFilm Películas"
              fill
              sizes="(min-width: 768px) 208px, 176px"
              className="object-contain"
              priority
            />
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-md px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] transition ${
                pathname === item.href
                  ? "bg-mega-ink text-white"
                  : "text-mega-ink hover:bg-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={whatsappLink()}
          target="_blank"
          className="hidden min-h-11 items-center gap-2 rounded-md border border-black/15 bg-transparent px-4 py-2 text-center text-xs font-bold uppercase leading-tight tracking-[0.12em] text-mega-ink transition hover:-translate-y-0.5 hover:border-[#25D366] hover:text-[#128C4A] lg:inline-flex"
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
          WhatsApp
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-md border border-mega-ink bg-white text-mega-ink lg:hidden"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-white px-4 py-4 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Navegacao mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md border border-black/10 px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] text-mega-ink"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappLink()}
              target="_blank"
              className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#25D366] bg-[#25D366] px-5 py-3 text-center text-sm font-bold uppercase leading-tight tracking-[0.12em] text-white transition hover:border-[#1EBE5D] hover:bg-[#1EBE5D]"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              {site.whatsappDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
