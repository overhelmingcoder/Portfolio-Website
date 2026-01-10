export async function loadJSON(path: string) {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'
  
  const response = await fetch(`${baseUrl}/data/${path}`, {
    next: { revalidate: 3600 }
  })
  if (!response.ok) {
    throw new Error(`Failed to load ${path}`)
  }
  return response.json()
}
