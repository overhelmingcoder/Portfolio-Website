import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Mahathir Khandaker | Cybersecurity & Engineering',
  description: 'Portfolio of Mahathir Khandaker - Electronics & Communication Engineering Student, Cybersecurity Enthusiast, Ethical Hacker, Builder',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `
              document.documentElement.removeAttribute('bis_skin_checked');
              const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                  if (mutation.type === 'attributes') {
                    if (mutation.target.hasAttribute('bis_skin_checked')) {
                      mutation.target.removeAttribute('bis_skin_checked');
                    }
                  }
                });
              });
              observer.observe(document.documentElement, { 
                attributes: true, 
                subtree: true,
                attributeFilter: ['bis_skin_checked', 'bis_register', '__processed_']
              });
              document.addEventListener('DOMContentLoaded', () => {
                document.querySelectorAll('[bis_skin_checked], [bis_register], [__processed_]').forEach(el => {
                  el.removeAttribute('bis_skin_checked');
                  el.removeAttribute('bis_register');
                  el.removeAttribute('__processed_');
                });
              });
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased bg-background text-foreground`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
