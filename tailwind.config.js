/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-primary": "#05070D",
        "background-secondary": "#0B1020",
        "surface-primary": "#111827",
        "surface-secondary": "#0F172A",
        "border-subtle": "#1E293B",
        "text-primary": "#F8FAFC",
        "text-secondary": "#CBD5E1",
        "text-muted": "#94A3B8",
        "accent-cyan": "#00E5FF",
        "accent-teal": "#14F1C7",
        "accent-violet": "#8B5CF6",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 48px rgba(0, 229, 255, 0.16)",
        panel: "0 24px 80px rgba(0, 0, 0, 0.32)",
      },
    },
  },
  plugins: [],
};
