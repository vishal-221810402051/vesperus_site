import { motion } from "framer-motion";
import { Braces, CircuitBoard, Database, FlaskConical, ShieldCheck } from "lucide-react";

const focusAreas = [
  { icon: CircuitBoard, title: "Embedded systems" },
  { icon: Braces, title: "Software engineering" },
  { icon: Database, title: "Data engineering" },
  { icon: ShieldCheck, title: "Validation infrastructure" },
  { icon: FlaskConical, title: "Healthcare automation research" },
];

export default function FounderTechnicalFocus() {
  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        <p className="eyebrow">Technical focus areas</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Focus areas, not inflated credentials.</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {focusAreas.map(({ icon: Icon, title }, index) => (
          <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: index * 0.04 }} className="panel p-5">
            <Icon className="text-accent-teal" size={24} />
            <p className="mt-4 font-medium text-text-primary">{title}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
