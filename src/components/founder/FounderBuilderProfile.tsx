import { motion } from "framer-motion";
import { Braces, CircuitBoard, Database, RadioTower, ShieldCheck } from "lucide-react";

const focus = [
  { icon: ShieldCheck, title: "Validation-first infrastructure" },
  { icon: CircuitBoard, title: "Embedded systems architecture" },
  { icon: RadioTower, title: "Telemetry and supervision" },
  { icon: Braces, title: "Healthcare automation research" },
  { icon: Database, title: "Long-term resilient healthcare systems" },
];

export default function FounderBuilderProfile() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
            <p className="eyebrow">Builder profile</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Observable, traceable, testable systems.</h2>
            <p className="mt-5 text-lg leading-8 text-text-secondary">
              The builder profile behind Vesperus combines embedded systems, software engineering, data engineering, and validation infrastructure, with a focus on making system behavior observable, traceable, and testable.
            </p>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {focus.map(({ icon: Icon, title }, index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.42, delay: index * 0.04 }} className="panel p-5">
                <Icon className="text-accent-cyan" size={22} />
                <p className="mt-4 font-medium text-text-primary">{title}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
