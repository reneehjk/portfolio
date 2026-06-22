import { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'
import aisleHero from '../../assets/aisle/hero.mp4'

export default function Aisle() {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="min-h-screen bg-bg-primary">
      <SEO
        title="aisle — Renee Kim"
        description="rebranding and new product launch. redesigned the user flow to build trust, then built the whole thing in shopify."
        path="/case-study/aisle"
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
          <span className="text-label tracking-eyebrow uppercase text-text-muted font-light">web design/development · e-commerce</span>
          <span className="text-label text-text-faint font-light">2026 - ONGOING</span>
        </div>
        <h1 className="font-normal text-text-primary mb-6" style={{ fontSize: '52px', lineHeight: '1.06' }}>
          aisle.
        </h1>
        <p className="text-body text-text-secondary font-light max-w-lg">
          rebranding and new product launch. redesigned the user flow to build trust, then built the whole thing in shopify.
        </p>
      </section>

      {/* content */}
      <section className="px-5 md:px-10 py-20">
        <div
          className="w-full h-[320px] rounded-lg overflow-hidden mb-12 relative"
          style={{ backgroundColor: '#e8e2d9' }}
        >
          <video
            src={aisleHero}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onCanPlay={() => setIsLoaded(true)}
          />
          {!isLoaded && <div className="absolute inset-0 animate-pulse" style={{ backgroundColor: '#e8e2d9' }} />}
        </div>
        <div>
          <p className="text-body text-text-secondary font-light leading-relaxed mb-6">
            a rebrand and product relaunch, still in progress. new visual identity, a refreshed shopify storefront, early UI for the upcoming launch.
          </p>
          <p className="text-body text-text-secondary font-light leading-relaxed mb-16">
            right now that means making calls before the full picture exists, and adjusting as things shift. more to come as it ships.
          </p>
          <p className="text-sm font-light text-text-secondary leading-relaxed">
            this project is currently in progress.{' '}
            <a
              href="mailto:reneehjkim11@gmail.com"
              style={{ color: '#5a9ab5', textDecoration: 'none' }}
            >
              reach out
            </a>
            {' '}if you'd like to hear more.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
