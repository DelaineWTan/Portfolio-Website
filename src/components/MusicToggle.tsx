type MusicToggleProps = {
    compact?: boolean
    isPlaying: boolean
    onToggle: () => void
}

export function MusicToggle({
    compact = false,
    isPlaying,
    onToggle,
}: MusicToggleProps) {
    return (
        <button
            type="button"
            className={compact ? 'music-toggle music-toggle--compact' : 'music-toggle'}
            onClick={onToggle}
            aria-pressed={isPlaying}
            aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        >
            <span className="music-toggle__icon" aria-hidden="true">
                {isPlaying ? '❚❚' : '▶'}
            </span>
            {!compact && (
                <span className="music-toggle__label">
                    {isPlaying ? 'Music on' : 'Music off'}
                </span>
            )}
        </button>
    )
}
