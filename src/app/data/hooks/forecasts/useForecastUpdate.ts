import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { ForecastFormPayload } from './types'
import { convertCamelToSnake, handleSupabaseError } from '../../helpers'
import { forecastsKeys } from '../../query-keys'

import { supabase } from '@/data'

const updateForecast = async ({
  avalancheProblems,
  forecast,
  recentAvalanches,
}: ForecastFormPayload): Promise<void> => {
  const { error: forecastError } = await supabase
    .from('forecasts')
    .upsert(convertCamelToSnake(forecast))

  handleSupabaseError(forecastError)

  if (!forecast.id) throw new Error('Failed to update forecast')

  // On this stage (MVP) we re-create all problems and avalanches intentionally
  // Delete old avalanche problems and recent avalanches.
  const { error: problemsDeleteError } = await supabase
    .from('avalanche_problems')
    .delete()
    .eq('forecast_id', forecast.id)

  handleSupabaseError(problemsDeleteError)

  const { error: avalanchesDeleteError } = await supabase
    .from('recent_avalanches')
    .delete()
    .eq('forecast_id', forecast.id)

  handleSupabaseError(avalanchesDeleteError)

  // Insert new avalanche problems and recent avalanches
  if (avalancheProblems.length) {
    const formattedProblems = avalancheProblems.map((item) => ({
      ...convertCamelToSnake(item),
      forecast_id: forecast.id,
    }))

    const { error: problemsInsertError } = await supabase
      .from('avalanche_problems')
      .insert(formattedProblems)

    handleSupabaseError(problemsInsertError)
  }

  if (recentAvalanches.length) {
    const formattedAvalanches = recentAvalanches.map((item) => ({
      ...convertCamelToSnake(item),
      forecast_id: forecast.id,
    }))

    const { error: avalanchesInsertError } = await supabase
      .from('recent_avalanches')
      .insert(formattedAvalanches)

    handleSupabaseError(avalanchesInsertError)
  }
}

const useForecastUpdate = () => {
  const queryClient = useQueryClient()

  return useMutation<void, Error, ForecastFormPayload>({
    mutationFn: updateForecast,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: forecastsKeys.list() })
    },
  })
}

export default useForecastUpdate
