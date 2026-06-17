import { motion } from "framer-motion";
import { Activity, ArrowRight, CircuitBoard, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    icon: CircuitBoard,
    title: "NOVA",
    text: "Validation-first infrastructure platform.",
    href: "/nova",
    cta: "Explore NOVA Platform",
  },
  {
    icon: Activity,
    title: "NOVA SC",
    text: "Software supervision layer for telemetry visibility and future intelligent advisory workflows.",
    href: "/nova-sc",
    cta: "Explore NOVA SC",
  },
  {
    icon: FlaskConical,
    title: "M.E.D.I.S.",
    text: "Long-term healthcare infrastructure R&D.",
    href: "/medis",
    cta: "Explore M.E.D.I.S.",
  },
];

export default function ProjectsSnapshot() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Projects snapshot</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">What Vesperus is building.</h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/40 px-5 py-3 text-sm font-semibold text-accent-cyan transition hover:bg-accent-cyan hover:text-background-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
          >
            View all projects <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {projects.map(({ icon: Icon, title, text, href, cta }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="panel flex min-h-72 flex-col p-6"
            >
              <Icon className="text-accent-cyan" size={28} />
              <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
              <p className="mt-3 flex-1 leading-7 text-text-secondary">{text}</p>
              <Link
                to={href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-teal transition hover:text-accent-cyan"
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
