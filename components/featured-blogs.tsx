'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface Blog {
  id: string
  title: string
  date: string
  image: string
  excerpt: string
}

interface FeaturedBlogsProps {
  blogs: Blog[]
}

export function FeaturedBlogs({ blogs }: FeaturedBlogsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const displayedBlogs = blogs.slice(0, 6)

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
  }

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
          <h2 className="text-4xl md:text-5xl font-bold neon-text">Featured Blogs</h2>
          <Link
            href="/blog"
            className="flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            Read More <ArrowRight size={20} />
          </Link>
        </motion.div>

        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(0, 217, 255, 0.5) rgba(15, 26, 63, 0.3)',
          }}
        >
          {displayedBlogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-80 snap-center"
            >
              <Link href={`/blog/${blog.id}`}>
                <div className="glass rounded-lg overflow-hidden cursor-pointer group transition-all duration-300 h-full flex flex-col border border-primary/40 hover:border-primary hover:shadow-lg hover:shadow-primary/50 hover:scale-105 hover:neon-glow">
                  <div className="relative h-40 overflow-hidden bg-card/50">
                    <Image
                      src={blog.image || '/placeholder.svg?height=160&width=320&query=blog'}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="text-xs text-muted-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {formatDate(blog.date)}
                      </div>
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 duration-300">
                        {blog.title}
                      </h3>
                    </div>
                    <p className="text-sm text-foreground/60 group-hover:text-foreground/80 mt-2 line-clamp-2 transition-colors duration-300">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
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
