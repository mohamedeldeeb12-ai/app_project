import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-soft hover:shadow-glow hover:-translate-y-0.5',
  secondary:
    'glass text-ink-800 hover:bg-white hover:-translate-y-0.5 hover:shadow-soft',
  ghost:
    'text-ink-700 hover:text-primary-600 hover:bg-primary-50/60',
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  icon,
  className = '',
}: ButtonProps) {
  const base = `group inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-600 transition-all duration-300 ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon ?? <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
        <Link to={to} className={base} onClick={onClick}>
          {content}
        </Link>
      </motion.div>
    );
  }
  if (href) {
    return (
      <motion.a whileTap={{ scale: 0.97 }} href={href} className={base} onClick={onClick}>
        {content}
      </motion.a>
    );
  }
  return (
    <motion.button whileTap={{ scale: 0.97 }} onClick={onClick} className={base}>
      {content}
    </motion.button>
  );
}
