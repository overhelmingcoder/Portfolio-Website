'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

interface ProjectCardProps {
  title: string
  category: string
  description: string
  tech: string[]
  image: string
  github: string
}

export function ProjectCard({ title, category, description, tech, image, github }: ProjectCardProps) {
  const categoryColors: Record<string, string> = {
    'Pentesting': 'bg-primary/20 text-primary border-primary',
    'Robotics': 'bg-accent/20 text-accent border-accent',
    'Machine Learning': 'bg-secondary/20 text-secondary border-secondary',
  }

  const categoryStyle = categoryColors[category] || categoryColors['Pentesting']

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group glass p-6 rounded-lg overflow-hidden neon-border h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Content */}
      <div className="space-y-3 flex flex-col flex-1">
        {/* Category Badge */}
        <div className={`w-fit px-3 py-1 rounded-full text-xs font-semibold border ${categoryStyle}`}>
          {category}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-foreground/70 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Footer: Tech Stack + GitHub Link */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded border border-muted hover:border-primary transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors pt-2"
          >
            <Github size={16} />
            <span className="text-sm font-semibold">View on GitHub</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
