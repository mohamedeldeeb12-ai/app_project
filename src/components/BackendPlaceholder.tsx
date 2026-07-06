import { motion } from 'framer-motion';
import { ArrowLeft, Cpu, FlaskConical, Loader2, ServerCog } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';

interface BackendPlaceholderProps {
  title: string;
  description: string;
  endpoint: string;
  features: { icon: LucideIcon; label: string }[];
  backTo: string;
  backLabel: string;
}

export default function BackendPlaceholder({
  title,
  description,
  endpoint,
  features,
  backTo,
  backLabel,
}: BackendPlaceholderProps) {
  return (
    <section className="relative pb-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        {/* status banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 rounded-3xl glass-soft px-5 py-4 text-sm"
        >
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-amber-100 text-amber-600">
            <FlaskConical className="h-4.5 w-4.5" />
          </span>
          <p className="text-ink-600">
            <span className="font-700 text-ink-900">Backend integration pending.</span>{' '}
            This interface will connect to a Flask API at <code className="rounded-md bg-ink-100 px-1.5 py-0.5 font-mono text-xs text-primary-700">{endpoint}</code>.
          </p>
        </motion.div>

        {/* main card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 overflow-hidden rounded-4xl glass p-8 shadow-glass-lg sm:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-800 tracking-tight text-ink-900">{title}</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-500">{description}</p>

              <div className="mt-8 space-y-3">
                {features.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex items-center gap-3"
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-2xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <span className="text-sm font-500 text-ink-700">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* mock diagnostic panel */}
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-200/40 to-accent-200/30 blur-2xl" />
              <div className="rounded-4xl bg-gradient-to-br from-ink-900 to-ink-950 p-6 shadow-glass-lg ring-1 ring-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-600 uppercase tracking-wider text-primary-200/80">
                    <ServerCog className="h-4 w-4" /> Inference Engine
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 px-2.5 py-1 text-[10px] font-700 uppercase tracking-wider text-amber-300">
                    <Loader2 className="h-3 w-3 animate-spin" /> Standby
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    { label: 'Bio-signal capture', value: 100 },
                    { label: 'Preprocessing', value: 100 },
                    { label: 'Model inference', value: 0 },
                    { label: 'Result rendering', value: 0 },
                  ].map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between text-[11px] font-500 text-primary-200/70">
                        <span>{row.label}</span>
                        <span>{row.value}%</span>
                      </div>
                      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent-400 to-primary-400"
                          initial={{ width: 0 }}
                          animate={{ width: `${row.value}%` }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-xs font-mono text-primary-200/70">
                  <Cpu className="h-3.5 w-3.5 text-accent-300" />
                  <span>POST {endpoint}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <Link
              to={backTo}
              className="group inline-flex items-center gap-2 text-sm font-600 text-ink-600 transition-colors hover:text-primary-600"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              {backLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
