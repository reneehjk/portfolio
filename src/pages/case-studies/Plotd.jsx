import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'
import plotdHero from '../../assets/plotd/hero.mp4'

const sections = [
  { id: 'summary',        label: 'SUMMARY' },
  { id: 'the-brief',      label: 'THE BRIEF' },
  { id: 'the-concept',    label: 'THE CONCEPT' },
  { id: 'user-journey',   label: 'USER JOURNEY' },
  { id: 'mid-fidelity',   label: 'MID FIDELITY' },
  { id: 'branding',       label: 'BRANDING' },
  { id: 'the-feed',       label: 'THE FEED' },
  { id: 'creating',       label: 'CREATING' },
  { id: 'the-prototype',  label: 'THE PROTOTYPE' },
]

export default function Plotd() {
  const videoRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const observerRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observerRef.current.observe(el)
    })

    const handleScroll = () => {
      const el = document.getElementById('the-prototype')
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.4) setActiveSection('the-prototype')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      observerRef.current?.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 96
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <SEO
        title="plotd — Renee Kim"
        description="collaborative project, owned the full design direction. led branding and all mobile screen design for a new app built from scratch."
        path="/case-study/plotd-in-progress"
      />
      <Nav />

      {/* hero */}
      <section className="px-5 md:px-10 pt-20 pb-16 border-b border-half border-border-default">
        <Link
          to="/"
          className="text-label text-text-muted font-light hover:text-accent-default transition-colors duration-200 inline-block mb-12"
        >
          ← back
        </Link>
        <div className="flex flex-col md:flex-row md:justify-between items-start gap-1 md:gap-0 mb-8">
          <span className="text-label tracking-eyebrow uppercase text-text-muted font-light">branding · ux / ui</span>
          <span className="text-label text-text-faint font-light">2025 - 2026</span>
        </div>
        <h1 className="font-normal text-text-primary mb-6" style={{ fontSize: '52px', lineHeight: '1.06' }}>
          plotd.
        </h1>
        <p className="text-body text-text-secondary font-light max-w-lg">
          collaborative project, owned the full design direction. led branding and all mobile screen design for a new app built from scratch.
        </p>
      </section>

      {/* content */}
      <section className="px-5 md:px-10 py-20">
        <div
          className="w-full h-[320px] rounded-lg overflow-hidden flex items-center justify-center mb-12 relative"
          style={{ background: 'linear-gradient(213deg, rgba(255,98,198,1) 0%, rgba(251,213,101,1) 100%)' }}
        >
          <video
            ref={videoRef}
            src={plotdHero}
            autoPlay
            loop
            muted
            playsInline
            style={{ aspectRatio: '0.48', height: '88%', width: 'auto' }}
            className="object-cover rounded-2xl"
            onCanPlay={() => setIsLoaded(true)}
          />
          {!isLoaded && <div className="absolute inset-0" style={{ background: 'linear-gradient(213deg, rgba(255,98,198,1) 0%, rgba(251,213,101,1) 100%)' }} />}
        </div>

        {/* case study blocks with sidebar */}
        <div className="flex gap-16 mt-0">

          {/* sticky sidebar */}
          <aside className="hidden md:flex flex-col gap-3 sticky top-24 self-start w-36 shrink-0">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-left transition-colors duration-200"
                style={{
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  fontWeight: 300,
                  color: activeSection === id ? '#1a1a1a' : '#b0afa9',
                }}
              >
                {label}
              </button>
            ))}
          </aside>

          {/* blocks */}
          <div className="flex flex-col gap-24 flex-1 min-w-0">

            <div id="summary">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-6">SUMMARY</span>
              <p className="text-body text-text-secondary font-light leading-relaxed mb-6">
                a collaborative mobile app, designed from the ground up. came in early, before there was a product, and owned the design direction through to a full UI system.
              </p>
              <p className="text-body text-text-secondary font-light leading-relaxed">
                a lot of the work was translation, turning loose ideas into something coherent and buildable.
              </p>
            </div>

            <div id="the-brief">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">THE BRIEF</span>
              <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                our team at QTMA started with a broad question: how do we get people to actually connect in real life.
              </p>
            </div>

            <div id="the-concept">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">THE CONCEPT</span>
              <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                we landed on side quests: spontaneous, joinable plans that get people off their phones and into the moment.
              </p>
            </div>

            <div id="user-journey">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">USER JOURNEY</span>
              <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                before screens, i mapped out the full user journey so the team had a shared picture of how the app would work.
              </p>
            </div>

            <div id="mid-fidelity">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">MID FIDELITY</span>
              <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                mid fidelity let us stress test the structure before committing to any visual direction.
              </p>
            </div>

            <div id="branding">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">BRANDING</span>
              <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                i explored multiple branding directions before the team aligned on a final look and feel.
              </p>
            </div>

            <div id="the-feed">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">THE FEED</span>
              <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                the core experience: scroll through what people are doing right now and jump in.
              </p>
            </div>

            <div id="creating">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">CREATING</span>
              <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                posting a side quest is fast and low friction, the whole point is spontaneity.
              </p>
            </div>

            <div id="the-prototype">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">THE PROTOTYPE</span>
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/Xd1DiBr4lWm26wXSRTozzy/Plotd-Case-Study?node-id=0-1&t=GusK4hEycH9HTbHX-1"
                className="w-full rounded-xl"
                style={{ height: '600px', border: 'none' }}
                allowFullScreen
              />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                the full prototype, embedded from figma.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
