const handleSupabaseError = (error: { message: string } | null) => {
  if (error) {
    throw new Error(error.message)
  }
}

export default handleSupabaseError
