import React from 'react'

export type LoaderProps = {
  size?: number
}

const Loader = ({ size = 100 }: LoaderProps) => {
  const circleRadius = size / 2.4
  const circleLength = 2 * Math.PI * circleRadius
  const circleCenter = size / 2
  const strokedArcLength = circleLength * 0.5
  const strokeWidth = (size - circleRadius * 2) / 2

  return (
    <div className="fixed left-0 top-0 size-full content-center bg-black/30 backdrop-blur-sm">
      <svg
        className="m-auto animate-spin"
        fill="none"
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="stroke-primary"
          cx={circleCenter}
          cy={circleCenter}
          r={circleRadius}
          strokeDasharray={strokedArcLength}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <circle
          className="stroke-primary opacity-60"
          cx={circleCenter}
          cy={circleCenter}
          r={circleRadius}
          strokeDasharray={strokedArcLength}
          strokeDashoffset={circleLength * 0.1}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <circle
          className="stroke-primary opacity-50"
          cx={circleCenter}
          cy={circleCenter}
          r={circleRadius}
          strokeDasharray={strokedArcLength}
          strokeDashoffset={circleLength * 0.15}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <circle
          className="stroke-primary opacity-40"
          cx={circleCenter}
          cy={circleCenter}
          r={circleRadius}
          strokeDasharray={strokedArcLength}
          strokeDashoffset={circleLength * 0.2}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <circle
          className="stroke-primary opacity-30"
          cx={circleCenter}
          cy={circleCenter}
          r={circleRadius}
          strokeDasharray={strokedArcLength}
          strokeDashoffset={circleLength * 0.25}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <circle
          className="stroke-primary opacity-20"
          cx={circleCenter}
          cy={circleCenter}
          r={circleRadius}
          strokeDasharray={strokedArcLength}
          strokeDashoffset={circleLength * 0.3}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
        <circle
          className="stroke-primary opacity-10"
          cx={circleCenter}
          cy={circleCenter}
          r={circleRadius}
          strokeDasharray={strokedArcLength}
          strokeDashoffset={circleLength * 0.35}
          strokeLinecap="round"
          strokeWidth={strokeWidth}
        />
      </svg>
    </div>
  )
}

export default Loader
