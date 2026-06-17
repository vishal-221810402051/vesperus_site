import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function MedisSafetyBoundary() {
  return (
    <section className="section-shell">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="panel border-accent-teal/20 bg-accent-teal/5 p-6 md:p-8">
        <ShieldCheck className="text-accent-teal" size={30} />
        <p className="eyebrow mt-6">Safety / Non-Clinical Boundary</p>
        <p className="mt-4 max-w-4xl text-xl leading-9 text-text-secondary md:text-2xl">
          M.E.D.I.S. is presented as a long-term R&D healthcare infrastructure vision. It is not presented as a clinically ready system, regulated medical device, patient-facing product, autonomous dosing system, GMP manufacturing platform, or working medicine synthesis system.
        </p>
      </motion.div>
    </section>
  );
}
