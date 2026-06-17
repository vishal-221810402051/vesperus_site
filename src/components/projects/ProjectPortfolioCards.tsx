import { motion } from "framer-motion";
import { Activity, ArrowRight, CircuitBoard, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    icon: CircuitBoard,
    label: "Infrastructure Platform",
    title: "NOVA",
    description: "Validation-first hardware/software orchestration platform for distributed supervision and system-state visibility.",
    status: "Current proof point",
    cta: "Explore NOVA Platform",
    href: "/nova",
  },
  {
    icon: Activity,
    label: "Supervision Console",
    title: "NOVA SC",
    description: "Software supervision layer for telemetry visibility, packet integrity, validation evidence, and future intelligent advisory workflows.",
    status: "Software validation layer",
    cta: "Explore NOVA SC",
    href: "/nova-sc",
  },
  {
    icon: FlaskConical,
    label: "Long-Term R&D",
    title: "M.E.D.I.S.",
    description: "Future healthcare infrastructure direction being developed on top of NOVA.",
    status: "R&D-stage vision",
    cta: "Explore M.E.D.I.S.",
    href: "/medis",
  },
];

export default function ProjectPortfolioCards() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <div className="max-w-3xl">
          <p className="eyebrow">Portfolio overview</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Three connected project layers.</h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map(({ icon: Icon, label, title, description, status, cta, href }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              whileHover={{ y: -4 }}
              className="panel flex min-h-80 flex-col p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <Icon className="text-accent-cyan" size={28} />
                <span className="rounded-full border border-accent-teal/30 bg-accent-teal/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-teal">
                  {status}
                </span>
              </div>
              <p className="eyebrow mt-6">{label}</p>
              <h3 className="mt-3 text-3xl font-semibold">{title}</h3>
              <p className="mt-4 flex-1 leading-7 text-text-secondary">{description}</p>
              <Link
                to={href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-accent-cyan transition hover:text-accent-teal"
              >
                {cta} <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
