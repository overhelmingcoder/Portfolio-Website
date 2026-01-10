'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface TimelineItemProps {
  year: string
  event: string
  image: string
  index: number
}

export function TimelineItem({ year, event, image, index }: TimelineItemProps) {
  const isEven = index % 2 === 0
  const imageSrc = image && image.trim() ? image : "/placeholder.jpg"

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex gap-8 mb-12 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Left/Right Content */}
      <div className="flex-1 flex items-center">
        <div className="glass p-6 rounded-lg neon-border w-full">
          <p className="text-3xl font-bold text-primary mb-2">{year}</p>
          <p className="text-foreground/80 text-lg">{event}</p>
        </div>
      </div>

      {/* Center Line & Circle */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-4 h-4 rounded-full bg-primary border-4 border-card neon-glow"
          whileHover={{ scale: 1.3 }}
        />
        <div className="w-1 h-20 bg-gradient-to-b from-primary to-transparent" />
      </div>

      {/* Image */}
      <div className="flex-1 flex items-center">
        <div className="rounded-lg overflow-hidden neon-border w-full">
          <Image
            src={imageSrc}
            alt={event}
            width={400}
            height={160}
            className="w-full h-auto object-cover"
            unoptimized
          />
        </div>
      </div>
    </motion.div>
  )
}
