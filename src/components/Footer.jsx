import logo from '../assets/logo.svg'
import { ArrowUpRightIcon } from './icons'

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row md:justify-between md:items-center items-start gap-6 px-5 md:px-10 py-10 border-t border-half border-border-default">
      <div className="flex items-center gap-2">
        <img src={logo} alt="" className="w-3 h-3" />
        <span className="text-nav text-text-secondary">renee kim © 2026</span>
      </div>

      <div className="flex items-center gap-6">
        <a
          href="https://www.linkedin.com/in/reneehjkim/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-nav text-text-secondary hover:text-accent-default transition-colors duration-200"
        >
          linkedin
          <ArrowUpRightIcon className="w-2.5 h-2.5" />
        </a>
        <a
          href="mailto:reneehjkim11@gmail.com"
          className="inline-flex items-center gap-1 text-nav text-text-secondary hover:text-accent-default transition-colors duration-200"
        >
          email
          <ArrowUpRightIcon className="w-2.5 h-2.5" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-nav text-text-secondary hover:text-accent-default transition-colors duration-200"
        >
          resume
          <ArrowUpRightIcon className="w-2.5 h-2.5" />
        </a>
      </div>
    </footer>
  )
}
