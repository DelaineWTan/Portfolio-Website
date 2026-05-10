import { useEffect, useRef } from 'react'

type Drop = {
    x: number
    y: number
    length: number
    speed: number
    opacity: number
}

function makeDrops(count: number, width: number, height: number): Drop[] {
    return Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        length: 12 + Math.random() * 22,
        speed: 4 + Math.random() * 5,
        opacity: 0.08 + Math.random() * 0.18,
    }))
}

function drawRain(canvas: HTMLCanvasElement, drops: Drop[]) {
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const width = canvas.clientWidth
    const height = canvas.clientHeight

    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    let frame = 0
    let raf = 0

    const render = () => {
        ctx.clearRect(0, 0, width, height)

        const gradient = ctx.createLinearGradient(0, 0, 0, height)
        gradient.addColorStop(0, 'rgba(170, 190, 220, 0.08)')
        gradient.addColorStop(1, 'rgba(110, 130, 170, 0.02)')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)

        for (const drop of drops) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(180, 200, 235, ${drop.opacity})`
            ctx.lineWidth = 1
            ctx.moveTo(drop.x, drop.y)
            ctx.lineTo(drop.x - 6, drop.y + drop.length)
            ctx.stroke()

            drop.y += drop.speed
            drop.x -= 0.35

            if (drop.y > height + 30 || drop.x < -20) {
                drop.x = Math.random() * width + 10
                drop.y = -30
            }
        }

        frame += 1
        raf = window.requestAnimationFrame(render)
    }

    render()
    return () => window.cancelAnimationFrame(raf)
}

function RainCanvas({ side }: { side: 'left' | 'right' }) {
    const ref = useRef<HTMLCanvasElement | null>(null)

    useEffect(() => {
        const media = window.matchMedia('(prefers-reduced-motion: reduce)')
        if (media.matches) return

        const canvas = ref.current
        if (!canvas) return

        const getCount = () => {
            const gutter = canvas.clientWidth
            return Math.max(24, Math.floor(gutter * 0.35))
        }

        let cleanup: (() => void) | undefined

        const setup = () => {
            cleanup?.()
            const drops = makeDrops(getCount(), canvas.clientWidth, canvas.clientHeight)
            cleanup = drawRain(canvas, drops)
        }

        setup()
        window.addEventListener('resize', setup)

        return () => {
            cleanup?.()
            window.removeEventListener('resize', setup)
        }
    }, [])

    return (
        <canvas
            ref={ref}
            className={`rain-gutter rain-gutter--${side}`}
            aria-hidden="true"
        />
    )
}

export function RainGutters() {
    return (
        <div className="rain-gutters" aria-hidden="true">
            <RainCanvas side="left" />
            <RainCanvas side="right" />
            <div className="rain-haze" />
        </div>
    )
}
