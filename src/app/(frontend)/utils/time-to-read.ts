export function getReadingTime(text: string, wordsPerMinute = 225): number {
  if (!text) return 0

  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)

  return minutes
}
