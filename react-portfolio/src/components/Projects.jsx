import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, staggerContainer, staggerItem, viewportOnce } from '../hooks/useScrollReveal'

export default function Projects() {
  const { t } = useLang()

  const projects = [
    {
      name: 'Apuntes UDA',
      logo: '/img/logoApuntesUDA.webp',
      labelKey: 'proj_own',
      descKey: 'uda_desc',
      url: 'https://www.apuntesuda.com/',
      accent: '#c19cff',
    },
    {
      name: 'Guía IT Mendoza',
      logo: '/img/logoGuiaITMendoza-LOGO.webp',
      labelKey: 'proj_own',
      descKey: 'guia_desc',
      url: 'https://guia-it-mendoza.vercel.app/',
      accent: '#d8b4fe',
    },
    {
      name: 'Patitas a Casa',
      logo: '/img/logoPatitasAcasa.webp',
      labelKey: 'proj_own',
      descKey: 'patitas_proj_desc',
      url: 'https://patitas-a-casa-kappa.vercel.app/',
      accent: '#9146ff',
    },
    {
      name: 'Manzano Histórico',
      logo: 'https://manzanohistoricoexcursions.com/wp-content/uploads/2024/05/cropped-logo-1.webp',
      labelKey: 'proj_client',
      descKey: 'manzano_desc',
      url: 'https://manzanohistoricoexcursions.com/',
      accent: '#c19cff',
    },
    {
      name: 'Empoderate',
      logo: 'https://empoderate.com.ar/wp-content/uploads/2025/12/EmpoderateA3_20251220_180405_0000.webp',
      labelKey: 'proj_client',
      descKey: 'empo_desc',
      url: 'https://empoderate.com.ar/',
      accent: '#c19cff',
    },
  ]

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

        <motion.div
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.a
              key={p.name}
              variants={staggerItem}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              className="card-hover p-6 border-l-2 flex flex-col group"
              style={{ background: '#131313', borderLeftColor: p.accent, textDecoration: 'none' }}
            >
              {/* Logo */}
              <div className="h-14 flex items-center mb-5">
                <img
                  src={p.logo}
                  alt={p.name}
                  className="h-full w-auto object-contain"
                  style={{ maxWidth: 140 }}
                />
              </div>

              {/* Meta */}
              <p className="font-label text-xs uppercase tracking-widest mb-1" style={{ color: p.accent }}>
                {t[p.labelKey]}
              </p>
              <h3 className="font-headline text-lg font-bold text-on-surface mb-3">{p.name}</h3>

              {/* Description */}
              <p className="font-body text-xs text-on-surface-variant leading-relaxed flex-1">
                {t[p.descKey]}
              </p>

              {/* Link */}
              <p
                className="font-label text-xs mt-5 transition-opacity"
                style={{ color: p.accent, opacity: 0.6 }}
              >
                {t.proj_visit}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
