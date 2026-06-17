import { motion } from "framer-motion";
import { ArrowRight, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";

export default function MedisHero() {
  return (
    <section className="section-shell pt-32">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="panel p-6 md:p-10">
        <FlaskConical className="text-accent-cyan" size={34} />
        <p className="eyebrow mt-6">M.E.D.I.S.</p>
        <h1 className="mt-4 text-5xl font-semibold md:text-7xl">M.E.D.I.S.</h1>
        <p className="mt-5 max-w-4xl text-xl leading-9 text-text-secondary">
          A long-term R&D vision for resilient, decentralized healthcare infrastructure.
        </p>
        <p className="mt-5 max-w-3xl leading-8 text-text-muted">
          M.E.D.I.S. is a future-facing healthcare infrastructure concept being explored by Vesperus on top of the NOVA validation-first platform.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/nova"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-cyan px-6 py-3 text-sm font-semibold text-background-primary shadow-glow transition hover:bg-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
          >
            Explore NOVA <ArrowRight size={17} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-surface-primary/70 px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-cyan hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
          >
            Contact Vesperus
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
