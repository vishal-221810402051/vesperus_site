import { motion } from "framer-motion";
import { CalendarClock, CircuitBoard, Cpu, Database, Gauge, Network, RadioReceiver, ShieldCheck } from "lucide-react";

const capabilities = [
  { icon: Cpu, title: "Dual ESP32-S3 Architecture" },
  { icon: RadioReceiver, title: "Sensor Acquisition" },
  { icon: ShieldCheck, title: "Safety Signal Aggregation" },
  { icon: Gauge, title: "Servo PWM Expansion" },
  { icon: CalendarClock, title: "RTC" },
  { icon: Database, title: "FRAM" },
  { icon: Network, title: "Modular Expansion" },
  { icon: CircuitBoard, title: "Raspberry Pi Integration" },
];

export default function NovaHardwareCapabilities() {
  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        <p className="eyebrow">Hardware Capabilities</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Hardware-facing interfaces for validation workflows.</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {capabilities.map(({ icon: Icon, title }, index) => (
          <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: index * 0.04 }} whileHover={{ y: -4 }} className="panel p-5">
            <Icon className="text-accent-teal" size={24} />
            <p className="mt-4 font-medium text-text-primary">{title}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
