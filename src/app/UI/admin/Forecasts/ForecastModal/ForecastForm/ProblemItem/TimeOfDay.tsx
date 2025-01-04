import { format } from 'date-fns'
import { timeFormat } from '@/business/constants'
import { useTranslations } from 'next-intl'

import PropertyWrapper from './PropertyWrapper'

import type { TimeOfDay } from '@/business/types'

const TimeOfDay = ({ timeOfDay }: { timeOfDay: TimeOfDay }) => {
  const tProblems = useTranslations('admin.forecast.form.problems')
  const isAllDay = timeOfDay === 'allDay'

  return (
    <PropertyWrapper title={tProblems('labels.timeOfDay')}>
      <p>
        {isAllDay
          ? tProblems('labels.allDay')
          : `${format(timeOfDay?.start as Date, timeFormat)} — ${format(timeOfDay?.end as Date, timeFormat)}`}
      </p>
    </PropertyWrapper>
  )
}

export default TimeOfDay
