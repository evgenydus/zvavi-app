import { useMutation, useQueryClient } from '@tanstack/react-query'

import { handleSupabaseError } from '../../helpers'

import type { Forecast } from '@/business/types'
import { supabase } from '@/data'
import { forecastsKeys } from '@/data/query-keys'

const deleteForecast = async (id: Forecast['id']) => {
  const { error } = await supabase.from('forecasts').delete().eq('id', id)

  handleSupabaseError(error)
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
