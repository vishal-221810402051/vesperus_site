import { motion } from "framer-motion";
import { Building2, FlaskConical, Handshake, Lightbulb, SearchCheck, Users } from "lucide-react";

const audiences = [
  { label: "Innovation ecosystems", icon: Lightbulb },
  { label: "Incubators", icon: Building2 },
  { label: "Technical collaborators", icon: Users },
  { label: "Early partners", icon: Handshake },
  { label: "Investor reviewers", icon: SearchCheck },
  { label: "Research/engineering collaborators", icon: FlaskConical },
];

export default function WhoShouldReachOut() {
  return (
    <section className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="panel p-6 md:p-10"
      >
        <p className="eyebrow">Who should reach out</p>
        <h2 className="mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">Relevant conversations for validation-first infrastructure.</h2>
        <p className="mt-5 max-w-3xl leading-8 text-text-secondary">
          Vesperus welcomes relevant conversations from ecosystems, incubators, technical collaborators, early partners, investor reviewers, and research or engineering collaborators evaluating validation-first medical automation infrastructure.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map((audience) => {
            const Icon = audience.icon;
            return (
              <div key={audience.label} className="rounded-3xl border border-border-subtle bg-surface-secondary/65 p-4">
                <Icon className="text-accent-teal" size={20} />
                <p className="mt-3 text-sm font-semibold text-text-primary">{audience.label}</p>
              </div>
            );
          })}
        </div>
        <p className="mt-7 rounded-3xl border border-accent-violet/20 bg-accent-violet/10 p-4 text-sm leading-7 text-text-secondary">
          This is an invitation to discuss, not a claim of existing partnerships or investment.
        </p>
      </motion.div>
    </section>
  );
}
