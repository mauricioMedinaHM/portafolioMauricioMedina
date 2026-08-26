import { EASE_OUT } from '../lib/motion'

export const revealVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: EASE_OUT } },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.04 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.34, ease: EASE_OUT } },
}

export const viewportOnce = { once: true, amount: 0.12 }
