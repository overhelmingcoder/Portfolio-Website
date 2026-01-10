import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TimelineItem } from '@/components/timeline-item'
import { loadJSON } from '@/lib/data-loader'

export const metadata = {
  title: 'My Journey | Mahathir Khandaker',
  description: 'Timeline of my learning journey in electronics, cybersecurity, and engineering',
}

export default async function JourneyPage() {
  // const journey = await loadJSON('journey.json')

  // // Ensure journey is an array
  // if (!Array.isArray(journey)) {
  //   throw new Error('Journey data must be an array')
  // }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div>Journey page</div>
    </main>
  )
}
