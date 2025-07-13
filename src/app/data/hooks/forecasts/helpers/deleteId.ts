const deleteId = <T extends { id?: string }>(data: Array<T>, type: string): T[] => {
  return data.map((item) => {
    if (typeof item.id === 'string' && item.id.startsWith(type)) {
      return { ...item, id: undefined }
    }

    return item
  })
}

export default deleteId
