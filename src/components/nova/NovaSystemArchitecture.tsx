import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Cpu, RadioReceiver, ServerCog, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const flow = [
  { icon: RadioReceiver, label: "Sensors & Safety Signals" },
  { icon: Workflow, label: "NOVA B1 Platform" },
  { icon: Cpu, label: "ESP32 Runtime Layer" },
  { icon: ServerCog, label: "Pi Gateway Interface" },
  { icon: RadioReceiver, label: "Telemetry Transport Foundation" },
];

export default function NovaSystemArchitecture() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">System Architecture</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">An abstract validation chain.</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.85fr]">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="panel p-5 md:p-6">
            <div className="grid gap-3">
              {flow.map(({ icon: Icon, label }, index) => (
                <div key={label}>
                  <div className="flex items-center gap-4 rounded-2xl border border-border-subtle bg-surface-secondary/75 p-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent-cyan/20 bg-accent-cyan/10 text-accent-cyan">
                      <Icon size={22} />
                    </div>
                    <p className="font-semibold text-text-primary">{label}</p>
                  </div>
                  {index < flow.length - 1 && (
                    <div className="flex h-8 items-center justify-center text-accent-teal">
                      <ArrowDown size={18} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }} className="panel flex min-h-72 items-center justify-center p-6 text-center">
            <div>
              <p className="text-xl font-semibold">Architecture Diagram Pending</p>
              <p className="mt-3 text-sm leading-6 text-text-muted">A detailed architecture diagram will be added in a future documentation update.</p>
              <p className="mt-6 rounded-2xl border border-accent-teal/20 bg-accent-teal/5 p-4 text-sm leading-6 text-text-secondary">
                Abstract implementation model, not a clinical deployment diagram.
              </p>
              <p className="mt-4 rounded-2xl border border-accent-violet/20 bg-accent-violet/5 p-4 text-sm leading-6 text-text-secondary">
                NOVA SC builds on this foundation as the software supervision layer.
              </p>
              <Link
                to="/nova-sc"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-accent-cyan/40 px-5 py-3 text-sm font-semibold text-accent-cyan transition hover:bg-accent-cyan hover:text-background-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
              >
                Explore NOVA SC <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
