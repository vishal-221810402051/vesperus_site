import { motion } from "framer-motion";
import { Activity, FileCheck2, HeartPulse, RadioTower } from "lucide-react";

const capabilities = [
  {
    icon: RadioTower,
    title: "Telemetry Visibility",
    description: "Live visibility into system-state and telemetry activity.",
    status: "Current foundation",
  },
  {
    icon: Activity,
    title: "Packet Integrity",
    description: "Validation of communication consistency across distributed nodes.",
    status: "Prototype context",
  },
  {
    icon: HeartPulse,
    title: "Health Monitoring",
    description: "Observation of platform health, heartbeat behavior, and operational status.",
    status: "In development",
  },
  {
    icon: FileCheck2,
    title: "Validation Evidence",
    description: "Structured evidence collection supporting engineering review and reproducibility.",
    status: "In development",
  },
];

export default function NovaScCurrentCapabilities() {
  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        <p className="eyebrow">Current capabilities</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Supervision foundations in prototype context.</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {capabilities.map(({ icon: Icon, title, description, status }, index) => (
          <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: index * 0.04 }} className="panel p-5">
            <div className="flex items-start justify-between gap-4">
              <Icon className="text-accent-cyan" size={24} />
              <span className="rounded-full border border-accent-teal/30 bg-accent-teal/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-teal">
                {status}
              </span>
            </div>
            <h3 className="mt-5 text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-text-secondary">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
