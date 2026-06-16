import { motion } from "framer-motion";
import { ArrowDown, Cpu, Gauge, RadioReceiver, ServerCog, Workflow } from "lucide-react";

const flow = [
  { label: "Sensors", detail: "Signal intake", icon: RadioReceiver },
  { label: "NOVA B1", detail: "Board layer", icon: Workflow },
  { label: "ESP32-S3 Control Layer", detail: "Embedded orchestration", icon: Cpu },
  { label: "Raspberry Pi Gateway", detail: "Gateway supervision", icon: ServerCog },
  { label: "NOVA SC Supervision Console", detail: "System-state visibility", icon: Gauge },
];

const notes = [
  "Sensor and safety signal intake",
  "Embedded orchestration",
  "Gateway supervision",
  "Telemetry validation",
  "System-state visibility",
];

export default function SystemArchitecture() {
  return (
    <section id="architecture" className="section-shell">
      <div className="max-w-3xl">
        <p className="eyebrow">System Architecture</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">A validation-first chain for future medical automation systems.</h2>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="panel p-5 md:p-6"
        >
          <div className="grid gap-3">
            {flow.map(({ label, detail, icon: Icon }, index) => (
              <div key={label}>
                <div className="flex items-center gap-4 rounded-2xl border border-border-subtle bg-surface-secondary/75 p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent-cyan/20 bg-accent-cyan/10 text-accent-cyan">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="font-semibold text-text-primary">{label}</p>
                    <p className="mt-1 text-sm text-text-muted">{detail}</p>
                  </div>
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="panel p-6"
        >
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent-violet">Engineering notes</p>
          <div className="mt-6 grid gap-4">
            {notes.map((note) => (
              <div key={note} className="rounded-2xl border border-border-subtle bg-background-secondary/70 p-4 text-text-secondary">
                {note}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-7 text-text-muted">
            This architecture is represented as an abstract implementation model. No fake product renders or unverified device imagery are used.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
