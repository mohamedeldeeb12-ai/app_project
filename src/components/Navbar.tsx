import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Activity, ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-4">
        <nav className="glass rounded-4xl shadow-glass px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-2.5">
            <span className="relative grid place-items-center h-10 w-10 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow">
              <Activity className="h-5 w-5 text-white" strokeWidth={2.5} />
              <span className="absolute inset-0 rounded-2xl ring-1 ring-white/40" />
            </span>
            <span className="font-display text-lg font-700 tracking-tight text-ink-900">
              Wearable<span className="text-primary-600"> Antenna</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm font-500 text-ink-600">
            <Link to="/" className="hover:text-primary-600 transition-colors">Home</Link>
            <Link to="/diabetes-models" className="hover:text-primary-600 transition-colors">AI Models</Link>
            <Link to="/documentation" className="hover:text-primary-600 transition-colors">Documentation</Link>
          </div>

          <Link
            to="/diabetes-models"
            className="group inline-flex items-center gap-1.5 rounded-2xl bg-ink-900 px-4 py-2.5 text-sm font-600 text-white shadow-soft transition-all hover:bg-primary-600 hover:shadow-glow"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </nav>
      </div>
    </motion.header>
  );
}
