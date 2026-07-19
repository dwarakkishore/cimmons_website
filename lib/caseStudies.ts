// Single source of truth for the industry case studies.
// Used by the Services accordion (home page) and the case-study detail pages
// under /case-studies/[slug].

export type CaseStudyMeta = {
  label: string;
  value: string;
};

export type CaseStudyStat = {
  value: string;
  label: string;
};

export type CaseStudy = {
  n: string;
  slug: string;
  name: string;
  img: string; // hero / featured image (also used in the accordion)
  gallery: [string, string]; // two supporting images in the detail body
  // Short lines shown in the accordion panel
  challenge: string;
  solution: string;
  results: string;
  // Longer detail-page copy
  tagline: string;
  overview: string[]; // "The Engagement" paragraphs
  approach: string[]; // "How We Delivered" paragraphs
  stats: CaseStudyStat[];
  services: string[];
  details: CaseStudyMeta[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    n: "01",
    slug: "healthcare",
    name: "Healthcare",
    img: "/assets/img/hf-healthcare.webp",
    gallery: ["/assets/img/healthcare1.png", "/assets/img/healthcare2.png"],
    challenge:
      "Scaling patient support during peak seasons without losing the personal touch.",
    solution:
      "Deployed a 24/7 multilingual support team trained in healthcare communication.",
    results: "30% higher patient satisfaction and 50% faster response times.",
    tagline:
      "Compassionate, always-on patient support that scales with demand.",
    overview: [
      "A fast-growing healthcare provider needed to keep patients cared for through seasonal surges — flu season, new facility launches and insurance-renewal windows — without diluting the warmth patients expect from a medical brand. In-house teams were stretched thin, wait times were climbing, and follow-up calls were slipping through the cracks.",
      "Cimmons stepped in as an extension of their care team. We built a dedicated, HIPAA-aware support unit that handles appointment scheduling, triage routing, insurance queries and post-visit follow-ups — so clinical staff can stay focused on patients while we handle the conversations around care.",
    ],
    approach: [
      "We stood up a 24/7 multilingual desk with agents specifically trained in healthcare communication, empathy-led scripting and data-privacy protocols. Every interaction — voice, chat or email — follows a compliance-first workflow with clear escalation paths to on-call clinical staff.",
      "Real-time dashboards give the provider full visibility into volumes, resolution times and patient-satisfaction scores. As demand spikes, we flex seasonal capacity up and down within days, so coverage never breaks and costs stay predictable.",
    ],
    stats: [
      { value: "30%", label: "Higher patient satisfaction" },
      { value: "50%", label: "Faster response times" },
      { value: "24/7", label: "Multilingual coverage" },
    ],
    services: [
      "Inbound Patient Support",
      "Appointment Scheduling",
      "Insurance & Billing Queries",
      "Post-Visit Follow-up",
    ],
    details: [
      { label: "Client", value: "Leading Healthcare Provider" },
      { label: "Category", value: "Patient Support" },
      { label: "Location", value: "India · Global" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    n: "02",
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    img: "/assets/img/service1-scaled.webp",
    gallery: ["/assets/img/service2.webp", "/assets/img/success1.png"],
    challenge:
      "Handling order and returns volume that spiked during major sale events.",
    solution:
      "Added flexible seasonal agents across chat, email and voice channels.",
    results:
      "40% faster order resolution and a clear lift in repeat purchases.",
    tagline:
      "Omnichannel support that turns busy sale seasons into loyal customers.",
    overview: [
      "A high-growth e-commerce brand was thriving — but every flagship sale event turned into a support bottleneck. Order questions, delivery updates and returns flooded in faster than the team could answer, and slow replies were quietly costing repeat business.",
      "Cimmons became the elastic support layer behind their storefront. We absorbed the peaks across chat, email and voice, so shoppers got fast, accurate answers at the exact moments that decide whether they buy again.",
    ],
    approach: [
      "We deployed cross-trained agents who move fluidly between channels, backed by a shared knowledge base tied to the brand's order-management and returns systems. Seasonal capacity scales on demand, so a Diwali or year-end sale is fully staffed without carrying that cost year-round.",
      "Tight feedback loops surface the questions customers ask most, which we feed back into self-service content and macros — steadily cutting contact volume while lifting resolution speed and CSAT.",
    ],
    stats: [
      { value: "40%", label: "Faster order resolution" },
      { value: "3x", label: "Peak-season capacity" },
      { value: "↑", label: "Repeat-purchase rate" },
    ],
    services: [
      "Order & Delivery Support",
      "Returns & Refunds",
      "Live Chat & Email",
      "Seasonal Scaling",
    ],
    details: [
      { label: "Client", value: "Growth E-Commerce Brand" },
      { label: "Category", value: "Customer Support" },
      { label: "Location", value: "India · APAC" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    n: "03",
    slug: "technology",
    name: "Technology",
    img: "/assets/img/technology1.webp",
    gallery: ["/assets/img/technology2.webp", "/assets/img/success2.png"],
    challenge:
      "Growing product adoption outpaced the in-house support team's capacity.",
    solution:
      "Set up tier-1 and tier-2 technical support with fast escalation paths.",
    results:
      "35% drop in ticket backlog and higher onboarding completion rates.",
    tagline:
      "Layered technical support that keeps pace with product growth.",
    overview: [
      "A technology company was onboarding users faster than its support team could keep up. Ticket backlogs were growing, onboarding stalled when users hit friction, and senior engineers were being pulled into routine questions instead of building product.",
      "Cimmons designed a tiered support model that catches the routine issues early and routes the genuinely complex ones straight to the right people — freeing the internal team to focus on the work only they can do.",
    ],
    approach: [
      "We built a tier-1 desk for setup, how-to and account questions, and a tier-2 team for deeper technical troubleshooting, with crisp escalation criteria and SLAs between them. Agents were trained on the product itself, not just scripts, so answers are accurate the first time.",
      "We instrumented onboarding to spot where users drop off and proactively reach out, turning a passive queue into active guidance. The backlog shrank and more users reached activation.",
    ],
    stats: [
      { value: "35%", label: "Lower ticket backlog" },
      { value: "2 tiers", label: "Structured escalation" },
      { value: "↑", label: "Onboarding completion" },
    ],
    services: [
      "Tier-1 Product Support",
      "Tier-2 Technical Troubleshooting",
      "Onboarding Assistance",
      "SLA-backed Escalation",
    ],
    details: [
      { label: "Client", value: "SaaS Technology Firm" },
      { label: "Category", value: "Technical Support" },
      { label: "Location", value: "India · Global" },
      { label: "Year", value: "2023" },
    ],
  },
  {
    n: "04",
    slug: "finance",
    name: "Finance",
    img: "/assets/img/service3.webp",
    gallery: ["/assets/img/service5.webp", "/assets/img/success3.png"],
    challenge:
      "Delivering dependable, compliant support for sensitive customer accounts.",
    solution:
      "Built a compliance-first team for query resolution and fraud alerts.",
    results: "Improved trust scores and quicker dispute turnaround times.",
    tagline:
      "Compliance-first support that protects customers and builds trust.",
    overview: [
      "A financial services provider needed support that could handle sensitive accounts with absolute reliability. Every interaction carried regulatory weight, and slow dispute handling was eroding customer trust at exactly the moments that mattered most.",
      "Cimmons built a dedicated, compliance-first team that treats security and accuracy as non-negotiable — resolving queries, flagging fraud signals and moving disputes forward without ever cutting corners.",
    ],
    approach: [
      "Agents work within strict data-handling and verification protocols aligned to the client's compliance requirements, with full audit trails on every case. Fraud-alert workflows route suspicious activity to specialists in minutes, not hours.",
      "We standardised dispute handling into a clear, tracked process, so customers always know where their case stands — which lifted trust scores and shortened turnaround times measurably.",
    ],
    stats: [
      { value: "↑", label: "Customer trust scores" },
      { value: "Faster", label: "Dispute turnaround" },
      { value: "100%", label: "Audit-traceable cases" },
    ],
    services: [
      "Account & Query Support",
      "Fraud Alert Handling",
      "Dispute Resolution",
      "Compliance-first Operations",
    ],
    details: [
      { label: "Client", value: "Financial Services Provider" },
      { label: "Category", value: "Collections & Support" },
      { label: "Location", value: "India" },
      { label: "Year", value: "2024" },
    ],
  },
  {
    n: "05",
    slug: "real-estate",
    name: "Real Estate",
    img: "/assets/img/service4.webp",
    gallery: ["/assets/img/service1-scaled.webp", "/assets/img/success1.png"],
    challenge:
      "Slow lead follow-up was costing the agency qualified enquiries.",
    solution:
      "Ran proactive lead qualification and appointment scheduling around the clock.",
    results:
      "45% more booked viewings and a fuller, better-qualified pipeline.",
    tagline:
      "Round-the-clock lead qualification that fills the sales pipeline.",
    overview: [
      "A real-estate agency was generating plenty of enquiries but losing them to slow follow-up. Leads that weren't contacted within minutes went cold, and agents spent their days chasing unqualified prospects instead of closing.",
      "Cimmons became the always-on front line for their pipeline — engaging every enquiry fast, qualifying intent and booking viewings straight into agents' calendars.",
    ],
    approach: [
      "We ran proactive, around-the-clock lead qualification: responding to new enquiries the moment they arrive, asking the right qualifying questions and scheduling appointments directly. Agents receive only warm, ready-to-tour prospects.",
      "By capturing every lead's context and routing it cleanly to the sales team, we turned a leaky funnel into a fuller, better-qualified pipeline — and lifted booked viewings sharply.",
    ],
    stats: [
      { value: "45%", label: "More booked viewings" },
      { value: "24/7", label: "Lead response window" },
      { value: "↑", label: "Qualified pipeline" },
    ],
    services: [
      "Lead Qualification",
      "Appointment Scheduling",
      "Proactive Follow-up",
      "CRM Updates",
    ],
    details: [
      { label: "Client", value: "Property & Real-Estate Agency" },
      { label: "Category", value: "Sales Support" },
      { label: "Location", value: "India" },
      { label: "Year", value: "2023" },
    ],
  },
  {
    n: "06",
    slug: "it-saas",
    name: "IT & SaaS",
    img: "/assets/img/technology2.webp",
    gallery: ["/assets/img/technology1.webp", "/assets/img/success2.png"],
    challenge:
      "Users needed round-the-clock help across multiple time zones.",
    solution:
      "Provided omnichannel support with 24/7 coverage and clear SLAs.",
    results: "Higher retention and steadily rising customer satisfaction scores.",
    tagline:
      "Global, always-on omnichannel support that keeps users subscribed.",
    overview: [
      "An IT & SaaS company served customers across multiple time zones, but support only ran business hours in one. Users in other regions waited overnight for answers, and that gap was showing up in churn and lukewarm satisfaction scores.",
      "Cimmons closed the coverage gap with a genuinely 24/7 operation — the same quality of help, whatever the hour or channel — so every customer feels supported no matter where they are.",
    ],
    approach: [
      "We deployed omnichannel support across chat, email and voice with follow-the-sun coverage and clearly defined SLAs, so response and resolution targets hold at 3am as firmly as at 3pm. Agents are product-trained and share one knowledge base for consistency.",
      "With reliable, always-on help in place, users stopped hitting dead ends — retention improved and satisfaction scores climbed steadily quarter over quarter.",
    ],
    stats: [
      { value: "24/7", label: "Follow-the-sun coverage" },
      { value: "↑", label: "Customer retention" },
      { value: "SLA", label: "Backed response times" },
    ],
    services: [
      "Omnichannel Support",
      "24/7 Global Coverage",
      "SLA Management",
      "Retention Support",
    ],
    details: [
      { label: "Client", value: "IT & SaaS Company" },
      { label: "Category", value: "Customer Support" },
      { label: "Location", value: "Global" },
      { label: "Year", value: "2024" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
