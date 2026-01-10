import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { Mail, Linkedin, Github } from 'lucide-react'

export const metadata = {
  title: 'Contact | Mahathir Khandaker',
  description: 'Get in touch with Mahathir Khandaker',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold neon-text mb-4 animate-glow-pulse">
              Get in Touch
            </h1>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat about cybersecurity? Reach out and let's connect.
            </p>
          </div>

          {/* Contact Form */}
          <ContactForm />

          {/* Alternative Contact Methods */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="mailto:mahathir.khandaker.mk@gmail.com"
              className="glass p-6 rounded-lg neon-border text-center hover:border-accent transition-colors group"
            >
              <Mail className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-accent transition-colors" />
              <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
              <p className="text-foreground/60 text-sm">mahathir.khandaker.mk@gmail.com</p>
            </a>

            <a
              href="https://www.linkedin.com/in/mahathir-khandaker-574738289/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 rounded-lg neon-border text-center hover:border-accent transition-colors group"
            >
              <Linkedin className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-accent transition-colors" />
              <h3 className="text-lg font-semibold text-foreground mb-2">LinkedIn</h3>
              <p className="text-foreground/60 text-sm">mahathir-khandaker-574738289</p>
            </a>

            <a
              href="https://github.com/overhelmingcoder"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 rounded-lg neon-border text-center hover:border-accent transition-colors group"
            >
              <Github className="w-12 h-12 text-primary mx-auto mb-4 group-hover:text-accent transition-colors" />
              <h3 className="text-lg font-semibold text-foreground mb-2">GitHub</h3>
              <p className="text-foreground/60 text-sm">overhelmingcoder</p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
