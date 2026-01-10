import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    // Check for CV in public folder
    const cvPath = path.join(process.cwd(), 'public', 'cv.pdf')
    
    if (!fs.existsSync(cvPath)) {
      return new Response(
        JSON.stringify({ 
          error: 'CV file not found',
          message: 'Please place cv.pdf in the public folder'
        }), 
        { 
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    const fileBuffer = fs.readFileSync(cvPath)
    
    return new Response(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Mahathir-Khandaker-CV.pdf"',
        'Cache-Control': 'public, max-age=3600',
      },
    })
  } catch (error) {
    console.error('CV download error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
