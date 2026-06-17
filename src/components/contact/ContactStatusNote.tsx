import { motion } from "framer-motion";
import { Clock3 } from "lucide-react";

export default function ContactStatusNote() {
  return (
    <section className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="panel p-6 md:p-10"
      >
        <Clock3 className="text-accent-cyan" size={26} />
        <p className="eyebrow mt-6">Response status</p>
        <h2 className="mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">Early public launch stage.</h2>
        <p className="mt-5 max-w-3xl leading-8 text-text-secondary">
          Vesperus is in an early public launch stage. Inquiry handling is founder-led, and response timing may vary based on project and academic commitments.
        </p>
      </motion.div>
    </section>
  );
}
