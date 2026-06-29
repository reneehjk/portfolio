export default function Hero() {
  return (
    <section className="px-5 md:px-10 pt-16 pb-16 border-b border-half border-border-default">
      {/* eyebrow */}
      <div className="flex justify-between items-start mb-[120px] md:mb-[160px] opacity-0 translate-y-2 animate-[fadeUp_0.85s_cubic-bezier(0.16,1,0.3,1)_forwards]">
        <span className="text-label text-text-muted font-normal tracking-eyebrow uppercase">
          design engineer · canada
        </span>
        <span className="text-label text-text-muted font-normal">2026</span>
      </div>

      {/* headline + description/button */}
      <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <span className="text-heading text-text-secondary lowercase opacity-0 translate-y-2 animate-[fadeUp_0.85s_0.15s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            renee kim
          </span>
          <div className="mb-0 pb-2 overflow-hidden">
            <h1 className="text-hero text-text-primary lowercase">
              <span className="block animate-[slideUp_1.2s_0.25s_cubic-bezier(0.16,1,0.3,1)_forwards] translate-y-full">
                a designer who{' '}
                <span className="italic text-accent-default">builds</span>
                <span className="text-accent-default">.</span>
              </span>
            </h1>
          </div>
        </div>

        <div className="flex items-end justify-between gap-8">
          <p className="text-body text-text-secondary max-w-xs sm:max-w-sm opacity-0 translate-y-2 animate-[fadeUp_0.85s_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
            design with intention to build with precision.
          </p>
          <a
            href="#work"
            className="text-body text-text-primary border border-half border-border-default rounded-lg px-4 py-1 hover:border-accent-default hover:text-accent-default transition-all duration-200 delay-75 opacity-0 translate-y-2 animate-[fadeUp_0.85s_0.95s_cubic-bezier(0.16,1,0.3,1)_forwards] shrink-0"
          >
            view work ↓
          </a>
        </div>
      </div>
    </section>
  )
}
