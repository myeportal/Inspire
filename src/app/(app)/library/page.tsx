import type { Metadata } from "next";

import { requireSession } from "@/lib/auth/session";
import { watchDrops } from "@/lib/member-content";
import { MemberHero, WatchCard } from "@/components/member/member-ui";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export const metadata: Metadata = { title: "Watch Library" };

export default async function LibraryPage() {
  const session = await requireSession();

  return (
    <div className="space-y-6">
      <MemberHero
        eyebrow="Members"
        title="Watch library"
        description="Your premium weekly watch shelf: inspiring shorts, creator notes, and reflection prompts gathered into a cleaner members-only home."
        meta={`${session.user.creditBalance ?? 0} credits available`}
        action={
          <Button asChild size="sm">
            <Link href="/featured">See featured pick</Link>
          </Button>
        }
      />


      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {watchDrops.map((drop) => (
            <WatchCard
              key={drop.slug}
              href={`/library/${drop.slug}`}
              title={drop.title}
              tagline={drop.tagline}
              meta={`${drop.weekLabel} · ${drop.duration} · ${drop.mentor}`}
              accent={drop.accent}
            />
          ))}
        </section>

        <Card className="pt-0">
          <CardHeader className="border-b-2 bg-pop-orange py-4">
            <p className="eyebrow">Up next</p>
            <CardTitle>Library roadmap</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>Phase 2 adds the real member watch surface before a full video CMS lands.</p>
            <ul className="space-y-2">
              <li>• continue watching + favorites</li>
              <li>• creator collections and playlists</li>
              <li>• community discussion hooks per episode</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
