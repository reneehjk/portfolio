import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MenuIcon, CloseIcon, ArrowUpRightIcon } from './icons'
import logo from '../assets/logo.svg'

export default function Nav() {
  const [time, setTime] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const tick = () => {
      const now = new Date()
      const hours24 = now.getHours()
      const ampm = hours24 >= 12 ? 'pm' : 'am'
      const h = hours24 % 12 || 12
      const m = String(now.getMinutes()).padStart(2, '0')
      const s = String(now.getSeconds()).padStart(2, '0')
      setTime(`${h}:${m}:${s} ${ampm} pst`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <nav className="relative flex items-center justify-between px-5 md:px-10 py-6 border-b border-half border-border-default">
      {/* left — name */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="" className="w-3 h-3" />
        <span className="text-nav text-text-secondary">renee kim</span>
      </Link>

      {/* centre — clock (hidden on mobile) */}
      <span className="hidden sm:block text-nav text-text-muted tabular-nums">
        {time}
      </span>

      {/* right — links (hidden on mobile) */}
      <div className="hidden sm:flex items-center gap-10">
        <Link
          to="/#work"
          className="text-nav text-text-secondary hover:text-accent-default transition-colors duration-200"
        >
          work
        </Link>
        <Link
          to="/about"
          className="text-nav text-text-secondary hover:text-accent-default transition-colors duration-200"
        >
          about
        </Link>
        <a
          href="mailto:reneehjkim11@gmail.com"
          className="inline-flex items-center gap-1 text-nav text-accent-default hover:text-accent-dark transition-colors duration-200"
        >
          contact
          <ArrowUpRightIcon className="w-2.5 h-2.5" />
        </a>
      </div>

      {/* mobile menu toggle */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? 'close menu' : 'open menu'}
        aria-expanded={menuOpen}
        className="sm:hidden text-text-primary z-50"
      >
        {menuOpen ? (
          <CloseIcon className="w-3 h-3" />
        ) : (
          <MenuIcon className="w-4 h-[10.5px]" />
        )}
      </button>

      {/* mobile full-page menu */}
      <div
        className={`sm:hidden fixed inset-0 z-40 flex flex-col bg-bg-primary transition-transform duration-300 ease-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-5 py-6 border-b border-half border-border-default">
          <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2">
            <img src={logo} alt="" className="w-3 h-3" />
            <span className="text-nav text-text-secondary">renee kim</span>
          </Link>
          <span className="text-nav text-text-muted tabular-nums pr-8">{time}</span>
        </div>

        <div className="flex flex-col gap-8 px-5 py-10">
          <Link
            to="/#work"
            onClick={() => setMenuOpen(false)}
            className="text-heading text-text-primary lowercase hover:text-accent-default transition-colors duration-200"
          >
            work
          </Link>
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="text-heading text-text-primary lowercase hover:text-accent-default transition-colors duration-200"
          >
            about
          </Link>
          <a
            href="mailto:reneehjkim11@gmail.com"
            className="inline-flex items-center gap-2 text-heading text-accent-default lowercase hover:text-accent-dark transition-colors duration-200"
          >
            contact
            <ArrowUpRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  )
}
