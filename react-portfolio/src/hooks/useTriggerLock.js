import { useEffect, useRef, useState } from 'react'

export function useTriggerLock(amount = 0.35) {
  const ref = useRef(null)
  const [locked, setLocked] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setLocked(true)
      },
      { threshold: amount, rootMargin: '0px 0px -12% 0px' },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [amount])

  return { ref, locked }
}

export function useArmLog() {
  const ref = useRef(null)
  const [armed, setArmed] = useState(false)

  useEffect(() => {
    setArmed(true)
  }, [])

  return { ref, armed }
}
