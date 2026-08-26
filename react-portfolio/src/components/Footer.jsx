export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 flex flex-col md:flex-row justify-between items-center gap-3" style={{ borderTop: '1px solid rgb(15 15 15 / 0.12)', background: '#fff' }}>
      <p className="font-label text-sm text-outline">
        <span className="status-dot" />
        © 2026 Mauricio Medina
      </p>
      <p className="font-label text-sm text-outline">
        Mendoza, Argentina
      </p>
    </footer>
  )
}
