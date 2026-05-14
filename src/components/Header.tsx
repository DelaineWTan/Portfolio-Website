import { CityStatus } from './CityStatus'
// import { MusicToggle } from './MusicToggle'
import { useEffect, useRef } from 'react'

export function Header() {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    // const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        if (!audioRef.current) return
        audioRef.current.volume = 0.35
    }, [])

    // const handleMusicToggle = async () => {
    //     const audio = audioRef.current
    //     if (!audio) return

    //     try {
    //         if (audio.paused) {
    //             await audio.play()
    //             setIsPlaying(true)
    //         } else {
    //             audio.pause()
    //             setIsPlaying(false)
    //         }
    //     } catch (error) {
    //         console.error('Audio playback failed:', error)
    //     }
    // }

    return (
        <header className="section-shell site-header">
            <audio ref={audioRef} loop preload="auto">
                <source src="/audio/Sunlight Through Leaves.ogg" type="audio/ogg" />
            </audio>

            <div className="site-header__main">
                <h1>Delaine Tan</h1>
                <p className="site-title">Game &amp; Software Engineer</p>
                <p className="site-summary">
                    Versatile software engineer spanning frontend, backend, and game development, with a strong eye for detail, systems thinking, and a track record of building effective relationships across teams.
                </p>

                <div id="social">
                    <ul>
                        <li>
                            <a href="https://github.com/DelaineWTan" target="_blank" rel="noopener noreferrer">
                                <svg className="button-icon" aria-hidden="true">
                                    <use href="/icons.svg#github-icon"></use>
                                </svg>
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://delainetan.itch.io" target="_blank" rel="noopener noreferrer">
                                <svg className="button-icon" aria-hidden="true" viewBox="0 0 24 24">
                                    <use href="/icons.svg#itchio-icon" />
                                </svg>
                                itch.io
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/delaine-tan" target="_blank" rel="noopener noreferrer">
                                <svg className="button-icon" aria-hidden="true">
                                    <use href="/icons.svg#linkedin-icon"></use>
                                </svg>
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="mailto:dtan32@my.bcit.ca" target="_blank" rel="noopener noreferrer">
                                <svg className="button-icon" aria-hidden="true">
                                    <use href="/icons.svg#envelope-icon"></use>
                                </svg>
                                Email
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <aside className="site-header__status">
                <CityStatus
                    value="Vancouver"
                    // musicToggle={
                    //     <MusicToggle
                    //         compact
                    //         isPlaying={isPlaying}
                    //         onToggle={handleMusicToggle}
                    //     />
                    // }
                />
            </aside>
        </header>
    )
}
