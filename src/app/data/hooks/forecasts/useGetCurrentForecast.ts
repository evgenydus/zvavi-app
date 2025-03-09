import { convertSnakeToCamel } from '../../helpers'
import { forecastsKeys } from '../../query-keys'
import { supabase } from '@/data'
import { useQuery } from '@/tanstack-query/hooks'

import type { Forecast } from '@/business/types'

const fetchCurrentForecast = async (): Promise<Forecast | null> => {
  // Get latest published forecast
  const { data, error } = await supabase
    .from('forecasts')
    .select()
    .eq('status', 'published')
    .order('created_at', { ascending: false })
    .limit(1)

  if (error) {
    throw new Error(error.message)
  }

  if (!data || data.length === 0) return null

  return convertSnakeToCamel(data[0]) as Forecast
}

const useGetCurrentForecast = () => {
  return useQuery<Forecast | null, Error>({
    queryFn: fetchCurrentForecast,
    queryKey: forecastsKeys.current(),
  })
}

export default useGetCurrentForecast
