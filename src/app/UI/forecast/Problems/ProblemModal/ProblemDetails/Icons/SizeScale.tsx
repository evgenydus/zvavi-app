import classnames from 'classnames'

import type { AvalancheSize } from '@/business/types'

const SizeScale = ({ size }: { size: AvalancheSize }) => {
  const barHeights = [24, 36, 48, 60, 72]

  return (
    <div className="flex items-end gap-1">
      {barHeights.map((height, i) => {
        const isActive = i < size

        return (
          <div
            key={height}
            className={classnames(
              'w-4 rounded-sm',
              isActive ? 'bg-violet-600' : 'bg-violet-300 opacity-30',
            )}
            style={{ height }}
          />
        )
      })}
    </div>
  )
}

export default SizeScale
