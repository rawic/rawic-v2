export const parseGitHubUrl = (url: string): { owner: string; repo: string } | null => {
  try {
    const { pathname, hostname } = new URL(url)
    if (!hostname.includes('github.com')) return null

    const segments = pathname.split('/').filter(Boolean)
    if (segments.length < 2) return null

    return {
      owner: segments[0],
      repo: segments[1].replace(/\.git$/, ''),
    }
  } catch (err) {
    throw new Error(`Failed to parse GitHub URL: ${err}`)
  }
}
