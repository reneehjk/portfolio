import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const wrapperRef = useRef(null)
  const target = useRef({ x: -100, y: -100 })
  const pos = useRef({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const onMove = (e) => {
      target.current = { x: e.clientX, y: e.clientY }
    }
    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHovering(true)
    }
    const onOut = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHovering(false)
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    let raf
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.5
      pos.current.y += (target.current.y - pos.current.y) * 0.5
      if (wrapperRef.current) {
        wrapperRef.current.style.left = `${pos.current.x}px`
        wrapperRef.current.style.top = `${pos.current.y}px`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="hidden md:block fixed z-[100] pointer-events-none -translate-x-1/2 -translate-y-1/2"
      style={{ left: '-100px', top: '-100px' }}
    >
      <div
        className={`rounded-full bg-accent-default transition-[width,height,opacity] duration-150 ease-out ${
          hovering ? 'w-8 h-8 opacity-40' : 'w-3 h-3 opacity-100'
        }`}
      />
    </div>
  )
}
