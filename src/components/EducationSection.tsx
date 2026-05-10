import { SectionShell } from './SectionShell'
import type { EducationItem } from '../content/resume'

type Props = {
    items: EducationItem[]
}

export function EducationSection({ items }: Props) {
    return (
        <SectionShell
            id="education"
            title="Education"
            intro="Academic background in computer science, game development, and computer systems."
        >
            <div className="education-list">
                {items.map((item) => (
                    <article key={`${item.company}-${item.qualification}`}>
                        <div className="education-heading">
                            <div>
                                <h3>{item.company}</h3>
                                <p className="education-qualification">{item.qualification}</p>
                            </div>
                            <p className="education-meta">{item.dates}</p>
                        </div>
                        <p>{item.description}</p>
                    </article>
                ))}
            </div>
        </SectionShell>
    )
}
