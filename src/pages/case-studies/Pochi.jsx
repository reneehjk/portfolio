import { Link } from 'react-router-dom'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'

export default function Pochi() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <SEO
        title="pochi — Renee Kim"
        description="solo project, start to finish. designed and built a react native app for tracking pet feeding across household members."
        path="/case-study/pochi"
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
      <section className="px-9 py-20">
        <div
          className="w-full h-80 rounded-lg flex items-center justify-center text-label text-text-faint font-light mb-12"
          style={{ backgroundColor: '#dce3ec' }}
        >
          project images coming soon
        </div>
        <div className="max-w-2xl">
          <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-6">CASE STUDY</span>
          <p className="text-body text-text-secondary font-light leading-relaxed mb-6">
            a pet feeding tracker, built solo. a fast way to log feedings without wondering "did i already feed her today."
          </p>
          <p className="text-body text-text-secondary font-light leading-relaxed">
            every screen designed and built end to end. the hard part was restraint, cutting what felt nice but wasn't needed.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
