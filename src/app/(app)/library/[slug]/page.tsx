import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, MessageSquareIcon, SparklesIcon } from "lucide-react";

import { requireSession } from "@/lib/auth/session";
import { getWatchDrop } from "@/lib/member-content";
import { DetailList } from "@/components/member/member-ui";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await props.params;
  const drop = getWatchDrop(slug);

  return {
    title: drop ? `${drop.title} | Watch` : "Watch detail",
  };
}

export default async function WatchDetailPage(
  props: { params: Promise<{ slug: string }> },
) {
  await requireSession();
  const { slug } = await props.params;
  const drop = getWatchDrop(slug);

  if (!drop) notFound();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Button asChild size="sm" variant="outline">
          <Link href="/library">
            <ArrowLeftIcon />
            Back to library
          </Link>
        </Button>
        <span className="chip-mono">{drop.weekLabel}</span>
        <span className="chip-mono">{drop.duration}</span>
        <span className="chip-mono">{drop.energy}</span>
      </div>

      <section className="overflow-hidden rounded-[28px] border-2 bg-card shadow-hard-sm">
        <div className={`${drop.accent} border-b-2 p-6 md:p-8`}>
          <p className="eyebrow">Featured short</p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl leading-none md:text-5xl">
            {drop.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base md:text-lg">{drop.description}</p>
        </div>
        <div className="grid gap-6 p-6 md:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.8fr)] md:p-8">
          <div className="space-y-4">
            <div className="flex aspect-video items-center justify-center rounded-[20px] border-2 bg-secondary text-center shadow-hard-sm">
              <div className="space-y-2 px-6">
                <SparklesIcon className="mx-auto size-8" aria-hidden />
                <p className="font-heading text-xl font-extrabold">Video player shell</p>
                <p className="text-sm text-muted-foreground">
                  Reserved for member video playback, transcripts, saves, and progress state.
                </p>
              </div>
            </div>
            <Card>
              <CardHeader>
                <p className="eyebrow">Creator note</p>
                <CardTitle>{drop.tagline}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>Host: {drop.mentor}</p>
                <p>Category: {drop.category}</p>
                <p>
                  This shell intentionally leaves room for stream URLs, captions, and member actions without touching the current billing/auth foundations.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <DetailList title="Key takeaways" items={drop.takeaways} />
            <DetailList title="Reflection prompts" items={drop.prompts} />
            <Card>
              <CardHeader>
                <p className="eyebrow">Community</p>
                <CardTitle>Talk with other members</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>Episode-specific discussion and reactions plug in here next.</p>
                <Button asChild size="sm" variant="outline">
                  <Link href="/community">
                    <MessageSquareIcon />
                    Open community board
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
