import { motion } from "framer-motion";
import { Activity, CircuitBoard, Cpu, ScanLine, ServerCog, ShieldCheck } from "lucide-react";

const features = [
  { icon: CircuitBoard, label: "NOVA B1 motherboard" },
  { icon: Cpu, label: "Dual ESP32-S3 architecture" },
  { icon: ServerCog, label: "Raspberry Pi gateway integration" },
  { icon: Activity, label: "NOVA SC supervision console" },
  { icon: ScanLine, label: "Telemetry validation" },
  { icon: ShieldCheck, label: "Packet integrity and safety-first architecture" },
];

export default function NovaSection() {
  return (
    <section id="nova" className="bg-background-secondary/60">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <p className="eyebrow">NOVA platform</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">The current validation-first proof point for Vesperus.</h2>
          <p className="mt-5 text-lg leading-8 text-text-secondary">
            NOVA is a validation-first hardware/software orchestration platform for distributed system supervision. It establishes a credible technical layer for future medical automation research while keeping safety boundaries explicit.
          </p>
          <p className="mt-5 rounded-3xl border border-accent-teal/20 bg-accent-teal/5 p-5 text-sm leading-7 text-text-secondary">
            NOVA is not presented as a clinically deployed system, a regulated medical device, or an enabled actuator-control product.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map(({ icon: Icon, label }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -4 }}
              className="panel p-5"
            >
              <Icon className="text-accent-cyan" size={24} />
              <p className="mt-4 font-medium text-text-primary">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
