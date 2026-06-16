import { motion } from "framer-motion";
import { GitBranch, Globe2, Layers3 } from "lucide-react";

export default function MedisSection() {
  return (
    <section id="medis" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <p className="eyebrow">M.E.D.I.S. vision</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">A long-term R&D path for decentralized medical infrastructure.</h2>
          <p className="mt-5 text-lg leading-8 text-text-secondary">
            M.E.D.I.S. is a future healthcare application being developed on top of NOVA for resilient, decentralized medical infrastructure.
          </p>
          <p className="mt-5 text-base leading-7 text-text-muted">
            It remains an R&D-stage direction for future infrastructure research, not a completed therapeutic product or deployed care system.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="panel p-6"
        >
          <div className="grid gap-4">
            {[
              { icon: Layers3, label: "Built on NOVA validation layers" },
              { icon: GitBranch, label: "Designed for distributed resilience" },
              { icon: Globe2, label: "R&D-stage healthcare infrastructure concept" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-border-subtle bg-surface-secondary/70 p-4">
                <Icon className="text-accent-violet" size={22} />
                <span className="text-text-secondary">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
