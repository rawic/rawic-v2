export const getYearFromDateString = (dateString?: string): string => {
  if (!dateString) return ''

  const date = new Date(dateString)
  return date.getUTCFullYear().toString()
}
