import type { TimeRange } from '@/business/types'
import { format } from 'date-fns'
import { timeFormat } from '@/business/constants'
import { useTranslations } from 'next-intl'
import { TimeOfDay as TimeOfDayIcon } from './Icons'

export interface TimeOfDayProps {
  timeOfDay: TimeRange
  isAllDay: boolean
}

const TimeOfDay = ({ isAllDay, timeOfDay }: TimeOfDayProps) => {
  const t = useTranslations()
  const { end, start } = timeOfDay
  const formattedStartTime = start ? format(start, timeFormat) : ''
  const formattedEndTime = end ? format(end, timeFormat) : ''

  return (
    <div className="flex items-start gap-2">
      <p className="font-semibold ">
        {isAllDay
          ? t('admin.forecast.form.problems.labels.allDay')
          : `${formattedStartTime} - ${formattedEndTime}`}
      </p>

      <div className="w-20 flex-1">
        <TimeOfDayIcon
          isAllDay={isAllDay}
          timeOfDay={{ end: formattedEndTime, start: formattedStartTime }}
        />
      </div>
    </div>
  )
}

export default TimeOfDay
