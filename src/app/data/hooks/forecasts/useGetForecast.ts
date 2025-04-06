import { convertSnakeToCamel } from '../../helpers'
import { forecastsKeys } from '../../query-keys'
import { supabase } from '@/data'
import { useQuery } from '@/tanstack-query/hooks'

import type { Forecast } from '@/business/types'
import type { QueryFunctionContext, UseQueryOptions } from '@tanstack/react-query'

type QueryKey = ReturnType<typeof forecastsKeys.item>
type Response = Forecast | undefined

type QueryOptions = Omit<
  UseQueryOptions<Response, unknown, Response, QueryKey>,
  'queryKey' | 'queryFn'
> & { forecastId: Forecast['id'] }

const fetchForecast = async ({ queryKey }: QueryFunctionContext<QueryKey>): Promise<Response> => {
  const [, , variables] = queryKey

  const { data, error } = await supabase
    .from('forecasts')
    .select()
    .match({ id: variables.forecastId, status: 'published' })
    .single()

  if (error) {
    throw new Error(error.message)
  }

  if (!data) return undefined

  return convertSnakeToCamel(data) as Response
}

const useGetForecast = ({ forecastId, ...options }: QueryOptions) => {
  return useQuery({
    queryFn: fetchForecast,
    queryKey: forecastsKeys.item({ forecastId }),
    ...options,
  })
}

export default useGetForecast
