import { motion } from "framer-motion";
import { Binary, Braces, Gauge, Network, ServerCog, Waves } from "lucide-react";

const stack = [
  { icon: Binary, title: "Embedded orchestration", text: "Dual controller architecture for distributed system coordination." },
  { icon: ServerCog, title: "Gateway computing", text: "Raspberry Pi integration for supervision and structured data flow." },
  { icon: Waves, title: "Telemetry validation", text: "Signal monitoring designed around validation-first observability." },
  { icon: Network, title: "Packet integrity", text: "Monitoring patterns for reliable platform communication." },
  { icon: Gauge, title: "Supervision console", text: "NOVA SC interface direction for system state visibility." },
  { icon: Braces, title: "Software structure", text: "Future-ready component architecture for safe iteration." },
];

export default function TechnologyStack() {
  return (
    <section id="technology" className="bg-background-secondary/60">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Technology stack</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Built around validation, supervision, and system integrity.</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stack.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              whileHover={{ y: -4 }}
              className="panel p-6"
            >
              <Icon className="text-accent-teal" size={24} />
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-text-secondary">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
