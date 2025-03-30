export const getYearFromDateString = (dateString?: string): string => {
  if (!dateString) return ''

  const date = new Date(dateString)
  return date.getUTCFullYear().toString()
}

export const getFormattedDate = (dateString?: string): string => {
  if (!dateString) return ''

  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
