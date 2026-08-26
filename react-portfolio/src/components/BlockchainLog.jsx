import { Briefcase01, Code02, Fingerprint01 } from '@untitledui/icons'
import ExperienceLog from './ui/ExperienceLog'
import { useLang } from '../context/LanguageContext'

const ENTRIES = [
  {
    id: 'freelance',
    dateKey: 'freelance_date',
    dateTime: '2023',
    accent: 'brand',
    titleKey: 'freelance_title',
    roleKey: 'freelance_role',
    placeKey: 'freelance_place',
    icon: Code02,
    bulletKeys: ['freelance_1', 'freelance_2', 'freelance_3'],
  },
  {
    id: 'human',
    dateKey: 'human_date',
    dateTime: '2026',
    accent: 'brand',
    title: 'human',
    roleKey: 'human_role',
    placeKey: 'human_place',
    icon: Fingerprint01,
    bulletKeys: ['human_1', 'human_2', 'human_3'],
  },
  {
    id: 'alq',
    dateKey: 'alq_date',
    dateTime: '2023/2024',
    accent: 'brand',
    title: 'ALQ Agency',
    roleKey: 'alq_role',
    placeKey: 'alq_place',
    icon: Briefcase01,
    bulletKeys: ['alq_1', 'alq_2', 'alq_3'],
  },
  {
    id: 'patitas',
    dateKey: 'patitas_date',
    dateTime: '2020/2022',
    accent: 'success',
    title: 'Patitas a Casa',
    roleKey: 'patitas_role',
    placeKey: 'patitas_place',
    logo: '/img/logoPatitasAcasa.webp',
    href: 'https://patitas-a-casa-kappa.vercel.app/',
    bulletKeys: ['patitas_1', 'patitas_2', 'patitas_3'],
  },
]

export default function BlockchainLog() {
  const { t } = useLang()

  return (
    <section id="experience" className="scope-section">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 id="blockchain-log-title" className="sec-title">{t.experience_title}</h2>
          <div className="divider" />
        </div>
        <ExperienceLog entries={ENTRIES} labelledBy="blockchain-log-title" variant="cv" />
      </div>
    </section>
  )
}
