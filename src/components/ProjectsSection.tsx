import { SectionShell } from './SectionShell'
import type { ProjectItem } from '../content/resume'

type Props = {
    items: ProjectItem[]
    gameJams: {
        name: string
        event: string
        engine: string
        summary: string
    }[]
}

export function ProjectsSection({ items, gameJams }: Props) {
    return (
        <SectionShell
            id="projects"
            title="Projects"
            intro="Selected game development work across capstone, course, and jam projects."
        >
            <div className="project-list">
                {items.map((item) => (
                    <article key={item.name}>
                        <div className="project-heading">
                            <div>
                                <h3>{item.name}</h3>
                                <p className="project-meta-line">
                                    {item.dates} · {item.company}
                                </p>
                            </div>
                        </div>

                        {item.description.map((line) => (
                            <p key={line}>{line}</p>
                        ))}

                        <p>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                Play on itch.io
                            </a>
                        </p>
                    </article>
                ))}

                <article>
                    <div className="project-heading">
                        <div>
                            <h3>Recent Game Jams</h3>
                            <p className="project-meta-line">2024 — Present · Itch.io</p>
                        </div>
                    </div>

                    <ul className="jam-list">
                        {gameJams.map((jam) => (
                            <li key={jam.name}>
                                <strong>{jam.name}</strong>: {jam.event}, {jam.engine}. {jam.summary}
                            </li>
                        ))}
                    </ul>

                    <p>
                        <a href="https://delainetan.itch.io/" target="_blank" rel="noopener noreferrer">
                            Browse all games
                        </a>
                    </p>
                </article>
            </div>
        </SectionShell>
    )
}
