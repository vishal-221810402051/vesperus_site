import { motion } from "framer-motion";
import { Activity, Gauge, GitCompare, SearchCheck } from "lucide-react";

const capabilities = [
  {
    icon: Activity,
    title: "Anomaly Screening",
    description: "Future capability focused on identifying unusual telemetry behavior and unexpected operational patterns.",
    status: "Planned",
  },
  {
    icon: Gauge,
    title: "Drift Monitoring",
    description: "Future capability focused on detecting gradual changes in sensors, calibration, and process behavior.",
    status: "Planned",
  },
  {
    icon: GitCompare,
    title: "Consistency Analysis",
    description: "Future capability focused on comparing new runs against historical validated behavior.",
    status: "Research",
  },
  {
    icon: SearchCheck,
    title: "Confidence-Based Advisories",
    description: "Future capability focused on prioritizing engineering observations using confidence scoring and supporting evidence.",
    status: "Research",
  },
];

export default function NovaIntelligentAdvisoryRoadmap() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <p className="eyebrow">NOVA SC Roadmap</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Future Intelligent Advisory Layer</h2>
            <span className="mt-5 inline-flex rounded-full border border-accent-violet/30 bg-accent-violet/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-violet">
              Research Roadmap
            </span>
            <p className="mt-5 text-lg leading-8 text-text-secondary">
              NOVA SC is designed as a supervision and validation platform capable of supporting future intelligent monitoring and advisory analytics after deterministic validation infrastructure is established.
            </p>
            <p className="mt-5 rounded-3xl border border-accent-teal/20 bg-accent-teal/5 p-4 text-sm leading-7 text-text-secondary">
              This layer is positioned as advisory analytics for engineering review, not control authority.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map(({ icon: Icon, title, description, status }, index) => (
              <motion.article
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.42, delay: index * 0.04 }}
                className="panel p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <Icon className="text-accent-cyan" size={24} />
                  <span className="rounded-full border border-accent-teal/30 bg-accent-teal/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-teal">
                    {status}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-text-primary">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-text-secondary">{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
