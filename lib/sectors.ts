// Single source of truth for the seven sectors Cimmons leads with.
//
// Powers:
//   - the Header "Sectors" dropdown
//   - the /sectors landing page
//   - the /sectors/[slug] detail pages
//   - the expanding accordion on the home page (components/Services.tsx)
//
// Six of these map 1:1 to an existing case study under /case-studies/[slug];
// `caseStudy` carries that link so every sector page can point at real proof.
// AI Data Services is the seventh sector and has no case study yet.

export type SectorCapability = {
  title: string;
  desc: string;
};

export type SectorStat = {
  value: string;
  label: string;
};

export type SectorFaq = {
  q: string;
  a: string;
};

export type GroupedCapability = {
  title: string;
  desc: string;
  subFeatures: string[];
};

export type StartingPoint = {
  problem: string;
  solution: string;
};

export type EngagementModel = {
  title: string;
  desc: string;
};

export type Sector = {
  n: string;
  slug: string;
  name: string;
  /** Short label for tight spaces — nav dropdown, accordion spines. */
  shortName: string;
  /**
   * The sector name as it reads mid-sentence ("...what we run for {phrase}
   * teams"). Written out rather than lower-cased at render time, so acronyms
   * like AI, IT and SaaS keep their capitals.
   */
  phrase: string;
  /** Icon key resolved by the sector pages (see SECTOR_ICONS). */
  icon: string;
  img: string; // hero / featured image
  /** Hero image alt text. Falls back to a generic sector line when absent. */
  imgAlt?: string;
  gallery: [string, string];
  /** One-line promise — used as the hero sub-head, and as the meta
   *  description unless `metaDescription` overrides it. */
  tagline: string;

  /*
   * Per-sector SEO overrides. The detail-page template frames every sector as
   * call-center work by default ("{name} BPO & Call Center Services"), which is
   * right for six of the seven. Set these where that framing is wrong or where
   * the sector name alone is too thin to rank.
   */
  /** <title> (the layout appends "| Cimmons" — keep the total under ~60 chars). */
  metaTitle?: string;
  /** Meta description, 140–160 chars. Overrides `tagline`. */
  metaDescription?: string;
  /** Page H1, when the sector name carries no keyword. */
  h1?: string;
  /** schema.org Service.serviceType. Defaults to "Business Process Outsourcing". */
  serviceType?: string;
  /** Key for a set of sector-specific coded diagrams (components/SectorGraphics.tsx). */
  graphics?: "ai-data";
  /** Sector slugs shown as a related-work block when this sector has no case study. */
  relatedSectors?: string[];
  /** Card copy on the /sectors landing page. */
  summary: string;
  // Short lines shown in the home-page accordion
  challenge: string;
  solution: string;
  results: string;
  /** "Where this sector hurts" — the pressures we're brought in to absorb. */
  pressures: string[];
  /** Opening paragraphs on the detail page. */
  intro: string[];
  /** What we actually run for this sector. */
  capabilities: SectorCapability[];
  /** Compliance / operating notes specific to the sector. */
  compliance: string[];
  stats: SectorStat[];
  faqs: SectorFaq[];
  /** Slug of the matching case study under /case-studies/, if one exists. */
  caseStudy?: string;

  // Elaborated layout fields (optional)
  groupedCapabilities?: GroupedCapability[];
  startingPoints?: StartingPoint[];
  engagementModels?: EngagementModel[];
};

