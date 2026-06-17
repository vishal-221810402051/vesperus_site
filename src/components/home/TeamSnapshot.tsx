import { motion } from "framer-motion";
import { Braces, Cpu, Database, MapPin, UsersRound } from "lucide-react";

const capabilities = [
  { icon: Cpu, label: "Embedded systems" },
  { icon: Braces, label: "Software engineering" },
  { icon: Database, label: "Data engineering" },
  { icon: UsersRound, label: "Research/validation" },
];

export default function TeamSnapshot() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="panel p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="eyebrow">Team snapshot</p>
              <h2 className="mt-4 text-3xl font-semibold md:text-5xl">A focused technical team in Paris.</h2>
              <p className="mt-5 text-lg leading-8 text-text-secondary">
                A multidisciplinary team of five contributors based in Paris, France, spanning embedded systems, software engineering, data engineering, and research/validation.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface-secondary/70 px-4 py-2 text-sm text-text-secondary">
                <MapPin className="text-accent-cyan" size={16} /> Paris, France
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.map(({ icon: Icon, label }) => (
                <div key={label} className="rounded-2xl border border-border-subtle bg-surface-secondary/70 p-4">
                  <Icon className="text-accent-cyan" size={22} />
                  <p className="mt-3 font-medium text-text-primary">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
