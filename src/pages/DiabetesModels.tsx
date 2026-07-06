import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Droplet, Activity, Layers, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';

const models = [
  {
    to: 'https://bone-tenna-ai-ezlgkzypexj7fv7cragkmv.streamlit.app/',
    emoji: '🩸',
    icon: Activity,
    title: 'Standard Diabetes Model',
    description:
      'Predict diabetes using a single patient measurement captured from wearable antenna bio-signals.',
    cta: 'Open Standard Model',
    accent: 'from-primary-500 to-primary-600',
    points: [
      { icon: Activity, label: 'Single-measurement inference' },
      { icon: Droplet, label: 'Instant bio-signal analysis' },
    ],
  },
  {
    to: 'https://bone-tenna-ai-tz3ybchntdrxrc5rqnk5ug.streamlit.app/',
    emoji: '📊',
    icon: Layers,
    title: 'Cumulative Diabetes Model',
    description:
      'Predict diabetes using cumulative and sequential patient measurements for long-term monitoring and improved diagnostic accuracy.',
    cta: 'Open Cumulative Model',
    accent: 'from-accent-500 to-primary-500',
    points: [
      { icon: Clock, label: 'Sequential time-series analysis' },
      { icon: Layers, label: 'Long-term trend monitoring' },
    ],
  },
];

export default function DiabetesModels() {
  return (
    <>
      <PageHero
        icon={Droplet}
        emoji="🩸"
        title="Diabetes Models"
        subtitle="Two deep-learning pipelines for diabetes detection — choose between a single-measurement standard model and a cumulative long-term monitoring model."
      >
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 text-sm font-600 text-ink-600 transition-colors hover:text-primary-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </PageHero>

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            {models.map((m, i) => (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group h-full"
              >
                <a
                  href={m.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex h-full flex-col overflow-hidden rounded-4xl glass p-8 shadow-glass transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glass-lg"
                >
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${m.accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`}
                  />

                  <div className="flex items-center gap-4">
                    <span
                      className={`relative grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br ${m.accent} text-3xl shadow-glow`}
                    >
                      <span>{m.emoji}</span>
                      <span className="absolute inset-0 rounded-3xl ring-1 ring-white/30" />
                    </span>

                    <h3 className="font-display text-2xl font-800 tracking-tight text-ink-900">
                      {m.title}
                    </h3>
                  </div>

                  <p className="mt-6 text-base leading-relaxed text-ink-500">
                    {m.description}
                  </p>

                  <div className="mt-6 space-y-3">
                    {m.points.map(({ icon: Icon, label }) => (
                      <div key={label} className="flex items-center gap-3">
                        <span className="grid h-9 w-9 place-items-center rounded-2xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                          <Icon className="h-4.5 w-4.5" />
                        </span>

                        <span className="text-sm font-500 text-ink-700">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <span className="mt-8 inline-flex items-center gap-1.5 text-sm font-600 text-primary-600">
                    {m.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}