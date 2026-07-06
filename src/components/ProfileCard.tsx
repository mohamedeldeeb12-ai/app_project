import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface ProfileCardProps {
  name: string;
  role: string;
  icon: LucideIcon;
  index?: number;
}

export default function ProfileCard({ name, role, icon: Icon, index = 0 }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative rounded-4xl glass p-6 text-center shadow-glass transition-shadow hover:shadow-glass-lg"
    >
      <div className="relative mx-auto h-24 w-24">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-200 to-accent-200 blur-md opacity-60 transition-opacity group-hover:opacity-90" />
        <div className="relative grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-primary-50 to-white ring-1 ring-white/70 shadow-soft">
          <Icon className="h-9 w-9 text-primary-500" strokeWidth={1.6} />
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 grid h-7 w-7 place-items-center rounded-full bg-white shadow-soft ring-1 ring-ink-200/60">
          <span className="h-2.5 w-2.5 rounded-full bg-success-500" />
        </span>
      </div>
      <h3 className="mt-5 font-display text-base font-700 text-ink-900">{name}</h3>
      <p className="mt-1 text-sm font-500 text-primary-600">{role}</p>
    </motion.div>
  );
}
