import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function ProjectSafetyBoundary() {
  return (
    <section className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="panel border-accent-teal/20 bg-accent-teal/5 p-6 md:p-8"
      >
        <ShieldCheck className="text-accent-teal" size={30} />
        <p className="eyebrow mt-6">Safety boundary</p>
        <p className="mt-4 max-w-4xl text-xl leading-9 text-text-secondary md:text-2xl">
          These projects are presented as research-stage validation infrastructure and future-facing R&D, not clinical deployment or regulated medical products.
        </p>
      </motion.div>
    </section>
  );
}
