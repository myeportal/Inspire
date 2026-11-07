import Image from "next/image";
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

export function ProductionShowcase({
  eyebrow = "Imagine the pipeline",
  title = "See the production engine before it exists",
  description = "Use cinematic moments like these to help members picture how InspireMe turns raw ideas into polished weekly drops.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  const highlights = [
    "Human story first",
    "Weekly drop rhythm",
    "AI-assisted production",
  ] as const;

  const visuals = [
    {
      image: "/funnel/production-cloud.jpg",
      alt: "A friendly cloud mascot surrounded by major platform icons, showing wide distribution potential for InspireMe content.",
      aspect: "aspect-[4/5]",
      accent: "bg-pop-pink",
      label: "Reach",
      sizes: "(max-width: 768px) 100vw, 240px",
    },
    {
      image: "/funnel/production-studio.jpg",
      alt: "A futuristic AI production workspace used to show how InspireMe can guide story creation, rendering, and editing.",
      aspect: "aspect-[16/10]",
      accent: "bg-pop-sky",
      label: "Workflow",
      sizes: "(max-width: 768px) 100vw, 420px",
    },
  ] as const;

  return (
    <section className="border-hard overflow-hidden rounded-[32px] bg-card p-5 shadow-hard-lg sm:p-6 lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <div className="min-w-0 space-y-6">
          <div className="max-w-xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="text-title mt-4 max-w-[14ch]">{title}</h2>
            <p className="mt-4 max-w-2xl text-lg">{description}</p>
          </div>

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {highlights.map((item, index) => (
              <span
                key={item}
                className={cn(
                  "border-hard rounded-full px-4 py-2 font-mono text-xs uppercase shadow-hard-sm sm:text-sm",
                  index === 0
                    ? "bg-pop-yellow"
                    : index === 1
                      ? "bg-pop-mint"
                      : "bg-pop-pink",
                )}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="border-hard rounded-[24px] bg-background p-5 shadow-hard sm:p-6">
            <ul className="space-y-3 text-base leading-7 sm:text-lg">
              {[
                "Use the uploaded images as support, not the whole pitch.",
                "Keep the production story short and grounded in the member journey.",
                "Bridge naturally into the flagship story instead of competing with it.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-pop-yellow-bold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="min-w-0">
          <div className="grid gap-4 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1fr)]">
            {visuals.map((visual) => (
              <figure
                key={visual.image}
                className={cn(
                  "border-hard overflow-hidden rounded-[28px] shadow-hard",
                  visual.accent,
                )}
              >
                <div className="flex items-center justify-between gap-3 px-4 pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:px-5 sm:pt-5">
                  <span>{visual.label}</span>
                  <span>Local image</span>
                </div>
                <div className="border-hard m-3 overflow-hidden rounded-[22px] bg-background shadow-hard-sm sm:m-4">
                  <div className={cn("relative", visual.aspect)}>
                    <Image
                      src={visual.image}
                      alt={visual.alt}
                      fill
                      className="object-cover"
                      sizes={visual.sizes}
                    />
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
