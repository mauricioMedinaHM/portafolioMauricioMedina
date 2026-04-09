import { useEffect, useRef } from 'react'

export default function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const chars = 'RUSTSTELLARSOROBANWEB3BLOCKCHAINCRYPTODEFI01XCMWASMPOLKADOT'.split('')
    const fs = 12
    let drops = []

    function resize() {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      drops = Array(Math.floor(canvas.width / fs)).fill(1)
    }
    resize()

    const handleResize = () => resize()
    window.addEventListener('resize', handleResize)

    const cols = ['#9146ff', '#c19cff', '#4B0082', '#300069']
    const interval = setInterval(() => {
      ctx.fillStyle = 'rgba(0,0,0,0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = fs + 'px Fira Code,monospace'
      for (let i = 0; i < drops.length; i++) {
        ctx.fillStyle = cols[i % cols.length]
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, drops[i] * fs)
        if (drops[i] * fs > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
    }, 60)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} id="matrix-canvas" />
}
