import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { PlusIcon, ArrowUpRightIcon } from './icons'
import placeholderVideo from '../assets/placeholder.mp4'
import aisleHero from '../assets/aisle/hero.mp4'

export default function ProjectRow({ project, isMobile, onSelect, isSelected }) {
  const [hovered, setHovered] = useState(false)
  const navigate = useNavigate()
  const videoRef = useRef(null)
  const isOpen = isMobile ? isSelected : hovered

  const handleClick = () => {
    if (isMobile) {
      onSelect(isSelected ? null : project.id)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (isOpen) {
      video.currentTime = 0
      video.play()
    } else {
      video.pause()
      video.currentTime = 0
    }
  }, [isOpen])

  return (
    <div
      className={`border-b border-half border-border-default transition-colors duration-200 overflow-hidden cursor-pointer ${
        isOpen ? 'bg-bg-hover' : 'bg-bg-primary hover:bg-bg-hover'
      }`}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onClick={handleClick}
    >
      <div className="px-5 md:px-10 pt-8 pb-8">
        {/* row header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5 md:gap-20 w-36">
            <span className="text-label text-text-muted tracking-eyebrow uppercase w-[18px]">{project.num}</span>
            <span className="text-project-title text-text-primary lowercase">{project.name}</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-body text-text-secondary lowercase hidden sm:inline">
              {project.type}
            </span>
            <PlusIcon
              className={`w-3.5 h-3.5 text-accent-default transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
            />
          </div>
        </div>

        {/* expand */}
        <div
          className={`grid grid-cols-1 md:grid-cols-[515fr_565fr] gap-5 md:gap-10 transition-all duration-500 ease-out overflow-hidden ${
            isOpen ? 'mt-10 max-h-[600px] md:max-h-[240px] opacity-100' : 'mt-0 max-h-0 opacity-0'
          }`}
        >
          {/* thumbnail */}
          <div
            className="w-full aspect-[515/240] md:aspect-auto md:h-60 rounded-lg overflow-hidden"
            style={{ backgroundColor: project.thumbBg }}
          >
            <video
              ref={videoRef}
              src={project.id === 'aisle' ? aisleHero : placeholderVideo}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* description + CTA */}
          <div className="flex flex-col justify-between gap-6 md:py-2">
            <p className="text-body text-text-secondary leading-relaxed">
              {project.description}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation()
                navigate(`/case-study/${project.slug}`)
              }}
              className="self-start inline-flex items-center gap-1 text-body text-text-primary border border-half border-border-default rounded-lg px-4 py-1 hover:border-accent-default hover:text-accent-default transition-all duration-200 whitespace-nowrap"
            >
              view case study
              <ArrowUpRightIcon className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
