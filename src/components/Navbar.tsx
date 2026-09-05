"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";
import { nav, siteConfig } from "@/lib/site-config";
import { ButtonLink } from "./ui/Button";
import { Wordmark } from "./Wordmark";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-deep/85 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label={`${siteConfig.name} home`}
        >
          <Wordmark className="h-7 w-7 text-mint" />
          <span className="font-display text-lg font-semibold tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="ml-4 hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-full px-4 py-2 text-sm transition-colors",
                isActive(item.href)
                  ? "bg-deep-raised text-paper"
                  : "text-paper-soft hover:text-paper",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <a
            href={siteConfig.x}
            target="_blank"
            rel="noreferrer"
            className="hidden text-paper-muted transition-colors hover:text-paper sm:block"
            aria-label={`${siteConfig.name} on X`}
          >
            <XIcon className="size-4" />
          </a>
          <ButtonLink href="/account" size="md" className="hidden sm:inline-flex">
            Open an account
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Menu"
            className="grid size-11 place-items-center rounded-full border border-rule-strong md:hidden"
          >
            <span className="flex flex-col gap-1">
              <span className="block h-px w-4 bg-paper" />
              <span className="block h-px w-4 bg-paper" />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-rule bg-deep px-5 pt-3 pb-5 md:hidden">
          <nav className="flex flex-col">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "border-b border-rule py-3.5 text-sm last:border-0",
                  isActive(item.href) ? "text-mint" : "text-paper-soft",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ButtonLink
            href="/account"
            className="mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            Open an account
          </ButtonLink>
        </div>
      ) : null}
    </header>
  );
}

export function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}
