import { motion } from "framer-motion";
import { Github, Linkedin, UserRound } from "lucide-react";

const linkedInUrl = "https://www.linkedin.com/in/nelaturi-vishal-b672331b9/";

export default function Founder() {
  return (
    <section id="founder" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="panel flex min-h-80 items-center justify-center p-8"
        >
          <div className="flex h-40 w-40 items-center justify-center rounded-full border border-accent-cyan/30 bg-accent-cyan/10">
            <UserRound className="text-accent-cyan" size={64} aria-hidden="true" />
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }}>
          <p className="eyebrow">Founder</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Vishal Nelaturi</h2>
          <div className="mt-6 grid gap-3 text-lg leading-8 text-text-secondary">
            <p>MSc Data Engineering.</p>
            <p>Aivancity Paris-Cachan.</p>
            <p>Featured by Aivancity for healthcare innovation.</p>
            <p>Founder of Vesperus.</p>
            <p>Builder of NOVA and M.E.D.I.S.</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-teal px-6 py-3 text-sm font-semibold text-background-primary transition hover:bg-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
            >
              <Linkedin size={17} /> Connect on LinkedIn
            </a>
            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface-primary/70 px-6 py-3 text-sm font-semibold text-text-muted">
              <Github size={17} /> GitHub coming soon
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
