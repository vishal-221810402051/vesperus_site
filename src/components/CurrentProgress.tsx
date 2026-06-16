import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const milestones = [
  "Architecture defined",
  "Gateway integration planned and documented",
  "Telemetry validation focus established",
  "Packet integrity monitoring defined",
  "Safety boundaries documented",
  "Future R&D staged for M.E.D.I.S.",
];

export default function CurrentProgress() {
  return (
    <section className="section-shell" id="progress">
      <div className="max-w-3xl">
        <p className="eyebrow">Current progress</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Validation-first today. Higher-risk healthcare automation later.</h2>
        <p className="mt-5 text-lg leading-8 text-text-secondary">
          Vesperus is focused on credible infrastructure, supervision, and readiness for future development while avoiding clinical or deployment claims.
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {milestones.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
            className="flex items-center gap-4 rounded-3xl border border-border-subtle bg-surface-primary/60 p-5"
          >
            <CheckCircle2 className="shrink-0 text-accent-teal" size={22} />
            <span className="text-text-secondary">{item}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
