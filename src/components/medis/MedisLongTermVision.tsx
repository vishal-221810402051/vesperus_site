import { motion } from "framer-motion";
import { Eye, FileCheck2, Globe2, Network, Radar, Route, ShieldCheck } from "lucide-react";

const themes = [
  { icon: Network, title: "Resilient healthcare infrastructure" },
  { icon: Globe2, title: "Remote and resource-constrained settings" },
  { icon: Radar, title: "Supervised automation" },
  { icon: FileCheck2, title: "Validation evidence" },
  { icon: Route, title: "Traceability" },
  { icon: Eye, title: "System-state visibility" },
  { icon: ShieldCheck, title: "Future research platform" },
];

export default function MedisLongTermVision() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Long-term vision</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Future-facing infrastructure research.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {themes.map(({ icon: Icon, title }, index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: index * 0.04 }} className="panel p-5">
              <Icon className="text-accent-cyan" size={24} />
              <p className="mt-4 font-medium text-text-primary">{title}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
