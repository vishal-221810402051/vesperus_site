import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="section-shell pt-32">
      <div className="panel p-6 md:p-10">
        <p className="eyebrow">Page not found</p>
        <h1 className="mt-4 text-4xl font-semibold md:text-6xl">This Vesperus page does not exist yet.</h1>
        <p className="mt-5 max-w-2xl leading-8 text-text-secondary">Return to the homepage to continue exploring the current Vesperus website.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-accent-cyan px-6 py-3 text-sm font-semibold text-background-primary transition hover:bg-accent-teal focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
