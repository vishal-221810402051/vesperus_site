import { motion } from "framer-motion";
import { AlertTriangle, Globe2, Network, TimerReset } from "lucide-react";

const factors = [
  { icon: Network, title: "Supply-chain disruption" },
  { icon: Globe2, title: "Remote access limitations" },
  { icon: AlertTriangle, title: "Infrastructure fragility" },
  { icon: TimerReset, title: "Delayed resource availability" },
];

export default function MedisWhyExists() {
  return (
    <section className="section-shell">
      <div className="max-w-4xl">
        <p className="eyebrow">Why it exists</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">A conceptual response to infrastructure fragility.</h2>
        <p className="mt-5 text-lg leading-8 text-text-secondary">
          Healthcare systems can face supply-chain disruption, remote access limitations, infrastructure fragility, and delayed availability of critical resources. M.E.D.I.S. explores how future validation-first automation infrastructure could support more resilient healthcare systems.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {factors.map(({ icon: Icon, title }, index) => (
          <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: index * 0.04 }} className="panel p-5">
            <Icon className="text-accent-cyan" size={24} />
            <p className="mt-4 font-medium text-text-primary">{title}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
