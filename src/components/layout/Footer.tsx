import { ArrowUpRight, Linkedin, Mail } from "lucide-react";

const linkedInUrl = "https://www.linkedin.com/in/nelaturi-vishal-b672331b9/";
const githubUrl = "https://github.com/vishal-221810402051";
const articleUrl =
  "https://aivancity.ai/en/actualites/de-lunesco-linnovation-medicale-vishal-nelaturi-etudiant-daivancity-developpe-une-vision";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background-primary">
      <div className="mx-auto grid max-w-[1200px] gap-8 px-5 py-10 text-sm text-text-muted md:grid-cols-[1.2fr_1fr] md:px-6">
        <div>
          <p className="font-semibold text-text-primary">Vesperus Systems</p>
          <p className="mt-2 max-w-xl text-text-secondary">Engineering the future of autonomous healthcare.</p>
          <p className="mt-3">Paris, France</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a className="inline-flex items-center gap-2 text-text-secondary transition hover:text-accent-cyan" href={linkedInUrl} target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a className="inline-flex items-center gap-2 text-text-secondary transition hover:text-accent-cyan" href={articleUrl} target="_blank" rel="noreferrer">
            <ArrowUpRight size={16} /> Aivancity article
          </a>
          <a className="inline-flex items-center gap-2 text-text-secondary transition hover:text-accent-cyan" href="mailto:founder@vesperus.systems">
            <Mail size={16} /> Contact
          </a>
          <a className="inline-flex items-center gap-2 text-text-secondary transition hover:text-accent-cyan" href={githubUrl} target="_blank" rel="noreferrer">
            <ArrowUpRight size={16} /> View GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
