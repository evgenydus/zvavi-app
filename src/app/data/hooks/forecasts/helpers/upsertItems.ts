import { convertCamelToSnake, handleSupabaseError } from '@/data/helpers'

import { supabase } from '@/data'

const upsertItems = async <T>(
  tableName: string,
  forecastId: number,
  items: T[],
  options: {
    onConflict?: string
    ignoreDuplicates?: boolean
    count?: 'exact' | 'planned' | 'estimated'
    defaultToNull?: boolean
  },
): Promise<void> => {
  const formattedItems = items.map((item) => ({
    ...convertCamelToSnake(item),
    forecast_id: forecastId,
  }))

  const { error } = await supabase
    .from(tableName)
    .upsert(convertCamelToSnake(formattedItems), options)

  handleSupabaseError(error)
}

export default upsertItems
