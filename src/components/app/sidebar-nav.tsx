"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  CreditCardIcon,
  ImageIcon,
  LayoutDashboardIcon,
  SettingsIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboardIcon },
  { href: "/generate", label: "Generate", icon: ImageIcon },
  { href: "/billing", label: "Billing", icon: CreditCardIcon },
  { href: "/settings", label: "Settings", icon: SettingsIcon },
] as const;

export function SidebarNav({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex gap-1", compact ? "flex-wrap" : "flex-col")}>
      {items.map((item) => {
        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "flex items-center gap-2.5 rounded-full px-3 py-1.5 text-sm transition-colors",
              compact && "bg-background",
              active
                ? "border-2 bg-pop-yellow-bold font-semibold text-ink-deep"
                : "text-muted-foreground hover:bg-accent hover:text-foreground",
            )}
          >
            <item.icon className="size-4" aria-hidden />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
