import fs from 'fs'
import path from 'path'
import { NextRequest } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const filename = params.filename
    const filePath = path.join(process.cwd(), 'public', 'data', filename)

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return new Response('File not found', { status: 404 })
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = JSON.parse(fileContents)

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch (error) {
    console.error('Error serving data:', error)
    return new Response('Internal server error', { status: 500 })
  }
}