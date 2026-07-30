// Coded (SVG/Tailwind) diagrams for sectors that need original visual proof
// rather than another stock photo. Keyed off `sector.graphics` in
// lib/sectors.ts, rendered from app/sectors/[slug]/page.tsx.

const MODALITIES = [
  { label: "Text", items: ["NER", "Intent", "Sentiment"] },
  { label: "Image", items: ["Bounding box", "Segmentation", "Keypoints"] },
  { label: "Video", items: ["Frame tracking", "Object ID", "Action tags"] },
  { label: "Audio", items: ["Transcription", "Diarization", "Emotion"] },
];

export function AiDataModalityMatrix() {
  return (
    <div
      role="img"
      aria-label="Four data modalities Cimmons annotates — text, image, video and audio — each with its main annotation types"
      className="mx-auto mb-16 grid max-w-5xl grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6"
    >
      {MODALITIES.map((m) => (
        <div
          key={m.label}
          className="rounded-2xl border border-black/10 bg-cream p-6 transition-colors hover:border-primary/30"
        >
          <div className="font-display text-lg font-bold text-heading">{m.label}</div>
          <div className="mt-1 h-1 w-8 rounded-full bg-gradient-to-r from-primary to-gold" />
          <ul className="mt-4 space-y-2">
            {m.items.map((item) => (
              <li key={item} className="text-[13px] font-medium text-body">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

const PIPELINE_STEPS = ["Collect", "Label", "Review", "Deliver"];

export function AiDataPipeline() {
  return (
    <div
      role="img"
      aria-label="Data pipeline: collect raw data, label it, run a double-pass human review, then deliver the dataset"
      className="mx-auto max-w-3xl"
    >
      <div className="flex items-center justify-between">
        {PIPELINE_STEPS.map((step, i) => (
          <div key={step} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-heading font-display text-sm font-bold text-white">
                {String(i + 1).padStart(2, "0")}
              </div>
              <span className="text-[13px] font-semibold uppercase tracking-wide text-heading">
                {step}
              </span>
            </div>
            {i < PIPELINE_STEPS.length - 1 && (
              <div className="mx-2 h-[2px] flex-1 bg-gradient-to-r from-primary/40 to-gold/40 sm:mx-4" />
            )}
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-[13px] text-body">
        Review runs a second independent pass on every batch — disagreements are adjudicated
        against versioned guidelines before anything ships.
      </p>
    </div>
  );
}

export function AiDataQaFlow() {
  const stages = ["Annotator", "2nd pass", "Adjudication", "Agreement score"];
  return (
    <div
      role="img"
      aria-label="Quality assurance flow: annotator, second independent pass, adjudication on disagreement, reported agreement score"
      className="mt-8 flex flex-col gap-3"
    >
      {stages.map((stage, i) => (
        <div key={stage} className="flex items-center gap-3">
          <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold/20 text-[11px] font-bold text-gold">
            {i + 1}
          </span>
          <span className="text-[14px] font-medium text-white/80">{stage}</span>
          {i < stages.length - 1 && <span className="text-white/20">&rarr;</span>}
        </div>
      ))}
    </div>
  );
}
