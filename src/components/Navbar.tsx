import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "NOVA", href: "#nova" },
  { label: "M.E.D.I.S.", href: "#medis" },
  { label: "Technology", href: "#technology" },
  { label: "Recognition", href: "#recognition" },
  { label: "Founder", href: "#founder" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-background-primary/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="Vesperus home">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent-cyan/30 bg-accent-cyan/10 font-mono text-sm text-accent-cyan">
            V
          </span>
          <span className="text-base font-semibold tracking-wide text-text-primary">Vesperus</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-text-secondary transition hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-accent-teal/40 px-5 py-2 text-sm font-medium text-accent-teal transition hover:border-accent-cyan hover:text-accent-cyan focus:outline-none focus:ring-2 focus:ring-accent-cyan/50"
          >
            Contact
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-text-primary lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border-subtle bg-background-secondary/95 px-5 py-5 lg:hidden">
          <div className="mx-auto grid max-w-[1200px] gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm text-text-secondary transition hover:bg-surface-primary hover:text-accent-cyan"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
