import { convertCamelToSnake } from '../../helpers'
import { forecastsKeys } from '../../query-keys'
import { supabase } from '@/data'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { ForecastCreatePayload } from './types'

const createForecast = async ({ forecast, problems }: ForecastCreatePayload): Promise<void> => {
  const { data: forecastData, error: forecastError } = await supabase
    .from('forecasts')
    .insert(convertCamelToSnake(forecast))
    .select('id')

  if (forecastError) {
    throw new Error(forecastError.message)
  }

  if (!problems.length) return

  const forecastId = forecastData?.[0]?.id

  if (!forecastId) {
    throw new Error('Failed to create forecast')
  }

  const formattedProblems = problems.map((problem) => ({
    ...convertCamelToSnake(problem),
    forecast_id: forecastId,
  }))

  const { error: problemsError } = await supabase
    .from('avalanche_problems')
    .insert(formattedProblems)

  if (problemsError) {
    throw new Error(problemsError.message)
  }
}

const useForecastCreate = () => {
  const queryClient = useQueryClient()

  return useMutation<void, Error, ForecastCreatePayload>({
    mutationFn: createForecast,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: forecastsKeys.list() })
    },
  })
}

export default useForecastCreate
