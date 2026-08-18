import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { revealVariants, viewportOnce } from '../hooks/useScrollReveal'
import ExperienceLog from './ui/ExperienceLog'

const ENTRIES = [
  {
    id: 'lotty',
    dateKey: 'lotty_date',
    dateTime: '2025',
    accent: 'brand',
    title: 'Lotty',
    roleKey: 'lotty_role',
    logo: '/img/LottyLogoDashboard.webp',
    bulletKeys: ['lotty_1', 'lotty_2', 'lotty_3'],
  },
  {
    id: 'starmaker',
    dateKey: 'starmaker_date',
    dateTime: '2024',
    accent: 'brand',
    titleKey: 'starmaker_title',
    roleKey: 'starmaker_role',
    logo: 'https://cdn.simpleicons.org/stellar/c19cff',
    descKeys: ['starmaker_desc1', 'starmaker_desc2'],
  },
  {
    id: 'stellar-rust',
    dateKey: 'stellar_date',
    dateTime: '2025',
    accent: 'success',
    title: 'Stellar Rust',
    roleKey: 'stellar_role',
    logo: 'https://cdn.simpleicons.org/rust/9cff93',
    descKeys: ['stellar_desc1'],
  },
]

export default function BlockchainLog() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24" style={{ background: '#0e0e0e' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={revealVariants} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="flex items-center gap-4 mb-16"
        >
          <h2 id="blockchain-log-title" className="sec-title">BLOCKCHAIN_EXPERIENCE</h2>
          <div className="divider" />
        </motion.div>

        <ExperienceLog entries={ENTRIES} labelledBy="blockchain-log-title" />
      </div>
    </section>
  )
}
