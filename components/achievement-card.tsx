'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface AchievementCardProps {
  title: string
  year: string
  image: string
}

export function AchievementCard({ title, year, image }: AchievementCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="group relative overflow-hidden rounded-lg neon-glow"
    >
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-lg font-bold text-primary">{title}</h3>
        <p className="text-accent text-sm">{year}</p>
      </div>
    </motion.div>
  )
}
