import { useCallback } from 'react'

import { useForecastCreate, useForecastUpdate } from '@/data/hooks/forecasts'
import { useToast } from '@/UI/hooks'

import type { Avalanche, BaseFormData, ForecastFormData, Problem } from '@/business/types'

export type UseForecastFormSubmitArgs = {
  formData: BaseFormData
  initialForecastId: ForecastFormData['baseFormData']['id']
  onClose: VoidFunction
  avalancheProblems: Problem[]
  recentAvalanches: Avalanche[]
}

const useForecastFormSubmit = ({
  avalancheProblems,
  formData,
  initialForecastId,
  onClose,
  recentAvalanches,
}: UseForecastFormSubmitArgs) => {
  const { mutateAsync: createForecast } = useForecastCreate()
  const { mutateAsync: updateForecast } = useForecastUpdate()

  const { toastError } = useToast()

  const handleSubmit = useCallback(async () => {
    const { additionalHazards, forecaster, hazardLevels, snowpack, summary, validUntil, weather } =
      formData

    const payload = {
      avalancheProblems: avalancheProblems.map(({ createdAt, id, ...rest }) => rest), // eslint-disable-line @typescript-eslint/no-unused-vars
      forecast: {
        additionalHazards,
        forecaster,
        hazardLevels,
        id: initialForecastId,
        snowpack,
        summary,
        validUntil: validUntil?.toISOString() ?? null,
        weather,
      },
      recentAvalanches: recentAvalanches.map(({ createdAt, id, ...rest }) => rest), // eslint-disable-line @typescript-eslint/no-unused-vars
    }

    const isEditing = Boolean(initialForecastId)

    try {
      if (isEditing) {
        await updateForecast(payload)
      } else {
        await createForecast(payload)
      }

      onClose()
    } catch (error) {
      toastError('useForecastFormSubmit | handleSubmit', { error })
    }
  }, [
    formData,
    avalancheProblems,
    recentAvalanches,
    initialForecastId,
    createForecast,
    onClose,
    updateForecast,
  ])

  return { handleSubmit }
}

export default useForecastFormSubmit
