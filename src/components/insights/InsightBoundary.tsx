import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function InsightBoundary() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="panel border-accent-teal/25 bg-accent-teal/5 p-6 md:p-8"
        >
          <ShieldCheck className="text-accent-teal" size={30} />
          <p className="eyebrow mt-6">Boundary</p>
          <p className="mt-4 max-w-4xl text-xl leading-9 text-text-secondary md:text-2xl">
            This report is an independent strategic policy perspective. It is not presented as an official government document, institutional endorsement, clinical validation, regulatory approval, policy adoption, or diplomatic appointment.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
