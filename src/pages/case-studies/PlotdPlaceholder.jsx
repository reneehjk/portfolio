import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'
import plotdHero from '../../assets/plotd/hero.mp4'

export default function PlotdPlaceholder() {
  const videoRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2
  }, [])

  return (
    <div className="min-h-screen bg-bg-primary">
      <SEO
        title="plotd — Renee Kim"
        description="collaborative project, owned the full design direction. led branding and all mobile screen design for a new app built from scratch."
        path="/case-study/plotd"
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
          className="w-full h-[320px] rounded-lg overflow-hidden flex items-center justify-center mb-20 relative"
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

        <div className="flex flex-col gap-20">
          <div>
            <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-6">SUMMARY</span>
            <p className="text-body text-text-secondary font-light leading-relaxed mb-6">
              a collaborative mobile app, designed from the ground up. came in early, before there was a product, and owned the design direction through to a full UI system.
            </p>
            <p className="text-body text-text-secondary font-light leading-relaxed">
              a lot of the work was translation, turning loose ideas into something coherent and buildable.
            </p>
          </div>

          <p className="text-label tracking-eyebrow uppercase text-text-muted font-light">
            case study coming soon...
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
