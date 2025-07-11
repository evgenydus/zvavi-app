import { useQuery } from '@/tanstack-query/hooks'

import { convertSnakeToCamel } from '../../helpers'
import { forecastsKeys } from '../../query-keys'

import type { FullForecast } from '@/business/types'
import { supabase } from '@/data'

const fetchForecasts = async (): Promise<FullForecast[]> => {
  const { data, error } = await supabase
    .from('forecasts')
    .select('*, avalanche_problems(*), recent_avalanches(*)')
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  if (!data) return []

  return convertSnakeToCamel(data) as FullForecast[]
}

const useGetForecasts = () => {
  return useQuery<FullForecast[], Error>({
    queryFn: fetchForecasts,
    queryKey: forecastsKeys.list(),
  })
}

export default useGetForecasts
