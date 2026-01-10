'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

const Image = dynamic(() => import('next/image'), { loading: () => <div className="w-72 h-72 bg-card rounded-full" /> })

interface HeroProps {
  name: string
  title: string
  tagline: string
  description: string
  profileImage: string
}

export function HeroSection({ name, title, tagline, description, profileImage }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-[75vh] flex items-center justify-center pt-20 px-4 cyber-gradient scan-lines">
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants} className="space-y-6">
          <motion.h1 className="text-5xl md:text-6xl font-bold neon-text">
            {name}
          </motion.h1>
          <motion.p variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-secondary">
            {title}
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-accent">
            {tagline}
          </motion.p>
          <motion.p variants={itemVariants} className="text-foreground/80 text-lg leading-relaxed max-w-md">
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex gap-4 pt-4">
            <a
              href="/api/download-cv"
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg neon-glow hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Download CV
            </a>
            <a
              href="/contact"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg neon-border hover:bg-primary/10 transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80 flex items-center justify-center">
            {/* Floating background circles */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
            <div className="absolute inset-12 rounded-full border border-secondary/20 animate-float-up" />
            
            {/* Profile image container */}
            <div className="relative w-72 h-72 rounded-full overflow-hidden neon-glow border-2 border-primary/50 animate-float-up shadow-2xl">
              <Image
                src={profileImage || "/placeholder.svg"}
                alt={name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100px, 288px"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
