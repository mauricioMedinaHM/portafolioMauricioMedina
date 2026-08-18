const sizes = {
  sm: { wh: 8, c: 4, r: 2.5 },
  md: { wh: 10, c: 5, r: 4 },
}

export function Dot({ size = 'md', className, ...props }) {
  const s = sizes[size]
  return (
    <svg
      width={s.wh}
      height={s.wh}
      viewBox={`0 0 ${s.wh} ${s.wh}`}
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <circle cx={s.c} cy={s.c} r={s.r} fill="currentColor" />
    </svg>
  )
}
