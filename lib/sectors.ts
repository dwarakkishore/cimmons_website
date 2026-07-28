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
  gallery: [string, string];
  /** One-line promise — used as the meta description and hero sub-head. */
  tagline: string;
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

  /* ---------------------------------------------------------------- 05 */
  {
    n: "05",
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

  /* ---------------------------------------------------------------- 06 */
  {
    n: "06",
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

  /* ---------------------------------------------------------------- 07 */
  {
    n: "07",
    slug: "ai-data-services",
    name: "AI Data Services",
    shortName: "AI Data Services",
    phrase: "AI data services",
    icon: "sparkle",
    img: "/assets/img/service5.webp",
    gallery: ["/assets/img/technology1.webp", "/assets/img/hf-about.webp"],
    tagline:
      "Human-in-the-loop data work that makes AI models worth deploying.",
    summary:
      "Data annotation and labelling across image, video, text and audio, plus data collection, model evaluation, RLHF review and QA — delivered by trained, managed teams.",
    challenge:
      "Inconsistent, unscalable data labeling was severely bottlenecking AI model performance.",
    solution:
      "Provided managed, human-in-the-loop annotation teams driven by strict QA protocols.",
    results:
      "Delivered highly accurate, auditable training datasets that scaled seamlessly with model needs.",
    pressures: [
      "AI models underperforming in real-world scenarios due to clean but incomplete training data.",
      "Scaling data annotation rapidly without compromising on label accuracy or consistency.",
      "Lack of structured, human-in-the-loop validation leading to biased or unsafe model outputs.",
      "Struggling to capture authentic, regional language nuances for voice and conversational AI.",
    ],
    intro: [
      "An AI model is only as intelligent as the data it learns from. Building high-quality training datasets isn't just a technology challenge—it's a massive human operations challenge. It requires teams who can generate realistic scenarios, label content with pinpoint accuracy, and rigorously review outputs without compromise.",
      "At Cimmons, we provide an end-to-end AI Data pipeline. From generating raw multilingual voice data and meticulously annotating text, images, and audio, to providing a strict human-in-the-loop quality assurance layer. We ensure the data feeding your models is clean, diverse, and ready for deployment.",
    ],
    capabilities: [
      {
        title: "Multilingual Data Collection",
        desc: "Generating raw training data from scratch—including natural conversational voice, image-prompted speech, and sales simulations across diverse demographics and languages.",
      },
      {
        title: "Text & NLP Annotation",
        desc: "Structuring text data through named entity recognition (NER), intent classification, sentiment tagging, and document categorization for LLM training.",
      },
      {
        title: "Image & Video Annotation",
        desc: "Precise bounding boxes, polygon segmentation, and keypoint labeling to train robust computer vision and autonomous systems.",
      },
      {
        title: "Audio & Speech Transcription",
        desc: "Accurate transcription, speaker diarization, and emotion tagging for speech recognition and voice AI models.",
      },
      {
        title: "Human-in-the-loop Quality Assurance",
        desc: "A rigorous, multi-pass review layer checking your datasets for accuracy, consistency, and edge-case handling before they enter training pipelines.",
      },
      {
        title: "Dataset Safety & Compliance Filtering",
        desc: "Proactively identifying and removing biased, abusive, or inappropriate content to protect downstream model behavior and brand safety.",
      },
    ],
    groupedCapabilities: [
      {
        title: "Sourcing & Synthesizing Raw Data",
        desc: "We build bespoke datasets from the ground up, utilizing a diverse global workforce. Whether it's capturing authentic regional dialects or simulating complex support scenarios, we ensure your model trains on reality.",
        subFeatures: [
          "Conversational & dialect voice recording",
          "Visual scenario generation",
          "Synthetic data augmentation",
        ],
      },
      {
        title: "Comprehensive Multi-Modal Labeling",
        desc: "We bring structure to chaos. Our teams meticulously tag, box, and categorize raw text, audio, and visual data, transforming unstructured files into high-fidelity training assets.",
        subFeatures: [
          "NLP & sentiment classification",
          "Polygon & keypoint bounding",
          "Audio-to-text diarization",
        ],
      },
      {
        title: "Independent Human-in-the-Loop Validation",
        desc: "We serve as the critical final checkpoint for your AI outputs. By auditing model responses against strict guidelines, we ensure safety, accuracy, and alignment before deployment.",
        subFeatures: [
          "Output accuracy scoring",
          "Reinforcement learning feedback",
          "Toxicity & bias auditing",
        ],
      },
    ],
    startingPoints: [
      { problem: "Your model needs highly specific scenarios to learn from, but you lack the raw inputs.", solution: "We source it." },
      { problem: "You have massive, unorganized data lakes requiring precise, large-scale categorization.", solution: "We structure it." },
      { problem: "Your training pipelines require independent, third-party auditing for edge cases and brand safety.", solution: "We audit it." },
      { problem: "Your internal data ops team is bottlenecked by rapidly increasing annotation demands.", solution: "We augment them." },
    ],
    engagementModels: [
      {
        title: "Fixed-Scope Delivery",
        desc: "Perfect for defined milestones. You provide the targets (e.g., 50,000 labeled images or 200 hours of audio), and we manage the end-to-end execution and delivery.",
      },
      {
        title: "Dedicated AI Ops Team",
        desc: "A continuous partnership where we deploy a ring-fenced team of experts that integrates directly into your daily AI workflows, scaling dynamically with your needs.",
      },
      {
        title: "Independent QA Layer",
        desc: "You handle the automated generation; we act purely as the human oversight committee, aggressively filtering and scoring data to prevent model drift.",
      },
    ],
    compliance: [
      "100% human-in-the-loop review teams operating under strict QA protocols",
      "Consent-based data collection with comprehensive demographic and dialect diversity",
      "Secure, access-controlled delivery environments with ISO-certified data handling",
      "Versioned annotation guidelines ensuring every label decision is traceable to a rule",
    ],
    stats: [
      { value: "100%", label: "Human-in-the-loop QA" },
      { value: "Multi-Modal", label: "Text, Audio, Image & Video" },
      { value: "Scalable", label: "Elastic annotation teams" },
    ],
    faqs: [
      {
        q: "What types of AI data can you annotate?",
        a: "We handle text, image, video, and audio. This includes everything from bounding boxes and segmentation for computer vision, to intent classification for NLP, and transcription for speech AI.",
      },
      {
        q: "How do you ensure data labeling quality?",
        a: "Quality is driven by process. We use documented, versioned guidelines, train annotators against golden datasets, and enforce a rigorous double-pass human review. Disagreements are systematically adjudicated to maintain consistency.",
      },
      {
        q: "Can you generate new training data from scratch?",
        a: "Absolutely. If you lack the raw data, we can generate it through consented, multilingual voice collection, image-prompted speech recordings, and simulated conversational scenarios.",
      },
      {
        q: "How secure is my proprietary training data?",
        a: "Highly secure. We operate within access-controlled environments under strict information security frameworks (ISO 27001 compliant). Your data never leaves the agreed-upon secure ecosystem.",
      },
    ],
  },
];

export function getSector(slug: string): Sector | undefined {
  return SECTORS.find((s) => s.slug === slug);
}
