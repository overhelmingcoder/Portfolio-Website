import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-primary/30 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold neon-text mb-4">About</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Building secure systems and breaking systems to understand weaknesses. Cybersecurity enthusiast with a passion for learning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold neon-text mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/', label: 'Home' },
                { href: '/projects', label: 'Projects' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/60 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-bold neon-text mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="mailto:mahathir.khandaker.mk@gmail.com"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors neon-border"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mahathir-khandaker-574738289/"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors neon-border"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/overhelmingcoder"
                className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors neon-border"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/20 pt-8">
          <p className="text-center text-sm text-foreground/40">
            © 2025 Mahathir Khandaker. Designed & Built with <span className="text-primary">cybersecurity</span> mindset.
          </p>
        </div>
      </div>
    </footer>
  )
}
