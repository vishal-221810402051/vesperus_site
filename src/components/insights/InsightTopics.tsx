import { motion } from "framer-motion";
import { FileCheck2, Globe2, Network, ShieldCheck, Sparkles } from "lucide-react";

const topics = [
  {
    icon: ShieldCheck,
    title: "Healthcare Resilience",
    description: "Strategic thinking on preparedness, continuity, recovery, and adaptive health systems.",
  },
  {
    icon: Sparkles,
    title: "Responsible AI",
    description: "Perspectives on AI as decision-support infrastructure, not a replacement for institutional judgment.",
  },
  {
    icon: Network,
    title: "Digital Health Infrastructure",
    description: "Interoperability, data governance, secure exchange, and system coordination.",
  },
  {
    icon: Globe2,
    title: "Health Diplomacy",
    description: "Cross-border cooperation, policy governance, and institutional trust.",
  },
  {
    icon: FileCheck2,
    title: "Validation Infrastructure",
    description: "Evidence, traceability, supervision, and reliability in complex healthcare technology systems.",
  },
];

export default function InsightTopics() {
  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        <p className="eyebrow">Insight topics</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Themes covered by Vesperus Insights.</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {topics.map(({ icon: Icon, title, description }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.42, delay: index * 0.04 }}
            className="panel p-5"
          >
            <Icon className="text-accent-cyan" size={24} />
            <h3 className="mt-5 text-xl font-semibold text-text-primary">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-text-secondary">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
