import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, revealLeftVariants, revealRightVariants, viewportOnce } from '../hooks/useScrollReveal'

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#000' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex items-center gap-4 mb-16"
        >
          <h2 className="sec-title">{t.projects_title}</h2>
          <div className="divider" />
        </motion.div>

        {/* Featured row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Apuntes UDA */}
          <motion.div
            variants={revealLeftVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 card-hover border border-primary/20 p-8"
            style={{ background: '#131313' }}
          >
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="flex items-center gap-4">
                <img src="/img/logoApuntesUDA.png" alt="Apuntes UDA" className="h-12 w-auto object-contain flex-shrink-0" style={{ maxWidth: 60 }} />
                <div>
                  <span className="font-label text-xs text-primary uppercase tracking-widest mb-1 block">{t.proj_own}</span>
                  <h3 className="font-headline text-2xl font-bold text-on-surface">Apuntes UDA</h3>
                </div>
              </div>
              <a href="https://www.apuntesuda.com/" target="_blank" rel="noreferrer" className="flex-shrink-0 font-label text-xs text-primary hover:text-tertiary transition-colors border border-primary/30 px-3 py-1.5">{t.proj_visit}</a>
            </div>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">{t.uda_desc}</p>
            <div className="flex flex-wrap gap-2">
              {[['react', 'c19cff', 'React'], ['nextdotjs', 'ffffff', 'Next.js'], ['typescript', 'ffffff', 'TypeScript'], ['vercel', 'ffffff', 'Vercel']].map(([icon, color, label]) => (
                <span key={label} className="tech-badge flex items-center gap-1.5">
                  <img src={`https://cdn.simpleicons.org/${icon}/${color}`} className="w-3.5 h-3.5" alt="" />
                  {label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Guía IT Mendoza */}
          <motion.div
            variants={revealRightVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.15 }}
            className="card-hover border border-tertiary/20 p-8"
            style={{ background: '#131313' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src="/img/logoGuiaITMendoza-LOGO.png" alt="Guía IT Mendoza" className="h-10 w-auto object-contain flex-shrink-0" style={{ maxWidth: 50 }} />
              <div>
                <span className="font-label text-xs text-tertiary uppercase tracking-widest block mb-0.5">{t.proj_own}</span>
                <h3 className="font-headline text-lg font-bold text-on-surface">Guía IT Mendoza</h3>
              </div>
            </div>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-5">{t.guia_desc}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {[['react', '9cff93', 'React'], ['vercel', 'ffffff', 'Vercel']].map(([icon, color, label]) => (
                <span key={label} className="tech-badge flex items-center gap-1.5">
                  <img src={`https://cdn.simpleicons.org/${icon}/${color}`} className="w-3.5 h-3.5" alt="" />
                  {label}
                </span>
              ))}
            </div>
            <a href="https://guia-it-mendoza.vercel.app/" target="_blank" rel="noreferrer" className="font-label text-xs text-tertiary hover:text-primary transition-colors">{t.proj_visit}</a>
          </motion.div>
        </div>

        {/* Secondary row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Manzano */}
          <motion.div
            variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.2 }}
            className="card-hover border border-outline-variant/10 p-6"
            style={{ background: '#131313' }}
          >
            <img src="https://manzanohistoricoexcursions.com/wp-content/uploads/2024/05/cropped-logo-1.png" alt="Manzano Histórico" className="h-10 w-auto object-contain mb-4" style={{ maxWidth: 130 }} />
            <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4">{t.manzano_desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="tech-badge flex items-center gap-1.5">
                <img src="https://cdn.simpleicons.org/wordpress/c19cff" className="w-3.5 h-3.5" alt="" />WordPress
              </span>
            </div>
            <a href="https://manzanohistoricoexcursions.com/" target="_blank" rel="noreferrer" className="font-label text-xs text-primary hover:text-tertiary transition-colors">{t.proj_visit}</a>
          </motion.div>

          {/* Empoderate */}
          <motion.div
            variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.25 }}
            className="card-hover border border-outline-variant/10 p-6"
            style={{ background: '#131313' }}
          >
            <div className="h-10 flex items-center mb-4">
              <img src="https://empoderate.com.ar/wp-content/uploads/2025/12/EmpoderateA3_20251220_180405_0000.png" alt="Empoderate" className="h-9 w-auto object-contain" style={{ maxWidth: 130 }} />
            </div>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4">{t.empo_desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="tech-badge flex items-center gap-1.5">
                <img src="https://cdn.simpleicons.org/wordpress/c19cff" className="w-3.5 h-3.5" alt="" />WordPress
              </span>
            </div>
            <a href="https://empoderate.com.ar/" target="_blank" rel="noreferrer" className="font-label text-xs text-primary hover:text-tertiary transition-colors">{t.proj_visit}</a>
          </motion.div>

          {/* Patitas */}
          <motion.div
            variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
            transition={{ delay: 0.3 }}
            className="card-hover border border-outline-variant/10 p-6"
            style={{ background: '#131313' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src="/img/logoPatitasAcasa.png" alt="Patitas a Casa" className="h-10 w-auto object-contain flex-shrink-0" style={{ maxWidth: 50 }} />
              <h3 className="font-headline text-lg font-bold text-on-surface">Patitas a Casa</h3>
            </div>
            <p className="font-body text-xs text-on-surface-variant leading-relaxed mb-4">{t.patitas_proj_desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[['react', '9cff93', 'React'], ['nodedotjs', '9cff93', 'Node.js'], ['postgresql', '9cff93', 'PostgreSQL']].map(([icon, color, label]) => (
                <span key={label} className="tech-badge flex items-center gap-1.5">
                  <img src={`https://cdn.simpleicons.org/${icon}/${color}`} className="w-3.5 h-3.5" alt="" />
                  {label}
                </span>
              ))}
            </div>
            <a href="https://patitas-a-casa-kappa.vercel.app/" target="_blank" rel="noreferrer" className="font-label text-xs text-tertiary hover:text-primary transition-colors">{t.proj_visit}</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
