import fs from 'fs'
import path from 'path'

export async function loadJSON(path: string) {
  // During build/static generation, read from filesystem
  if (typeof window === 'undefined') {
    const filePath = path.join(process.cwd(), 'public', 'data', path)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return JSON.parse(fileContents)
  }
  
  // In browser, fetch from API
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
