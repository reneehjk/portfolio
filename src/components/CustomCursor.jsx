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

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)

    let raf
    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.2
      pos.current.y += (target.current.y - pos.current.y) * 0.2
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`
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
      className={`hidden md:block fixed top-0 left-0 z-[100] pointer-events-none rounded-full bg-accent-default transition-[width,height,opacity] duration-200 ease-out ${
        hovering ? 'w-8 h-8 opacity-50' : 'w-4 h-4 opacity-100'
      }`}
    />
  )
}
