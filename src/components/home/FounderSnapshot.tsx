import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, UserRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import founderPhoto from "../../../assets/images/founder-vishal.jpg";

const linkedInUrl = "https://www.linkedin.com/in/nelaturi-vishal-b672331b9/";
const githubUrl = "https://github.com/vishal-221810402051";

export default function FounderSnapshot() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="panel p-4">
          {photoFailed ? (
            <div className="flex h-80 items-center justify-center rounded-3xl border border-accent-cyan/30 bg-accent-cyan/10">
              <UserRound className="text-accent-cyan" size={54} aria-hidden="true" />
            </div>
          ) : (
            <div className="relative h-80 overflow-hidden rounded-3xl border border-accent-cyan/20 bg-surface-secondary">
              <img
                src={founderPhoto}
                alt="Vishal Nelaturi"
                className="h-full w-full object-cover object-[50%_22%]"
                onError={() => setPhotoFailed(true)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-primary/35 via-transparent to-transparent" />
            </div>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.05 }}>
          <p className="eyebrow">Founder snapshot</p>
          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Vishal Nelaturi</h2>
          <div className="mt-6 grid gap-3 text-lg leading-8 text-text-secondary">
            <p>MSc Data Engineering & Cloud Computing at Aivancity Paris.</p>
            <p>Founder of Vesperus.</p>
            <p>Builder of NOVA and M.E.D.I.S.</p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/founder"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-teal px-6 py-3 text-sm font-semibold text-background-primary transition hover:bg-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
            >
              View Founder <ArrowRight size={17} />
            </Link>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface-primary/70 px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-cyan hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
            >
              <Linkedin size={17} /> LinkedIn
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface-primary/70 px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-cyan hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
            >
              <Github size={17} /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
