import { motion } from "framer-motion";
import { ArrowRight, Cpu, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(0,229,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.06)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <motion.div
        className="absolute left-1/2 top-28 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent-cyan/10 blur-3xl md:h-[32rem] md:w-[32rem]"
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.04, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="section-shell grid min-h-[calc(100vh-4rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="eyebrow">Vesperus Systems</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] text-text-primary md:text-7xl">
            Engineering the future of autonomous healthcare.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-text-secondary md:text-xl">
            Vesperus builds intelligent orchestration, validation, and automation platforms for next-generation medical systems.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/nova"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-cyan px-6 py-3 text-sm font-semibold text-background-primary shadow-glow transition hover:bg-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
            >
              Learn about NOVA <ArrowRight size={17} />
            </Link>
            <Link
              to="/founder"
              className="inline-flex items-center justify-center rounded-full border border-border-subtle bg-surface-primary/70 px-6 py-3 text-sm font-semibold text-text-primary transition hover:border-accent-cyan hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
            >
              View founder
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="panel relative overflow-hidden p-5"
        >
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-accent-violet/10 blur-3xl" />
          <div className="rounded-2xl border border-accent-cyan/20 bg-background-secondary/80 p-5">
            <div className="flex items-center justify-between border-b border-border-subtle pb-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-text-muted">Validation layer</p>
                <p className="mt-1 text-lg font-semibold">NOVA orchestration core</p>
              </div>
              <ShieldCheck className="text-accent-teal" size={28} />
            </div>
            <div className="mt-6 grid gap-4">
              {["Dual ESP32-S3", "Raspberry Pi gateway", "Packet integrity", "Telemetry supervision"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-border-subtle bg-surface-secondary/80 p-4">
                  <Cpu className="shrink-0 text-accent-cyan" size={18} />
                  <span className="text-sm text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
