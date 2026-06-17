import { motion } from "framer-motion";
import { Layers3, ShieldCheck, Waves } from "lucide-react";

const points = [
  { icon: Layers3, title: "Infrastructure direction" },
  { icon: Waves, title: "Supervision and validation" },
  { icon: ShieldCheck, title: "Resilience-first research" },
];

export default function MedisOverview() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <p className="eyebrow">What M.E.D.I.S. is</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">A future application direction built on NOVA.</h2>
            <p className="mt-5 text-lg leading-8 text-text-secondary">
              M.E.D.I.S. is a long-term research direction focused on future medical automation infrastructure, supervision, validation, and resilience. It is being explored as a future application direction built on top of NOVA.
            </p>
          </motion.div>
          <div className="grid gap-4">
            {points.map(({ icon: Icon, title }, index) => (
              <motion.div key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }} className="panel p-5">
                <Icon className="text-accent-cyan" size={24} />
                <p className="mt-4 font-medium text-text-primary">{title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
