import { motion } from "framer-motion";
import { Cpu, Network, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Network,
    title: "Orchestration",
    text: "Coordinating hardware, gateway, and supervision layers for future medical automation infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Validation",
    text: "Keeping telemetry, packet integrity, and system-state visibility central to platform development.",
  },
  {
    icon: Cpu,
    title: "Automation infrastructure",
    text: "Building the technical foundation that higher-risk healthcare systems need before responsible expansion.",
  },
];

export default function WhatIsVesperus() {
  return (
    <section className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }}>
          <p className="eyebrow">What is Vesperus</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Validation-first infrastructure for next-generation medical systems.</h2>
          <p className="mt-5 text-lg leading-8 text-text-secondary">
            Vesperus builds validation-first orchestration, supervision, and automation infrastructure for next-generation medical systems.
          </p>
          <Link
            to="/projects"
            className="mt-8 inline-flex rounded-full border border-accent-cyan/40 px-5 py-3 text-sm font-semibold text-accent-cyan transition hover:bg-accent-cyan hover:text-background-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
          >
            View projects
          </Link>
        </motion.div>

        <div className="grid gap-4">
          {pillars.map(({ icon: Icon, title, text }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="panel p-5"
            >
              <Icon className="text-accent-cyan" size={24} />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-3 leading-7 text-text-secondary">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
