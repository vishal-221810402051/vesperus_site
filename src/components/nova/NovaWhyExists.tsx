import { motion } from "framer-motion";
import { Eye, ListChecks, RadioTower } from "lucide-react";

const needs = [
  { icon: Eye, title: "Embedded foundations", text: "Reliable hardware and runtime foundations before higher-level systems are introduced." },
  { icon: RadioTower, title: "Telemetry transport", text: "Traceable telemetry movement from embedded layers into future supervision workflows." },
  { icon: ListChecks, title: "Deterministic boundaries", text: "Bounded platform behavior that can support validation-oriented development." },
];

export default function NovaWhyExists() {
  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        <p className="eyebrow">Why NOVA Exists</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Validation before higher-risk automation.</h2>
        <p className="mt-5 text-lg leading-8 text-text-secondary">
          Modern automation systems require reliable embedded foundations, traceable telemetry transport, deterministic boundaries, and gateway architecture before higher-level supervision or intelligent advisory systems can be responsibly developed.
        </p>
        <p className="mt-4 leading-8 text-text-secondary">
          NOVA was created as a validation-first infrastructure platform focused on embedded orchestration, safety-signal intake, gateway integration, and telemetry transport foundations.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {needs.map(({ icon: Icon, title, text }, index) => (
          <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }} className="panel p-6">
            <Icon className="text-accent-cyan" size={26} />
            <h3 className="mt-5 text-xl font-semibold">{title}</h3>
            <p className="mt-3 leading-7 text-text-secondary">{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
