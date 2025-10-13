import { useMutation, useQueryClient } from '@tanstack/react-query'

import { attachItemsToForecast } from '@/data/hooks/forecasts/helpers'

import type { ForecastFormPayload } from './types'
import { convertCamelToSnake, handleSupabaseError } from '../../helpers'
import { forecastsKeys } from '../../query-keys'

import { supabase } from '@/data'

const createForecast = async ({
  avalancheProblems,
  forecast,
  recentAvalanches,
}: ForecastFormPayload): Promise<void> => {
  const { data: forecastData, error: forecastError } = await supabase
    .from('forecasts')
    .insert(convertCamelToSnake(forecast))
    .select('id')

  handleSupabaseError(forecastError)

  const forecastId = forecastData?.[0]?.id

  if (!forecastId) throw new Error('Failed to create forecast')

  if (avalancheProblems.length) {
    await attachItemsToForecast('avalanche_problems', forecastId, avalancheProblems)
  }

  if (recentAvalanches.length) {
    await attachItemsToForecast('recent_avalanches', forecastId, recentAvalanches)
  }
}

const useForecastCreate = () => {
  const queryClient = useQueryClient()

  return useMutation<void, Error, ForecastFormPayload>({
    mutationFn: createForecast,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: forecastsKeys.list() })
    },
  })
}

export default useForecastCreate
