import Link from "next/link";
import { ArrowRightIcon, PlayCircleIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function MemberHero({
  eyebrow,
  title,
  description,
  meta,
  action,
}: {
  eyebrow: string;
  title: string;
  description: string;
  meta?: string;
  action?: React.ReactNode;
}) {
  return (
    <section className="overflow-hidden rounded-[28px] border-2 bg-linear-to-br from-pop-yellow via-background to-pop-pink p-6 shadow-hard-sm md:p-8">
      <div className="max-w-3xl space-y-4">
        <div className="space-y-2">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-display text-4xl leading-none md:text-5xl">
            {title}
          </h1>
        </div>
        <p className="max-w-2xl text-base md:text-lg">{description}</p>
        <div className="flex flex-wrap items-center gap-3">
          {meta ? <span className="chip-mono">{meta}</span> : null}
          {action}
        </div>
      </div>
    </section>
  );
}

export function WatchCard({
  href,
  title,
  tagline,
  meta,
  accent,
}: {
  href: string;
  title: string;
  tagline: string;
  meta: string;
  accent: string;
}) {
  return (
    <Card className="pt-0">
      <CardHeader className={cn("border-b-2 py-4", accent)}>
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="eyebrow">Watch</p>
            <CardTitle className="text-xl font-extrabold">{title}</CardTitle>
          </div>
          <PlayCircleIcon className="size-6" aria-hidden />
        </div>
        <CardDescription className="text-foreground/80">{meta}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3 text-sm">
        <p>{tagline}</p>
      </CardContent>
      <CardFooter>
        <Button asChild size="sm">
          <Link href={href}>
            Open detail
            <ArrowRightIcon />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export function DetailList({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <Card>
      <CardHeader>
        <p className="eyebrow">Inside</p>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-sm">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 size-2 shrink-0 rounded-full bg-pop-yellow-bold" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

