import { useState, useEffect } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SEO from '../components/SEO'

import photo from '../assets/about/photo.jpg'

import logoAisle from '../assets/about/logo-aisle.png'
import logoPloTD from '../assets/about/logo-plotd.png'
import logoUX from '../assets/about/logo-ux.png'
import logoQueens from '../assets/about/logo-queens.png'
import logoQTMA from '../assets/about/logo-qtma.png'
import logoQWIC from '../assets/about/logo-qwic.png'
import logoNezdek from '../assets/about/logo-nezdek.png'
import logoSweb from '../assets/about/logo-qweb.png'
import logoStudiostone from '../assets/about/logo-studiostone.png'
import logo10 from '../assets/about/logo-qgdc.png'
import logo11 from '../assets/about/logo-qmind.png'
import logo12 from '../assets/about/logo-hbh.png'

import gallery1 from '../assets/about/gallery-1.jpg'
import gallery2 from '../assets/about/gallery-2.jpg'
import gallery3 from '../assets/about/gallery-3.jpg'
import gallery4 from '../assets/about/gallery-4.jpg'
import gallery5 from '../assets/about/gallery-5.jpg'
import gallery6 from '../assets/about/gallery-6.jpg'
import gallery7 from '../assets/about/gallery-7.jpg'
import gallery8 from '../assets/about/gallery-8.jpg'
import gallery9 from '../assets/about/gallery-9.jpg'

const logos = [
  { src: logoAisle, alt: 'aisle', cover: true },
  { src: logoPloTD, alt: 'Plotd', cover: false },
  { src: logoUX, alt: 'UX club', cover: true },
  { src: logoQueens, alt: "Queen's University", cover: false },
  { src: logoQTMA, alt: 'QTMA', cover: true },
  { src: logoQWIC, alt: "Queen's Women in Computing", cover: false },
  { src: logoNezdek, alt: 'Nezdek', cover: false },
  { src: logoSweb, alt: 'sweb', cover: true },
  { src: logoStudiostone, alt: 'Studiostone Creative', cover: false },
  { src: logo10, alt: '', cover: false },
  { src: logo11, alt: '', cover: false },
  { src: logo12, alt: '', cover: false },
]

const galleryItems = [
  { src: gallery1, caption: '01' },
  { src: gallery2, caption: '02' },
  { src: gallery3, caption: '03' },
  { src: gallery4, caption: '04' },
  { src: gallery5, caption: '05' },
  { src: gallery6, caption: '06' },
  { src: gallery7, caption: '07' },
  { src: gallery8, caption: '08' },
  { src: gallery9, caption: '09' },
]

function LoadingImg({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className="relative w-full h-full">
      {!loaded && <div className="absolute inset-0 bg-border-default animate-pulse" />}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

function GalleryImage({ src, caption, className, onClick }) {
  const [loaded, setLoaded] = useState(false)
  return (
    <div
      className={`relative overflow-hidden rounded-lg cursor-pointer group ${className}`}
      onClick={onClick}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-border-default animate-pulse" />
      )}
      <img
        src={src}
        alt=""
        className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setLoaded(true)}
      />
      {caption && (
        <span className="absolute bottom-2 right-3 text-label text-white/60 drop-shadow">
          {caption}
        </span>
      )}
    </div>
  )
}

function Lightbox({ image, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] w-full flex items-center justify-center"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt=""
          className="max-w-full max-h-[85vh] rounded-lg object-contain"
        />
        {image.caption && (
          <span className="absolute bottom-3 right-4 text-label text-white/40">
            {image.caption}
          </span>
        )}
        <button
          className="absolute top-0 right-0 -translate-y-8 text-label text-white/50 hover:text-white transition-colors"
          onClick={onClose}
        >
          close
        </button>
      </div>
    </div>
  )
}

