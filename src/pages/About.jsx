import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Nav />
      <section className="px-9 py-20">
        <span className="text-label tracking-eyebrow uppercase text-text-muted font-light block mb-8">ABOUT</span>
        <h1 className="font-normal text-text-primary mb-6" style={{ fontSize: '52px', lineHeight: '1.06' }}>
          renee kim.
        </h1>
        <p className="text-body text-text-secondary font-light max-w-xl leading-relaxed">
          this page is coming soon. in the meantime, feel free to reach out.
        </p>
      </section>
      <Footer />
    </div>
  )
}
