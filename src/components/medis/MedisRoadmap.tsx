import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const roadmap = [
  "Refine research framing",
  "Expand validation infrastructure",
  "Integrate real NOVA evidence",
  "Develop simulation and telemetry models",
  "Build documentation",
  "Explore partnerships with innovation ecosystems and technical collaborators",
];

export default function MedisRoadmap() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Future roadmap</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Research steps without deployment promises.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {roadmap.map((item, index) => (
            <motion.div key={item} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.04 }} className="flex items-center gap-4 rounded-3xl border border-border-subtle bg-surface-primary/60 p-5">
              <CheckCircle2 className="shrink-0 text-accent-teal" size={22} />
              <span className="text-text-secondary">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
