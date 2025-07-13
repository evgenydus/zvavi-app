import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteId, deleteMissingItems, upsertItems } from './helpers'

import type { ForecastCreateUpdatePayload } from './types'
import { convertCamelToSnake, handleSupabaseError } from '../../helpers'
import { forecastsKeys } from '../../query-keys'

import { supabase } from '@/data'

const updateForecast = async ({
  avalancheProblems,
  forecast,
  initialProblems,
  initialRecentAvalanches,
  recentAvalanches,
}: ForecastCreateUpdatePayload): Promise<void> => {
  const { error: forecastError } = await supabase
    .from('forecasts')
    .upsert(convertCamelToSnake(forecast))

  handleSupabaseError(forecastError)

  if (!forecast.id) throw new Error('Failed to update forecast')

  const formattedAvalancheProblems = deleteId(avalancheProblems, 'problem-')
  const formattedRecentAvalanches = deleteId(recentAvalanches, 'avalanche-')

  // TODO: Check if this is correct
  await deleteMissingItems('avalanche_problems', initialProblems ?? [], formattedAvalancheProblems)
  await deleteMissingItems(
    'recent_avalanches',
    initialRecentAvalanches ?? [],
    formattedRecentAvalanches,
  )

  if (formattedAvalancheProblems.length) {
    await upsertItems('avalanche_problems', forecast.id, formattedAvalancheProblems, {
      defaultToNull: false,
      onConflict: 'id',
    })
  }

  if (formattedRecentAvalanches.length) {
    await upsertItems('recent_avalanches', forecast.id, formattedRecentAvalanches, {
      defaultToNull: false,
      onConflict: 'id',
    })
  }
}

const useForecastUpdate = () => {
  const queryClient = useQueryClient()

  return useMutation<void, Error, ForecastCreateUpdatePayload>({
    mutationFn: updateForecast,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: forecastsKeys.list() })
    },
  })
}

export default useForecastUpdate
