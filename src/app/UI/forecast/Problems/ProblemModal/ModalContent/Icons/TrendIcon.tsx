import classnames from 'classnames'
import type { Trend } from '@/business/types'

const TrendIcon = ({ value }: { value: Trend }) => {
  if (value === 'noChange') {
    return (
      <svg
        className="fill-violet-600"
        height="52"
        viewBox="0 0 52 52"
        width="52"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect height="9" width="52" x="0" y="14" />
        <rect height="9" width="52" x="0" y="32" />
      </svg>
    )
  }

  const rotationClass = value === 'deteriorating' ? 'rotate-180' : ''

  return (
    <svg
      className={classnames('fill-violet-600', rotationClass)}
      height="52"
      viewBox="0 0 60 60"
      width="52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M32 8 L52 8 L52 29 H60 V0 H31 V8 Z" />
      <path d="M16 24 L36 24 L36 44 H44 V16 H16 V22 Z" />
      <path d="M22 40 L1 40 V31 H29 V59 H20 L20 38 Z" />
    </svg>
  )
}

export default TrendIcon
