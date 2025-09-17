import { columns, dotSize, getDotProps, getFilledDots, height, rows, width } from './utils'

import type { Distribution } from '@/business/types'

interface DistributionIconProps {
  distribution: Distribution
  className?: string
}

const DistributionIcon = ({ className, distribution }: DistributionIconProps) => {
  const filledDots = getFilledDots(distribution)
  const dots = Array.from({ length: rows * columns }, (_, index) => getDotProps(index, filledDots))

  return (
    <svg className={className} height={height} viewBox={`0 0 ${width} ${height}`} width={width}>
      {dots.map(({ cx, cy, index, isFilled }) => (
        <circle
          key={index}
          className={`fill-${isFilled ? 'violet-600' : 'violet-300/30'}`}
          cx={cx}
          cy={cy}
          r={dotSize}
        />
      ))}
    </svg>
  )
}

export default DistributionIcon
