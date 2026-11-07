import type { Metadata } from "next";
import Link from "next/link";
import { FilmIcon, ImageUpIcon, SparklesIcon } from "lucide-react";

import { requireSession } from "@/lib/auth/session";
import { MemberHero } from "@/components/member/member-ui";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = { title: "Create" };

export default async function CreatePage() {
  await requireSession();

  return (
    <div className="space-y-6">
      <MemberHero
        eyebrow="Create"
        title="Pitch or upload a member story"
        description="A first-pass entry flow for future creator submissions: title, short synopsis, asset placeholder, and guidance on what makes a strong InspireMe watch drop."
        meta="Submission shell"
      />

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_320px]">
        <Card className="pt-0">
          <CardHeader className="border-b-2 bg-pop-mint py-4">
            <p className="eyebrow">Draft a new entry</p>
            <CardTitle>Creator intake</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-1.5 md:col-span-2">
              <Label htmlFor="title">Working title</Label>
              <Input id="title" placeholder="A title members would want to watch" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="category">Category</Label>
              <Input id="category" placeholder="Mindset reset" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="duration">Target duration</Label>
              <Input id="duration" placeholder="6–8 min" />
            </div>
            <div className="grid gap-1.5 md:col-span-2">
              <Label htmlFor="summary">Why this belongs in InspireMe</Label>
              <Textarea
                id="summary"
                placeholder="What members should feel, learn, or do differently after watching?"
                rows={6}
              />
            </div>
            <div className="grid gap-1.5 md:col-span-2">
              <Label htmlFor="assets">Upload shell</Label>
              <div className="rounded-lg border-2 border-dashed bg-secondary p-4 text-sm">
                Drop video, artwork, transcript, or teaser assets here once storage wiring is added.
              </div>
            </div>
            <div className="md:col-span-2 flex flex-wrap gap-3">
              <Button size="sm" disabled>
                Save draft soon
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link href="/community">Review community asks</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <p className="eyebrow">Checklist</p>
              <CardTitle>Strong submissions usually have</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p className="flex gap-3"><FilmIcon className="mt-0.5 size-4 shrink-0" />A single emotional promise members can repeat in one sentence.</p>
              <p className="flex gap-3"><SparklesIcon className="mt-0.5 size-4 shrink-0" />A practical next step, not just inspiration.</p>
              <p className="flex gap-3"><ImageUpIcon className="mt-0.5 size-4 shrink-0" />Artwork and teaser frames that feel premium on the library shelf.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <p className="eyebrow">Status</p>
              <CardTitle>Phase 2 placeholder</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              This route is ready for a real server action and storage hookup later, without forcing a schema rewrite today.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
