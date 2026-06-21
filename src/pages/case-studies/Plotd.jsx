import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'

export default function Plotd() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <SEO
        title="plotd — Renee Kim"
        description="collaborative project, owned the full design direction. led branding and all mobile screen design for a new app built from scratch."
        path="/case-study/plotd"
      />
      <Nav />

      {/* hero */}
      <section className="px-9 pt-20 pb-16 border-b border-half border-border-default">
        <Link
          to="/"
          className="text-label text-text-muted font-light hover:text-accent-default transition-colors duration-200 inline-block mb-12"
        >
          ← back
        </Link>
        <div className="flex justify-between items-start mb-8">
          <span className="text-label tracking-eyebrow uppercase text-text-muted font-light">branding · ux / ui</span>
          <span className="text-label text-text-faint font-light">2025</span>
        </div>
        <h1 className="font-normal text-text-primary mb-6" style={{ fontSize: '52px', lineHeight: '1.06' }}>
          plotd.
        </h1>
        <p className="text-body text-text-secondary font-light max-w-lg">
          collaborative project, owned the full design direction. led branding and all mobile screen design for a new app built from scratch.
        </p>
      </section>

      {/* content */}
      <section className="px-9 py-20">
        <div
          className="w-full h-80 rounded-lg flex items-center justify-center text-label text-text-faint font-light mb-12"
          style={{ backgroundColor: '#dde8db' }}
        >
          project images coming soon
        </div>
        <div className="max-w-2xl">
          <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-6">CASE STUDY</span>
          <p className="text-body text-text-secondary font-light leading-relaxed">
            case study content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
