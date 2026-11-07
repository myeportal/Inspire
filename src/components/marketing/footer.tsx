import Link from "next/link";

import { siteConfig } from "@/config/site";

const columns = [
  {
    title: "Product",
    links: [
      { label: "how it works", href: "/#how" },
      { label: "features", href: "/#features" },
      { label: "pricing", href: "/pricing" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "start free", href: "/signup" },
      { label: "sign in", href: "/login" },
      { label: "dashboard", href: "/dashboard" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "privacy", href: "/privacy" },
      { label: "terms", href: "/terms" },
    ],
  },
] as const;

export function MarketingFooter() {
  return (
    <footer className="bg-(--band-bg) text-(--band-fg) [--muted-ink:var(--band-muted)] [--title-shadow:var(--pop-yellow-bold)]">
      <div className="mx-auto w-full max-w-[1160px] px-6 pt-16 pb-10">
        <div className="flex flex-wrap items-start justify-between gap-x-16 gap-y-12">
          <div className="max-w-full">
            <p className="font-display text-[clamp(3rem,1.6rem+3.5vw,6rem)] leading-none tracking-tight uppercase [text-shadow:0.05em_0.05em_0_var(--title-shadow)]">
              {siteConfig.name}
            </p>
            <p className="mt-6 max-w-sm text-lg">
              {siteConfig.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-14 gap-y-10">
            {columns.map((column) => (
              <nav key={column.title} aria-label={column.title}>
                <p className="eyebrow mb-3.5">{column.title}</p>
                <ul className="flex flex-col items-start gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="footer-chip">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-wrap items-end justify-between gap-6">
          <p className="font-mono text-[10.5px] tracking-wider text-muted-foreground">
            © 2026 {siteConfig.name}
          </p>
          <Link href="/signup" className="footer-chip">
            get started
          </Link>
        </div>
      </div>
    </footer>
  );
}
