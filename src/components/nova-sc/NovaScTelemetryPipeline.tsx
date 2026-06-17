import { motion } from "framer-motion";
import { ArrowDown, RadioTower } from "lucide-react";

const steps = ["Signal Intake", "Packet Structure", "Gateway Forwarding", "Telemetry Checks", "Event Logging", "Session Management", "Replayable Traces", "Supervision Visibility"];

export default function NovaScTelemetryPipeline() {
  return (
    <section className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <p className="eyebrow">Telemetry Pipeline</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Inspectable, replayable, validation-oriented behavior.</h2>
          <p className="mt-5 text-lg leading-8 text-text-secondary">
            The telemetry pipeline is designed to make system behavior inspectable, replayable, and validation-oriented before any higher-risk use case is considered.
          </p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }} className="panel p-5">
          {steps.map((step, index) => (
            <div key={step}>
              <div className="flex items-center gap-4 rounded-2xl border border-border-subtle bg-surface-secondary/75 p-4">
                <RadioTower className="text-accent-cyan" size={20} />
                <p className="font-semibold text-text-primary">{step}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="flex h-7 items-center justify-center text-accent-teal">
                  <ArrowDown size={16} />
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
