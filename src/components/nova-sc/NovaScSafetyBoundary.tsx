import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function NovaScSafetyBoundary() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="panel border-accent-teal/20 bg-accent-teal/5 p-6 md:p-8">
          <ShieldCheck className="text-accent-teal" size={30} />
          <p className="eyebrow mt-6">Safety & Scope Boundary</p>
          <p className="mt-4 max-w-4xl text-xl leading-9 text-text-secondary md:text-2xl">
            NOVA SC is presented as a research-stage engineering supervision platform. It is not presented as a clinical monitoring system, a medical decision system, an autonomous control layer, or a deployed AI product.
          </p>
          <p className="mt-5 max-w-4xl leading-8 text-text-secondary">
            Deterministic validation and human/operator review remain the authority for engineering decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
