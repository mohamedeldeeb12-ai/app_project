import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative grid min-h-[70vh] place-items-center pt-32 pb-20">
      <div className="absolute inset-0 -z-10 bg-radial-blue" />
      <div className="mx-auto max-w-lg px-5 text-center">
        <p className="font-display text-7xl font-800 gradient-text">404</p>
        <h1 className="mt-4 font-display text-2xl font-700 text-ink-900">Page not found</h1>
        <p className="mt-3 text-ink-500">The page you are looking for doesn't exist or has been moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 px-5 py-3 text-sm font-600 text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow"
        >
          <Home className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
