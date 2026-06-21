import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
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

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })

    let raf
    const tick = () => {
      const dx = target.current.x - pos.current.x
      const dy = target.current.y - pos.current.y
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        pos.current.x += dx * 0.5
        pos.current.y += dy * 0.5
        if (dotRef.current) {
          dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`
        }
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
      ref={dotRef}
      className="hidden md:block fixed top-0 left-0 z-[100] pointer-events-none w-0 h-0"
      style={{ willChange: 'transform', transform: 'translate(-100px, -100px)' }}
    >
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-default transition-[width,height,opacity] duration-150 ease-out ${
          hovering ? 'w-8 h-8 opacity-40' : 'w-3 h-3 opacity-100'
        }`}
      />
    </div>
  )
}
