import { useCallback } from 'react'

import { useForecastCreate, useForecastUpdate } from '@/data/hooks/forecasts'
import type { ForecastCreateUpdatePayload } from '@/data/hooks/forecasts/types'

import type { Avalanche, ForecastFormData, FullForecast, Problem } from '@/business/types'

type ForecastFormProps = {
  avalancheProblems: Problem[]
  recentAvalanches: Avalanche[]
  formData: FullForecast | ForecastFormData
  initialProblems: Problem[]
  initialRecentAvalanches: Avalanche[]
  onClose: () => void
}

export const useForecastSubmit = ({
  avalancheProblems,
  formData,
  initialProblems,
  initialRecentAvalanches,
  onClose,
  recentAvalanches,
}: ForecastFormProps) => {
  const { mutate: createForecast } = useForecastCreate()
  const { mutate: updateForecast } = useForecastUpdate()

  const handleSubmit = useCallback(async () => {
    const payload: ForecastCreateUpdatePayload = {
      avalancheProblems,
      forecast: {
        ...formData,
        validUntil: formData.validUntil ? new Date(formData.validUntil).toISOString() : null,
      },
      recentAvalanches,
    }

    if (formData.id) {
      updateForecast({
        ...payload,
        initialProblems,
        initialRecentAvalanches,
      })
    } else {
      createForecast(payload)
    }

    onClose()
  }, [
    avalancheProblems,
    createForecast,
    formData,
    initialProblems,
    initialRecentAvalanches,
    onClose,
    recentAvalanches,
    updateForecast,
  ])

  return { handleSubmit }
}
