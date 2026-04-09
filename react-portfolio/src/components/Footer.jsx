export default function Footer() {
  return (
    <footer
      style={{ background: '#000', borderTop: '1px solid rgba(73,72,71,.2)' }}
      className="px-6 py-4 flex flex-col md:flex-row justify-between items-center font-label text-xs text-outline uppercase tracking-widest"
    >
      <div className="mb-2 md:mb-0">
        <span className="status-dot" />
        © 2025 SOVEREIGN_ARCHITECT | SYS_STATUS:{' '}
        <span className="text-tertiary" style={{ animation: 'blink 2s step-end infinite' }}>OPTIMIZED</span>
        {' '}| NETWORK: <span className="text-primary">MAINNET</span>
      </div>
      <div className="flex gap-6">
        <span className="hover:text-primary cursor-pointer transition-colors">Uptime: 99.9%</span>
        <span className="hover:text-primary cursor-pointer transition-colors">Latency: 24ms</span>
        <span className="text-tertiary">Nodes: Active</span>
      </div>
    </footer>
  )
}
