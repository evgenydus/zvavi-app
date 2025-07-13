import { handleSupabaseError } from '@/data/helpers'

import { supabase } from '@/data'

const deleteMissingItems = async <T extends { id?: string }>(
  tableName: string,
  oldItems: T[],
  newItems: T[],
) => {
  const currentIds = oldItems.map((item) => item.id).filter((id): id is string => Boolean(id))
  const newIds = newItems.filter((item) => item.id).map((item) => item.id)
  const idsToDelete = currentIds.filter((id) => !newIds.includes(id))

  if (idsToDelete.length) {
    const { error: deleteError } = await supabase.from(tableName).delete().in('id', idsToDelete)

    handleSupabaseError(deleteError)
  }
}

export default deleteMissingItems
