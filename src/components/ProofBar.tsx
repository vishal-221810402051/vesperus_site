import { motion } from "framer-motion";
import { Award, Network, Radar, ShieldCheck } from "lucide-react";

const proofs = [
  { icon: ShieldCheck, label: "Validation-first architecture" },
  { icon: Radar, label: "Safety-first telemetry" },
  { icon: Award, label: "Featured by Aivancity" },
  { icon: Network, label: "Decentralized healthcare R&D" },
];

export default function ProofBar() {
  return (
    <section aria-label="Vesperus proof points" className="border-y border-border-subtle bg-background-secondary/60">
      <div className="mx-auto grid max-w-[1200px] gap-3 px-5 py-6 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
        {proofs.map(({ icon: Icon, label }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="flex items-center gap-3 rounded-full border border-border-subtle bg-surface-primary/60 px-4 py-3"
          >
            <Icon size={17} className="text-accent-teal" />
            <span className="text-sm text-text-secondary">{label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
