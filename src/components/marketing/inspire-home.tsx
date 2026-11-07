import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  ClapperboardIcon,
  HeartHandshakeIcon,
  PlayIcon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
} from "lucide-react";

const weeklyShorts = [
  {
    title: "Monday reset",
    copy: "When the week already feels heavy, start with a short that helps you breathe and begin again.",
  },
  {
    title: "Midweek courage",
    copy: "When energy dips and doubt gets loud, get one story and one prompt that help you keep going.",
  },
  {
    title: "Friday release",
    copy: "When you are carrying too much, end the week with something honest, gentle, and worth sharing.",
  },
] as const;

const loop = [
  {
    step: "01",
    title: "Watch",
    copy: "Each drop starts with a cinematic short that helps you feel understood instead of left behind.",
  },
  {
    step: "02",
    title: "Create",
    copy: "Use the prompt, note, or remix angle to turn that feeling into something real and personal.",
  },
  {
    step: "03",
    title: "Share",
    copy: "Offer it back to the community so someone else can find language, courage, or relief in it too.",
  },
] as const;

const creatorSystem = [
  "Your membership unlocks the weekly prompt drops, creator tools, and remix starting points.",
  "Every new theme gives you a simple way to answer the story with your own short, scene, or voice note.",
  "The strongest member responses can become featured stories that pull the next person in.",
] as const;

const communityFlow = [
  "Watch the weekly short and feel the theme land",
  "Make your response with the member prompt",
  "Share it with the circle that gets it",
  "See the best work help lead the next drop",
] as const;

const stats = [
  { value: "$1", label: "monthly membership" },
  { value: "7 days", label: "a new emotional drop" },
  { value: "1 loop", label: "watch, create, share" },
] as const;

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="text-title mt-4">{title}</h2>
      <p className="mt-4 max-w-2xl text-lg sm:text-xl">{subtitle}</p>
    </div>
  );
}

