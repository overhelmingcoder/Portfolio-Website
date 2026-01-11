import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { SkillsSection } from '@/components/skills-section'
import { FeaturedAchievements } from '@/components/featured-achievements'
import { FeaturedBlogs } from '@/components/featured-blogs'
import { loadJSON } from '@/lib/data-loader'

export default async function Home() {
  const home = await loadJSON('home.json')
  const achievements = await loadJSON('achievements.json')
  const blogs = await loadJSON('blogs.json')

  // Sort blogs by ID in ascending order (blog-1, blog-2, etc.)
  const sortedBlogs = blogs.sort((a: any, b: any) => {
    const aId = parseInt(a.id.split('-')[1])
    const bId = parseInt(b.id.split('-')[1])
    return aId - bId
  })

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection
        name={home.name}
        title={home.title}
        tagline={home.tagline}
        description={home.description}
        profileImage={home.profileImage}
      />
      <SkillsSection
        skills={home.skills}
        accomplishments={home.accomplishments}
        futurePlans={home.futurePlans}
      />
      <FeaturedAchievements achievements={achievements} />
      <FeaturedBlogs blogs={sortedBlogs} />
      <Footer />
    </main>
  )
}
