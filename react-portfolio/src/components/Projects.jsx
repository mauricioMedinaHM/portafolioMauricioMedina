import { Folder } from '@untitledui/icons'
import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, viewportOnce } from '../hooks/useScrollReveal'
import ExperienceLog from './ui/ExperienceLog'

const ENTRIES = [
  {
    id: 'apuntes',
    railKey: 'proj_rail_own',
    accent: 'brand',
    title: 'Apuntes UDA',
    logo: '/img/logoApuntesUDA.webp',
    descKeys: ['uda_desc'],
    href: 'https://www.apuntesuda.com/',
    ctaKey: 'proj_visit',
  },
  {
    id: 'guia',
    railKey: 'proj_rail_own',
    accent: 'brand',
    title: 'Guía IT Mendoza',
    logo: '/img/logoGuiaITMendoza-LOGO.webp',
    descKeys: ['guia_desc'],
    href: 'https://guia-it-mendoza.vercel.app/',
    ctaKey: 'proj_visit',
  },
  {
    id: 'patitas',
    railKey: 'proj_rail_own',
    accent: 'brand',
    title: 'Patitas a Casa',
    logo: '/img/logoPatitasAcasa.webp',
    descKeys: ['patitas_proj_desc'],
    href: 'https://patitas-a-casa-kappa.vercel.app/',
    ctaKey: 'proj_visit',
  },
  {
    id: 'manzano',
    railKey: 'proj_rail_client',
    accent: 'success',
    title: 'Manzano Histórico',
    logo: '/img/logoManzanoHistorico.png',
    descKeys: ['manzano_desc'],
    href: 'https://manzanohistoricoexcursions.com/',
    ctaKey: 'proj_visit',
  },
  {
    id: 'empoderate',
    railKey: 'proj_rail_client',
    accent: 'success',
    title: 'Empoderate',
    logo: '/img/logoEmpoderate.png',
    descKeys: ['empo_desc'],
    href: 'https://empoderate.com.ar/',
    ctaKey: 'proj_visit',
  },
]

export default function Projects({ onOpenArchive }) {
  const { t } = useLang()

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#000' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex items-center gap-4 mb-16"
        >
          <h2 id="projects-log-title" className="sec-title">{t.projects_title}</h2>
          <div className="divider" />
        </motion.div>

        <ExperienceLog entries={ENTRIES} labelledBy="projects-log-title" />

        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="mt-12 flex justify-start"
        >
          <button type="button" className="btn-ghost inline-flex items-center gap-2" onClick={onOpenArchive}>
            <Folder className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            {t.hero_btn_archive}
          </button>
        </motion.div>
      </div>
    </section>
  )
}
