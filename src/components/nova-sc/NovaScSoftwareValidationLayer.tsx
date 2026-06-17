import { motion } from "framer-motion";
import { Braces, FileClock, ListChecks } from "lucide-react";

const items = ["Telemetry acquisition", "Calibration workflows", "Event logging", "Session management", "Replayable traces", "Deterministic validation logic"];

export default function NovaScSoftwareValidationLayer() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <p className="eyebrow">Software & Data Validation Layer</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">TRL 3, research-stage, validation-first.</h2>
            <p className="mt-5 text-lg leading-8 text-text-secondary">
              The NOVA SC software/data layer is framed as TRL 3, validation-first, non-clinical, and research-stage. It focuses on telemetry acquisition, calibration workflows, event logging, run/session management, replayable traces, deterministic validation logic, and progressive integration.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <motion.div key={item} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: index * 0.04 }} className="panel p-5">
                {index % 3 === 0 ? <Braces className="text-accent-cyan" size={22} /> : index % 3 === 1 ? <FileClock className="text-accent-cyan" size={22} /> : <ListChecks className="text-accent-cyan" size={22} />}
                <p className="mt-4 font-medium text-text-primary">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
