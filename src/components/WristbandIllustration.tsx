import { motion } from 'framer-motion';
import { Activity, Cpu, Radio, Wifi } from 'lucide-react';

export default function WristbandIllustration() {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md">
      {/* ambient glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary-300/40 to-accent-300/30 blur-3xl" />
      </div>

      {/* wireless signal rings */}
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-300/50"
          style={{ height: 180 + i * 90, width: 180 + i * 90 }}
          animate={{ scale: [0.85, 1.15, 0.85], opacity: [0.5, 0.1, 0.5] }}
          transition={{ duration: 3, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* floating signal dots */}
      {[
        { x: -150, y: -120, d: 0 },
        { x: 150, y: -90, d: 0.6 },
        { x: -120, y: 130, d: 1.2 },
        { x: 140, y: 110, d: 1.8 },
      ].map((p, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 grid place-items-center"
          style={{ x: p.x, y: p.y }}
          animate={{ y: [p.y, p.y - 14, p.y], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 4, delay: p.d, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="grid place-items-center h-9 w-9 rounded-2xl glass shadow-soft">
            <Wifi className="h-4 w-4 text-primary-500" />
          </span>
        </motion.div>
      ))}

      {/* wristband body */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="relative">
          {/* strap top */}
          <div className="mx-auto h-16 w-44 rounded-t-[2.5rem] bg-gradient-to-b from-ink-100 to-ink-200/80 shadow-soft" />
          {/* main device */}
          <div className="relative mx-auto -mt-1 h-40 w-56 rounded-[2rem] bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 shadow-glass-lg ring-1 ring-white/10">
            {/* screen */}
            <div className="absolute inset-2.5 rounded-[1.5rem] bg-gradient-to-br from-primary-950 via-ink-950 to-primary-900 overflow-hidden">
              {/* screen grid */}
              <div className="absolute inset-0 bg-grid-soft [background-size:18px_18px] opacity-40" />
              {/* heartbeat line */}
              <div className="absolute inset-0 grid place-items-center">
                <svg viewBox="0 0 200 80" className="w-full px-3">
                  <motion.polyline
                    points="0,40 30,40 45,40 55,15 65,65 75,25 85,40 120,40 135,40 145,20 155,55 165,40 200,40"
                    fill="none"
                    stroke="url(#ekg)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                  />
                  <defs>
                    <linearGradient id="ekg" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3dd6ff" />
                      <stop offset="100%" stopColor="#3385fc" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* top status row */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-[10px] font-600 text-primary-200/80">
                <span className="flex items-center gap-1"><Radio className="h-3 w-3" /> ANT</span>
                <span className="flex items-center gap-1"><Cpu className="h-3 w-3" /> AI</span>
                <span className="flex items-center gap-1"><Activity className="h-3 w-3" /> 72</span>
              </div>
              {/* bottom label */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-[10px] font-600 uppercase tracking-wider text-accent-300/80">Bio-Signal</span>
                <span className="h-1.5 w-1.5 rounded-full bg-success-500 shadow-[0_0_8px] shadow-success-500/60" />
              </div>
            </div>
            {/* side button */}
            <div className="absolute -right-1 top-12 h-10 w-1.5 rounded-full bg-ink-700" />
          </div>
          {/* strap bottom */}
          <div className="mx-auto -mt-1 h-16 w-44 rounded-b-[2.5rem] bg-gradient-to-t from-ink-100 to-ink-200/80 shadow-soft" />
        </div>
      </motion.div>
    </div>
  );
}
