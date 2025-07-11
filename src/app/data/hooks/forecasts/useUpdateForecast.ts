import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { ForecastCreateUpdatePayload } from './types'
import { convertCamelToSnake, handleSupabaseError } from '../../helpers'
import { forecastsKeys } from '../../query-keys'

import { supabase } from '@/data'

const upsertItems = async <T>(tableName: string, forecastId: number, items: T[]): Promise<void> => {
  const formattedItems = items.map((item) => ({
    ...convertCamelToSnake(item),
    forecast_id: forecastId,
  }))

  const { error } = await supabase
    .from(tableName)
    .upsert(convertCamelToSnake(formattedItems), { defaultToNull: false, onConflict: 'id' })

  handleSupabaseError(error)
}

const deleteMissingItems = async <T extends { id?: string }>(
  tableName: string,
  oldItems: T[],
  newItems: T[],
) => {
  const currentIds = oldItems.map((item) => item.id).filter((id): id is string => Boolean(id))
  const newIds = newItems.filter((item) => item.id).map((item) => item.id)
  const idsToDelete = currentIds.filter((id) => !newIds.includes(id))

  if (idsToDelete.length) {
    const { error: deleteError } = await supabase.from(tableName).delete().in('id', idsToDelete)

    handleSupabaseError(deleteError)
  }
}

const deleteId = <T extends { id?: string }>(data: Array<T>, type: string): T[] => {
  return data.map((item) => {
    if (typeof item.id === 'string' && item.id.startsWith(type)) {
      return { ...item, id: undefined }
    }

    return item
  })
}

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

  await deleteMissingItems('avalanche_problems', initialProblems ?? [], formattedAvalancheProblems)
  await deleteMissingItems(
    'recent_avalanches',
    initialRecentAvalanches ?? [],
    formattedRecentAvalanches,
  )

  if (formattedAvalancheProblems.length) {
    await upsertItems('avalanche_problems', forecast.id, formattedAvalancheProblems)
  }

  if (formattedRecentAvalanches.length) {
    await upsertItems('recent_avalanches', forecast.id, formattedRecentAvalanches)
  }
}

const useUpdateForecast = () => {
  const queryClient = useQueryClient()

  return useMutation<void, Error, ForecastCreateUpdatePayload>({
    mutationFn: updateForecast,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: forecastsKeys.list() })
    },
  })
}

export default useUpdateForecast
