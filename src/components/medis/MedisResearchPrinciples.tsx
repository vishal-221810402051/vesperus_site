import { motion } from "framer-motion";
import { FileCheck2, Layers3, ListChecks, Radar, ShieldCheck } from "lucide-react";

const principles = [
  { icon: ShieldCheck, title: "Validation before automation" },
  { icon: Radar, title: "Supervision before autonomy" },
  { icon: ListChecks, title: "Traceability before scaling" },
  { icon: FileCheck2, title: "Evidence before deployment" },
  { icon: Layers3, title: "Infrastructure before application" },
];

export default function MedisResearchPrinciples() {
  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        <p className="eyebrow">Research principles</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">The order matters.</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
        {principles.map(({ icon: Icon, title }, index) => (
          <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: index * 0.04 }} whileHover={{ y: -4 }} className="panel p-5">
            <Icon className="text-accent-teal" size={24} />
            <p className="mt-4 font-medium text-text-primary">{title}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
