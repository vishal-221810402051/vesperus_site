import { motion } from "framer-motion";
import { Github, Globe, Linkedin, Mail, MapPin } from "lucide-react";
import { links } from "../../data/links";

const methods = [
  {
    label: "Email",
    value: links.email,
    href: `mailto:${links.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Vishal Nelaturi",
    href: links.linkedIn,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "vishal-221810402051",
    href: links.github,
    icon: Github,
    external: true,
  },
  {
    label: "Domain",
    value: "vesperus.systems",
    href: links.domain,
    icon: Globe,
    external: true,
  },
  {
    label: "Location",
    value: links.location,
    href: null,
    icon: MapPin,
    external: false,
  },
];

export default function ContactMethods() {
  return (
    <section className="section-shell">
      <div className="mb-8 max-w-3xl">
        <p className="eyebrow">Verified contact methods</p>
        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Use verified channels only.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {methods.map((method, index) => {
          const Icon = method.icon;
          const card = (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="panel h-full p-5 transition hover:border-accent-cyan/35"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-accent-cyan/20 bg-accent-cyan/10 text-accent-cyan">
                <Icon size={20} />
              </div>
              <p className="mt-5 text-sm uppercase tracking-[0.24em] text-text-muted">{method.label}</p>
              <p className="mt-3 break-words text-lg font-semibold text-text-primary">{method.value}</p>
            </motion.div>
          );

          return method.href ? (
            <a key={method.label} href={method.href} target={method.external ? "_blank" : undefined} rel={method.external ? "noreferrer" : undefined}>
              {card}
            </a>
          ) : (
            <div key={method.label}>{card}</div>
          );
        })}
      </div>
    </section>
  );
}
