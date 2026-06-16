import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";

const articleUrl =
  "https://aivancity.ai/en/actualites/de-lunesco-linnovation-medicale-vishal-nelaturi-etudiant-daivancity-developpe-une-vision";

export default function Recognition() {
  return (
    <section id="recognition" className="bg-background-secondary/60">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="panel p-6 md:p-8"
        >
          <Award className="text-accent-cyan" size={30} />
          <p className="eyebrow mt-6">Featured by Aivancity</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">
            "From UNESCO to medical innovation: Aivancity student Vishal Nelaturi develops a vision."
          </h2>
          <p className="mt-5 max-w-3xl leading-8 text-text-secondary">
            This recognition supports the founder narrative and long-term vision. It is not presented as clinical validation or regulatory approval.
          </p>
          <a
            href={articleUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent-cyan/40 px-5 py-3 text-sm font-semibold text-accent-cyan transition hover:bg-accent-cyan hover:text-background-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
          >
            Read the feature <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
