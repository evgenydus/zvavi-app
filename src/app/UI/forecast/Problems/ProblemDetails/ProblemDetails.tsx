import Aspects from './Aspects'
import AvalancheSize from './AvalancheSize'
import Distribution from './Distribution'
import Sensitivity from './Sensitivity'
import TimeOfDay from './TimeOfDay'
import Trend from './Trend'

import type { Problem } from '@/business/types'

const ProblemDetails = ({ problem }: { problem: Problem }) => {
  const {
    aspects,
    avalancheSize,
    description,
    distribution,
    isAllDay,
    sensitivity,
    timeOfDay,
    trend,
  } = problem

  return (
    <div>
      {description && <p className="mb-4 text-justify text-sm">{description}</p>}
      <div className="grid grid-cols-2 justify-items-center gap-2">
        <AvalancheSize avalancheSize={avalancheSize} />
        <Aspects aspects={aspects} />
        <Sensitivity sensitivity={sensitivity} />
        <Distribution distribution={distribution} />
        <Trend trend={trend} />
        <TimeOfDay isAllDay={isAllDay} timeOfDay={timeOfDay} />
      </div>
    </div>
  )
}

export default ProblemDetails
