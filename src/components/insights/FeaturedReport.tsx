import { motion } from "framer-motion";
import { Download, ExternalLink, FileText } from "lucide-react";

const reportUrl = "/reports/healthcare-resilience-diplomacy-france-india-policy-framework.pdf";

const tags = [
  "Healthcare Resilience",
  "France-India Cooperation",
  "Digital Health",
  "Responsible AI",
  "Policy Framework",
  "Global Health Security",
];

export default function FeaturedReport() {
  return (
    <section className="bg-background-secondary/60">
      <div className="section-shell">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="panel p-6 md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="rounded-3xl border border-accent-cyan/20 bg-accent-cyan/10 p-6">
              <FileText className="text-accent-cyan" size={36} />
              <p className="eyebrow mt-6">Featured Report</p>
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-text-muted">
                Independent Strategic Policy Report - Vishal Nelaturi - June 2026
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-semibold md:text-5xl">Healthcare Resilience Diplomacy</h2>
              <p className="mt-4 text-xl leading-8 text-text-secondary">
                Strengthening Global Health Security through France-India Strategic Cooperation
              </p>
              <p className="mt-5 leading-8 text-text-secondary">
                This independent strategic policy report explores how France and India can strengthen global health security through healthcare resilience diplomacy, responsible digital transformation, research-to-care translation, manufacturing resilience, and institutional cooperation.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-accent-teal/30 bg-accent-teal/10 px-3 py-1 text-xs font-medium text-accent-teal">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={reportUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-cyan px-6 py-3 text-sm font-semibold text-background-primary shadow-glow transition hover:bg-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
                >
                  View Report <ExternalLink size={17} />
                </a>
                <a
                  href={reportUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface-primary/70 px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-cyan hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
                >
                  Download PDF <Download size={17} />
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
