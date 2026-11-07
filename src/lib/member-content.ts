export type WatchDrop = {
  slug: string;
  title: string;
  tagline: string;
  duration: string;
  weekLabel: string;
  category: string;
  mentor: string;
  energy: "Reset" | "Momentum" | "Focus" | "Calm";
  description: string;
  takeaways: string[];
  prompts: string[];
  accent: string;
};

export const watchDrops: WatchDrop[] = [
  {
    slug: "steady-through-the-noise",
    title: "Steady Through the Noise",
    tagline: "A six-minute reset for overloaded weeks.",
    duration: "6 min",
    weekLabel: "Week 42",
    category: "Mindset reset",
    mentor: "Maya Chen",
    energy: "Calm",
    description:
      "A short cinematic reflection on staying anchored when the week gets loud. Built as the kind of member-first opener you can watch between meetings.",
    takeaways: [
      "Use one grounding question before reacting.",
      "Turn urgency into one clear next move.",
      "Keep a small ritual you can repeat anywhere.",
    ],
    prompts: [
      "What pressure are you carrying that is not actually yours?",
      "What would a calm next 10 minutes look like?",
      "Who needs encouragement from you this week?",
    ],
    accent: "bg-pop-sky",
  },
  {
    slug: "build-small-win-fast",
    title: "Build the Small Win Fast",
    tagline: "Momentum before motivation disappears.",
    duration: "8 min",
    weekLabel: "Week 41",
    category: "Creative momentum",
    mentor: "Jordan Vale",
    energy: "Momentum",
    description:
      "A member short about shrinking the first step until progress becomes unavoidable. Framed like a premium episode shell without requiring new tables yet.",
    takeaways: [
      "Choose an output that fits today, not your ideal week.",
      "Ship the rough first version before polishing.",
      "Measure success by evidence, not mood.",
    ],
    prompts: [
      "What can you finish in 15 minutes?",
      "What are you waiting to feel before you begin?",
      "What would make this easy to continue tomorrow?",
    ],
    accent: "bg-pop-mint",
  },
  {
    slug: "protect-your-best-hour",
    title: "Protect Your Best Hour",
    tagline: "Design your week around the hour that matters most.",
    duration: "7 min",
    weekLabel: "Week 40",
    category: "Focus practice",
    mentor: "Ari Santos",
    energy: "Focus",
    description:
      "A practical feature shell for members who want structure, boundaries, and a better start to deep work. Pairs well with personal planning notes.",
    takeaways: [
      "Claim your best hour before others can spend it.",
      "Name one thing that deserves uninterrupted attention.",
      "Protect recovery so focus stays repeatable.",
    ],
    prompts: [
      "When do you do your clearest thinking?",
      "What steals that hour most often?",
      "What boundary would keep it intact this week?",
    ],
    accent: "bg-pop-yellow",
  },
];

export function getWatchDrop(slug: string) {
  return watchDrops.find((drop) => drop.slug === slug) ?? null;
}

export const communityHighlights = [
  {
    name: "Morning reset circle",
    detail: "142 members checked in on this week's reflection prompt.",
  },
  {
    name: "Wins board",
    detail: "Small wins, shipped drafts, brave conversations, and honest progress.",
  },
  {
    name: "Creator requests",
    detail: "Members are voting on future topics like confidence, grief, and consistency.",
  },
] as const;

export const featuredMoments = [
  "This week’s member pick: ‘Steady Through the Noise’",
  "New creator notes and reflection prompts every Friday",
  "A clearer subscription + profile center for active members",
] as const;
