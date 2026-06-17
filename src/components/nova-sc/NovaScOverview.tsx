import { motion } from "framer-motion";
import { Eye, FileCheck2, ShieldCheck } from "lucide-react";

const points = [
  { icon: Eye, label: "Telemetry visibility" },
  { icon: FileCheck2, label: "Validation evidence" },
  { icon: ShieldCheck, label: "Deterministic boundaries" },
];

export default function NovaScOverview() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <p className="eyebrow">What NOVA SC is</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">A supervision and validation software layer.</h2>
            <p className="mt-5 text-lg leading-8 text-text-secondary">
              NOVA SC is the supervision and validation software layer for NOVA. It focuses on telemetry visibility, packet integrity, health monitoring, event evidence, session/run visibility, and validation-oriented review workflows.
            </p>
            <p className="mt-5 text-lg leading-8 text-text-secondary">
              NOVA SC does not replace deterministic validation. It helps expose system behavior so engineering teams can inspect, replay, and review platform activity.
            </p>
          </motion.div>
          <div className="grid gap-4">
            {points.map(({ icon: Icon, label }, index) => (
              <motion.div key={label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }} className="panel p-5">
                <Icon className="text-accent-cyan" size={24} />
                <p className="mt-4 font-medium text-text-primary">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
