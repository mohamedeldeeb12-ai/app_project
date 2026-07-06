import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  Cpu,
  Database,
  FileText,
  Microscope,
  Network,
  Radio,
  Workflow,
} from 'lucide-react';
import PageHero from '../components/PageHero';

const sections = [
  {
    icon: Radio,
    title: 'Wearable Antenna Design',
    description: 'Antenna geometry, materials, frequency response, and bio-signal capture methodology.',
  },
  {
    icon: Workflow,
    title: 'Machine Learning Workflow',
    description: 'Data preprocessing, feature extraction, model architecture, training, and evaluation.',
  },
  {
    icon: Database,
    title: 'Datasets',
    description: 'Dataset sources, signal labeling, train/validation/test splits, and augmentation.',
  },
  {
    icon: Network,
    title: 'System Architecture',
    description: 'End-to-end pipeline from wearable sensor to Flask backend to diagnostic output.',
  },
  {
    icon: Microscope,
    title: 'Implementation Methodology',
    description: 'Engineering approach, model selection rationale, and validation strategy.',
  },
  {
    icon: Cpu,
    title: 'Backend Integration',
    description: 'Flask API endpoints, request/response schemas, and inference serving.',
  },
];

export default function Documentation() {
  return (
    <>
      <PageHero
        icon={BookOpen}
        title="Project Documentation"
        subtitle="Read the complete graduation project report, implementation methodology, wearable antenna design, machine learning workflow, datasets, and system architecture."
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
          {/* report card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-5xl glass p-8 shadow-glass-lg sm:p-12"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-200/40 blur-3xl" />
            <div className="relative flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="grid h-28 w-28 shrink-0 place-items-center rounded-4xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow"
              >
                <FileText className="h-12 w-12 text-white" strokeWidth={1.6} />
              </motion.div>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-800 tracking-tight text-ink-900">
                  Full Graduation Project Report
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-500">
                  The complete document covering antenna design, ML workflow, datasets, and system architecture. Available for download once the report is finalized.
                </p>
                <button
                  type="button"
                  className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 px-5 py-3 text-sm font-600 text-white shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-glow"
                >
                  <FileText className="h-4 w-4" />
                  Download Report
                </button>
              </div>
            </div>
          </motion.div>

          {/* sections grid */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group rounded-4xl glass p-6 shadow-glass transition-shadow hover:shadow-glass-lg"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-50 text-primary-600 ring-1 ring-primary-100 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                  <s.icon className="h-5.5 w-5.5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-700 text-ink-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
