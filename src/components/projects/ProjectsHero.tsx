import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className="section-shell pt-32">
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="panel p-6 md:p-10">
        <FolderKanban className="text-accent-cyan" size={32} />
        <p className="eyebrow mt-6">Projects</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">Projects</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-text-secondary">
          Vesperus is building validation-first infrastructure for future medical automation systems.
        </p>
      </motion.div>
    </section>
  );
}
