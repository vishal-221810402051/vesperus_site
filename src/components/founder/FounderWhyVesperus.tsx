import { motion } from "framer-motion";
import { Eye, ListChecks, ShieldCheck } from "lucide-react";

const points = [
  { icon: Eye, title: "Supervision" },
  { icon: ListChecks, title: "Traceability" },
  { icon: ShieldCheck, title: "Safety boundaries" },
];

export default function FounderWhyVesperus() {
  return (
    <section className="section-shell">
      <div className="max-w-4xl">
        <p className="eyebrow">Why Vesperus</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Infrastructure before higher-risk automation.</h2>
        <p className="mt-5 text-lg leading-8 text-text-secondary">
          Vesperus was created to explore the infrastructure layer required before higher-risk medical automation can be responsibly developed: orchestration, telemetry validation, supervision, traceability, and safety boundaries.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {points.map(({ icon: Icon, title }, index) => (
          <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: index * 0.04 }} className="panel p-5">
            <Icon className="text-accent-cyan" size={24} />
            <p className="mt-4 font-medium text-text-primary">{title}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
