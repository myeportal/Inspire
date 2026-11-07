import type { Metadata } from "next";
import Link from "next/link";

import { requireSession } from "@/lib/auth/session";
import { communityHighlights } from "@/lib/member-content";
import { MemberHero, ProductionShowcase } from "@/components/member/member-ui";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = { title: "Community" };

const boardLanes = [
  {
    name: "This week",
    items: [
      "What helped you stay steady this week?",
      "Which short should get a follow-up conversation?",
      "Drop a tiny win before Sunday night.",
    ],
  },
  {
    name: "Requests",
    items: [
      "Confidence after setbacks",
      "Loneliness in a busy season",
      "How to restart after going quiet",
    ],
  },
  {
    name: "Hosts",
    items: [
      "Creator AMA shell",
      "Pinned moderator guidance",
      "Featured replies from mentors",
    ],
  },
] as const;

export default async function CommunityPage() {
  await requireSession();

  return (
    <div className="space-y-6">
      <MemberHero
        eyebrow="Community"
        title="Members board"
        description="A warm shell for member reactions, topic requests, and weekly check-ins — designed to feel active now, ready for real posting later."
        meta="Private to members"
        action={
          <Button asChild size="sm" variant="outline">
            <Link href="/create">Pitch a topic</Link>
          </Button>
        }
      />

      <ProductionShowcase
        eyebrow="Community production loop"
        title="Let members imagine how their ideas move through the system"
        description="The reference style is useful here too: from safe, friendly brand trust to a more advanced behind-the-scenes production engine that turns community prompts into polished drops."
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {boardLanes.map((lane, index) => (
          <Card key={lane.name} className="pt-0">
            <CardHeader
              className={`border-b-2 py-4 ${index === 0 ? "bg-pop-yellow" : index === 1 ? "bg-pop-pink" : "bg-pop-sky"}`}
            >
              <p className="eyebrow">Board</p>
              <CardTitle>{lane.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                {lane.items.map((item) => (
                  <li key={item} className="rounded-lg border-2 bg-background p-3 shadow-hard-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
        <Card>
          <CardHeader>
            <p className="eyebrow">Momentum</p>
            <CardTitle>What members are doing here</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-3 text-sm md:grid-cols-3">
            {communityHighlights.map((item) => (
              <div key={item.name} className="rounded-lg border-2 bg-secondary p-4">
                <p className="font-heading text-base font-extrabold">{item.name}</p>
                <p className="mt-2 text-muted-foreground">{item.detail}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <p className="eyebrow">Next</p>
            <CardTitle>Future hooks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>• thread view with reactions</p>
            <p>• profile badges for active members</p>
            <p>• prompts linked to each watch detail page</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
