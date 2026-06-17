import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const roadmap = [
  "Expanded telemetry views",
  "Health and topology panels",
  "Event/session trace review",
  "Replay inspection tools",
  "Baseline analytics and drift plots",
  "Advisory anomaly screening research",
  "Model/version traceability",
  "Confidence-based engineering review panels",
  "Future M.E.D.I.S. validation workflow support",
];

export default function NovaScRoadmap() {
  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        <p className="eyebrow">Roadmap & Future Development</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Future work remains advisory and validation-focused.</h2>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {roadmap.map((item, index) => (
          <motion.div key={item} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.04 }} className="flex items-center gap-4 rounded-3xl border border-border-subtle bg-surface-primary/60 p-5">
            <CheckCircle2 className="shrink-0 text-accent-teal" size={22} />
            <span className="text-text-secondary">{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
