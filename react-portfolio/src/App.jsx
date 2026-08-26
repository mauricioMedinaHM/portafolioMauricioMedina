import { useState, useCallback } from 'react'
import { MotionConfig } from 'motion/react'
import { LanguageProvider, useLang } from './context/LanguageContext'
import Navigation from './components/Navigation'
import MobileBottomNav from './components/MobileBottomNav'
import Hero from './components/Hero'
import BlockchainLog from './components/BlockchainLog'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import CuyoConnect from './components/CuyoConnect'
import Community from './components/Community'
import Academic from './components/Academic'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ArchiveModal from './components/modals/ArchiveModal'
import NpmModal from './components/modals/NpmModal'

function Portfolio() {
  const { t } = useLang()
  const [archiveOpen, setArchiveOpen] = useState(false)
  const [npmOpen, setNpmOpen] = useState(false)

  const openArchive = useCallback(() => setArchiveOpen(true), [])
  const openCv = useCallback(() => setNpmOpen(true), [])
  const closeArchive = useCallback(() => setArchiveOpen(false), [])
  const closeCv = useCallback(() => setNpmOpen(false), [])

  return (
    <>
      <a href="#main-content" className="skip-link">{t.a11y_skip_content}</a>
      <Navigation onOpenCv={openCv} />
      <MobileBottomNav />

      <main id="main-content">
        <Hero onOpenCv={openCv} />
        <TechStack />
        <BlockchainLog />
        <Projects onOpenArchive={openArchive} />
        <CuyoConnect />
        <Community />
        <Academic />
        <Contact />
      </main>

      <Footer />

      <ArchiveModal open={archiveOpen} onClose={closeArchive} />
      <NpmModal open={npmOpen} onClose={closeCv} />
    </>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LanguageProvider>
        <Portfolio />
      </LanguageProvider>
    </MotionConfig>
  )
}
