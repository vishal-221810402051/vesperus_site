import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { links } from "../../data/links";

export default function ContactHero() {
  return (
    <section className="section-shell pt-32">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="panel p-6 md:p-10"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-cyan/25 bg-accent-cyan/10 text-accent-cyan">
          <Mail size={22} />
        </div>
        <p className="eyebrow mt-6">Contact</p>
        <h1 className="mt-4 text-5xl font-semibold md:text-7xl">Contact</h1>
        <p className="mt-4 max-w-3xl text-2xl text-text-primary md:text-3xl">Connect with Vesperus.</p>
        <p className="mt-6 max-w-3xl leading-8 text-text-secondary">
          For innovation ecosystems, incubators, technical collaborators, early partners, investor reviewers, and research or engineering collaborators interested in validation-first medical automation infrastructure, contact Vesperus.
        </p>
        <a
          href={`mailto:${links.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-cyan px-6 py-3 text-sm font-semibold text-background-primary transition hover:bg-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
        >
          Email Vesperus <ArrowRight size={17} />
        </a>
      </motion.div>
    </section>
  );
}
