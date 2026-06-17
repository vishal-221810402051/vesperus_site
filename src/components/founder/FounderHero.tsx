import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, UserRound } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import founderPhoto from "../../../assets/images/founder-vishal.jpg";
import { links } from "../../data/links";

export default function FounderHero() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="section-shell pt-32">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="panel flex items-center justify-center overflow-hidden p-4 md:p-5">
          {photoFailed ? (
            <div className="mx-auto flex h-[28rem] w-full max-w-[360px] items-center justify-center rounded-3xl border border-accent-cyan/30 bg-accent-cyan/10 md:h-[30rem]">
              <UserRound className="text-accent-cyan" size={64} aria-hidden="true" />
            </div>
          ) : (
            <div className="relative mx-auto h-[28rem] w-full max-w-[360px] overflow-hidden rounded-3xl border border-accent-cyan/20 bg-surface-secondary md:h-[30rem]">
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

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.05 }}>
          <p className="eyebrow">Founder</p>
          <h1 className="mt-4 text-5xl font-semibold md:text-7xl">Vishal Nelaturi</h1>
          <div className="mt-6 grid gap-3 text-lg leading-8 text-text-secondary">
            <p>Founder of Vesperus.</p>
            <p>MSc Data Engineering & Cloud Computing at Aivancity Paris.</p>
            <p>Builder of NOVA and M.E.D.I.S.</p>
            <p className="inline-flex items-center gap-2">
              <MapPin className="text-accent-cyan" size={18} /> Based in Paris, France.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={links.linkedIn}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-teal px-6 py-3 text-sm font-semibold text-background-primary transition hover:bg-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
            >
              <Linkedin size={17} /> Connect on LinkedIn
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface-primary/70 px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-cyan hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
            >
              <Github size={17} /> View GitHub
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface-primary/70 px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-cyan hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
            >
              <Mail size={17} /> Contact Vesperus
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
