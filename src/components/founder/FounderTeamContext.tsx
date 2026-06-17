import { motion } from "framer-motion";
import { MapPin, UsersRound } from "lucide-react";

export default function FounderTeamContext() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="panel p-6 md:p-8">
          <UsersRound className="text-accent-cyan" size={30} />
          <p className="eyebrow mt-6">Team context</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">A multidisciplinary team of five contributors.</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-text-secondary">
            Vesperus is supported by a multidisciplinary team of five contributors based in Paris, France, spanning embedded systems, software engineering, data engineering, and research/validation.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-secondary/70 px-4 py-2 text-sm text-text-secondary">
            <MapPin className="text-accent-cyan" size={16} /> Paris, France
          </div>
        </motion.div>
      </div>
    </section>
  );
}
