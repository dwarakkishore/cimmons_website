// Single source of truth for blog posts.
// Used by /news (listing), /news/[slug] (detail pages), the homepage Blog
// section, and app/sitemap.ts.
//
// SEO notes:
// - The first four slugs match the OLD WordPress URLs that already exist in
//   Google's index (cimmons.in/right-bpo-partner/ etc.). public/.htaccess
//   301-redirects those old root-level paths to /news/<slug>/ so existing
//   backlinks and rankings carry over.
// - `keyword` is the primary long-tail target for the post (internal note —
//   never rendered).
// - Copy follows the human-written style guide in SEO_CONTEXT.md §6: concrete
//   numbers from real Cimmons engagements, varied sentence rhythm, a point of
//   view, no filler.

export type PostSection = {
  h2: string;
  paras: string[];
  bullets?: string[];
};

export type Post = {
  slug: string;
  title: string; // page H1
  metaTitle: string; // <title>, ≤60 chars incl. template suffix
  description: string; // meta description, 140–160 chars
  keyword: string; // primary long-tail target (internal)
  date: string; // ISO, for schema + sorting
  dateDisplay: string;
  author: string;
  tag: string;
  readTime: string;
  img: string;
  excerpt: string;
  intro: string[];
  sections: PostSection[];
};

