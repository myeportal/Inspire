import type { Metadata } from "next";
import Link from "next/link";

import { requireSession } from "@/lib/auth/session";
import { featuredMoments, watchDrops } from "@/lib/member-content";
import { MemberHero } from "@/components/member/member-ui";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = { title: "Featured" };

export default async function FeaturedPage() {
  await requireSession();
  const heroDrop = watchDrops[0];

  return (
    <div className="space-y-6">
      <MemberHero
        eyebrow="Featured"
        title="This week’s front door for members"
        description="A premium spotlight page for the episode, story, or creator moment you want every member to see first."
        meta={`${heroDrop.weekLabel} spotlight`}
        action={
          <Button asChild size="sm">
            <Link href={`/library/${heroDrop.slug}`}>Watch featured short</Link>
          </Button>
        }
      />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.3fr)_320px]">
        <Card className="pt-0">
          <CardHeader className="border-b-2 bg-pop-sky py-4">
            <p className="eyebrow">Spotlight</p>
            <CardTitle>{heroDrop.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            <p>{heroDrop.description}</p>
            <div className="grid gap-3 md:grid-cols-3">
              <div className="rounded-lg border-2 bg-secondary p-4">
                <p className="eyebrow">Theme</p>
                <p className="font-heading text-lg font-extrabold">{heroDrop.category}</p>
              </div>
              <div className="rounded-lg border-2 bg-secondary p-4">
                <p className="eyebrow">Mentor</p>
                <p className="font-heading text-lg font-extrabold">{heroDrop.mentor}</p>
              </div>
              <div className="rounded-lg border-2 bg-secondary p-4">
                <p className="eyebrow">Length</p>
                <p className="font-heading text-lg font-extrabold">{heroDrop.duration}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <p className="eyebrow">Why it matters</p>
            <CardTitle>Featured page notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {featuredMoments.map((item) => (
              <p key={item} className="rounded-lg border-2 bg-secondary p-3">
                {item}
              </p>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
