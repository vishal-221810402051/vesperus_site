import { motion } from "framer-motion";
import { Activity, CircuitBoard, FlaskConical, ServerCog } from "lucide-react";

const statuses = [
  {
    icon: CircuitBoard,
    item: "NOVA B1",
    status: "Designed",
    tone: "cyan",
    note: "Hardware foundation for the NOVA orchestration platform.",
  },
  {
    icon: Activity,
    item: "NOVA SC",
    status: "Telemetry checks validated",
    tone: "green",
    note: "Supervision console direction for observability and signal checks.",
  },
  {
    icon: ServerCog,
    item: "Pi Gateway",
    status: "Operational prototype",
    tone: "green",
    note: "Gateway layer connecting embedded architecture and supervision.",
  },
  {
    icon: FlaskConical,
    item: "M.E.D.I.S.",
    status: "Research & Development",
    tone: "amber",
    note: "Future application direction built on top of NOVA.",
  },
];

const toneClass = {
  cyan: "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan",
  green: "border-[#22C55E]/30 bg-[#22C55E]/10 text-[#8AF5C5]",
  amber: "border-[#F59E0B]/30 bg-[#F59E0B]/10 text-[#F8C97A]",
  neutral: "border-text-muted/30 bg-text-muted/10 text-text-muted",
};

export default function CurrentStatus() {
  return (
    <section id="status" className="border-y border-border-subtle bg-background-secondary/60">
      <div className="section-shell">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Current Status</p>
            <h2 className="mt-4 text-3xl font-semibold md:text-4xl">What exists and what is in development.</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-text-secondary">
            A quick maturity scan for reviewers, partners, and ecosystem programs.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {statuses.map(({ icon: Icon, item, status, tone, note }, index) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
              whileHover={{ y: -3 }}
              className="panel flex min-h-56 flex-col p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <Icon className="text-accent-cyan" size={24} />
                <span className={`rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] ${toneClass[tone as keyof typeof toneClass]}`}>
                  {status}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold">{item}</h3>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{note}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
