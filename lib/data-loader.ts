import fs from 'fs'
import path from 'path'

export async function loadJSON(filename: string) {
  // During build/static generation, read from filesystem
  if (typeof window === 'undefined') {
    try {
      const filePath = path.join(process.cwd(), 'public', 'data', filename)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const parsed = JSON.parse(fileContents)

      // Deep clone to ensure no non-serializable objects
      return JSON.parse(JSON.stringify(parsed))
    } catch (error) {
      console.error(`Error loading ${filename}:`, error)
      return null
    }
  }

  // In browser, fetch from API
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'

  try {
    const response = await fetch(`${baseUrl}/api/data/${filename}`, {
      next: { revalidate: 3600 }
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch ${filename}`)
    }

    return await response.json()
  } catch (error) {
    console.error(`Error fetching ${filename}:`, error)
    return null
  }
}
