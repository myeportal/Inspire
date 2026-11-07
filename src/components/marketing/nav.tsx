import Link from "next/link";

import { getSession } from "@/lib/auth/session";
import { LogoMark } from "@/components/logo-mark";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";

import { MobileMenu } from "./nav-mobile";

const links = [
  { href: "/#how", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
] as const;

export async function MarketingNav() {
  const session = await getSession();

  return (
    <header className="sticky top-0 z-40 border-b-[3px] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="relative mx-auto flex h-[60px] w-full max-w-[1160px] items-center gap-6 px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-[13px] font-medium uppercase"
        >
          <LogoMark className="size-5" />
          {siteConfig.name}
        </Link>
        <nav className="ml-auto hidden items-center gap-2.5 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="chip px-3.5 py-1 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <ThemeToggle />
          {session ? (
            <Link
              href="/dashboard"
              className="border-hard press rounded-md bg-primary px-3.5 py-1.5 text-sm font-semibold text-primary-foreground"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="chip hidden px-3.5 py-1 text-sm font-medium sm:inline-block"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="border-hard press rounded-md bg-primary px-3.5 py-1.5 text-sm font-semibold text-primary-foreground"
              >
                Start free
              </Link>
            </>
          )}
          <MobileMenu links={links} />
        </div>
      </div>
    </header>
  );
}
