import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import vesperusLogo from "../../../assets/images/vesperus-logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Founder", href: "/founder" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-background-primary/78 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 md:px-6">
        <Link to="/" className="flex items-center gap-3" aria-label="Vesperus home">
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-accent-cyan/30 bg-accent-cyan/10">
            {logoFailed ? (
              <span className="font-mono text-sm text-accent-cyan">V</span>
            ) : (
              <img
                src={vesperusLogo}
                alt="Vesperus logo"
                className="h-8 w-8 object-contain"
                onError={() => setLogoFailed(true)}
              />
            )}
          </span>
          <span className="text-base font-semibold tracking-wide text-text-primary">Vesperus</span>
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === "/"}
              className={({ isActive }) =>
                `rounded-full border px-5 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent-cyan/50 ${
                  isActive
                    ? "border-accent-cyan/50 bg-accent-cyan/10 text-accent-cyan"
                    : "border-accent-teal/40 text-accent-teal hover:border-accent-cyan hover:text-accent-cyan"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
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
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === "/"}
                className={({ isActive }) =>
                  `rounded-2xl border px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "border-accent-cyan/50 bg-accent-cyan/10 text-accent-cyan"
                      : "border-accent-teal/40 text-accent-teal hover:border-accent-cyan hover:text-accent-cyan"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
