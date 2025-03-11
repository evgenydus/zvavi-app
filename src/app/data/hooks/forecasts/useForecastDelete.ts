import { forecastsKeys } from '@/data/query-keys'
import { handleSupabaseError } from '../../helpers'
import { supabase } from '@/data'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import type { Forecast } from '@/business/types'

const deleteForecast = async (id: Forecast['id']) => {
  const { error: forecastError } = await supabase.from('forecasts').delete().eq('id', id)

  handleSupabaseError(forecastError)
}

const useForecastDelete = () => {
  const queryClient = useQueryClient()

  return useMutation<void, Error, Forecast['id']>({
    mutationFn: deleteForecast,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: forecastsKeys.list() })
    },
  })
}

export default useForecastDelete
