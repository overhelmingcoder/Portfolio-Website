'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BlogCard } from '@/components/blog-card'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function BlogPage() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch('/data/blogs.json')
      const data = await response.json()
      // Sort blogs by ID in ascending order (blog-1, blog-2, etc.)
      const sortedBlogs = data.sort((a: any, b: any) => {
        const aId = parseInt(a.id.split('-')[1])
        const bId = parseInt(b.id.split('-')[1])
        return aId - bId
      })
      setBlogs(sortedBlogs)
    }
    fetchBlogs()
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-4 animate-glow-pulse">
              Blog
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Insights, lessons, and thoughts from my journey in cybersecurity, engineering, and technology.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog: any, i: number) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <BlogCard {...blog} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
