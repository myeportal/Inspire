import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  BotIcon,
  CpuIcon,
  NetworkIcon,
  PlayCircleIcon,
  SparklesIcon,
} from "lucide-react";

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
  return (
    <section className="overflow-hidden rounded-[28px] border-2 bg-linear-to-br from-[#16133d] via-[#22165c] to-[#0d1028] p-6 text-white shadow-hard-sm md:p-8">
      <div className="max-w-3xl space-y-3">
        <p className="eyebrow text-white/70">{eyebrow}</p>
        <h2 className="font-display text-3xl leading-none md:text-4xl">{title}</h2>
        <p className="max-w-2xl text-sm text-white/80 md:text-base">{description}</p>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="relative overflow-hidden rounded-[26px] border border-white/15 bg-[radial-gradient(circle_at_top,_rgba(73,198,255,0.35),_transparent_35%),linear-gradient(135deg,_rgba(91,61,255,0.88),_rgba(18,13,54,0.98))] p-5">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:22px_22px]" />
          <div className="relative space-y-5">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/65">
              <span>Cloud distribution</span>
              <NetworkIcon className="size-4" aria-hidden />
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                "Google",
                "Amazon",
                "Microsoft",
                "Meta",
              ].map((name) => (
                <div key={name} className="rounded-2xl border border-white/15 bg-white/10 px-4 py-5 backdrop-blur">
                  <p className="font-semibold">{name}</p>
                  <p className="mt-2 text-white/70">Audience touchpoint</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-white/20 bg-black/20 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full bg-white/10">
                  <SparklesIcon className="size-6 text-pop-yellow" aria-hidden />
                </div>
                <div>
                  <p className="text-lg font-semibold">Comfortable, friendly brand energy</p>
                  <p className="text-sm text-white/70">Soft mascot energy can make the product feel safe before members ever upload.</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-[26px] border border-white/15 bg-[radial-gradient(circle_at_top_right,_rgba(255,74,151,0.28),_transparent_28%),linear-gradient(135deg,_rgba(18,23,44,0.98),_rgba(16,69,95,0.92))] p-5">
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:26px_26px]" />
          <div className="relative space-y-5">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/65">
              <span>Creator workbench</span>
              <CpuIcon className="size-4" aria-hidden />
            </div>
            <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl border border-cyan-300/20 bg-black/20 p-4 backdrop-blur-sm">
                <p className="text-sm font-semibold">Director mode</p>
                <p className="mt-3 text-sm text-white/70">Storyboard, script, and edit your weekly short in one place.</p>
              </div>
              <div className="rounded-2xl border border-pink-300/20 bg-black/20 p-4 backdrop-blur-sm">
                <p className="text-sm font-semibold">AI render pass</p>
                <p className="mt-3 text-sm text-white/70">Preview how prompts, scenes, and motion become a cinematic final drop.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-white/75">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">Story ingest</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">Scene assembly</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">Quality review</span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">Member release</span>
            </div>
            <div className="flex items-center gap-3 rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
              <BotIcon className="size-5 text-pop-pink" aria-hidden />
              <p className="text-sm text-white/80">This side helps members imagine the behind-the-scenes engine, not just the final video.</p>
            </div>
          </div>
        </article>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="overflow-hidden rounded-[26px] border border-white/15 bg-white/5 shadow-hard-sm backdrop-blur-sm">
          <div className="relative aspect-square">
            <Image
              src="/funnel/production-cloud.jpg"
              alt="A friendly cloud mascot surrounded by major platform icons, showing wide distribution potential for InspireMe content."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
          </div>
          <div className="space-y-2 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/65">Exact reference image</p>
            <p className="text-sm text-white/80">We use this in the funnel to make the distribution side of the platform feel approachable, broad, and brand-safe.</p>
          </div>
        </article>

        <article className="overflow-hidden rounded-[26px] border border-white/15 bg-white/5 shadow-hard-sm backdrop-blur-sm">
          <div className="relative aspect-[16/9]">
            <Image
              src="/funnel/production-studio.jpg"
              alt="A futuristic AI production workspace used to show how InspireMe can guide story creation, rendering, and editing."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-2 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/65">Exact reference image</p>
            <p className="text-sm text-white/80">This anchors the how-it-gets-made story in the funnel so creators can picture the production workflow before uploads are fully wired.</p>
          </div>
        </article>
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.18em] text-white/70">
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">Human story first</span>
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">AI-assisted production</span>
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">Community amplified</span>
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-2">Weekly drop rhythm</span>
      </div>
    </section>
  );
}
