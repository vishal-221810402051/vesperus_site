import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

export default function FounderProfile() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="panel p-6 md:p-8">
          <UserRound className="text-accent-cyan" size={30} />
          <p className="eyebrow mt-6">Founder profile</p>
          <p className="mt-4 max-w-4xl text-xl leading-9 text-text-secondary md:text-2xl">
            Vishal Nelaturi is the founder of Vesperus, pursuing MSc Data Engineering & Cloud Computing at Aivancity Paris, and the builder behind NOVA and M.E.D.I.S. His work is focused on validation-first infrastructure for future medical automation systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
