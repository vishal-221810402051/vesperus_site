import { motion } from "framer-motion";
import { AlertTriangle, DatabaseZap, LockKeyhole } from "lucide-react";

const challenges = [
  { icon: DatabaseZap, title: "Fragmented signals", text: "Medical automation needs trusted coordination across devices, gateways, and supervision software." },
  { icon: LockKeyhole, title: "Safety boundaries", text: "Autonomous systems must preserve validation layers before higher-risk medical workflows are introduced." },
  { icon: AlertTriangle, title: "Integrity gaps", text: "Telemetry and packet integrity need continuous monitoring, not isolated dashboards." },
];

export default function Problem() {
  return (
    <section className="section-shell" id="problem">
      <div className="max-w-3xl">
        <p className="eyebrow">Why Vesperus Exists</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Reliable infrastructure comes before higher-risk healthcare automation.</h2>
        <p className="mt-5 text-lg leading-8 text-text-secondary">
          Modern medical automation requires reliable orchestration, telemetry validation, supervision, and safety boundaries before higher-risk healthcare systems can be responsibly developed. Vesperus is focused on building that foundational infrastructure.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {challenges.map(({ icon: Icon, title, text }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="panel p-6"
          >
            <Icon className="text-accent-cyan" size={26} />
            <h3 className="mt-5 text-xl font-semibold">{title}</h3>
            <p className="mt-3 leading-7 text-text-secondary">{text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
