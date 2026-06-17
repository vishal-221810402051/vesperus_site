import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function ContactBoundary() {
  return (
    <section className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="panel border-accent-teal/25 bg-accent-teal/5 p-6 md:p-10"
      >
        <ShieldCheck className="text-accent-teal" size={28} />
        <p className="eyebrow mt-6">Contact boundary</p>
        <p className="mt-4 max-w-4xl text-xl leading-9 text-text-secondary">
          This contact page does not imply existing partnerships, customers, investment, pilots, clinical deployment, regulatory approval, or commercial adoption. It is provided as a professional inquiry path for verified contact with Vesperus.
        </p>
      </motion.div>
    </section>
  );
}
