import { motion } from "framer-motion";
import { ArrowRight, Activity, FlaskConical, SearchCheck, ServerCog } from "lucide-react";

const flow = [
  { icon: ServerCog, title: "NOVA Platform", text: "Embedded, gateway, and telemetry transport foundation." },
  { icon: Activity, title: "NOVA SC", text: "Supervision, telemetry validation, and engineering review workflows." },
  { icon: SearchCheck, title: "Future Intelligent Advisory Layer", text: "Bounded advisory research for advanced validation review." },
  { icon: FlaskConical, title: "M.E.D.I.S. R&D Direction", text: "Future application direction built on top of the validation-first foundation." },
];

export default function MedisNovaRelationship() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <p className="eyebrow">Relationship to NOVA</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">NOVA and NOVA SC form the foundation.</h2>
            <p className="mt-5 text-lg leading-8 text-text-secondary">
              NOVA provides the infrastructure foundation. NOVA SC provides supervision, telemetry validation, and engineering review workflows. Future intelligent advisory infrastructure may support advanced validation review as the broader M.E.D.I.S. research direction evolves.
            </p>
            <p className="mt-5 text-lg leading-8 text-text-secondary">
              M.E.D.I.S. remains a future-facing, long-term R&D healthcare infrastructure direction, not a deployed system.
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
      </div>
    </section>
  );
}
