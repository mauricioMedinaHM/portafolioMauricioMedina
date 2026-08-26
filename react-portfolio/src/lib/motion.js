/** Emil Kowalski / animations.dev — strong custom curves, not CSS defaults. */
export const EASE_OUT = [0.23, 1, 0.32, 1]
export const EASE_IN_OUT = [0.77, 0, 0.175, 1]
export const EASE_DRAWER = [0.32, 0.72, 0, 1]

export const overlayTransition = {
  duration: 0.2,
  ease: EASE_OUT,
}

export const overlayExit = {
  duration: 0.16,
  ease: EASE_IN_OUT,
}

export const modalEnter = {
  duration: 0.28,
  ease: EASE_OUT,
}

export const modalExit = {
  duration: 0.18,
  ease: EASE_IN_OUT,
}

/** Hardware-accelerated panel: opacity + transform string, never scale(0). */
export const modalPanel = {
  initial: { opacity: 0, transform: 'translateY(8px) scale(0.97)' },
  animate: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
    transition: modalEnter,
  },
  exit: {
    opacity: 0,
    transform: 'translateY(4px) scale(0.98)',
    transition: modalExit,
  },
}
