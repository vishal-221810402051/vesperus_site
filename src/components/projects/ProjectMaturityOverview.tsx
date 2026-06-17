import { motion } from "framer-motion";

const statuses = [
  { label: "NOVA B1", value: "Designed", tone: "cyan" },
  { label: "NOVA SC", value: "Telemetry checks validated", tone: "green" },
  { label: "Pi Gateway", value: "Operational prototype", tone: "green" },
  { label: "M.E.D.I.S.", value: "Research & Development", tone: "amber" },
];

const toneClass = {
  cyan: "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan",
  green: "border-[#22C55E]/30 bg-[#22C55E]/10 text-[#8AF5C5]",
  amber: "border-[#F59E0B]/30 bg-[#F59E0B]/10 text-[#F8C97A]",
  neutral: "border-text-muted/30 bg-text-muted/10 text-text-muted",
};

export default function ProjectMaturityOverview() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="panel p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Current maturity</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">Conservative status overview.</h2>
            </div>
            <p className="max-w-lg leading-7 text-text-secondary">A compact view of what is designed, validated, prototyped, and in R&D. Safety boundaries remain documented in dedicated boundary sections.</p>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-4">
            {statuses.map(({ label, value, tone }) => (
              <div key={label} className="rounded-2xl border border-border-subtle bg-surface-secondary/70 p-4">
                <p className="text-sm font-semibold text-text-primary">{label}</p>
                <span className={`mt-3 inline-flex rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${toneClass[tone as keyof typeof toneClass]}`}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
