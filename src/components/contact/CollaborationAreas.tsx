import { motion } from "framer-motion";
import { Cpu, Layers3, Network, Radar, Route } from "lucide-react";

const areas = [
  { title: "Validation-first medical automation infrastructure", icon: Network },
  { title: "NOVA technical development", icon: Cpu },
  { title: "NOVA SC supervision layer", icon: Radar },
  { title: "M.E.D.I.S. long-term R&D direction", icon: Layers3 },
  { title: "Ecosystem and incubation discussions", icon: Route },
];

export default function CollaborationAreas() {
  return (
    <section className="section-shell">
      <div className="mb-8 max-w-3xl">
        <p className="eyebrow">Collaboration areas</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Focused technical and ecosystem conversations.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {areas.map((area, index) => {
          const Icon = area.icon;
          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="panel flex items-start gap-4 p-5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-accent-teal/20 bg-accent-teal/10 text-accent-teal">
                <Icon size={20} />
              </span>
              <p className="text-base font-semibold leading-7 text-text-primary">{area.title}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
