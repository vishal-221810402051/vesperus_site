import { motion } from "framer-motion";

const statuses = [
  ["Concept", "Active R&D direction"],
  ["Infrastructure foundation", "NOVA"],
  ["Software/data validation", "TRL 3 research-stage"],
];

export default function MedisResearchStatus() {
  return (
    <section className="section-shell">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="panel p-6 md:p-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Research status</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Explicitly framed as R&D.</h2>
        </div>
        <div className="mt-8 grid gap-3 md:grid-cols-3">
          {statuses.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-border-subtle bg-surface-secondary/70 p-4">
              <p className="text-sm font-semibold text-text-primary">{label}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-teal">{value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
