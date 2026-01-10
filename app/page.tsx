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
      <FeaturedBlogs blogs={blogs} />
      <Footer />
    </main>
  )
}
