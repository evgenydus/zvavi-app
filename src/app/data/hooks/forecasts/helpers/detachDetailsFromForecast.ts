import { handleSupabaseError } from '@/data/helpers'

import { supabase } from '@/data'

const detachDetailsFromForecast = async (tableName: string, forecastId: number): Promise<void> => {
  const { error } = await supabase.from(tableName).delete().eq('forecast_id', forecastId)

  handleSupabaseError(error)
}

export default detachDetailsFromForecast
