import { useCallback } from 'react'

import { useTranslations } from 'next-intl'

import { Checkbox, DatePicker } from '@/UI/components/inputs'

import type { Problem, TimeRange } from '@/business/types'

type TimeOfDayProps = {
  onTimeChange: (value: React.SetStateAction<Problem>) => void
  problemData: Problem
}

const TimeOfDay = ({ onTimeChange, problemData }: TimeOfDayProps) => {
  const t = useTranslations()
  const tProblems = useTranslations('admin.forecast.form.problems')
  const isAllDay = problemData.timeOfDay === 'allDay'

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
      onTimeChange((prev) => ({
        ...prev,
        timeOfDay: {
          end: (prev.timeOfDay as TimeRange | null)?.end || null,
          start: time,
        },
      }))
    },
    [onTimeChange],
  )

  const handleEndTimeChange = useCallback(
    (time: Date | null) => {
      onTimeChange((prev) => ({
        ...prev,
        timeOfDay: {
          end: time,
          start: (prev.timeOfDay as TimeRange | null)?.start || null,
        },
      }))
    },
    [onTimeChange],
  )

  return (
    <div className="flex items-start gap-4">
      <h4 className="w-28 flex-none font-semibold">{tProblems('labels.timeOfDay')}</h4>
      <div className="flex flex-1 items-center justify-between gap-4">
        <Checkbox
          className="bg-black/5"
          isChecked={isAllDay}
          label={tProblems('labels.allDay')}
          onChange={handleCheckboxChange}
        />

        {!isAllDay && (
          <div className="flex items-center gap-1">
            <div>
              <DatePicker
                className="w-20 rounded bg-black/5 px-2"
                dateFormat="HH:mm"
                isClearable
                onChange={handleStartTimeChange}
                placeholderText={t('common.words.from')}
                selected={(problemData.timeOfDay as TimeRange | null)?.start}
                showTimeSelect
                showTimeSelectOnly
                timeFormat="HH:mm"
              />
            </div>
            —
            <div>
              <DatePicker
                className="w-20 rounded bg-black/5 px-2"
                dateFormat="HH:mm"
                isClearable
                onChange={handleEndTimeChange}
                placeholderText={t('common.words.to')}
                selected={(problemData.timeOfDay as TimeRange | null)?.end}
                showTimeSelect
                showTimeSelectOnly
                timeFormat="HH:mm"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TimeOfDay