export default function About() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <div className="min-h-screen bg-[linear-gradient(225deg,#e8f1f8_0%,#fafaf8_100%)]">
      <SEO
        title="About — Renee Kim"
        description="Renee Kim is a designer and developer based in Canada, graduating from Queen's University with a degree in computing."
        path="/about"
      />
      <Nav />

      {/* Hero — gradient bg matches landing page */}
      <section className="">
        {/* Desktop / tablet: side by side */}
        <div className="hidden sm:flex items-start px-10 py-20">
          {/* Photo */}
          <div className="shrink-0 w-[240px] lg:w-[320px] h-[300px] lg:h-[400px] rounded-lg overflow-hidden opacity-0 animate-[fadeUp_0.85s_0.05s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <LoadingImg src={photo} alt="Renee Kim" className="object-cover object-top" />
          </div>
          {/* Text — 46px top offset on desktop, flush on tablet */}
          <div className="flex flex-col gap-5 pt-0 lg:pt-[46px] pb-10 max-w-2xl ml-[96px]">
            <span className="text-label text-text-muted tracking-eyebrow uppercase opacity-0 animate-[fadeUp_0.85s_0.15s_cubic-bezier(0.16,1,0.3,1)_forwards]">about</span>
            <div className="overflow-hidden">
              <h1 className="text-heading text-text-primary lowercase font-normal animate-[slideUp_1.2s_0.25s_cubic-bezier(0.16,1,0.3,1)_forwards] translate-y-full">hi, i&apos;m renee.</h1>
            </div>
            <div className="flex flex-col gap-4 text-body text-text-secondary leading-[1.8] opacity-0 animate-[fadeUp_0.85s_0.45s_cubic-bezier(0.16,1,0.3,1)_forwards]">
              <p>i&apos;m a designer who builds. based in vancouver, graduating from queen&apos;s university in april 2026 with a degree in computing.</p>
              <p>i started with code. design pulled me in because it was problem solving with a creative layer. now i sit at the intersection of both and that&apos;s exactly where i want to be.</p>
              <p>i co-founded the queen&apos;s ux club to teach other students what i was figuring out: user research, figma, interaction design. then i went and did it at aisle, studiostone, and nezdek.</p>
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="sm:hidden">
          <div className="px-5 pt-10 opacity-0 animate-[fadeUp_0.85s_0.05s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            <div className="w-40 h-[200px] rounded-lg overflow-hidden">
              <LoadingImg src={photo} alt="Renee Kim" className="object-cover object-top" />
            </div>
          </div>
          <div className="border-t border-half border-border-default mt-10 px-5 pt-8 pb-10">
            <div className="flex flex-col gap-5">
              <span className="text-label text-text-muted tracking-eyebrow uppercase opacity-0 animate-[fadeUp_0.85s_0.15s_cubic-bezier(0.16,1,0.3,1)_forwards]">about</span>
              <div className="overflow-hidden">
                <h1 className="text-heading text-text-primary lowercase font-normal animate-[slideUp_1.2s_0.25s_cubic-bezier(0.16,1,0.3,1)_forwards] translate-y-full">hi, i&apos;m renee.</h1>
              </div>
              <div className="flex flex-col gap-4 text-body text-text-secondary leading-[1.8] opacity-0 animate-[fadeUp_0.85s_0.45s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                <p>i&apos;m a designer who builds. based in vancouver, graduating from queen&apos;s university in april 2026 with a degree in computing.</p>
                <p>i started with code. design pulled me in because it was problem solving with a creative layer. now i sit at the intersection of both and that&apos;s exactly where i want to be.</p>
                <p>i co-founded the queen&apos;s ux club to teach other students what i was figuring out: user research, figma, interaction design. then i went and did it at aisle, studiostone, and nezdek.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="pt-8 pb-6 overflow-hidden bg-bg-primary">
        <span className="text-label tracking-eyebrow uppercase text-text-muted block mb-8 px-5 md:px-10">experience</span>
        <div className="overflow-hidden">
          <div className="marquee-track flex gap-16 w-max">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="w-[60px] h-[60px] rounded-full overflow-hidden shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`w-full h-full ${logo.cover ? 'object-cover' : 'object-contain'}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-5 md:px-10 py-10">
        <span className="text-label tracking-eyebrow uppercase text-text-muted block mb-8">gallery</span>

        {/* Desktop gallery */}
        <div className="hidden md:flex gap-4 items-start">
          {/* Left column */}
          <div className="flex flex-1 flex-col gap-4 min-w-0">
            <div className="flex gap-4">
              <GalleryImage
                src={galleryItems[0].src}
                caption={galleryItems[0].caption}
                className="w-[174px] h-[168px] shrink-0"
                onClick={() => setLightbox(galleryItems[0])}
              />
              <GalleryImage
                src={galleryItems[1].src}
                caption={galleryItems[1].caption}
                className="flex-1 h-[168px]"
                onClick={() => setLightbox(galleryItems[1])}
              />
            </div>
            <GalleryImage
              src={galleryItems[2].src}
              caption={galleryItems[2].caption}
              className="h-[355px]"
              onClick={() => setLightbox(galleryItems[2])}
            />
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4 shrink-0 w-[44%]">
            <div className="flex gap-4 h-[354px]">
              <div className="flex flex-col gap-4 w-[174px] shrink-0">
                <GalleryImage
                  src={galleryItems[3].src}
                  caption={galleryItems[3].caption}
                  className="flex-1"
                  onClick={() => setLightbox(galleryItems[3])}
                />
                <GalleryImage
                  src={galleryItems[4].src}
                  caption={galleryItems[4].caption}
                  className="flex-1"
                  onClick={() => setLightbox(galleryItems[4])}
                />
              </div>
              <GalleryImage
                src={galleryItems[5].src}
                caption={galleryItems[5].caption}
                className="flex-1"
                onClick={() => setLightbox(galleryItems[5])}
              />
              <GalleryImage
                src={galleryItems[6].src}
                caption={galleryItems[6].caption}
                className="flex-1"
                onClick={() => setLightbox(galleryItems[6])}
              />
            </div>
            <div className="flex gap-4 h-[168px]">
              <GalleryImage
                src={galleryItems[7].src}
                caption={galleryItems[7].caption}
                className="flex-1"
                onClick={() => setLightbox(galleryItems[7])}
              />
              <GalleryImage
                src={galleryItems[8].src}
                caption={galleryItems[8].caption}
                className="w-[174px] shrink-0"
                onClick={() => setLightbox(galleryItems[8])}
              />
            </div>
          </div>
        </div>

        {/* Mobile gallery — 2-col grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          <GalleryImage src={galleryItems[1].src} caption={galleryItems[1].caption} className="col-span-2 h-[168px]" onClick={() => setLightbox(galleryItems[1])} />
          <GalleryImage src={galleryItems[0].src} caption={galleryItems[0].caption} className="h-[168px]" onClick={() => setLightbox(galleryItems[0])} />
          <GalleryImage src={galleryItems[3].src} caption={galleryItems[3].caption} className="h-[168px]" onClick={() => setLightbox(galleryItems[3])} />
          <GalleryImage src={galleryItems[2].src} caption={galleryItems[2].caption} className="col-span-2 h-[280px]" onClick={() => setLightbox(galleryItems[2])} />
          <GalleryImage src={galleryItems[4].src} caption={galleryItems[4].caption} className="h-[180px]" onClick={() => setLightbox(galleryItems[4])} />
          <GalleryImage src={galleryItems[5].src} caption={galleryItems[5].caption} className="h-[180px]" onClick={() => setLightbox(galleryItems[5])} />
          <GalleryImage src={galleryItems[7].src} caption={galleryItems[7].caption} className="col-span-2 h-[168px]" onClick={() => setLightbox(galleryItems[7])} />
          <GalleryImage src={galleryItems[6].src} caption={galleryItems[6].caption} className="h-[180px]" onClick={() => setLightbox(galleryItems[6])} />
          <GalleryImage src={galleryItems[8].src} caption={galleryItems[8].caption} className="h-[180px]" onClick={() => setLightbox(galleryItems[8])} />
        </div>
      </section>

      {lightbox && <Lightbox image={lightbox} onClose={() => setLightbox(null)} />}

      <Footer />
    </div>
  )
}
