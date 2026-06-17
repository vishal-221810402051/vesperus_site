import { motion } from "framer-motion";

const groups = [
  {
    title: "Hardware Foundation",
    items: [
      ["NOVA B1", "Designed"],
      ["Power Rails", "Operational"],
      ["MAIN ESP32-S3", "Operational"],
      ["SUB ESP32-S3", "Operational"],
    ],
  },
  {
    title: "Communications",
    items: [
      ["UART Runtime", "Operational"],
      ["Pi Gateway Interface", "Operational Prototype"],
    ],
  },
  {
    title: "Boundary",
    items: [["Research Infrastructure", "Active Development"]],
  },
];

export default function NovaValidationStatus() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Current Validation Status</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Scoped status in the current development context.</h2>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {groups.map(({ title, items }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }} className="panel p-5">
              <h3 className="text-xl font-semibold">{title}</h3>
              <div className="mt-5 grid gap-3">
                {items.map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-border-subtle bg-surface-secondary/70 p-4">
                    <p className="text-sm font-semibold text-text-primary">{label}</p>
                    <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-teal">{value}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
