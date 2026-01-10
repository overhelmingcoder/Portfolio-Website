import { loadJSON } from '@/lib/data-loader'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TimelineItem } from '@/components/timeline-item'

export const metadata = {
  title: 'My Journey | Mahathir Khandaker',
  description: 'Timeline of my learning journey in electronics, cybersecurity, and engineering',
}

export default async function JourneyPage() {
  const journey = await loadJSON('journey.json')

  // Ensure journey is an array
  if (!Array.isArray(journey)) {
    throw new Error('Journey data must be an array')
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-4 animate-glow-pulse">
              My Journey
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              A timeline of key moments, learning milestones, and growth throughout my career.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {journey.map((item: any, i: number) => (
              <TimelineItem key={i} {...item} index={i} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
