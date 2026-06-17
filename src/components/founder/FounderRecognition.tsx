import { motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { links } from "../../data/links";

export default function FounderRecognition() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="panel p-6 md:p-8">
          <Award className="text-accent-cyan" size={30} />
          <p className="eyebrow mt-6">Recognition</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-semibold md:text-5xl">Featured by Aivancity for a medical innovation vision.</h2>
          <p className="mt-5 max-w-4xl text-xl leading-9 text-text-secondary">
            From UNESCO to medical innovation: Aivancity student Vishal Nelaturi develops a vision.
          </p>
          <p className="mt-5 max-w-3xl leading-8 text-text-muted">
            The Aivancity feature supports founder visibility, public narrative, and the innovation direction behind Vesperus. It helps reviewers verify that the founder and vision have appeared in a public institutional context.
          </p>
          <p className="mt-4 max-w-3xl rounded-3xl border border-accent-teal/20 bg-accent-teal/5 p-4 text-sm leading-7 text-text-secondary">
            Recognition reflects founder visibility and innovation direction. It should not be interpreted as product validation, clinical validation, regulatory approval, certification, commercial traction, customer validation, investor backing, or commercial adoption.
          </p>
          <a
            href={links.aivancityArticle}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-accent-cyan/40 px-5 py-3 text-sm font-semibold text-accent-cyan transition hover:bg-accent-cyan hover:text-background-primary focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
          >
            Read Article <ArrowUpRight size={17} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
