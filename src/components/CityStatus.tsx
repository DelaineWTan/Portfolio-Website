import { MusicToggle } from './MusicToggle'
import { useEffect, useState } from 'react'

type CityStatusProps = {
    value: 'Vancouver'
    musicToggle?: React.ReactNode
}


type CityWeather = {
    time: string
    temp: string
    summary: string
    icon: string
}

function weatherCodeToLabel(code: number): string {
    if (code === 0) return 'Clear'
    if (code === 1) return 'Mainly clear'
    if (code === 2) return 'Partly cloudy'
    if (code === 3) return 'Overcast'
    if (code === 45 || code === 48) return 'Fog'
    if ([51, 53, 55, 56, 57].includes(code)) return 'Drizzle'
    if ([61, 63, 65, 66, 67].includes(code)) return 'Rain'
    if ([71, 73, 75, 77].includes(code)) return 'Snow'
    if ([80, 81, 82].includes(code)) return 'Rain showers'
    if ([85, 86].includes(code)) return 'Snow showers'
    if (code === 95) return 'Thunderstorm'
    if ([96, 99].includes(code)) return 'Thunderstorm'
    return 'Weather unavailable'
}

function weatherCodeToIcon(code: number): string {
    if (code === 0) return '☀️'
    if (code === 1) return '🌤️'
    if (code === 2) return '⛅'
    if (code === 3) return '☁️'
    if (code === 45 || code === 48) return '🌫️'
    if ([51, 53, 55, 56, 57].includes(code)) return '🌦️'
    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return '🌧️'
    if ([71, 73, 75, 77, 85, 86].includes(code)) return '🌨️'
    if ([95, 96, 99].includes(code)) return '⛈️'
    return '•'
}

export function CityStatus({ value, musicToggle }: CityStatusProps) {
    const [weather, setWeather] = useState<CityWeather>({
        time: '',
        temp: '--',
        summary: 'Loading',
        icon: '•',
    })

    useEffect(() => {
        const formatTime = () =>
            new Intl.DateTimeFormat('en-CA', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                timeZone: 'America/Vancouver',
            }).format(new Date())

        const updateTime = () => {
            setWeather((prev) => ({
                ...prev,
                time: formatTime(),
            }))
        }

        updateTime()
        const timer = window.setInterval(updateTime, 60_000)
        return () => window.clearInterval(timer)
    }, [])

    useEffect(() => {
        let cancelled = false

        async function loadWeather() {
            try {
                const res = await fetch(
                    'https://api.open-meteo.com/v1/forecast?latitude=49.2827&longitude=-123.1207&current=temperature_2m,weather_code&timezone=America%2FVancouver'
                )

                if (!res.ok) throw new Error('weather fetch failed')

                const data = await res.json()
                if (cancelled) return

                const current = data?.current
                const temp = current?.temperature_2m
                const weatherCode = current?.weather_code

                setWeather((prev) => ({
                    ...prev,
                    temp: typeof temp === 'number' ? `${Math.round(temp)}°C` : '—',
                    summary:
                        typeof weatherCode === 'number'
                            ? weatherCodeToLabel(weatherCode)
                            : 'Weather unavailable',
                    icon:
                        typeof weatherCode === 'number'
                            ? weatherCodeToIcon(weatherCode)
                            : '•',
                }))
            } catch {
                if (cancelled) return

                setWeather((prev) => ({
                    ...prev,
                    temp: '—',
                    summary: 'Weather unavailable',
                }))
            }
        }

        loadWeather()
        const timer = window.setInterval(loadWeather, 15 * 60_000)

        return () => {
            cancelled = true
            window.clearInterval(timer)
        }
    }, [])

    return (
        <section className="city-status" aria-label={`${value} status`}>
            <div className="city-status__top">
                <div>
                    <p className="city-status__kicker">Based in</p>
                    <h2 className="city-status__city">{value}, BC</h2>
                </div>

                {musicToggle}
            </div>

            <div className="city-status__row">
                <span className="city-status__time">{weather.time}</span>
                <span className="city-status__dot" aria-hidden="true">·</span>
                <span className="city-status__temp">{weather.temp}</span>
                <span className="city-status__dot" aria-hidden="true">·</span>
                <span className="city-status__weather">
                    <span className="city-status__icon" aria-hidden="true">{weather.icon}</span>
                    <span className="city-status__summary">{weather.summary}</span>
                </span>
            </div>
        </section>
    )
}
