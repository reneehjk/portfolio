import { Link } from 'react-router-dom'
import { ArrowUpRightIcon } from './icons'
import pfp from '../assets/pfp.png'

const skills = {
  design: ['figma', 'visual design', 'prototyping', 'design systems', 'interaction design'],
  ux: ['user research', 'usability testing', 'user flows', 'information architecture', 'wcag accessibility'],
  dev: ['react / react native', 'javascript', 'html / css', 'tailwind css', 'git'],
}

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row gap-10 px-5 md:px-10 py-14 border-t border-half border-border-default">
      {/* left — bio */}
      <div className="flex flex-col gap-8 w-full md:flex-[398] pb-10 md:pb-0 border-b-half md:border-b-0 md:border-r-half border-border-default md:pr-10 md:sticky md:top-20 md:self-start">
        <span className="text-label tracking-eyebrow uppercase text-text-secondary">about</span>

        {/* photo + headline */}
        <div className="flex items-center gap-5">
          <img src={pfp} alt="renee kim" className="w-24 h-24 rounded-full bg-accent-subtle object-cover flex-shrink-0" />
          <h2 className="text-heading text-text-primary lowercase leading-snug">
            early career.<br />full ownership.
          </h2>
        </div>

        {/* bio */}
        <p className="text-body text-text-secondary lowercase leading-relaxed">
          bcomh computing at queen's university. co-founded the queen's ux club. currently designing & building at{' '}
          <a
            href="https://periodaisle.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-text-primary hover:text-accent-default transition-colors duration-200"
          >
            aisle
            <ArrowUpRightIcon className="w-2.5 h-2.5" />
          </a>
          .
          <br /><br />
          i work both sides of the screen. i like making things that make sense.
        </p>

        {/* availability */}
        <div className="flex items-center gap-2">
          <span className="w-[6px] h-[6px] rounded-full bg-accent-default flex-shrink-0 animate-pulse" />
          <span className="text-nav text-text-muted">
            open to <span className="text-text-primary">full time</span> roles in design and design engineering
          </span>
        </div>

        {/* read more */}
        <div>
          <Link
            to="/about"
            className="inline-flex items-center gap-1 text-body text-text-primary border border-half border-border-default rounded-lg px-4 py-1 hover:border-accent-default hover:text-accent-default transition-all duration-200 animate-[fadeIn_0.6s_0.6s_forwards] opacity-0 shrink-0"
          >
            read more
            <ArrowUpRightIcon className="w-2.5 h-2.5" />
          </Link>
        </div>
      </div>

      {/* right — stack */}
      <div className="flex flex-col gap-8 w-full md:flex-[629]">
        <span className="text-label tracking-eyebrow uppercase text-text-secondary block">stack</span>

        {Object.entries(skills).map(([cat, items]) => (
          <div key={cat} className="flex flex-col gap-2">
            <span className="text-label tracking-eyebrow uppercase text-text-muted block">{cat}</span>
            {items.map((skill, i) => (
              <div
                key={skill}
                className={`flex justify-between items-center py-[10px] ${i < items.length - 1 ? 'border-b-half border-border-default' : ''}`}
              >
                <span className="text-body text-text-secondary">{skill}</span>
                <span className="text-body text-text-muted text-right">{cat}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
