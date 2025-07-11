import type { QueryFunctionContext, UseQueryOptions } from '@tanstack/react-query'

import { useQuery } from '@/tanstack-query/hooks'

import type { GetForecastQueryVariables } from './types'
import { convertSnakeToCamel } from '../../helpers'
import { forecastsKeys } from '../../query-keys'

import type { FullForecast } from '@/business/types'
import { supabase } from '@/data'

type QueryKey = ReturnType<typeof forecastsKeys.item>
type Response = FullForecast | undefined

type QueryOptions = Omit<
  UseQueryOptions<Response, unknown, Response, QueryKey>,
  'queryKey' | 'queryFn'
> &
  GetForecastQueryVariables

const fetchForecast = async ({ queryKey }: QueryFunctionContext<QueryKey>): Promise<Response> => {
  const [, , { forecastId, ...rest }] = queryKey

  const { data: forecastData, error: forecastError } = await supabase
    .from('forecasts')
    .select()
    .match({ id: forecastId, ...rest })
    .single()

  if (forecastError) {
    throw new Error(forecastError.message)
  }

  if (!forecastData) return undefined

  const { data: recentAvalanches, error: avalanchesError } = await supabase
    .from('recent_avalanches')
    .select()
    .match({ forecast_id: forecastId })
    .order('date', { ascending: false })

  if (avalanchesError) {
    throw new Error(avalanchesError.message)
  }

  const { data: problems, error: problemsError } = await supabase
    .from('avalanche_problems')
    .select()
    .match({ forecast_id: forecastId })

  if (problemsError) {
    throw new Error(problemsError.message)
  }

  return convertSnakeToCamel({
    ...forecastData,
    problems: problems ?? [],
    recentAvalanches: recentAvalanches ?? [],
  }) as Response
}

const useGetForecast = (options: QueryOptions) => {
  return useQuery({
    queryFn: fetchForecast,
    queryKey: forecastsKeys.item(options),
  })
}

export default useGetForecast
