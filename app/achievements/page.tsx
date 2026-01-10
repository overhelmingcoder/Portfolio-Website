'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { AchievementCard } from '@/components/achievement-card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function AchievementsPage() {
  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    const fetchAchievements = async () => {
      const response = await fetch('/data/achievements.json')
      const data = await response.json()
      setAchievements(data)
    }
    fetchAchievements()
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-4 animate-glow-pulse">
              Achievements
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Milestones that define my journey and growth in cybersecurity, engineering, and innovation.
            </p>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="glass p-6 rounded-lg neon-border hover:border-secondary transition-all duration-300 group h-full hover:shadow-lg">
                  {achievement.image && (
                    <div className="relative h-40 w-full rounded-lg overflow-hidden mb-4">
                      <Image
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="text-sm text-primary font-semibold mb-3">
                    {achievement.year}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {achievement.title}
                  </h3>
                  {achievement.organization && (
                    <p className="text-sm text-accent mb-3">
                      {achievement.organization}
                    </p>
                  )}
                  {achievement.description && (
                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                      {achievement.description}
                    </p>
                  )}
                  <div className="h-1 w-12 bg-primary group-hover:w-full transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
