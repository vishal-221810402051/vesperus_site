import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function InsightsHero() {
  return (
    <section className="section-shell pt-32">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="panel p-6 md:p-10">
        <BookOpen className="text-accent-cyan" size={34} />
        <p className="eyebrow mt-6">Insights</p>
        <h1 className="mt-4 text-5xl font-semibold md:text-7xl">Insights</h1>
        <p className="mt-5 max-w-4xl text-xl leading-9 text-text-secondary">
          Strategic perspectives on healthcare resilience, validation infrastructure, and responsible technology.
        </p>
        <p className="mt-5 max-w-3xl leading-8 text-text-muted">
          Vesperus Insights collects founder-authored reports, policy frameworks, and strategic perspectives connected to healthcare resilience, digital infrastructure, and responsible technology.
        </p>
      </motion.div>
    </section>
  );
}
