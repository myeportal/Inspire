import type { Metadata } from "next";
import Link from "next/link";
import { eq, sql } from "drizzle-orm";
import { ClapperboardIcon, MessageSquareIcon, SparklesIcon, UploadIcon } from "lucide-react";

import { plans } from "@/config/plans";
import { db } from "@/db";
import { generations, subscriptions } from "@/db/schema";
import { requireSession } from "@/lib/auth/session";
import { planByPriceId } from "@/lib/billing/plans";
import { getHistory } from "@/lib/credits";
import { features } from "@/lib/env";
import { watchDrops } from "@/lib/member-content";
import { CountUpDigits } from "@/components/count-up-digits";
import { LedgerTable, type LedgerEntry } from "@/components/ledger-table";
import { MemberHero, ProductionShowcase, WatchCard } from "@/components/member/member-ui";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = { title: "Dashboard" };

function formatTimestamp(date: Date): string {
  return date.toISOString().slice(0, 16).replace("T", " ");
}

function formatRef(refType: string | null, refId: string | null): string {
  if (!refType || !refId) return "—";
  const id = refId.length > 16 ? `${refId.slice(0, 16)}…` : refId;
  return `${refType} ${id}`;
}

export default async function DashboardPage() {
  const session = await requireSession();

  const [history, [sub], [generated]] = await Promise.all([
    getHistory(session.user.id, 10),
    db
      .select()
      .from(subscriptions)
      .where(eq(subscriptions.userId, session.user.id))
      .limit(1),
    db
      .select({ count: sql<number>`count(*)::int` })
      .from(generations)
      .where(eq(generations.userId, session.user.id)),
  ]);

  const isActive = sub?.status === "active" || sub?.status === "trialing";
  const currentPlan =
    (isActive && sub?.priceId && planByPriceId(sub.priceId)) || plans.free;

  const entries: LedgerEntry[] = history.map((tx) => ({
    id: tx.id,
    timestamp: formatTimestamp(tx.createdAt),
    type: tx.type,
    ref: formatRef(tx.refType, tx.refId),
    amount: tx.amount,
  }));

  const shortcuts = [
    {
      href: "/featured",
      label: "Featured page",
      detail: "Start members at this week's spotlight.",
      icon: SparklesIcon,
      accent: "bg-pop-yellow",
    },
    {
      href: "/library",
      label: "Watch library",
      detail: "Browse the premium short-form shelf.",
      icon: ClapperboardIcon,
      accent: "bg-pop-sky",
    },
    {
      href: "/create",
      label: "Create flow",
      detail: "Stage creator uploads and story ideas.",
      icon: UploadIcon,
      accent: "bg-pop-mint",
    },
    {
      href: "/community",
      label: "Community board",
      detail: "See member prompts and requests.",
      icon: MessageSquareIcon,
      accent: "bg-pop-pink",
    },
  ] as const;

  return (
    <div className="space-y-6">
      <MemberHero
        eyebrow="Overview"
        title="Your member home is taking shape"
        description="Phase 2 turns InspireMe into a real member product shell: featured content, a watch library, creator intake, and a private community surface alongside the existing auth and billing foundations."
        meta={`${currentPlan.name} plan`}
        action={
          <Button asChild size="sm">
            <Link href="/library">Open library</Link>
          </Button>
        }
      />

      {features.email && !session.user.emailVerified ? (
        <div className="max-w-3xl rounded-md border-2 border-l-[6px] border-l-pop-orange px-5 py-4">
          <p className="eyebrow">Verify your email</p>
          <p className="mt-1 text-sm">
            We sent a link to {session.user.email}. Everything works meanwhile — verifying keeps the account recoverable.
          </p>
        </div>
      ) : null}

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)]">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="pt-0 md:col-span-1">
            <CardHeader className="border-b-2 bg-pop-yellow py-3.5">
              <p className="eyebrow">Credits</p>
              <CardTitle>
                <CountUpDigits value={session.user.creditBalance ?? 0} />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              Top up anytime in <Link href="/billing" className="link-pop">Billing</Link>.
            </CardContent>
          </Card>
          <Card className="pt-0 md:col-span-1">
            <CardHeader className="border-b-2 bg-pop-mint py-3.5">
              <p className="eyebrow">Plan</p>
              <CardTitle>{currentPlan.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              {isActive && sub?.currentPeriodEnd
                ? `${sub.cancelAtPeriodEnd ? "Ends" : "Renews"} ${sub.currentPeriodEnd.toISOString().slice(0, 10)}`
                : "No subscription yet — see plans in Billing."}
            </CardContent>
          </Card>
          <Card className="pt-0 md:col-span-1">
            <CardHeader className="border-b-2 bg-pop-sky py-3.5">
              <p className="eyebrow">Generated</p>
              <CardTitle>{generated?.count ?? 0}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              AI image generation remains live in <Link href="/generate" className="link-pop">Generate</Link>.
            </CardContent>
          </Card>
        </div>

        <Card className="pt-0">
          <CardHeader className="border-b-2 bg-pop-orange py-3.5">
            <p className="eyebrow">Profile clarity</p>
            <CardTitle>{session.user.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <p>{session.user.email}</p>
            <p>
              Subscription, sign-in methods, and identity controls now sit more clearly across <Link href="/settings" className="link-pop">Profile</Link> and <Link href="/billing" className="link-pop">Billing</Link>.
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="space-y-3">
        <div>
          <p className="eyebrow">New surfaces</p>
          <h2 className="mt-1 font-heading text-2xl font-extrabold">Member product shortcuts</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {shortcuts.map((item) => (
            <Card key={item.href} className="pt-0">
              <CardHeader className={`${item.accent} border-b-2 py-4`}>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle>{item.label}</CardTitle>
                  <item.icon className="size-5" aria-hidden />
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>{item.detail}</p>
                <Button asChild size="sm" variant="outline">
                  <Link href={item.href}>Open</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <ProductionShowcase
        eyebrow="Production vision"
        title="Show members the studio behind each drop"
        description="I’m using your reference style here as a premium visualization layer: cloud distribution, friendly brand energy, and a futuristic production desk that helps users imagine what the InspireMe SaaS will eventually automate."
      />

      <section className="space-y-3">
        <div>
          <p className="eyebrow">Fresh in the library</p>
          <h2 className="mt-1 font-heading text-2xl font-extrabold">Weekly watch picks</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {watchDrops.map((drop) => (
            <WatchCard
              key={drop.slug}
              href={`/library/${drop.slug}`}
              title={drop.title}
              tagline={drop.tagline}
              meta={`${drop.weekLabel} · ${drop.duration}`}
              accent={drop.accent}
            />
          ))}
        </div>
      </section>

      <section className="max-w-3xl">
        <p className="eyebrow mb-3">credit_transactions</p>
        {entries.length > 0 ? (
          <LedgerTable entries={entries} />
        ) : (
          <p className="border-t-2 border-rule pt-3 text-sm">No ledger entries yet.</p>
        )}
      </section>
    </div>
  );
}
