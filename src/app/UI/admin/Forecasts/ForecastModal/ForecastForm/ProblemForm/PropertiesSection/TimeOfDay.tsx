import { useCallback, useState } from 'react'

import { format } from 'date-fns'
import { useTranslations } from 'next-intl'

import { Checkbox, DatePicker } from '@/UI/components/inputs'
import { Field } from '@headlessui/react'

import type { Problem, TimeRange } from '@/business/types'

type TimeOfDayProps = {
  onTimeChange: (value: React.SetStateAction<Problem>) => void
  problemData: Problem
}

// TODO: Fix onChage logic
const TimeOfDay = ({ onTimeChange, problemData }: TimeOfDayProps) => {
  const tProblems = useTranslations('admin.forecast.form.problems')
  const isAllDay = problemData.timeOfDay === 'allDay'
  const [startTime, setStartTime] = useState<Date | null>(null)
  const [endTime, setEndTime] = useState<Date | null>(null)

  const handleCheckboxChange = useCallback(
    (value: boolean) => {
      onTimeChange((prev) => ({
        ...prev,
        timeOfDay: value ? 'allDay' : null, // TODO: Don't reset selected time
      }))
    },
    [onTimeChange],
  )

  const handleStartTimeChange = useCallback(
    (time: Date | null) => {
      setStartTime(time)

      if (time && endTime) {
        onTimeChange((prev) => ({
          ...prev,
          timeOfDay: {
            end: format(endTime, 'HH:mm'),
            start: format(time, 'HH:mm'),
          },
        }))
      }
    },
    [endTime, onTimeChange],
  )

  const handleEndTimeChange = useCallback(
    (time: Date | null) => {
      setEndTime(time)

      if (startTime && time) {
        onTimeChange((prev) => ({
          ...prev,
          timeOfDay: {
            end: format(time, 'HH:mm'),
            start: format(startTime, 'HH:mm'),
          },
        }))
      }
    },
    [startTime, onTimeChange],
  )

  return (
    <div className="flex items-start gap-4">
      <h4 className="w-28 font-semibold">{tProblems('labels.timeOfDay')}</h4>
      <div>
        <Field>
          <Checkbox
            className="bg-black/5"
            isChecked={isAllDay}
            label={tProblems('labels.allDay')}
            onChange={handleCheckboxChange}
          />
        </Field>

        {!isAllDay && (
          <div className="flex items-center gap-4 mt-4">
            <DatePicker
              className="bg-black/5"
              onChange={handleStartTimeChange}
              showTimeSelect
              showTimeSelectOnly
              value={(problemData.timeOfDay as TimeRange | null)?.start}
            />
            <DatePicker
              className="bg-black/5"
              onChange={handleEndTimeChange}
              showTimeSelect
              showTimeSelectOnly
              value={(problemData.timeOfDay as TimeRange | null)?.end}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default TimeOfDay