export const POSTS: Post[] = [
  {
    slug: "call-center-outsourcing-cost-india",
    title: "What Does It Really Cost to Outsource a Call Center in India?",
    metaTitle: "Call Center Outsourcing Cost in India (2026 Guide)",
    description:
      "Per-hour, per-seat or per-contact? A Bengaluru BPO breaks down what call center outsourcing in India actually costs in 2026 — and the hidden charges to watch for.",
    keyword: "how much does it cost to outsource a call center in india",
    date: "2026-07-15",
    dateDisplay: "July 15, 2026",
    author: "Cimmons Editorial Team",
    tag: "BPO Strategy",
    readTime: "6 min read",
    img: "/assets/img/hf-blog1.webp",
    excerpt:
      "Per-hour, per-seat or per-contact? We break down what outsourcing to an Indian call center actually costs — and the line items nobody puts on the first quote.",
    intro: [
      "Ask five BPO providers what a support seat costs and you'll get five numbers — and none of them will be the number on your final invoice. That's not always dishonesty. It's that \"cost per seat\" hides a dozen decisions: hours of coverage, languages, channel mix, how spikes are billed, who pays for training time.",
      "We price this every week for prospective clients, so here's the honest version — the pricing models Indian BPOs actually use, roughly where the numbers land, and the questions that separate a fair quote from an optimistic one.",
    ],
    sections: [
      {
        h2: "The three pricing models you'll be offered",
        paras: [
          "Almost every quote you receive will be one of three shapes. Per-hour pricing bills you for productive agent hours — simple to audit, and the right fit when your volume is steady. Per-seat (or dedicated agent) pricing gives you named agents working only on your account; you pay for the seat whether Tuesday is busy or dead quiet, but you get consistency and deep product knowledge in return. Per-contact pricing charges per call, chat or ticket resolved — attractive when volume swings hard, because a quiet month costs you less.",
          "There's no universally correct model. An e-commerce brand we support runs dedicated seats for its core team and per-contact overflow for sale events — during one festive season that overflow layer absorbed three times normal volume without a single seat sitting idle in the off-season. Blending models is normal; a provider who insists there's only one way to price is usually optimizing for their margin, not your bill.",
        ],
      },
      {
        h2: "Where the numbers actually land",
        paras: [
          "Broad strokes for India in 2026: voice support from an established provider typically runs somewhere between $6 and $12 per productive hour depending on complexity, language mix and hours of coverage. Non-voice work — email, chat, back-office processing — usually comes in lower. A fully dedicated seat with 24/7 coverage costs more than the same seat working business hours, for the obvious reason that round-the-clock coverage is really three shifts, not one.",
          "Treat any number materially below that band with suspicion. Rock-bottom rates are subsidized somewhere — usually agent churn, which you'll pay for in retraining cycles and customers repeating themselves to a different stranger every month.",
        ],
      },
      {
        h2: "The line items that don't appear on the first quote",
        paras: [
          "The gap between the quote and the invoice usually lives in five places. Ask about each one before you sign:",
        ],
        bullets: [
          "Onboarding and training time — is the ramp period billed, and at what rate?",
          "Management overhead — team leads and QA are sometimes bundled, sometimes a separate percentage.",
          "Tooling — who pays for telephony, CRM licences and reporting dashboards?",
          "Overage — what happens to your bill when volume runs 40% over forecast?",
          "Exit terms — notice periods and data-handover obligations if you leave.",
        ],
      },
      {
        h2: "How to compare quotes without getting burned",
        paras: [
          "Never compare headline rates; compare cost per resolved contact at your expected volume, all-in. A $7/hour provider whose agents resolve half as many queries as a $9/hour team is the expensive option wearing a cheap badge.",
          "And ask every shortlisted provider the same question: \"walk me through what my first invoice will look like at my forecast volume.\" The providers who answer precisely — line by line, with the awkward items included — are the ones who'll still be answering precisely a year in. If you want that walkthrough from us, our team in Bengaluru does it on a 30-minute call, no obligation.",
        ],
      },
    ],
  },
  {
    slug: "inbound-vs-outbound-call-center",
    title: "Inbound vs Outbound Call Centers: The Difference, Explained Simply",
    metaTitle: "Inbound vs Outbound Call Center — What's the Difference?",
    description:
      "Inbound teams answer, outbound teams initiate — but the real differences are in staffing, metrics and temperament. A working BPO explains which one you need.",
    keyword: "inbound vs outbound call center difference",
    date: "2026-07-08",
    dateDisplay: "July 8, 2026",
    author: "Cimmons Editorial Team",
    tag: "Customer Experience",
    readTime: "5 min read",
    img: "/assets/img/hf-blog2.webp",
    excerpt:
      "One answers the phone, the other picks it up first. The distinction sounds trivial — until you staff, measure and train the two teams the same way and both underperform.",
    intro: [
      "The shortest version: inbound call centers answer conversations customers start — support queries, order questions, complaints. Outbound call centers start the conversation — lead follow-up, renewals, collections, surveys.",
      "Simple enough. But we run both under one roof, and the interesting part is how differently the two disciplines behave once you get past the definition. Staff an outbound campaign with inbound instincts (or the reverse) and you'll feel it in the numbers within a fortnight.",
    ],
    sections: [
      {
        h2: "Inbound: you don't control the timing, so you control the readiness",
        paras: [
          "Inbound work is reactive by definition, which means the whole game is capacity planning and first-contact resolution. Your callers arrive angry, confused or in a hurry — and they arrive whenever they like. The metrics that matter are answer speed, resolution rate and CSAT.",
          "The hard part isn't handling a call; it's handling Tuesday 11am when volume triples. For a healthcare client we solved this with flexible seasonal capacity — patient satisfaction rose 30% and response times halved, not because agents got smarter, but because nobody was waiting on hold while three agents drowned.",
        ],
      },
      {
        h2: "Outbound: you control the timing, so everything else gets harder",
        paras: [
          "Outbound flips the psychology. The person you're calling wasn't waiting to hear from you. Success lives in list quality, timing, and what an agent does in the first ten seconds. The metrics are contact rate, conversion rate and — the one people forget — speed to first attempt.",
          "That last one is brutal in practice. A real-estate client was generating plenty of enquiries but losing them to slow follow-up; leads not contacted within minutes simply went cold. We put the first call inside the moment of interest, around the clock, and booked viewings rose 45%. Same leads. Same script, near enough. Different clock.",
        ],
      },
      {
        h2: "Different temperament, different training",
        paras: [
          "Inbound agents need patience and diagnostic skill — the discipline to hear the real question inside a frustrated monologue. Outbound agents need resilience and momentum; they'll hear \"no\" forty times before lunch and the forty-first dial has to sound like the first. In our experience very few agents are naturally excellent at both, which is why we cross-train deliberately rather than assuming the skills transfer.",
        ],
      },
      {
        h2: "Which one do you actually need?",
        paras: [
          "If customers are already reaching you and waiting too long — inbound, and quickly, because slow support quietly taxes repeat business. If you have demand you're failing to chase — leads going stale, renewals lapsing — that's outbound. Most businesses past a certain size need a blend, which is exactly why blended teams exist: one desk, both directions, staffed to your actual traffic instead of two half-idle teams.",
          "We run inbound, outbound and blended desks from Bengaluru with 24/7 coverage. If you're not sure which shape fits, describe your traffic to us and we'll tell you honestly — including if the answer is \"you don't need us yet\".",
        ],
      },
    ],
  },
  {
    slug: "right-bpo-partner",
    title: "Choosing the Right BPO Partner: What to Ask Before You Sign",
    metaTitle: "How to Choose a BPO Partner — 7 Questions That Matter",
    description:
      "The wrong BPO partner costs you customers, not just money. Seven questions that expose the difference between a vendor and a partner — from a BPO that answers them daily.",
    keyword: "how to choose a bpo partner",
    date: "2024-02-19",
    dateDisplay: "February 19, 2024",
    author: "Cimmons Editorial Team",
    tag: "BPO Strategy",
    readTime: "5 min read",
    img: "/assets/img/hf-blog3.webp",
    excerpt:
      "Selecting a BPO partner is a hiring decision, not a procurement one. Here are the questions that expose the difference between a vendor and a partner.",
    intro: [
      "Here's an uncomfortable truth from inside the industry: most BPO relationships that fail were doomed at selection, not delivery. The buyer compared rate cards, picked the middle option, and discovered six months later that the cheap seats came with 40% annual agent churn and a QA process that existed mainly in the sales deck.",
      "We've been on the receiving end of enough \"rescue\" migrations — clients arriving from a partner that didn't work out — to know the pattern. The questions below are the ones we wish every prospect asked us, because they're the ones that separate providers who can sustain quality from providers who can demo it.",
    ],
    sections: [
      {
        h2: "Ask about attrition before you ask about price",
        paras: [
          "Agent churn is the silent killer of outsourced support. Every departure resets product knowledge to zero, and your customers pay for it in repeated explanations and wrong answers. Ask for the provider's actual attrition figure and what they do to keep people. A provider that invests in its agents — career paths, real training, a workplace people don't flee — will quote you a slightly higher rate and a dramatically better year.",
        ],
      },
      {
        h2: "Make them show you the QA machinery",
        paras: [
          "Everyone claims quality. Ask to see the mechanism: how many interactions are scored per agent per week, against what rubric, and — the tell — what happened the last time QA scores dropped. A real answer names specifics: coaching cycles, script changes, an escalation that led to retraining. A vague answer (\"we monitor all calls\") means monitoring happens to a dashboard nobody reads.",
        ],
      },
      {
        h2: "Probe the scaling story with a real scenario",
        paras: [
          "Give them your ugliest realistic scenario — a product launch that doubles ticket volume in a week, a seasonal spike, a recall — and ask precisely how they'd staff it and what it costs. Vague reassurance here is disqualifying. When a retail client's sale events kept flooding their support, the fix wasn't heroics; it was pre-planned elastic capacity, and order resolution got 40% faster during the busiest weeks of their year. That kind of answer exists before the spike or not at all.",
        ],
      },
      {
        h2: "Check the security posture, not the security page",
        paras: [
          "If your customers' data will pass through the provider's systems — and it will — certifications are the entry ticket, not the destination. ISO 9001 and ISO/IEC 27001 tell you audited processes exist. Then go further: who can access your data, how is access logged, what happens when an agent leaves? For regulated industries, ask how workflows change for HIPAA- or GDPR-relevant interactions. The good providers have crisp answers because they rehearse them internally, not for sales calls.",
        ],
      },
      {
        h2: "Finally: talk to a client they lost",
        paras: [
          "References are curated; departures are honest. A confident provider will tell you why their last client left — sometimes the reasons are perfectly reasonable, like a company taking support in-house after an acquisition. Evasion on this question tells you more than any case study. Pick the partner who treats your scrutiny as a feature. They're the ones who'll still be answering hard questions in month eighteen, when it actually matters.",
        ],
      },
    ],
  },
  {
    slug: "role-of-quality-assurance-in-call-center-operations",
    title: "Why Quality Assurance Makes or Breaks a Call Center",
    metaTitle: "Quality Assurance in Call Centers — Why It Matters",
    description:
      "QA isn't a scorecard, it's a feedback loop. How call center quality assurance actually works when done properly — scoring, calibration, coaching — from a working BPO.",
    keyword: "quality assurance in call center operations",
    date: "2024-02-23",
    dateDisplay: "February 23, 2024",
    author: "Cimmons Editorial Team",
    tag: "Quality Assurance",
    readTime: "4 min read",
    img: "/assets/img/hf-blog2.webp",
    excerpt:
      "Most call centers have a QA scorecard. Far fewer have a QA loop — the difference decides whether call #10,000 sounds as good as call #10.",
    intro: [
      "Any call center can sound excellent for a week. The entire discipline of quality assurance exists to answer a harder question: does call number ten thousand, taken by a tired agent on a Thursday evening, sound as good as call number ten?",
      "Most operations have a QA scorecard. Far fewer have a QA loop. The difference is what happens after the score — and it's the single clearest predictor we know of whether an outsourced team stays sharp or quietly decays.",
    ],
    sections: [
      {
        h2: "Scoring is the easy half",
        paras: [
          "The mechanics are unglamorous: sample interactions across voice, chat and email; score them against a rubric that covers accuracy, tone, compliance and resolution; track the trend per agent and per queue. The subtlety is in the rubric. Score only politeness and you'll breed agents who apologize beautifully while solving nothing. Score only handle time and you'll breed agents who rush callers off the line. The rubric encodes what your operation actually values — write it carelessly and QA will optimize you into mediocrity.",
        ],
      },
      {
        h2: "Calibration keeps the rubric honest",
        paras: [
          "Two evaluators scoring the same call should land within a point of each other. They won't, unless you make them. We run regular calibration sessions where evaluators score identical interactions and argue out the gaps — tedious, occasionally heated, absolutely worth it. Without calibration, QA scores measure which evaluator you got, not how the call went, and agents learn to dismiss the whole system. Fairness isn't a nicety here; it's what makes the data usable.",
        ],
      },
      {
        h2: "The loop: where scores become coaching",
        paras: [
          "A score that ends life in a spreadsheet achieved nothing. The loop closes when patterns become interventions: an agent weak on a product area gets targeted coaching, not a generic refresher; a question that trips everyone gets a script fix or a knowledge-base article; a compliance wobble triggers retraining before it becomes an incident.",
          "For a financial services client, that loop is the whole engagement in miniature — every case audit-traceable, dispute handling standardized into a tracked process, fraud signals routed to specialists in minutes. Trust scores rose and turnaround shortened not because agents \"tried harder\" but because the system kept teaching them, week after week.",
        ],
      },
      {
        h2: "What to take from this",
        paras: [
          "If you run support in-house: audit what happens after a QA score is filed. If the answer is \"it goes in the monthly report\", you have a scorecard, not a loop. If you're evaluating a BPO: ask how many interactions they score weekly, how evaluators are calibrated, and for a concrete story of QA data changing something. The providers with real loops light up at that question. It's the part of the job we're proudest of, precisely because nobody sees it working — they just notice, month after month, that quality doesn't slip.",
        ],
      },
    ],
  },
  {
    slug: "training-and-development-in-call-centers",
    title: "Training and Development in Call Centers: What Actually Works",
    metaTitle: "Call Center Training & Development That Actually Works",
    description:
      "Classroom onboarding fades in weeks. What keeps call center agents sharp: product-first training, live coaching and career paths — lessons from a 350+ agent BPO.",
    keyword: "call center agent training and development",
    date: "2024-02-15",
    dateDisplay: "February 15, 2024",
    author: "Cimmons Editorial Team",
    tag: "Training",
    readTime: "4 min read",
    img: "/assets/img/hf-blog1.webp",
    excerpt:
      "The industry's dirty secret: most agent training is an onboarding event, not a system. Here's what keeps 356 agents sharp after the classroom ends.",
    intro: [
      "The call center industry has a quiet confession to make: most \"training programs\" are really onboarding events. Two weeks of classroom, a shadowing day, a quiz — then the agent takes live calls for two years on whatever they retained. Retention research and our own QA data agree on how that goes: classroom knowledge starts fading within weeks unless something keeps renewing it.",
      "With 356 people across our floors in Bengaluru, we've had to treat training as a system rather than an event. Here's what that means in practice — and what we'd tell anyone building or buying support to look for.",
    ],
    sections: [
      {
        h2: "Train on the product, not just the script",
        paras: [
          "Scripts handle the predictable forty percent of conversations. The rest is judgment, and judgment requires actually understanding the thing you're supporting. When we stood up tiered technical support for a SaaS client, agents trained on the product itself — real accounts, real failure modes — not on a paper flowchart of it. Ticket backlog fell 35%, and more tickets got resolved right the first time, because agents could reason about problems the script hadn't predicted.",
        ],
      },
      {
        h2: "Coaching beats courses",
        paras: [
          "The highest-leverage training hour isn't a module; it's a team lead and an agent replaying one of the agent's own difficult calls. It's specific, it's timely, and it's about a real customer the agent remembers. We structure coaching off the back of QA scoring — the loop hands each coach a precise picture of where each agent struggles — so sessions target actual weaknesses instead of reciting generic best practice to people who've heard it before.",
        ],
      },
      {
        h2: "Empathy and de-escalation are trainable skills",
        paras: [
          "The industry treats soft skills as personality traits you hire for. Partly true — but de-escalation has learnable mechanics: acknowledge before you solve, never argue with a feeling, give the caller a path to yes. For our healthcare desk we train empathy-led scripting deliberately, because a patient calling about a delayed appointment is not in the mood for chirpy efficiency. Patient satisfaction rose 30% on that engagement; warmth at scale is a system, not a lucky hire.",
        ],
      },
      {
        h2: "Development is a retention strategy wearing a training badge",
        paras: [
          "Agents leave jobs that lead nowhere, and every departure walks out with months of product knowledge your customers paid for. The strongest case for real development paths — agent to senior, to QA, to team lead, to trainer — isn't sentiment; it's arithmetic. Our trainers and team leads mostly came up from the phones, which means they teach from scars, not slides. If you're evaluating a BPO, ask what percentage of their leads were promoted internally. The answer tells you whether agents stay long enough to get good — and whether the person coaching your account has ever actually taken your customer's call.",
        ],
      },
    ],
  },
  {
    slug: "call-center-connect",
    title: "Call Center Connect: Bridging Customer Experience and Technology",
    metaTitle: "Bridging Customer Experience & Technology in Call Centers",
    description:
      "AI, dashboards and omnichannel tools only pay off when they serve the conversation. How a working BPO decides which call center technology helps — and which gets in the way.",
    keyword: "call center technology and customer experience",
    date: "2025-02-20",
    dateDisplay: "February 20, 2025",
    author: "Cimmons Editorial Team",
    tag: "Customer Experience",
    readTime: "5 min read",
    img: "/assets/img/hf-blog3.webp",
    excerpt:
      "Every year brings new tools promising to transform support. The ones that actually help share one trait: they serve the conversation instead of interrupting it.",
    intro: [
      "Call centers sit at an odd intersection. On one side, technology vendors promising that this year's tool — AI copilots, sentiment engines, omnichannel platforms — will transform support. On the other, a customer who mostly wants a competent human to fix their problem without asking them to repeat their account number a third time.",
      "Having evaluated a great deal of this technology for our own floors, we've landed on a simple filter: does the tool serve the conversation, or does it interrupt it? Everything worth keeping passes that test. Most of what we've discarded failed it.",
    ],
    sections: [
      {
        h2: "The unglamorous tools deliver first",
        paras: [
          "The technology that most improves customer experience is rarely the demo-friendly kind. A shared knowledge base that keeps every agent's answers consistent. Screen-pop integration so the agent sees the order before the caller finishes their sentence. Real-time dashboards that show a queue building at 2pm instead of in next Monday's report. For one e-commerce client, wiring agents directly into the order-management and returns systems did more for resolution speed — 40% faster — than any AI feature we've trialled. Boring plumbing, spectacular results.",
        ],
      },
      {
        h2: "Where AI genuinely earns its keep",
        paras: [
          "We're neither AI evangelists nor sceptics; we're operators, and operationally AI is excellent at specific jobs. Summarizing a long interaction so the next agent doesn't start cold. Suggesting knowledge-base articles mid-call. Flagging sentiment patterns across ten thousand tickets that no human would spot. What it cannot yet do is own a difficult conversation — an anxious patient, a disputed charge, a furious customer — and those are precisely the conversations that decide how people feel about your brand. Automate the routine; escalate the emotional. Companies that get the order backwards end up with chatbots guarding the exits while customers hammer on them looking for a human.",
        ],
      },
      {
        h2: "Omnichannel means one conversation, not five inboxes",
        paras: [
          "Plenty of operations claim omnichannel because they answer email, chat and phone. The customer's definition is stricter: they told your chat widget about the problem yesterday, so the phone agent today should already know. Meeting that bar is mostly an integration discipline — one customer record, one interaction history, every channel writing to it. When we built follow-the-sun coverage for an IT & SaaS client, the channel mattered less than the continuity: same context, same quality, whether the user wrote at 3pm or called at 3am. Retention climbed steadily once users stopped hitting dead ends.",
        ],
      },
      {
        h2: "Buy the outcome, not the feature list",
        paras: [
          "If you take one thing from this: evaluate call center technology — or a call center partner — by the outcomes you can measure from the customer's side of the glass. Faster answers. Fewer repetitions. Problems that stay solved. Every tool on our floor justifies itself against those numbers or gets retired. The stack should be invisible to your customer; all they should notice is that reaching you got easier.",
        ],
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

// Newest first — listing pages and the homepage rely on this order.
export function sortedPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}
