import { Briefcase01, Code02, Microphone01 } from '@untitledui/icons'
import { motion } from 'motion/react'
import { revealVariants, viewportOnce } from '../hooks/useScrollReveal'
import ExperienceLog from './ui/ExperienceLog'

const ENTRIES = [
  {
    id: 'punatech',
    dateKey: 'punatech_date',
    dateTime: '2026-05',
    accent: 'success',
    title: 'Puna Tech 2026',
    roleKey: 'punatech_role',
    icon: Microphone01,
    descKeys: ['punatech_desc'],
  },
  {
    id: 'freelance',
    dateKey: 'freelance_date',
    dateTime: '2025',
    accent: 'brand',
    titleKey: 'freelance_title',
    icon: Code02,
    descKeys: ['freelance_desc'],
  },
  {
    id: 'alq',
    dateKey: 'alq_date',
    dateTime: '2023/2024',
    accent: 'brand',
    title: 'ALQ Agency',
    roleKey: 'alq_role',
    icon: Briefcase01,
    descKeys: ['alq_desc'],
  },
  {
    id: 'patitas',
    dateKey: 'patitas_date',
    dateTime: '2020/2022',
    accent: 'success',
    title: 'Patitas a Casa',
    roleKey: 'patitas_role',
    logo: '/img/logoPatitasAcasa.webp',
    descKeys: ['patitas_desc'],
  },
]

export default function FullStackHistory() {
  return (
    <section id="fullstack" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#000' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex items-center gap-4 mb-16"
        >
          <h2 id="fullstack-log-title" className="sec-title">FULL_STACK_HISTORY</h2>
          <div className="divider" />
        </motion.div>

        <ExperienceLog entries={ENTRIES} labelledBy="fullstack-log-title" />
      </div>
    </section>
  )
}
