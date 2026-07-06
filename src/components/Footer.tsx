import { Link } from 'react-router-dom';
import { Activity, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-ink-200/70 bg-gradient-to-b from-white to-primary-50/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid place-items-center h-10 w-10 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow">
                <Activity className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-700 tracking-tight">
                Wearable<span className="text-primary-600"> Antenna</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">
              AI-Powered Medical Diagnosis Using Wearable Antenna Technology — bringing hospital-grade diagnostics to your wrist.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-700 uppercase tracking-wider text-ink-900">Project</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-ink-500">
              <li><Link to="/" className="hover:text-primary-600 transition-colors">Home</Link></li>
              <li><Link to="/diabetes-models" className="hover:text-primary-600 transition-colors">AI Models</Link></li>
              <li><Link to="/documentation" className="hover:text-primary-600 transition-colors">Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-700 uppercase tracking-wider text-ink-900">Connect</h4>
            <div className="mt-4 flex items-center gap-3">
              {[
                { Icon: Github, label: 'GitHub' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Mail, label: 'Email' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid place-items-center h-10 w-10 rounded-2xl glass-soft text-ink-600 transition-all hover:text-primary-600 hover:-translate-y-0.5 hover:shadow-soft"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-400">
          <p>Wearable Antenna Graduation Project · Faculty of Engineering · Electronics and Communications Department</p>
          <p>Graduation Project 2026</p>
        </div>
      </div>
    </footer>
  );
}
