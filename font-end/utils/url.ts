export function getUrlParam(name: string, url: string): string {
  const searchParams = new URLSearchParams(url.split('?')[1])
  return searchParams.get(name) || ''
}

