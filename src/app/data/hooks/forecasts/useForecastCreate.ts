import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { ForecastCreatePayload } from './types'
import { convertCamelToSnake, handleSupabaseError } from '../../helpers'
import { forecastsKeys } from '../../query-keys'

import { supabase } from '@/data'

const attachItemsToForecast = async <T>(
  tableName: string,
  forecastId: number,
  items: T[],
): Promise<void> => {
  const formattedItems = items.map((item) => ({
    ...convertCamelToSnake(item),
    forecast_id: forecastId,
  }))

  const { error } = await supabase.from(tableName).insert(formattedItems)

  handleSupabaseError(error)
}

const createForecast = async ({
  forecast,
  problems,
  recentAvalanches,
}: ForecastCreatePayload): Promise<void> => {
  const { data: forecastData, error: forecastError } = await supabase
    .from('forecasts')
    .insert(convertCamelToSnake(forecast))
    .select('id')

  handleSupabaseError(forecastError)

  const forecastId = forecastData?.[0]?.id

  if (!forecastId) throw new Error('Failed to create forecast')

  if (problems.length) {
    await attachItemsToForecast('avalanche_problems', forecastId, problems)
  }

  if (recentAvalanches.length) {
    await attachItemsToForecast('recent_avalanches', forecastId, recentAvalanches)
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
