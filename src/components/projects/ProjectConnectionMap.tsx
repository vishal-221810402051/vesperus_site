import { motion } from "framer-motion";
import { ArrowRight, Activity, CircuitBoard, FlaskConical, SearchCheck } from "lucide-react";

const flow = [
  { icon: CircuitBoard, title: "NOVA Platform", text: "Embedded and gateway infrastructure foundation." },
  { icon: Activity, title: "NOVA SC", text: "Supervision, validation evidence, and engineering review workflows." },
  { icon: SearchCheck, title: "Future Intelligent Advisory Layer", text: "Bounded analytics research for advisory engineering review." },
  { icon: FlaskConical, title: "M.E.D.I.S.", text: "Long-term R&D healthcare infrastructure vision built on top of the foundation." },
];

export default function ProjectConnectionMap() {
  return (
    <section className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <p className="eyebrow">How the projects connect</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">A platform, supervision layer, advisory roadmap, and long-term R&D direction.</h2>
          <p className="mt-5 leading-8 text-text-secondary">
            NOVA provides the embedded and gateway foundation. NOVA SC turns that foundation into supervision, validation evidence, and review workflows. Future advisory intelligence is explored as a bounded analytics layer. M.E.D.I.S. remains the long-term healthcare infrastructure R&D direction.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }} className="panel p-5">
          <div className="grid gap-4">
            {flow.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className="flex items-center gap-4">
                <div className="flex min-h-28 flex-1 items-center gap-4 rounded-2xl border border-border-subtle bg-surface-secondary/70 p-4">
                  <Icon className="shrink-0 text-accent-cyan" size={24} />
                  <div>
                    <p className="font-semibold text-text-primary">{title}</p>
                    <p className="mt-1 text-sm leading-6 text-text-secondary">{text}</p>
                  </div>
                </div>
                {index < flow.length - 1 && <ArrowRight className="hidden shrink-0 text-accent-violet md:block" size={22} />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
