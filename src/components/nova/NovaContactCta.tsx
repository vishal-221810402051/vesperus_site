import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NovaContactCta() {
  return (
    <section className="section-shell">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="panel p-6 text-center md:p-10">
        <p className="eyebrow">Contact</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">Interested in validation-first infrastructure?</h2>
        <p className="mx-auto mt-5 max-w-2xl leading-8 text-text-secondary">
          For innovation ecosystems, incubators, technical collaborators, and early partners interested in validation-first infrastructure, contact Vesperus.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-cyan px-6 py-3 text-sm font-semibold text-background-primary transition hover:bg-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
        >
          Contact Vesperus <ArrowRight size={17} />
        </Link>
      </motion.div>
    </section>
  );
}
