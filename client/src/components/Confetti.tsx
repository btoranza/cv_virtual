import { useEffect, useRef } from 'react'

interface ConfettiProps {
  onDone: () => void
}

const PARTICLE_COUNT = 220
const DURATION_MS = 6000
const GRAVITY = 0.06

function getPaletteColors(): string[] {
  const rootStyle = getComputedStyle(document.documentElement)
  const colors = ['--color-primary', '--color-accent', '--color-ink', '--color-surface']
    .map((token) => rootStyle.getPropertyValue(token).trim())
    .filter(Boolean)
  return colors.length > 0 ? colors : ['#ffc0d2', '#dd7a9b']
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  rotation: number
  rotationSpeed: number
}

export default function Confetti({ onDone }: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const onDoneRef = useRef(onDone)

  useEffect(() => {
    onDoneRef.current = onDone
  }, [onDone])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = getPaletteColors()
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: -Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 2,
      vy: Math.random() * 1 + 1,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
    }))

    let animationFrame: number

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      for (const particle of particles) {
        particle.vy += GRAVITY
        particle.x += particle.vx
        particle.y += particle.vy
        particle.rotation += particle.rotationSpeed

        ctx!.save()
        ctx!.translate(particle.x, particle.y)
        ctx!.rotate((particle.rotation * Math.PI) / 180)
        ctx!.fillStyle = particle.color
        ctx!.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size * 0.6)
        ctx!.restore()
      }
      animationFrame = requestAnimationFrame(draw)
    }
    draw()

    const timeout = setTimeout(() => onDoneRef.current(), DURATION_MS)

    return () => {
      cancelAnimationFrame(animationFrame)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50 }}
    />
  )
}
