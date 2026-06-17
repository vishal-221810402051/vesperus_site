import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function NovaSafetyBoundary() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="panel border-accent-teal/20 bg-accent-teal/5 p-6 md:p-8">
          <ShieldCheck className="text-accent-teal" size={30} />
          <p className="eyebrow mt-6">Safety & Scope Boundary</p>
          <p className="mt-4 max-w-4xl text-xl leading-9 text-text-secondary md:text-2xl">
            NOVA is presented as validation-first research infrastructure. It is not presented as a clinically ready system, a regulated medical device, a patient-facing product, an autonomous dosing system, a GMP manufacturing platform, or a medicine synthesis system.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
