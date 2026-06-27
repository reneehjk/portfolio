import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'
import pochiHero from '../../assets/pochi/hero.gif'
import apollo from '../../assets/pochi/apollo.png'
import diagram from '../../assets/pochi/diagram.png'
import github from '../../assets/pochi/github.png'
import appUx from '../../assets/pochi/app_ux.png'
import onboardingUx from '../../assets/pochi/onboarding_ux.png'
import homeImg from '../../assets/pochi/home.png'
import logImg from '../../assets/pochi/log.png'
import calendarImg from '../../assets/pochi/calendar.png'
import nestImg from '../../assets/pochi/nest.png'
import settingsImg from '../../assets/pochi/settings.png'

const sections = [
  { id: 'summary',      label: 'SUMMARY' },
  { id: 'the-problem',  label: 'THE PROBLEM' },
  { id: 'data-model',   label: 'DATA MODEL' },
  { id: 'user-flows',   label: 'USER FLOWS' },
  { id: 'screens',      label: 'SCREENS' },
  { id: 'the-build',    label: 'THE BUILD' },
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
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 96
    window.scrollTo({ top, behavior: 'smooth' })
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
          className="w-full h-[320px] rounded-lg overflow-hidden mb-12 relative"
          style={{ backgroundColor: '#EEEDFF' }}
        >
          <img
            src={pochiHero}
            alt="pochi"
            className="w-full h-full object-contain"
            onLoad={() => setIsLoaded(true)}
          />
          {!isLoaded && <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: '#EEEDFF' }} />}
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
                a pet feeding tracker, built solo. a fast way to log feedings without wondering "did i already feed her today."
              </p>
              <p className="text-body text-text-secondary font-light leading-relaxed">
                every screen designed and built end to end. the hard part was restraint, cutting what felt nice but wasn't needed.
              </p>
            </div>

            <div id="the-problem">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">THE PROBLEM</span>
              <div className="w-full h-64 sm:h-72 rounded-xl overflow-hidden" style={{ backgroundColor: '#EEEDFF' }}>
                <img src={apollo} alt="" className="w-full h-full object-cover" />
              </div>
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                my cat figured out that if he acted hungry, someone would always feed him so we all did, and he got fat.
              </p>
            </div>

            <div id="data-model">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">DATA MODEL</span>
              <div className="w-full rounded-xl p-6 sm:p-10" style={{ backgroundColor: '#EEEDFF' }}>
                <img src={diagram} alt="" className="w-full object-contain" />
              </div>
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                before any screens, i mapped out the logic: one household, multiple members, multiple pets, one admin who controls it all.
              </p>
            </div>

            <div id="user-flows">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">USER FLOWS</span>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 rounded-xl p-8" style={{ backgroundColor: '#EEEDFF' }}>
                  <img src={onboardingUx} alt="" className="w-1/2 mx-auto object-contain" />
                </div>
                <div className="flex-1 rounded-xl p-8" style={{ backgroundColor: '#EEEDFF' }}>
                  <img src={appUx} alt="" className="w-full object-contain" />
                </div>
              </div>
              <p className="text-sm font-light text-text-secondary mt-4 leading-relaxed">
                i started rough, working out how a family would actually move through the app day to day.
              </p>
            </div>

            <div id="screens">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-8">SCREENS</span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">

                <div>
                  <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-3">HOME SCREEN</span>
                  <div className="w-full aspect-square rounded-xl overflow-hidden" style={{ backgroundColor: '#EEEDFF' }}>
                    <img src={homeImg} alt="" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-light text-text-secondary mt-3 leading-relaxed">
                    the home screen answers one question at a glance: has this pet been fed today, and by who.
                  </p>
                </div>

                <div>
                  <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-3">LOGGING</span>
                  <div className="w-full aspect-square rounded-xl overflow-hidden" style={{ backgroundColor: '#EEEDFF' }}>
                    <img src={logImg} alt="" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-light text-text-secondary mt-3 leading-relaxed">
                    any member can log a feeding and it updates instantly for everyone in the household.
                  </p>
                </div>

                <div>
                  <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-3">CALENDAR</span>
                  <div className="w-full aspect-square rounded-xl overflow-hidden" style={{ backgroundColor: '#EEEDFF' }}>
                    <img src={calendarImg} alt="" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-light text-text-secondary mt-3 leading-relaxed">
                    a month view that shows feeding history at a glance, tap any day to see the full breakdown.
                  </p>
                </div>

                <div>
                  <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-3">NEST</span>
                  <div className="w-full aspect-square rounded-xl overflow-hidden" style={{ backgroundColor: '#EEEDFF' }}>
                    <img src={nestImg} alt="" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-light text-text-secondary mt-3 leading-relaxed">
                    one screen for everything household: who's in it, what pets belong, and who fed what this month.
                  </p>
                </div>

                <div>
                  <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-3">SETTINGS</span>
                  <div className="w-full aspect-square rounded-xl overflow-hidden" style={{ backgroundColor: '#EEEDFF' }}>
                    <img src={settingsImg} alt="" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm font-light text-text-secondary mt-3 leading-relaxed">
                    one place to manage your account, control which notifications you get, and leave or manage your nest.
                  </p>
                </div>

              </div>
            </div>

            <div id="the-build">
              <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-4">THE BUILD</span>
              <iframe
                src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/oyJyRThJHxH1KnZekFVGh3/Pochi-Case-Study?node-id=0-1&t=Y2eIBmXdq3ZyWLqp-1"
                className="w-full rounded-xl mb-6"
                style={{ height: '600px', border: 'none' }}
                allowFullScreen
              />
              <div className="w-full h-64 rounded-xl mb-4 p-3" style={{ backgroundColor: '#ffffff' }}>
                <img src={github} alt="" className="w-full h-full object-contain" />
              </div>
              <p className="text-body font-light text-text-primary leading-relaxed">
                built in react native with cursor.{' '}
                <a
                  href="https://github.com/reneehjk/pochi-server"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#5a9ab5' }}
                  className="hover:underline"
                >
                  view server repo
                </a>
                {' · '}
                <a
                  href="https://github.com/reneehjk/pochi-backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#5a9ab5' }}
                  className="hover:underline"
                >
                  view backend repo
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
