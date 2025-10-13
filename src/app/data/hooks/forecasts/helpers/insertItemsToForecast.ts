import { convertCamelToSnake, handleSupabaseError } from '@/data/helpers'

import { supabase } from '@/data'

const insertItemsToForecast = async <T>(
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

export default insertItemsToForecast
