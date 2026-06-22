import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'
import pochiHero from '../../assets/pochi/hero.gif'

const sections = [
  { id: 'summary',        label: 'SUMMARY' },
  { id: 'the-problem',    label: 'THE PROBLEM' },
  { id: 'the-structure',  label: 'THE STRUCTURE' },
  { id: 'user-flows',     label: 'USER FLOWS' },
  { id: 'admin',          label: 'ADMIN' },
  { id: 'home-screen',    label: 'HOME SCREEN' },
  { id: 'logging',        label: 'LOGGING' },
  { id: 'pet-profiles',   label: 'PET PROFILES' },
  { id: 'the-prototype',  label: 'THE PROTOTYPE' },
  { id: 'the-build',      label: 'THE BUILD' },
]

export default function Pochi() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState(sections[0].id)
  const observerRef = useRef(null)

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
      const el = document.getElementById('the-build')
      if (!el) return
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight * 0.4) setActiveSection('the-build')
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      observerRef.current?.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-bg-primary">
      <SEO
        title="pochi — Renee Kim"
        description="solo project, start to finish. designed and built a react native app for tracking pet feeding across household members."
        path="/case-study/pochi"
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
          <span className="text-label tracking-eyebrow uppercase text-text-muted font-light">product · react native</span>
          <span className="text-label text-text-faint font-light">2026</span>
        </div>
        <h1 className="font-normal text-text-primary mb-6" style={{ fontSize: '52px', lineHeight: '1.06' }}>
          pochi.
        </h1>
        <p className="text-body text-text-secondary font-light max-w-lg">
          solo project, start to finish. designed and built a react native app for tracking pet feeding across household members.
        </p>
      </section>

      {/* content */}
      <section className="px-5 md:px-10 py-20">
        <div
          className="w-full h-[320px] rounded-lg overflow-hidden mb-12 relative border border-border-default"
          style={{ backgroundColor: '#FAF8F6' }}
        >
          <img
            src={pochiHero}
            alt="pochi"
            className="w-full h-full object-contain"
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: '#FAF8F6' }} />}
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
                  fontSize: '10px',
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
                a pet feeding tracker, built solo. a fast way to log feedings without wondering "did i already feed her today."
              </p>
              <p className="text-body text-text-secondary font-light leading-relaxed">
                every screen designed and built end to end. the hard part was restraint, cutting what felt nice but wasn't needed.
              </p>
            </div>

            <div id="the-problem">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">THE PROBLEM</span>
              <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                my cat figured out that if he acted hungry, someone would always feed him so we all did, and he got fat.
              </p>
            </div>

            <div id="the-structure">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">THE STRUCTURE</span>
              <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                before any screens, i mapped out the logic: one household, multiple members, multiple pets, one admin who controls it all.
              </p>
            </div>

            <div id="user-flows">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">USER FLOWS</span>
              <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                i started rough, working out how a family would actually move through the app day to day.
              </p>
            </div>

            <div id="admin">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">ADMIN</span>
              <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                each household has one admin who manages who is in it and which pets belong to them.
              </p>
            </div>

            <div id="home-screen">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">HOME SCREEN</span>
              <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                the home screen answers one question at a glance: has this pet been fed today, and by who.
              </p>
            </div>

            <div id="logging">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">LOGGING</span>
              <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                any member can log a feeding and it updates instantly for everyone in the household.
              </p>
            </div>

            <div id="pet-profiles">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">PET PROFILES</span>
              <div className="w-full h-64 rounded-xl" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                each pet gets their own profile, with colors and details set by the admin.
              </p>
            </div>

            <div id="the-prototype">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">THE PROTOTYPE</span>
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/oyJyRThJHxH1KnZekFVGh3/Pochi-Case-Study?node-id=0-1&t=Y2eIBmXdq3ZyWLqp-1"
                className="w-full rounded-xl"
                style={{ height: '600px', border: 'none' }}
                allowFullScreen
              />
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                the full prototype, embedded from figma.
              </p>
            </div>

            <div id="the-build">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">THE BUILD</span>
              <div className="w-full h-64 rounded-xl mb-4" style={{ backgroundColor: '#e0dfd9' }} />
              <p className="text-body font-light text-text-primary leading-relaxed">
                built in react native with cursor.{' '}
                <a
                  href="https://github.com/reneekim/pochi"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#5a9ab5' }}
                  className="hover:underline"
                >
                  view source code
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