export const SECTORS: Sector[] = [
  /* ---------------------------------------------------------------- 01 */
  {
    n: "01",
    slug: "finance",
    name: "Finance & Banking",
    shortName: "Finance & Banking",
    phrase: "finance & banking",
    icon: "bank",
    img: "/assets/img/service3.webp",
    gallery: ["/assets/img/service5.webp", "/assets/img/hf-about.webp"],
    tagline:
      "Compliance-first support that protects customers and builds trust.",
    summary:
      "Account and query support, fraud-alert handling, dispute resolution and collections — every case audit-traceable, every agent working to verification protocol.",
    challenge:
      "Balancing strict regulatory compliance with the need for fast, empathetic customer support.",
    solution:
      "Established an audit-ready, compliance-first desk for secure query and fraud handling.",
    results: "Achieved 100% audit traceability while drastically reducing dispute turnaround times.",
    pressures: [
      "Every interaction carrying regulatory weight and audit exposure.",
      "Slow dispute handling eroding trust at the worst possible moment.",
      "Fraud signals that need specialist eyes in minutes, not hours.",
      "Rising customer expectations against tightening compliance budgets.",
    ],
    intro: [
      "In financial services, support quality and compliance are the same conversation. A fast answer that skips verification is worse than no answer at all — and a slow, correct one still costs you the customer's confidence.",
      "Cimmons builds a compliance-first desk where security and accuracy are non-negotiable and speed comes from process, not shortcuts. Agents work inside strict verification and data-handling protocols aligned to your requirements, with a full audit trail behind every case.",
    ],
    capabilities: [
      {
        title: "Account & Query Support",
        desc: "Balance, transaction, statement and product questions handled after identity verification, with every action logged.",
      },
      {
        title: "Fraud Alert Handling",
        desc: "First-line review of suspicious activity with fast routing to your fraud specialists on defined triggers.",
      },
      {
        title: "Dispute & Chargeback Resolution",
        desc: "A standardised, tracked process so customers always know where their case stands and turnaround stays predictable.",
      },
      {
        title: "Collections Support",
        desc: "Respectful, regulation-aware early-stage collections and payment-arrangement conversations.",
      },
      {
        title: "KYC & Document Follow-up",
        desc: "Chasing, checking and recording onboarding documentation so applications do not stall in limbo.",
      },
      {
        title: "Back-Office Processing",
        desc: "Data entry, reconciliation support and records maintenance under four-eyes review where accuracy is critical.",
      },
    ],
    compliance: [
      "Identity-verification protocol enforced before any account action",
      "ISO/IEC 27001:2013 certified information security management",
      "Full audit trail on every case, retained to your policy",
      "Call recording, QA sampling and scripted regulatory disclosures",
    ],
    stats: [
      { value: "↑", label: "Customer trust scores" },
      { value: "Faster", label: "Dispute turnaround" },
      { value: "100%", label: "Audit-traceable cases" },
    ],
    faqs: [
      {
        q: "How do you handle regulatory compliance?",
        a: "We build the workflow around your compliance requirements rather than the other way round — mandated disclosures are scripted, verification steps are enforced before any account action, and every case carries an audit trail. QA sampling checks adherence continuously.",
      },
      {
        q: "Can you handle fraud alerts?",
        a: "We handle first-line review and containment conversations, and route to your fraud specialists on agreed triggers within a defined window. Investigative decisions stay with your team.",
      },
      {
        q: "Where is the work delivered from?",
        a: "Our operations are based in Bengaluru, India, serving clients in India and globally. Where a mandate requires specific data-residency or on-shore handling, we scope that with you before go-live.",
      },
    ],
    caseStudy: "finance",
  },

  /* ---------------------------------------------------------------- 02 */
  {
    n: "02",
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    shortName: "Retail & E-Commerce",
    phrase: "retail & e-commerce",
    icon: "cart",
    img: "/assets/img/service1-scaled.webp",
    gallery: ["/assets/img/service2.webp", "/assets/img/success.webp"],
    tagline:
      "Omnichannel support that turns busy sale seasons into loyal customers.",
    summary:
      "Order and delivery support, returns and refunds, live chat and seasonal scaling — elastic capacity that absorbs sale-event peaks without carrying the cost year-round.",
    challenge:
      "Maintaining fast response times across all channels during major seasonal sales spikes.",
    solution:
      "Implemented an elastic, omnichannel support team that scales instantly with demand.",
    results:
      "Accelerated order resolution by 40% and significantly boosted repeat purchase rates.",
    pressures: [
      "Flagship sale events that multiply contact volume overnight.",
      "Slow replies at the exact moments that decide whether a shopper buys again.",
      "Returns and refunds queues that grow faster than the team can clear them.",
      "The same question asked a thousand ways across chat, email, social and voice.",
    ],
    intro: [
      "In retail and e-commerce, support speed is a revenue lever. A shopper waiting on a delivery update or a refund is a shopper deciding whether there will be a next order — and that decision gets made in hours, not days.",
      "Cimmons becomes the elastic support layer behind your storefront. We absorb the peaks across chat, email, social and voice with cross-trained agents who move fluidly between channels, so a Diwali or year-end sale is fully staffed without that cost sitting on your books for the other eleven months.",
    ],
    capabilities: [
      {
        title: "Order & Delivery Support",
        desc: "Order status, address changes, delivery exceptions and courier coordination, worked directly in your order-management system.",
      },
      {
        title: "Returns, Refunds & Exchanges",
        desc: "End-to-end returns handling with policy-consistent decisions, so refunds move fast without opening up abuse.",
      },
      {
        title: "Live Chat & Email",
        desc: "Fast, on-brand written support with a shared knowledge base, macros and quality review on every channel.",
      },
      {
        title: "Pre-Sales & Product Enquiries",
        desc: "Sizing, availability, compatibility and promotion questions answered in time to convert the cart rather than lose it.",
      },
      {
        title: "Seasonal & Peak Scaling",
        desc: "Trained surge capacity stood up ahead of sale events and wound down afterwards, on an agreed ramp plan.",
      },
      {
        title: "Social & Marketplace Response",
        desc: "Coverage across social inboxes and marketplace seller messages, keeping public response times and ratings healthy.",
      },
    ],
    compliance: [
      "Agents work inside your OMS, helpdesk and returns tooling — no shadow systems",
      "Payment and personal data handled under ISO/IEC 27001:2013 controls",
      "Policy decision trees agreed with you, so refunds stay consistent",
      "Weekly contact-driver reporting that feeds self-service content",
    ],
    stats: [
      { value: "40%", label: "Faster order resolution" },
      { value: "3x", label: "Peak-season capacity" },
      { value: "↑", label: "Repeat-purchase rate" },
    ],
    faqs: [
      {
        q: "How quickly can you scale for a sale event?",
        a: "With an agreed ramp plan we typically stand up trained surge capacity in the weeks before an event and hold it through the tail of returns, then wind down. The lead time depends on product complexity — simple catalogues train faster than technical ones.",
      },
      {
        q: "Do you work inside our existing tools?",
        a: "Yes. Our agents work directly in your order-management system, helpdesk and returns tooling. We do not ask you to move platforms or run a parallel system.",
      },
      {
        q: "Which channels do you cover?",
        a: "Voice, live chat, email, social inboxes and marketplace seller messaging. Agents are cross-trained so they can move between channels as volume shifts through the day.",
      },
    ],
    caseStudy: "retail-ecommerce",
  },

  /* ---------------------------------------------------------------- 03 */
  {
    n: "03",
    slug: "technology",
    name: "Technology",
    shortName: "Technology",
    phrase: "technology",
    icon: "chip",
    img: "/assets/img/technology1.webp",
    gallery: ["/assets/img/technology2.webp", "/assets/img/question-image.webp"],
    tagline: "Layered technical support that keeps pace with product growth.",
    summary:
      "Tier-1 and tier-2 technical support, onboarding assistance and SLA-backed escalation — so senior engineers stop answering routine tickets.",
    challenge:
      "Engineers were bogged down by routine tickets as product adoption rapidly expanded.",
    solution:
      "Structured a dedicated Tier-1 and Tier-2 support team to intercept and resolve common issues.",
    results:
      "Cleared 35% of the ticket backlog and freed engineering teams to focus on core development.",
    pressures: [
      "Adoption growing faster than the support team can hire.",
      "Senior engineers pulled into routine how-to questions instead of building.",
      "Onboarding stalling the moment a user hits friction.",
      "Backlogs that quietly become the reason renewals slip.",
    ],
    intro: [
      "Technology companies rarely have a support problem in the abstract — they have a triage problem. The routine questions and the genuinely hard ones arrive in the same queue, and without a layer to separate them, expensive engineers end up answering both.",
      "Cimmons designs a tiered model that catches routine issues early and routes the complex ones straight to the right people. Agents are trained on your product, not just on scripts, so first answers are accurate and escalations arrive with the context your engineers actually need.",
    ],
    capabilities: [
      {
        title: "Tier-1 Product Support",
        desc: "Setup, how-to, account and billing questions resolved at first contact against a maintained knowledge base.",
      },
      {
        title: "Tier-2 Technical Troubleshooting",
        desc: "Deeper diagnosis — logs, configuration, integrations and reproduction steps — before anything reaches engineering.",
      },
      {
        title: "Onboarding Assistance",
        desc: "Guided setup and proactive outreach at the points where users historically drop off, turning a passive queue into active guidance.",
      },
      {
        title: "SLA-Backed Escalation",
        desc: "Crisp escalation criteria and response targets between tiers, so nothing sits in the gap between teams.",
      },
      {
        title: "Bug Intake & Triage",
        desc: "Clean, reproducible bug reports filed into your tracker with severity applied consistently.",
      },
      {
        title: "Knowledge Base Maintenance",
        desc: "The questions users actually ask, fed back into help content and macros to cut future contact volume.",
      },
    ],
    compliance: [
      "Product-trained agents, refreshed on every major release",
      "Escalation SLAs agreed per tier and reported weekly",
      "Access to customer environments under ISO/IEC 27001:2013 controls",
      "Tickets worked in your tracker — Jira, Linear, Zendesk or equivalent",
    ],
    stats: [
      { value: "35%", label: "Lower ticket backlog" },
      { value: "2 tiers", label: "Structured escalation" },
      { value: "↑", label: "Onboarding completion" },
    ],
    faqs: [
      {
        q: "How do you train agents on a technical product?",
        a: "Agents go through your product itself — hands-on environments, guided scenarios and shadowing — not just a script deck. We then refresh training on every major release so answers stay current.",
      },
      {
        q: "What stays with our engineering team?",
        a: "Anything requiring code changes or architectural judgement. We define escalation criteria with you up front so tier-1 and tier-2 absorb the routine and the reproducible, and engineering sees only what genuinely needs them — with diagnosis already attached.",
      },
      {
        q: "Can you work in our existing ticketing system?",
        a: "Yes. We work in your tracker and helpdesk of choice, following your queues, tags and severity conventions.",
      },
    ],
    caseStudy: "technology",
  },

  /* ---------------------------------------------------------------- 04 */
  {
    n: "04",
    slug: "it-saas",
    name: "IT & SaaS",
    shortName: "IT & SaaS",
    phrase: "IT & SaaS",
    icon: "cloud",
    img: "/assets/img/technology2.webp",
    gallery: ["/assets/img/technology1.webp", "/assets/img/success.webp"],
    tagline:
      "Global, always-on omnichannel support that keeps users subscribed.",
    summary:
      "Follow-the-sun omnichannel coverage with defined SLAs, retention support and a single shared knowledge base across every region.",
    challenge: "Global users experienced delayed resolutions due to limited time zone support coverage.",
    solution:
      "Deployed a follow-the-sun 24/7 support model with stringent SLA management.",
    results:
      "Eliminated overnight wait times, directly contributing to higher customer retention.",
    pressures: [
      "Customers in every time zone, support in only one.",
      "Overnight waits showing up later as churn.",
      "Answers that differ depending on which region picks up the ticket.",
      "SLA commitments made in sales that operations cannot hold.",
    ],
    intro: [
      "For subscription businesses, support is retention. A user who hits a wall at 3am and waits until the next business day has already started forming an opinion about renewal — and no amount of product quality fully undoes that.",
      "Cimmons closes the coverage gap with a genuinely 24/7 operation: the same quality of help whatever the hour or channel, working from one shared knowledge base so a customer gets the same answer in Bengaluru, Berlin or Boston.",
    ],
    capabilities: [
      {
        title: "Omnichannel Support",
        desc: "Chat, email, voice and in-app support handled by cross-trained agents working from one knowledge base.",
      },
      {
        title: "24/7 Follow-the-Sun Coverage",
        desc: "Genuine round-the-clock staffing so response and resolution targets hold at 3am as firmly as at 3pm.",
      },
      {
        title: "SLA Management",
        desc: "First-response and resolution targets defined, monitored and reported — the commitments sales makes, kept.",
      },
      {
        title: "Retention & Churn-Save Support",
        desc: "Cancellation conversations handled with genuine problem-solving and offers you approve, not pressure tactics.",
      },
      {
        title: "User Onboarding & Adoption",
        desc: "Guided activation and proactive check-ins that get new accounts to value before the trial runs out.",
      },
      {
        title: "Billing & Subscription Queries",
        desc: "Plan changes, invoices, seat management and payment issues resolved without an engineering ticket.",
      },
    ],
    compliance: [
      "One shared knowledge base — consistent answers in every region",
      "Documented SLAs with weekly attainment reporting",
      "ISO/IEC 27001:2013 controls on customer-data access",
      "Quality sampling across every channel and every shift",
    ],
    stats: [
      { value: "24/7", label: "Follow-the-sun coverage" },
      { value: "↑", label: "Customer retention" },
      { value: "SLA", label: "Backed response times" },
    ],
    faqs: [
      {
        q: "Is your 24/7 coverage genuinely staffed?",
        a: "Yes — overnight shifts are staffed by trained agents, not a voicemail box or a bot that files a ticket for the morning. SLA attainment is reported per shift so you can see it holding.",
      },
      {
        q: "How do you keep answers consistent across regions?",
        a: "Every agent works from one shared knowledge base with a single approved answer per scenario, and quality sampling runs across all shifts. When an answer changes, it changes everywhere at once.",
      },
      {
        q: "Can you handle cancellation and churn-save conversations?",
        a: "We can, within limits you set. Our approach is to solve the underlying problem and present retention offers you have approved — never to make cancelling difficult.",
      },
    ],
    caseStudy: "it-saas",
  },

  /* ---------------------------------------------------------------- 05 */
  {
    n: "05",
    slug: "ai-data-services",
    name: "AI Data Services",
    shortName: "AI Data Services",
    phrase: "AI data services",
    icon: "sparkle",
    img: "/assets/img/data-annotation-services-bengaluru-team.webp",
    imgAlt:
      "Cimmons data annotation reviewers checking labeled training data at the Bengaluru operations centre",
    gallery: [
      "/assets/img/multilingual-voice-data-collection-india.webp",
      "/assets/img/technology1.webp",
    ],
    // This sector sells data work, not call-center work, so it overrides the
    // template's generic BPO framing. Primary keyword: "data annotation
    // services in bangalore" (local + commercial, per SEO_CONTEXT.md §1b).
    metaTitle: "Data Annotation Services in Bangalore",
    metaDescription:
      "Data annotation, AI training data and human-in-the-loop review from Bengaluru — text, image, video and audio, labeled by trained CX teams under ISO controls.",
    h1: "Data Annotation & AI Training Data Services",
    serviceType: "Data Annotation and AI Training Data Services",
    graphics: "ai-data",
    // No case study exists for this sector yet, so the template shows these
    // instead of the case-study proof block.
    relatedSectors: ["it-saas", "technology"],
    tagline:
      "Human-in-the-loop data work that makes AI models worth deploying.",
    summary:
      "Data annotation and labeling across image, video, text and audio, plus multilingual data collection, model evaluation, RLHF review and QA — run by trained, managed teams in Bengaluru.",
    challenge:
      "Annotation that was accurate in the pilot fell apart at volume — and model performance stalled with it.",
    solution:
      "Managed human-in-the-loop teams working to versioned guidelines, with every label traceable to a rule.",
    results:
      "Auditable training datasets that hold their accuracy as throughput goes up.",
    pressures: [
      "Models that pass every offline benchmark and then break on real-world inputs the training set never contained.",
      "Annotation volume tripling in a quarter while label consistency quietly drifts.",
      "No independent human review layer, so bias and unsafe outputs reach production before anyone catches them.",
      "Regional language and dialect data that simply doesn't exist in any dataset you can buy.",
    ],
    intro: [
      "A model is only as good as the judgement in its training data. That's the part vendors gloss over: labeling isn't data entry. Deciding whether a frustrated customer's \"fine, whatever\" is resolved or escalated-and-lost is a judgement call, and someone who has never handled that call will get it wrong at scale.",
      "Cimmons came to AI data work from the other direction. We run live support floors — 356+ people on voice and non-voice operations in Bengaluru for 25+ clients — so the people annotating your conversational data have taken those conversations. For intent taxonomies, support-dialogue RLHF, sentiment and escalation labeling, that experience is the product. Pure-play annotation shops staff for throughput; we staff for judgement and then build throughput on top.",
      "The rest is the full pipeline you'd expect. We generate raw multilingual voice and image-prompted speech data where none exists, label text, image, video and audio to versioned guidelines, and sit as an independent human-in-the-loop layer scoring model output before it ships. All of it inside ISO 9001:2015 and ISMS 27001:2013 controls, in access-controlled environments your data doesn't leave.",
    ],
    capabilities: [
      {
        title: "Multilingual data collection",
        desc: "Raw training data built from scratch: natural conversational voice, image-prompted speech and simulated support scenarios, across the demographics and Indian languages your users actually speak.",
      },
      {
        title: "Text & NLP annotation",
        desc: "Named entity recognition, intent classification, sentiment and emotion tagging, document categorisation and instruction-response pairs for LLM fine-tuning.",
      },
      {
        title: "Image & video annotation",
        desc: "Bounding boxes, polygon and semantic segmentation, keypoint and skeletal labeling, and frame-by-frame video tracking for computer vision and autonomous systems.",
      },
      {
        title: "Audio & speech annotation",
        desc: "Verbatim and clean transcription, speaker diarization, timestamping, accent and emotion tagging for ASR and voice AI.",
      },
      {
        title: "Human-in-the-loop QA",
        desc: "A double-pass review layer with adjudication on disagreement. We measure inter-annotator agreement and report it, so you see label quality as a number rather than a promise.",
      },
      {
        title: "Safety & compliance filtering",
        desc: "Screening training corpora for biased, abusive, personal or otherwise unusable content before it shapes model behaviour — and documenting what we removed and why.",
      },
    ],
    groupedCapabilities: [
      {
        title: "Sourcing data that doesn't exist yet",
        desc: "Buying a dataset only works if someone has already built one. When they haven't — regional dialects, your specific support scenarios, edge cases your users hit and your logs missed — we record it. Consented collection, documented demographic spread, delivered to your spec.",
        subFeatures: [
          "Conversational & dialect voice recording",
          "Image-prompted speech & scenario capture",
          "Support-conversation simulation",
        ],
      },
      {
        title: "Labeling across every modality you train on",
        desc: "Text, image, video, audio — one vendor, one set of guidelines, one QA standard. Annotators train against golden datasets before they touch production data, and every label decision traces back to a written rule rather than a judgement call someone made on a Tuesday.",
        subFeatures: [
          "NER, intent & sentiment classification",
          "Bounding box, polygon & keypoint labeling",
          "Transcription, diarization & emotion tagging",
        ],
      },
      {
        title: "Independent human review of model output",
        desc: "The checkpoint between \"the model responded\" and \"we shipped that response\". We score outputs against your guidelines, flag toxicity and bias, and feed structured preference data back into training. Being outside your team is the point — we have no reason to grade generously.",
        subFeatures: [
          "Output accuracy & preference scoring",
          "RLHF & reinforcement feedback",
          "Toxicity, bias & brand-safety audit",
        ],
      },
    ],
    startingPoints: [
      {
        problem: "Your model needs scenarios your logs never captured.",
        solution: "We record them.",
      },
      {
        problem: "You have a data lake nobody has structured.",
        solution: "We label it.",
      },
      {
        problem: "Your pipeline needs review by someone who didn't build it.",
        solution: "We audit it.",
      },
      {
        problem: "Your data-ops team is the bottleneck, not the plan.",
        solution: "We extend it.",
      },
    ],
    engagementModels: [
      {
        title: "Fixed-scope delivery",
        desc: "A defined target — 50,000 labeled images, 200 hours of transcribed audio — with an agreed accuracy threshold and delivery date. Best when the work is bounded and you want a number on it.",
      },
      {
        title: "Dedicated AI ops team",
        desc: "A ring-fenced team that works inside your tooling and your guidelines, on your sprint rhythm, scaling up as volume grows. Best when annotation is continuous rather than a project.",
      },
      {
        title: "Independent QA layer",
        desc: "You generate or auto-label; we grade. We score, filter and adjudicate before anything enters training. Best when speed comes from automation and the risk you're managing is quality.",
      },
    ],
    compliance: [
      "Double-pass human review with documented adjudication — inter-annotator agreement measured and reported, not assumed",
      "Consent-based collection with documented demographic, language and dialect coverage",
      "ISO 9001:2015 quality management and ISMS 27001:2013 information security, with access-controlled delivery environments",
      "Versioned annotation guidelines — every label traces to a written rule, so relabeling on a spec change is a re-run, not a rebuild",
    ],
    stats: [
      { value: "356+", label: "People across our Bengaluru operations" },
      { value: "4", label: "Modalities: text, image, video, audio" },
      { value: "2-pass", label: "Human review on every dataset" },
    ],
    faqs: [
      {
        q: "What types of data can you annotate?",
        a: "Text, image, video and audio. Bounding boxes, polygon and semantic segmentation and keypoints for computer vision; NER, intent and sentiment for NLP; transcription, diarization and emotion tagging for speech. If your task doesn't fit a standard type, we'll write guidelines for it.",
      },
      {
        q: "How do you make sure the labels are accurate?",
        a: "Process, not promises. Annotators train against a golden dataset before touching production data, every batch goes through a second independent pass, and disagreements are adjudicated against versioned written guidelines. We measure inter-annotator agreement and report it with delivery.",
      },
      {
        q: "What makes you different from a dedicated annotation company?",
        a: "We run live support operations — 356+ people on voice and non-voice floors. For conversational AI, intent taxonomies, sentiment and RLHF on support dialogue, our annotators have handled the real version of the conversation they're labeling. For pure computer-vision work, honestly, judge us on the QA process rather than that background.",
      },
      {
        q: "Can you collect training data we don't have?",
        a: "Yes. Consented multilingual voice recording, image-prompted speech, and simulated support scenarios, with documented demographic and dialect spread. This is where teams building for Indian users usually get stuck, and it's the work we're best set up for.",
      },
      {
        q: "How do you price data annotation work?",
        a: "Three ways: per unit (per image, per audio hour, per document) for fixed-scope work; per FTE per month for a dedicated team; or per reviewed item for QA-only engagements. Which one is cheaper depends on how stable your guidelines are — if the spec is still moving, a dedicated team costs less than repricing a fixed scope every fortnight.",
      },
      {
        q: "How quickly can you scale up?",
        a: "We recruit and train against a defined guideline, so ramp time is a function of task complexity, not hiring. Simple classification scales in days; specialist medical or dialect work takes longer because the training does. We'll give you a ramp curve before you sign, not after.",
      },
      {
        q: "Who owns the data and the labels?",
        a: "You do — the source data, the annotations and any derived dataset. We work in access-controlled environments under ISMS 27001:2013, your data doesn't leave the agreed ecosystem, and we don't reuse client data across engagements.",
      },
      {
        q: "Do you work in our annotation tool?",
        a: "Yes, that's the default — your platform, your guidelines, your project structure, so your review workflow stays intact. If you don't have tooling yet, we'll run the project in ours and hand over clean, versioned exports.",
      },
    ],
  },

  /* ---------------------------------------------------------------- 06 */
  {
    n: "06",
    slug: "real-estate",
    name: "Real Estate",
    shortName: "Real Estate",
    phrase: "real estate",
    icon: "home",
    img: "/assets/img/service4.webp",
    gallery: [
      "/assets/img/service1-scaled.webp",
      "/assets/img/question-image.webp",
    ],
    tagline: "Round-the-clock lead qualification that fills the sales pipeline.",
    summary:
      "Instant enquiry response, lead qualification, viewing scheduling and CRM hygiene — so agents spend their day closing rather than chasing.",
    challenge:
      "High-value property leads were going cold due to delayed off-hours responses.",
    solution:
      "Launched a 24/7 lead qualification and viewing-scheduling team to instantly engage prospects.",
    results:
      "Increased booked viewings by 45% and delivered a highly qualified sales pipeline.",
    pressures: [
      "Leads going cold when they are not contacted within minutes.",
      "Agents spending their day chasing prospects who were never going to buy.",
      "Enquiries arriving at nights and weekends with nobody to answer them.",
      "CRM records that drift out of date and stop being trustworthy.",
    ],
    intro: [
      "Property enquiries have a short half-life. The same lead that converts when answered in five minutes is close to worthless by the next morning — and no sales team can hold that response window while also running viewings and closing deals.",
      "Cimmons becomes the always-on front line for your pipeline. We engage every enquiry fast, ask the qualifying questions that separate serious buyers from browsers, and put booked viewings straight into your agents' calendars with the full context attached.",
    ],
    capabilities: [
      {
        title: "Instant Enquiry Response",
        desc: "Portal, web-form and phone enquiries answered within minutes, around the clock, including nights and weekends.",
      },
      {
        title: "Lead Qualification",
        desc: "Budget, timeline, financing status and requirement fit captured against your agreed criteria before an agent's time is spent.",
      },
      {
        title: "Viewing & Appointment Scheduling",
        desc: "Bookings placed directly into agent calendars, with confirmations and reminders that cut no-shows.",
      },
      {
        title: "Proactive Follow-up",
        desc: "Structured nurture on leads that are real but not yet ready, so they come back to you and not a competitor.",
      },
      {
        title: "CRM Updates & Hygiene",
        desc: "Every interaction logged with clean, consistent data, keeping pipeline reporting worth reading.",
      },
      {
        title: "Tenant & Owner Support",
        desc: "Maintenance requests, rent queries and general property-management calls handled off your agents' desks.",
      },
    ],
    compliance: [
      "Qualification criteria agreed with you and applied consistently",
      "Every enquiry logged in your CRM — no leads held outside the system",
      "Contact-consent and do-not-call preferences respected and recorded",
      "Response-time SLAs reported per channel",
    ],
    stats: [
      { value: "45%", label: "More booked viewings" },
      { value: "24/7", label: "Lead response window" },
      { value: "↑", label: "Qualified pipeline" },
    ],
    faqs: [
      {
        q: "How fast do you respond to a new enquiry?",
        a: "We target a response measured in minutes, around the clock, because that window is where property leads are won or lost. The exact SLA is agreed per channel before go-live and reported back to you weekly.",
      },
      {
        q: "Do you qualify leads or just take messages?",
        a: "We qualify. Budget, timeline, financing status and requirement fit are captured against criteria you define, so agents receive warm, ready-to-tour prospects rather than a list of names.",
      },
      {
        q: "Will this work with our CRM?",
        a: "Yes. We work inside your CRM so every interaction, qualification note and booking lands where your team already looks — no parallel spreadsheets.",
      },
    ],
    caseStudy: "real-estate",
  },

  /* ---------------------------------------------------------------- 07 */
  {
    n: "07",
    slug: "healthcare",
    name: "Healthcare",
    shortName: "Healthcare",
    phrase: "healthcare",
    icon: "heart",
    img: "/assets/img/hf-healthcare.webp",
    gallery: ["/assets/img/service2.webp", "/assets/img/hf-about.webp"],
    tagline:
      "Compassionate, always-on patient support that scales with demand.",
    summary:
      "Patient scheduling, insurance and billing queries, triage routing and post-visit follow-up — run by agents trained in healthcare communication and data-privacy protocol.",
    challenge:
      "Managing seasonal patient volume spikes without compromising care quality or data privacy.",
    solution:
      "Deployed a dedicated, HIPAA-compliant 24/7 support desk for scheduling and triage.",
    results: "Reduced patient wait times by 50% while improving satisfaction scores by 30%.",
    pressures: [
      "Seasonal surges — flu season, facility launches, insurance-renewal windows — that in-house desks cannot staff for year-round.",
      "Clinical staff pulled off care to answer scheduling and billing calls.",
      "Patient data that must never leave a controlled, auditable workflow.",
      "Follow-up calls slipping through the cracks between appointments.",
    ],
    intro: [
      "Healthcare support is not ordinary customer service. Every call carries a person's health, their money or their privacy — often all three at once — and the tone of the conversation matters as much as the answer. That is a hard standard to hold when volumes triple overnight.",
      "Cimmons runs the conversations around care so your clinical teams can stay focused on care itself. We build a dedicated, privacy-aware desk that handles scheduling, insurance queries, triage routing and post-visit follow-ups, with clear escalation paths back to your on-call staff whenever a case needs clinical judgement.",
    ],
    capabilities: [
      {
        title: "Appointment Scheduling & Reminders",
        desc: "Inbound booking, rescheduling and cancellation handling, plus proactive reminder calls that cut no-shows and keep clinic calendars full.",
      },
      {
        title: "Patient Support Desk",
        desc: "24/7 multilingual voice, chat and email support for general enquiries, pre-visit instructions and post-visit questions.",
      },
      {
        title: "Insurance & Billing Queries",
        desc: "Coverage checks, claim status, statement explanations and payment follow-up — handled patiently, so billing questions never sour the care experience.",
      },
      {
        title: "Triage Routing & Escalation",
        desc: "Structured intake that identifies urgency fast and routes clinical questions to your staff within defined SLAs, never guessing at medical advice.",
      },
      {
        title: "Post-Visit Follow-up",
        desc: "Recovery check-ins, adherence reminders and feedback capture that turn a single visit into continuity of care.",
      },
      {
        title: "Records & Back-Office Support",
        desc: "Data entry, records updates and document handling inside your systems, under strict access controls and full audit trails.",
      },
    ],
    compliance: [
      "HIPAA-aware workflows with role-based access and least-privilege data handling",
      "ISO/IEC 27001:2013 certified information security management",
      "Agents scripted for empathy-led communication, never clinical advice",
      "Defined clinical escalation paths with response-time SLAs",
    ],
    stats: [
      { value: "30%", label: "Higher patient satisfaction" },
      { value: "50%", label: "Faster response times" },
      { value: "24/7", label: "Multilingual coverage" },
    ],
    faqs: [
      {
        q: "Do your agents give medical advice?",
        a: "No. Our agents handle scheduling, administrative, insurance and follow-up conversations. Anything requiring clinical judgement is escalated to your on-call staff through a defined routing path with an agreed response time.",
      },
      {
        q: "How do you protect patient data?",
        a: "We work inside HIPAA-aware workflows with role-based access, least-privilege permissions and full audit trails, backed by our ISO/IEC 27001:2013 certified information security management system. Agents access only the fields their task requires.",
      },
      {
        q: "Can you scale up for seasonal surges?",
        a: "Yes. Flexing seasonal capacity is the core reason healthcare providers bring us in. We add trained capacity within days for flu season, facility launches or renewal windows, and scale back down afterwards so you are not carrying peak cost year-round.",
      },
    ],
    caseStudy: "healthcare",
  },
];

export function getSector(slug: string): Sector | undefined {
  return SECTORS.find((s) => s.slug === slug);
}
