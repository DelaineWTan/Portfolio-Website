import { SectionShell } from './SectionShell'
import styles from './EducationSection.module.css'
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
            <div className={styles.educationList}>
                {items.map((item) => (
                    <article key={`${item.company}-${item.qualification}`} className={styles.card}>
                        <div className={styles.heading}>
                            <div className={styles.copy}>
                                <p className={styles.degree}>
                                    {item.link ? (
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            {item.qualification}
                                        </a>
                                    ) : (
                                        item.qualification
                                    )}
                                    {item.honours && (
                                        <span className={styles.honoursInline}>, {item.honours}</span>
                                    )}
                                </p>

                                <h3 className={styles.institution}>{item.company}</h3>
                            </div>

                            <p className={styles.meta}>{item.dates}</p>
                        </div>

                        <p className={styles.description}>{item.description}</p>
                    </article>
                ))}
            </div>
        </SectionShell>
    )
}