export function InspireHome() {
  return (
    <div>
      <section className="overflow-hidden bg-background [--title-shadow:var(--pop-pink-bold)]">
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-6 pt-16 pb-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-24 md:pb-20">
          <div>
            <div className="mb-6 flex flex-wrap gap-3 text-sm font-medium">
              <span className="border-hard inline-flex items-center rounded-full bg-pop-yellow px-4 py-1.5 font-mono uppercase shadow-hard-sm">
                InspireMe
              </span>
              <span className="border-hard inline-flex items-center rounded-full bg-pop-sky px-4 py-1.5 font-mono uppercase shadow-hard-sm">
                $1/month
              </span>
            </div>
            <h1 className="text-display max-w-[10ch] text-foreground">
              <span className="hero-word inline-block">You’re</span>{" "}
              <span className="hero-word inline-block [animation-delay:120ms]">not</span>{" "}
              <span className="hero-word marker inline-block [animation-delay:240ms]">alone</span>
            </h1>
            <p className="mt-6 max-w-xl text-2xl font-semibold">
              A cinematic membership for people who need hope, and creators who want to give it shape.
            </p>
            <p className="mt-5 max-w-xl text-lg sm:text-xl">
              Weekly shorts. Simple creation tools. A community that turns hard moments into shared light.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="border-emph press inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground"
              >
                Join for $1/month
                <ArrowRightIcon className="size-4" aria-hidden />
              </Link>
              <a
                href="#weekly-shorts"
                className="border-hard press inline-flex items-center justify-center gap-2 rounded-xl bg-card px-6 py-4 text-base font-semibold"
              >
                <PlayIcon className="size-4" aria-hidden />
                See how it works
              </a>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`pop-in tilt border-hard rounded-2xl bg-card px-4 py-4 shadow-hard ${
                    index === 1 ? "sm:translate-y-3" : index === 2 ? "sm:-translate-y-2" : ""
                  }`}
                >
                  <p className="font-mono text-sm uppercase text-muted-foreground">{stat.label}</p>
                  <p className="mt-2 font-heading text-3xl font-extrabold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[28rem] items-center justify-center md:justify-end">
            <div className="hero-art float-idle border-emph relative w-full rounded-[32px] bg-foreground p-4 text-background shadow-hard-lg">
              <div className="rounded-[24px] border-hard border-background/90 p-5">
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.18em] text-background/70">
                  <span>Flagship drop</span>
                  <span>Week 01</span>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="border-hard rounded-2xl bg-pop-yellow p-4 text-foreground shadow-hard-sm">
                    <div className="flex items-center gap-3">
                      <HeartHandshakeIcon className="size-5" aria-hidden />
                      <p className="font-heading text-2xl font-extrabold">Someone needed this today.</p>
                    </div>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="border-hard rounded-2xl bg-pop-pink p-4 text-foreground shadow-hard-sm">
                      <VideoIcon className="mb-6 size-5" aria-hidden />
                      <p className="font-heading text-xl font-extrabold">Weekly emotional shorts</p>
                    </div>
                    <div className="border-hard rounded-2xl bg-pop-sky p-4 text-foreground shadow-hard-sm">
                      <UsersIcon className="mb-6 size-5" aria-hidden />
                      <p className="font-heading text-xl font-extrabold">Member creator system</p>
                    </div>
                  </div>
                  <div className="border-hard rounded-2xl bg-background p-4 text-foreground shadow-hard-sm">
                    <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">The loop</p>
                    <p className="mt-3 text-lg">Watch. Create. Share. Return next week stronger.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-sticker absolute -top-3 right-2 border-hard rotate-[8deg] rounded-full bg-pop-mint px-4 py-2 font-mono text-xs uppercase shadow-hard-sm md:right-0">
              New drop every week
            </div>
            <div className="hero-sticker absolute -bottom-4 left-0 -rotate-[7deg] rounded-full border-hard bg-pop-orange px-4 py-2 font-mono text-xs uppercase shadow-hard-sm">
              Premium. Human. Real.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-[3px] bg-foreground py-4 text-background">
        <div className="marquee flex gap-8 whitespace-nowrap font-display text-2xl uppercase sm:text-3xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-8 pr-8">
              <span>You’re not alone</span>
              <span>✦</span>
              <span>Weekly shorts</span>
              <span>✦</span>
              <span>Create with the community</span>
              <span>✦</span>
              <span>Featured member stories</span>
              <span>✦</span>
              <span>Join for $1/month</span>
            </div>
          ))}
        </div>
      </section>

      <section id="weekly-shorts" className="border-b-[3px] bg-background py-16 sm:py-22 [--title-shadow:var(--pop-yellow-bold)]">
        <div className="mx-auto w-full max-w-[1160px] px-6">
          <SectionTitle
            eyebrow="The problem"
            title="Hard weeks need more than more scrolling"
            subtitle="Most platforms pile on noise when you already feel off. InspireMe starts each week with a short film that names the feeling and gives you a gentler next step."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {weeklyShorts.map((item, index) => (
              <article
                key={item.title}
                className={`pop-in tilt-l border-hard rounded-[28px] bg-card p-6 shadow-hard ${
                  index === 1 ? "md:translate-y-6" : index === 2 ? "md:-translate-y-3" : ""
                }`}
              >
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Drop 0{index + 1}</p>
                <h3 className="mt-8 text-3xl font-extrabold">{item.title}</h3>
                <p className="mt-4 text-lg">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="loop" className="border-b-[3px] bg-pop-mint py-16 sm:py-22 [--title-shadow:var(--canvas)]">
        <div className="mx-auto w-full max-w-[1160px] px-6">
          <SectionTitle
            eyebrow="The product"
            title="A simple loop that turns feeling into momentum"
            subtitle="InspireMe is built around one repeatable rhythm: watch something that meets you where you are, make something back, then share it so the story keeps moving."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {loop.map((item, index) => (
              <article
                key={item.step}
                className={`pop-in tilt border-hard rounded-[28px] bg-background p-6 shadow-hard ${
                  index === 1 ? "lg:translate-y-5" : index === 2 ? "lg:-translate-y-2" : ""
                }`}
              >
                <p className="font-mono text-sm uppercase text-muted-foreground">{item.step}</p>
                <h3 className="mt-10 flex items-center gap-3 text-3xl font-extrabold">
                  {item.title}
                  {item.title === "Watch" ? (
                    <ClapperboardIcon className="size-5" aria-hidden />
                  ) : item.title === "Create" ? (
                    <SparklesIcon className="size-5" aria-hidden />
                  ) : (
                    <ArrowRightIcon className="size-5" aria-hidden />
                  )}
                </h3>
                <p className="mt-4 text-lg">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="creator-system" className="border-b-[3px] bg-pop-sky py-16 sm:py-22 [--title-shadow:var(--canvas)]">
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionTitle
              eyebrow="The membership"
              title="For $1/month, you do not just watch"
              subtitle="Membership turns InspireMe from a viewing experience into a creative one. You get the weekly tools that help you answer the story instead of only consuming it."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="border-hard rounded-full bg-background px-4 py-2 font-mono text-sm uppercase shadow-hard-sm">
                Prompt drops
              </span>
              <span className="border-hard rounded-full bg-pop-pink px-4 py-2 font-mono text-sm uppercase shadow-hard-sm">
                Remix tools
              </span>
              <span className="border-hard rounded-full bg-pop-yellow px-4 py-2 font-mono text-sm uppercase shadow-hard-sm">
                Creator badges
              </span>
            </div>
          </div>
          <div className="grid gap-4">
            {creatorSystem.map((item, index) => (
              <div
                key={item}
                className={`pop-in border-hard rounded-[24px] bg-background p-5 shadow-hard ${index === 1 ? "lg:ml-8" : index === 2 ? "lg:ml-16" : ""}`}
              >
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Member benefit 0{index + 1}</p>
                <p className="mt-3 text-xl">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="border-b-[3px] bg-background py-16 sm:py-22 [--title-shadow:var(--pop-yellow-bold)]">
        <div className="mx-auto grid w-full max-w-[1160px] gap-10 px-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <SectionTitle
              eyebrow="Why it works"
              title="Your response can become someone else’s turning point"
              subtitle="The strongest member stories do not vanish into a feed. They stay in circulation, get shared, and help shape what the community sees next."
            />
            <div className="mt-10 grid gap-4">
              {communityFlow.map((item, index) => (
                <div key={item} className="border-hard flex items-center gap-4 rounded-2xl bg-card px-5 py-4 shadow-hard-sm">
                  <span className="border-hard flex size-10 items-center justify-center rounded-full bg-pop-yellow font-mono text-sm shadow-hard-sm">
                    0{index + 1}
                  </span>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="border-hard rounded-[30px] bg-pop-pink p-6 shadow-hard-lg">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Featured creator path</p>
            <h3 className="mt-5 text-4xl font-extrabold">From one honest reply to the story everyone sees next.</h3>
            <p className="mt-4 text-lg">Community saves and shares help the most resonant member work rise to the surface.</p>
            <div className="mt-8 space-y-3">
              {[
                "Saved by members",
                "Shared into circles",
                "Selected for the next drop",
              ].map((item) => (
                <div key={item} className="border-hard flex items-center gap-3 rounded-2xl bg-background px-4 py-3 shadow-hard-sm">
                  <CheckIcon className="size-4" aria-hidden />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="join" className="bg-background py-18 sm:py-24 [--title-shadow:var(--pop-yellow-bold)]">
        <div className="mx-auto w-full max-w-[1160px] px-6">
          <div className="border-emph rounded-[34px] bg-pop-orange p-7 shadow-hard-lg sm:p-10">
            <p className="eyebrow text-foreground/80">Join the membership</p>
            <h2 className="text-title mt-4 max-w-[12ch]">Join InspireMe for $1/month</h2>
            <p className="mt-4 max-w-2xl text-xl">
              Start with the weekly short, unlock the creator tools, and step into a community that turns hard moments into shared meaning.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/signup"
                className="border-emph press inline-flex items-center justify-center rounded-xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground"
              >
                Start for $1/month
              </Link>
              <Link
                href="/login"
                className="border-hard press inline-flex items-center justify-center rounded-xl bg-background px-6 py-4 text-base font-semibold"
              >
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
