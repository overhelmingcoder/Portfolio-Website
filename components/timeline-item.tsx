'use client'

import Image from 'next/image'

interface TimelineItemProps {
  year: string
  event: string
  image: string
  index: number
}

export function TimelineItem({ year, event, image, index }: TimelineItemProps) {
  const isEven = index % 2 === 0
  const imageSrc = (image && typeof image === 'string' && image.trim()) ? image : "/placeholder.jpg"

  return (
    <div
      className={`flex gap-8 mb-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Left/Right Content */}
      <div className="flex-1 flex items-center">
        <div className="glass p-6 rounded-lg neon-border w-full">
          <p className="text-3xl font-bold text-primary mb-2">{String(year)}</p>
          <p className="text-foreground/80 text-lg">{String(event)}</p>
        </div>
      </div>

      {/* Center Line & Circle */}
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary border-4 border-card neon-glow" />
        <div className="w-1 h-20 bg-gradient-to-b from-primary to-transparent" />
      </div>

      {/* Image */}
      <div className="flex-1 flex items-center">
        <div className="rounded-lg overflow-hidden neon-border w-full">
          <Image
            src={imageSrc}
            alt={String(event)}
            width={400}
            height={160}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  )
}
