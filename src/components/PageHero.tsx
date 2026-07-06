import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { LucideIcon } from 'lucide-react';

interface PageHeroProps {
  icon: LucideIcon;
  emoji?: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
}

export default function PageHero({ icon: Icon, emoji, title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-12">
      <div className="absolute inset-0 -z-10 bg-radial-blue" />
      <div className="absolute inset-0 -z-10 bg-grid-soft [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <span className="relative mx-auto grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 text-3xl shadow-glow">
            {emoji ? <span>{emoji}</span> : <Icon className="h-8 w-8 text-white" strokeWidth={2} />}
            <span className="absolute inset-0 rounded-3xl ring-1 ring-white/30" />
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl font-800 tracking-tight text-ink-900 text-balance">
            {title}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-500 text-balance">
            {subtitle}
          </p>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
