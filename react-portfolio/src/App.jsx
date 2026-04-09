import { useState, useCallback } from 'react'
import { LanguageProvider } from './context/LanguageContext'
import BootScreen from './components/BootScreen'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import BlockchainLog from './components/BlockchainLog'
import FullStackHistory from './components/FullStackHistory'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import CuyoConnect from './components/CuyoConnect'
import Community from './components/Community'
import Academic from './components/Academic'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileBottomNav from './components/MobileBottomNav'
import ArchiveModal from './components/modals/ArchiveModal'
import NpmModal from './components/modals/NpmModal'

export default function App() {
  const [booted, setBooted] = useState(false)
  const [archiveOpen, setArchiveOpen] = useState(false)
  const [npmOpen, setNpmOpen] = useState(false)

  const handleBoot = useCallback(() => setBooted(true), [])
  const openArchive = useCallback(() => setArchiveOpen(true), [])
  const openCv = useCallback(() => setNpmOpen(true), [])

  return (
    <LanguageProvider>
      {!booted && <BootScreen onDone={handleBoot} />}

      {booted && (
        <>
          <Navigation onOpenCv={openCv} />

          <main>
            <Hero onOpenArchive={openArchive} onOpenCv={openCv} />
            <BlockchainLog />
            <FullStackHistory />
            <Projects />
            <TechStack />
            <CuyoConnect />
            <Community />
            <Academic />
            <Contact />
          </main>

          <Footer />
          <MobileBottomNav onOpenCv={openCv} />

          <ArchiveModal open={archiveOpen} onClose={() => setArchiveOpen(false)} />
          <NpmModal open={npmOpen} onClose={() => setNpmOpen(false)} />
        </>
      )}
    </LanguageProvider>
  )
}
