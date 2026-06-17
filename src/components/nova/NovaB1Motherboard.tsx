import { motion } from "framer-motion";
import { CircuitBoard } from "lucide-react";

const capabilities = [
  "Dual ESP32-S3 architecture",
  "Sensor acquisition",
  "Safety signal aggregation",
  "Servo PWM expansion",
  "RTC support",
  "FRAM support",
  "Modular expansion",
  "Raspberry Pi interfacing",
];

export default function NovaB1Motherboard() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="panel flex min-h-80 items-center justify-center p-6 text-center">
          <div>
            <CircuitBoard className="mx-auto text-accent-cyan" size={42} />
            <p className="mt-5 text-xl font-semibold">NOVA B1 Image Pending</p>
            <p className="mt-3 text-sm leading-6 text-text-muted">Real motherboard imagery will be added in a future documentation update.</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }}>
          <p className="eyebrow">NOVA B1 Motherboard</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Designed hardware foundation.</h2>
          <p className="mt-5 text-lg leading-8 text-text-secondary">
            NOVA B1 is the designed hardware foundation for NOVA: a modular dual-ESP32-S3 motherboard/backplane intended for embedded orchestration, sensor acquisition, safety signal aggregation, expansion, and gateway interfacing.
          </p>
          <span className="mt-5 inline-flex rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-cyan">Designed</span>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="rounded-2xl border border-border-subtle bg-surface-primary/70 p-4 text-sm text-text-secondary">{item}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
