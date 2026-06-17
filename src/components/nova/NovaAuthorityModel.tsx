import { motion } from "framer-motion";
import { Braces, FileCheck2, SearchCheck, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: Braces,
    title: "Rules",
    description: "Primary authority for deterministic validation and safety boundaries.",
  },
  {
    icon: FileCheck2,
    title: "Telemetry Evidence",
    description: "Traceable system data used for review, replay, and validation context.",
  },
  {
    icon: SearchCheck,
    title: "Advisory Intelligence",
    description: "Future analytics layer for pattern observation and engineering interpretation only.",
  },
];

export default function NovaAuthorityModel() {
  return (
    <section className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="panel border-accent-cyan/25 bg-accent-cyan/5 p-6 md:p-8"
      >
        <ShieldCheck className="text-accent-cyan" size={30} />
        <p className="eyebrow mt-6">Authority Model</p>
        <h2 className="mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">Rules define the boundaries. Intelligence supports review.</h2>
        <div className="mt-6 max-w-4xl space-y-4 text-lg leading-8 text-text-secondary">
          <p>Rules define the safety boundaries.</p>
          <p>The Intelligent Advisory Layer helps identify unusual patterns within those boundaries.</p>
          <p>Deterministic validation remains the primary authority.</p>
          <p>AI supports engineering interpretation; it does not provide control authority.</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-3xl border border-border-subtle bg-surface-secondary/70 p-5">
              <Icon className="text-accent-teal" size={22} />
              <h3 className="mt-4 text-xl font-semibold text-text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">{description}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
