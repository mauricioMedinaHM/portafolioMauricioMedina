export default function Footer() {
  return (
    <footer
      style={{ background: '#000', borderTop: '1px solid rgba(73,72,71,.15)' }}
      className="px-6 md:px-12 lg:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-3"
    >
      <p className="font-label text-xs text-outline tracking-widest">
        <span className="status-dot" />
        © 2025 Mauricio Medina
      </p>
      <p className="font-label text-xs text-outline tracking-widest">
        Mendoza, Argentina
      </p>
    </footer>
  )
}
