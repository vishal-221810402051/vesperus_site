import { motion } from "framer-motion";
import { Clock3 } from "lucide-react";

export default function FutureInsightsPlaceholder() {
  return (
    <section className="section-shell">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="panel p-6 md:p-8">
        <Clock3 className="text-accent-cyan" size={28} />
        <p className="eyebrow mt-6">Future insights</p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-text-secondary">
          Future founder-authored reports, technical notes, and strategic essays can be added here when available. No unverified publications, institutional endorsements, partnerships, or policy adoption claims are listed.
        </p>
      </motion.div>
    </section>
  );
}
