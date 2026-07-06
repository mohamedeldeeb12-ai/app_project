import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

interface FeatureCardProps {
  to: string;
  icon: LucideIcon;
  emoji?: string;
  title: string;
  description: string;
  cta: string;
  accent?: 'primary' | 'accent';
  index?: number;
  children?: ReactNode;
}

export default function FeatureCard({
  to,
  icon: Icon,
  emoji,
  title,
  description,
  cta,
  accent = 'primary',
  index = 0,
  children,
}: FeatureCardProps) {
  const accentGrad =
    accent === 'primary'
      ? 'from-primary-500 to-primary-600'
      : 'from-accent-500 to-primary-500';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative h-full"
    >
      <Link
        to={to}
        className="relative flex h-full flex-col overflow-hidden rounded-4xl glass p-7 shadow-glass transition-all duration-500 hover:-translate-y-1.5 hover:shadow-glass-lg"
      >
        {/* hover gradient wash */}
        <div className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${accentGrad} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20`} />

        <div className="flex items-center gap-4">
          <span className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${accentGrad} text-2xl shadow-glow`}>
            {emoji ? <span>{emoji}</span> : <Icon className="h-6 w-6 text-white" strokeWidth={2} />}
            <span className="absolute inset-0 rounded-2xl ring-1 ring-white/30" />
          </span>
          <h3 className="font-display text-xl font-700 text-ink-900">{title}</h3>
        </div>

        <p className="mt-5 flex-1 text-sm leading-relaxed text-ink-500">{description}</p>

        {children}

        <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-600 text-primary-600">
          {cta}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    </motion.div>
  );
}
