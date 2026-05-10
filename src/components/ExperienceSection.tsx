import { SectionShell } from './SectionShell'
import type { ExperienceItem } from '../content/resume'

type Props = {
    items: ExperienceItem[]
}

export function ExperienceSection({ items }: Props) {
    return (
        <SectionShell
            id="experience"
            title="Experience"
            intro="Professional experience across software engineering, infrastructure, and technical evaluation."
        >
            <div className="experience-list">
                {items.map((item) => (
                    <article key={`${item.company}-${item.title}`}>
                        <div className="experience-heading">
                            <div>
                                <h3>{item.title}</h3>
                                <p className="experience-company">{item.company}</p>
                            </div>
                            <p className="experience-meta">{item.dates}</p>
                        </div>

                        <ul>
                            {item.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </SectionShell>
    )
}
