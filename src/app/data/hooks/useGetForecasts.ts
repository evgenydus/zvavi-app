import { supabase } from '@/data'
import { useQuery } from '@/tanstack-query/hooks'

import { convertSnakeToCamel } from '../helpers'
import { forecastsKeys } from '../query-keys'

import type { Forecast } from './types'

const fetchForecasts = async (): Promise<Forecast[]> => {
  const { data, error } = await supabase
    .from('forecasts')
    .select()
    .order('created_at', { ascending: false })

  if (error) {
    throw new Error(error.message)
  }

  if (!data) return []

  return convertSnakeToCamel(data) as Forecast[]
}

const useGetForecasts = () => {
  return useQuery<Forecast[], Error>({
    queryFn: fetchForecasts,
    queryKey: forecastsKeys.all,
  })
}

export default useGetForecasts
