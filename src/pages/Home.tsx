import { motion } from 'framer-motion';
import {
  BookOpen,
  BrainCircuit,
  Droplet,
  FileText,
  GraduationCap,
  Microscope,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  Wrench,
  Code2,
  Database,
  Cpu,
  BarChart3,
} from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';
import ProfileCard from '../components/ProfileCard';
import WristbandIllustration from '../components/WristbandIllustration';

const featureBadges = [
  { icon: BrainCircuit, label: 'AI Deep Learning' },
  { icon: Stethoscope, label: 'Non-invasive Diagnosis' },
  { icon: ShieldCheck, label: 'Research Grade' },
];

const team = [
  { name: 'Ahmed Fathy', role: 'AI Engineer', icon: BrainCircuit },
  { name: 'Ahmed Essam', role: 'Machine Learning Engineer', icon: Cpu },
  { name: 'Alaa Ahmed', role: 'Embedded Systems Engineer', icon: Wrench },
  { name: 'Ibrahim Khalifa', role: 'Frontend Developer', icon: Code2 },
  { name: 'Abdullah Mohamed', role: 'Backend Developer', icon: Database },
  { name: 'Mohamed Abdelgelil', role: 'Research Engineer', icon: Microscope },
  { name: 'Mohamed ElDeeb', role: 'Data Analyst', icon: BarChart3 },
];

export default function Home() {
  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* background */}
        <div className="absolute inset-0 -z-10 bg-radial-blue" />
        <div className="absolute inset-0 -z-10 bg-grid-soft [background-size:36px_36px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />
        <div className="absolute -top-24 left-1/2 -z-10 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-primary-200/30 blur-3xl" />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
  <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
    {/* left content */}
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="inline-flex items-center gap-2 rounded-full glass-soft px-3.5 py-1.5 text-xs font-600 uppercase tracking-wider text-primary-600">
        <Sparkles className="h-3.5 w-3.5" />
        AI Healthcare · Graduation Project 2026
      </span>

      <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl font-800 tracking-tight text-ink-900 text-balance leading-[1.05]">
        Wearable <span className="gradient-text">Antenna</span>
      </h1>

      <p className="mt-5 font-display text-lg sm:text-xl font-600 text-ink-700 text-balance">
        AI-Powered Medical Diagnosis Using Wearable Antenna Technology
      </p>

      <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-500">
        Our system captures bio-signals from a wearable antenna and analyses them using deep learning models to detect diseases accurately — bringing hospital-grade diagnostics to your wrist.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button
          to="/diagnosis"
          variant="primary"
        >
          Start AI Diagnosis
        </Button>

        <Button
          to="/documentation"
          variant="secondary"
          icon={<FileText className="h-4 w-4" />}
        >
          View Documentation
        </Button>
      </div>

      {/* feature badges */}
      <div className="mt-10 flex flex-wrap gap-2.5">
        {featureBadges.map(({ icon: Icon, label }, i) => (
          <motion.span
            key={label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
            className="inline-flex items-center gap-2 rounded-2xl glass-soft px-3.5 py-2 text-xs font-600 text-ink-700"
          >
            <Icon className="h-4 w-4 text-primary-500" />
            {label}
          </motion.span>
        ))}
      </div>
    </motion.div>
                       {/* right illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <WristbandIllustration />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===================== AI MODELS ===================== */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="AI Models"
            title={<>Intelligent Diagnostic Models</>}
            subtitle="Two deep-learning pipelines powered by wearable antenna bio-signals — engineered for clinical-grade accuracy."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <FeatureCard
              to="/diabetes-models"
              emoji="🩸"
              icon={Droplet}
              title="Diabetes Detection"
              description="Predict diabetes from wearable antenna bio-signals. Choose between a single-measurement standard model and a cumulative long-term monitoring model."
              cta="Open Diabetes Models"
              accent="primary"
              index={0}
            />

            <FeatureCard
  to="/bone-fracture"
  emoji="🦴"
  icon={ScanLine}
  title="Bone Fracture Detection"
  description="Launch the Bone-Tenna AI diagnostic engine for real-time fracture analysis using wearable antenna bio-signals."
  cta="Launch Bone-Tenna AI"
  accent="accent"
  index={1}
/>
          </div>
        </div>
      </section>

      {/* ===================== DOCUMENTATION ===================== */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-5xl glass p-8 shadow-glass-lg sm:p-12 lg:p-16"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-200/40 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent-200/30 blur-3xl" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[auto_1fr]">
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-to-br from-primary-200/50 to-accent-200/40 blur-2xl" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="grid h-32 w-32 place-items-center rounded-4xl bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow"
                >
                  <BookOpen className="h-14 w-14 text-white" strokeWidth={1.6} />
                </motion.div>
              </div>

              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-800 tracking-tight text-ink-900">
                  Project Documentation
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-500">
                  Read the complete graduation project report, implementation methodology, wearable antenna design, machine learning workflow, datasets, and system architecture.
                </p>
                <div className="mt-8">
                  <Button to="/documentation" variant="primary" icon={<FileText className="h-4 w-4" />}>
                    Open Documentation
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

            {/* ===================== TEAM ===================== */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Meet Our Team"
            title={<>The Minds Behind Wearable Antenna</>}
            subtitle="A dedicated team of engineering students building the future of non-invasive AI diagnostics."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <ProfileCard key={member.name} {...member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SUPERVISOR ===================== */}
      <section className="relative py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <SectionTitle
            eyebrow="Academic Supervisor"
            title={<>Under Expert Guidance</>}
          />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-10 max-w-2xl"
          >
            <div className="group relative overflow-hidden rounded-4xl glass p-8 shadow-glass-lg transition-all hover:-translate-y-1">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary-200/40 blur-3xl transition-opacity group-hover:opacity-70" />

              <div className="relative flex flex-col items-center text-center sm:flex-row sm:text-left">
                <div className="relative">
                  <div className="absolute -inset-3 -z-10 rounded-full bg-gradient-to-br from-primary-200/60 to-accent-200/50 blur-xl" />

                  <div className="grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-primary-500 to-accent-500 shadow-glow">
                    <GraduationCap className="h-11 w-11 text-white" strokeWidth={1.6} />
                  </div>
                </div>

                <div className="mt-5 sm:mt-0 sm:ml-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-3 py-1 text-xs font-600 uppercase tracking-wider text-primary-600">
                    <Users className="h-3.5 w-3.5" />
                    Academic Supervisor
                  </span>

                  <h3 className="mt-3 font-display text-2xl font-800 text-ink-900">
                    Dr. Azza El-Naggar
                  </h3>

                  <p className="mt-1 text-sm font-500 text-ink-600">
                    Faculty of Engineering
                  </p>

                  <p className="text-sm font-500 text-primary-600">
                    Department of Electronics and Communications
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}