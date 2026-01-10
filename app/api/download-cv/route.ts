export async function GET() {
  const cvUrl = '/cv.pdf'
  
  try {
    const response = await fetch(new URL(cvUrl, process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'))
    
    if (!response.ok) {
      return new Response('CV not found', { status: 404 })
    }

    const buffer = await response.arrayBuffer()
    
    return new Response(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Mahathir-Khandaker-CV.pdf"',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    })
  } catch (error) {
    return new Response('Error downloading CV', { status: 500 })
  }
}
