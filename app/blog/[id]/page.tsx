import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { loadJSON } from '@/lib/data-loader'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const metadata = {
  title: 'Blog Post | Mahathir Khandaker',
  description: 'Read the full blog post',
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const blogs = await loadJSON('blogs.json')
  const blog = blogs.find((b: any) => b.id === id)

  if (!blog) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">Post Not Found</h1>
            <Link href="/blog" className="text-primary hover:text-accent">
              Return to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const formattedDate = new Date(blog.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <article className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-accent mb-8">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="relative h-96 rounded-lg overflow-hidden neon-border mb-8">
            <Image
              src={blog.image || "/placeholder.svg"}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Header */}
          <div className="mb-8">
            <p className="text-primary text-sm font-semibold mb-2">{formattedDate}</p>
            <h1 className="text-4xl md:text-5xl font-bold neon-text mb-4">{blog.title}</h1>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            <div className="glass p-8 rounded-lg border border-primary/30">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-3xl font-bold text-slate-200 mb-6 mt-8 first:mt-0">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold text-amber-400 mb-4 mt-8">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-medium text-cyan-300 mb-3 mt-6">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-foreground/80 leading-relaxed text-lg mb-4">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside space-y-2 mb-4 ml-4">{children}</ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside space-y-2 mb-4 ml-4">{children}</ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-foreground/80 leading-relaxed">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-primary">{children}</strong>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-4 italic text-primary/80 my-6 bg-primary/5 py-2 px-4 rounded-r-lg">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <code className="bg-card px-2 py-1 rounded text-sm font-mono text-primary">
                      {children}
                    </code>
                  ),
                  pre: ({ children }) => (
                    <pre className="bg-card p-4 rounded-lg overflow-x-auto border border-primary/20 my-4">
                      {children}
                    </pre>
                  ),
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-primary/20">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 border border-primary text-primary rounded-lg transition-colors neon-border"
            >
              <ArrowLeft size={20} />
              Back to All Posts
            </Link>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  )
}
