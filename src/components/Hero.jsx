import { motion } from 'framer-motion';
import MotionFade from './MotionFade';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center gap-8 px-4 py-16 sm:px-6">
        <MotionFade>
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Nike Energy</p>
        </MotionFade>
        <MotionFade delay={0.1}>
          <h1 className="text-4xl font-black leading-tight sm:text-6xl md:text-7xl">
            Легкость. Скорость. Контроль.
          </h1>
        </MotionFade>
        <MotionFade delay={0.2}>
          <p className="max-w-2xl text-lg text-white/70">
            Новая коллекция с технологией Air и амортизацией для любой дистанции. Минимализм и
            неоновый акцент для твоего темпа.
          </p>
        </MotionFade>
        <MotionFade delay={0.3}>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/shoes"
              className="rounded-full bg-neon px-6 py-3 text-sm font-semibold text-black shadow-neon transition hover:shadow-[0_0_35px_#00eaff]"
            >
              Смотреть кроссовки
            </Link>
            <Link
              to="/apparel"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-neon hover:text-neon"
            >
              Магазин одежды
            </Link>
          </div>
        </MotionFade>
      </div>
      <motion.div
        className="pointer-events-none absolute inset-x-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-neon to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
      />
    </section>
  );
}

