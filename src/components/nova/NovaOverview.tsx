import { motion } from "framer-motion";
import { Layers3, ScanLine, ServerCog } from "lucide-react";

const points = [
  { icon: Layers3, label: "Embedded control hardware" },
  { icon: ServerCog, label: "Gateway integration" },
  { icon: ScanLine, label: "Telemetry transport foundation" },
];

export default function NovaOverview() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <p className="eyebrow">What NOVA is</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">A validation-first orchestration platform.</h2>
            <p className="mt-5 text-lg leading-8 text-text-secondary">
              NOVA is a validation-first infrastructure platform for embedded system orchestration. It combines NOVA B1 hardware, dual ESP32-S3 runtime layers, Raspberry Pi gateway integration, sensor and safety-signal intake, and telemetry transport foundations for future supervision workflows.
            </p>
          </motion.div>
          <div className="grid gap-4">
            {points.map(({ icon: Icon, label }, index) => (
              <motion.div key={label} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }} className="panel p-5">
                <Icon className="text-accent-cyan" size={24} />
                <p className="mt-4 font-medium text-text-primary">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
