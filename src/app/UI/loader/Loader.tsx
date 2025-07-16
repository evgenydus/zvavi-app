import React from 'react'

export type LoaderProps = {
  size?: number
}

const Loader = ({ size = 100 }: LoaderProps) => {
  const circleRadius = size / 2.4
  const circleCenter = size / 2
  const strokedArcLength = 2 * Math.PI * circleRadius * 0.6
  const strokeWidth = (size - circleRadius * 2) / 2

  return (
    <div className="fixed left-0 top-0 z-10 size-full content-center bg-white/30 backdrop-blur-sm">
      <svg
        className="m-auto animate-spin text-primary"
        fill="none"
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>

        <circle
          cx={circleCenter}
          cy={circleCenter}
          r={circleRadius}
          stroke="url(#grad1)"
          strokeDasharray={strokedArcLength}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  )
}

export default Loader
