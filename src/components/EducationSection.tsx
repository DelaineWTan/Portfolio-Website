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
                            <div className="education-copy">
                                <p className="education-degree">
                                    {item.link ? (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            {item.qualification}
                                        </a>
                                    ) : (
                                        item.qualification
                                    )}
                                    {item.honours && <span className="education-honours-inline">, {item.honours}</span>}
                                </p>

                                <h3 className="education-institution">{item.company}</h3>
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
