import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import ProjectRow from '../components/ProjectRow'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

export default function Landing() {
  const [isMobile, setIsMobile] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <div className="min-h-screen bg-bg-primary">
      <div className="bg-[linear-gradient(225deg,#e8f1f8_0%,#fafaf8_100%)]">
        <Nav />
        <Hero />
      </div>

      {/* projects */}
      <section id="work">
        <div className="flex justify-between items-center px-5 md:px-10 py-4 border-b border-half border-border-default">
          <span className="text-label tracking-eyebrow uppercase text-text-muted">selected work</span>
          <span className="text-label text-text-faint">03 projects</span>
        </div>

        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            project={project}
            isMobile={isMobile}
            isSelected={selectedProject === project.id}
            onSelect={setSelectedProject}
          />
        ))}
      </section>

      <AboutSection />
      <Footer />
    </div>
  )
}
