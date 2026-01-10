'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Achievement {
  title: string
  year: string
  description?: string
  organization?: string
  image?: string
}

interface FeaturedAchievementsProps {
  achievements: Achievement[]
}

export function FeaturedAchievements({ achievements }: FeaturedAchievementsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const displayedAchievements = achievements.slice(0, 8)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let animationFrameId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition > container.scrollWidth - container.clientWidth) {
        scrollPosition = 0
      }
      container.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex justify-between items-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold neon-text">Achievements</h2>
          <Link
            href="/achievements"
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            View All <ArrowRight size={20} />
          </Link>
        </motion.div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(0, 217, 255, 0.5) rgba(15, 26, 63, 0.3)',
          }}
        >
          {displayedAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-80"
            >
              <div className="glass rounded-lg p-6 neon-border hover:neon-glow transition-all duration-300 h-full">
                <div className="text-sm text-primary font-semibold mb-2">
                  {achievement.year}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {achievement.title}
                </h3>
                {achievement.organization && (
                  <p className="text-sm text-foreground/70 mb-2">
                    {achievement.organization}
                  </p>
                )}
                {achievement.description && (
                  <p className="text-sm text-foreground/60 leading-relaxed">
                    {achievement.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          height: 8px;
        }
        div::-webkit-scrollbar-track {
          background: rgba(15, 26, 63, 0.3);
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb {
          background: rgba(0, 217, 255, 0.5);
          border-radius: 10px;
        }
        div::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 217, 255, 0.7);
        }
      `}</style>
    </section>
  )
}
