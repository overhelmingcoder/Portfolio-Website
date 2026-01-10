'use client'

import { motion } from 'framer-motion'

interface SkillsSectionProps {
  skills: string[]
  accomplishments: string[]
  futurePlans: string[]
}

export function SkillsSection({ skills, accomplishments, futurePlans }: SkillsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="text-4xl md:text-5xl font-bold text-center neon-text mb-16">
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Core Skills */}
          <motion.div
            className="glass p-8 rounded-lg neon-border"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary mb-6 neon-text">Core Skills</h3>
            <motion.div className="space-y-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-foreground/80 group-hover:text-primary transition-colors">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Accomplishments */}
          <motion.div
            className="glass p-8 rounded-lg neon-border"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-accent mb-6 neon-text">Accomplishments</h3>
            <motion.div className="space-y-3">
              {accomplishments.map((acc, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-foreground/80 group-hover:text-accent transition-colors text-sm">
                    {acc}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Future Plans */}
          <motion.div
            className="glass p-8 rounded-lg neon-border"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-secondary mb-6 neon-text">Future Plans</h3>
            <motion.div className="space-y-3">
              {futurePlans.map((plan, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-2 h-2 bg-secondary rounded-full group-hover:scale-150 transition-transform" />
                  <span className="text-foreground/80 group-hover:text-secondary transition-colors text-sm">
                    {plan}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        
      </div>
    </section>
  )
}
