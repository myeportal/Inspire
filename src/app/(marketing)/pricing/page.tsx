import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join INSPIRE for $1/month and unlock weekly shorts, creator prompts, and community features.",
};

const inclusions = [
  "A new flagship short every week",
  "Creator prompts and remix tools",
  "Featured-story consideration",
  "A private member community",
] as const;

export default function PricingPage() {
  return (
    <div className="mx-auto w-full max-w-[1160px] px-6 pt-24 pb-26 [--title-shadow:var(--pop-yellow-bold)]">
      <div className="max-w-3xl">
        <p className="eyebrow">Membership</p>
        <h1 className="text-display mt-4">Join INSPIRE for $1</h1>
        <p className="mt-5 text-xl">
          One simple membership. Weekly emotional shorts, creator tools, and a community built around being there.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
        <div className="border-hard rounded-[32px] bg-pop-orange p-7 shadow-hard-lg sm:p-9">
          <p className="font-mono text-sm uppercase text-muted-foreground">Included</p>
          <div className="mt-6 grid gap-4">
            {inclusions.map((item, index) => (
              <div key={item} className="border-hard flex items-center gap-4 rounded-2xl bg-background px-5 py-4 shadow-hard-sm">
                <span className="border-hard flex size-10 items-center justify-center rounded-full bg-pop-yellow font-mono text-sm shadow-hard-sm">
                  0{index + 1}
                </span>
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="border-hard rounded-[32px] bg-background p-7 shadow-hard-lg sm:p-9">
          <p className="font-mono text-sm uppercase text-muted-foreground">Offer</p>
          <p className="mt-4 font-heading text-6xl font-extrabold">$1</p>
          <p className="mt-1 font-mono text-sm uppercase text-muted-foreground">per month</p>
          <p className="mt-6 text-lg">
            Start with the first pass membership and help shape the early community.
          </p>
          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/signup"
              className="border-hard press inline-flex items-center justify-center rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground"
            >
              Become a member
            </Link>
            <Link
              href="/"
              className="border-hard press inline-flex items-center justify-center rounded-xl bg-card px-6 py-4 text-base font-semibold"
            >
              Back to homepage
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
