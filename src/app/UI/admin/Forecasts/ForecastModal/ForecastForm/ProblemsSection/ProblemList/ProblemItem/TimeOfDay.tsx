import { format } from 'date-fns'
import { useTranslations } from 'next-intl'

import { timeFormat } from '@/business/constants'

import { PropertyWrapper } from '../../../common/listItem'

import type { TimeRange } from '@/business/types'

type TimeOfDayProps = {
  timeOfDay: TimeRange
  isAllDay: boolean
}

const TimeOfDay = ({ isAllDay, timeOfDay }: TimeOfDayProps) => {
  const tProblems = useTranslations('admin.forecast.form.problems')

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
