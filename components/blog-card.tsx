'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface BlogCardProps {
  id: string
  title: string
  date: string
  image: string
  excerpt: string
}

export function BlogCard({ id, title, date, image, excerpt }: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group glass rounded-lg overflow-hidden neon-border h-full flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Date */}
        <p className="text-sm text-primary mb-2">{formattedDate}</p>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-foreground/70 text-sm leading-relaxed flex-grow mb-4">
          {excerpt}
        </p>

        {/* Read More Link */}
        <Link
          href={`/blog/${id}`}
          className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-semibold"
        >
          Read More
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  )
}
