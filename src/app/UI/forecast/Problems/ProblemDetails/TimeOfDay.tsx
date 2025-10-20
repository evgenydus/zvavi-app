import { format } from 'date-fns'
import { useTranslations } from 'next-intl'

import { timeFormat } from '@/business/constants'

import { TimeOfDayIcon } from './icons'
import PropertyTile from './PropertyTile'

import type { TimeRange } from '@/business/types'

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
    <PropertyTile property={{ name: 'timeOfDay' }}>
      <div className="flex flex-col gap-1">
        <p className="font-semibold leading-none">
          {isAllDay
            ? t('admin.forecast.form.problems.labels.allDay')
            : `${formattedStartTime}-${formattedEndTime}`}
        </p>

        <div className="ml-auto w-16 flex-1">
          <TimeOfDayIcon
            isAllDay={isAllDay}
            timeOfDay={{ end: formattedEndTime, start: formattedStartTime }}
          />
        </div>
      </div>
    </PropertyTile>
  )
}

export default TimeOfDay
