export function cx(...args) {
  return args
    .flatMap((arg) => {
      if (!arg) return []
      if (typeof arg === 'string') return [arg]
      if (Array.isArray(arg)) return arg
      return Object.keys(arg).filter((key) => arg[key])
    })
    .filter(Boolean)
    .join(' ')
}
