import { useTranslations } from 'next-intl'
import PropertyWrapper from './PropertyWrapper'
import type { TimeOfDay } from '@/business/types'

const TimeOfDay = ({ timeOfDay }: { timeOfDay: TimeOfDay }) => {
  const tProblems = useTranslations('admin.forecast.form.problems')
  const isAllDay = timeOfDay === 'allDay'

  return (
    <PropertyWrapper title={tProblems('labels.timeOfDay')}>
      <p>{isAllDay ? tProblems('labels.allDay') : `${timeOfDay?.start} — ${timeOfDay?.end}`}</p>
    </PropertyWrapper>
  )
}

export default TimeOfDay
