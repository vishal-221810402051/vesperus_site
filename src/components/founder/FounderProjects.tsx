import { motion } from "framer-motion";
import { Activity, ArrowRight, CircuitBoard, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    icon: CircuitBoard,
    label: "Primary Platform",
    title: "NOVA",
    description: "Validation-first hardware/software orchestration platform for distributed supervision and system-state visibility.",
    cta: "Explore NOVA Platform",
    href: "/nova",
  },
  {
    icon: Activity,
    label: "Software Layer",
    title: "NOVA SC",
    description: "Supervision and telemetry validation layer for packet integrity, gateway visibility, and validation evidence.",
    cta: "Explore NOVA SC",
    href: "/nova-sc",
  },
  {
    icon: FlaskConical,
    label: "Long-Term Vision",
    title: "M.E.D.I.S.",
    description: "Long-term R&D healthcare infrastructure vision being explored on top of NOVA.",
    cta: "Explore M.E.D.I.S.",
    href: "/medis",
  },
];

export default function FounderProjects() {
  return (
    <section className="section-shell">
      <div className="max-w-3xl">
        <p className="eyebrow">Projects built / building</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">The work behind Vesperus.</h2>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {projects.map(({ icon: Icon, label, title, description, cta, href }, index) => (
          <motion.article key={title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.06 }} whileHover={{ y: -4 }} className="panel flex min-h-72 flex-col p-6">
            <Icon className="text-accent-cyan" size={28} />
            <p className="eyebrow mt-6">{label}</p>
            <h3 className="mt-3 text-3xl font-semibold">{title}</h3>
            <p className="mt-4 flex-1 leading-7 text-text-secondary">{description}</p>
            <Link to={href} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan transition hover:text-accent-teal">
              {cta} <ArrowRight size={16} />
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
