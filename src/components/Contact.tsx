import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-background-secondary/60">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="panel p-6 text-center md:p-10"
        >
          <p className="eyebrow">Contact</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold md:text-5xl">Build the next layer of medical automation infrastructure.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-text-secondary">
            For innovation ecosystems, incubators, technical collaborators, and early partners interested in validation-first medical automation infrastructure, contact Vesperus.
          </p>
          <a
            href="mailto:founder@vesperus.systems"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-cyan px-6 py-3 text-sm font-semibold text-background-primary transition hover:bg-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
          >
            <Mail size={17} /> founder@vesperus.systems
          </a>
        </motion.div>
      </div>
    </section>
  );
}
