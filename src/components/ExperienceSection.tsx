import { SectionShell } from './SectionShell'
import styles from './ExperienceSection.module.css'
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
            <div className={styles.experienceList}>
                {items.map((item) => (
                    <article key={`${item.company}-${item.title}`} className={styles.card}>
                        <div className={styles.heading}>
                            <div className={styles.main}>
                                {item.logo && (
                                    <div className={styles.logoWrap}>
                                        <img
                                            className={styles.logo}
                                            src={item.logo}
                                            alt={item.logoAlt ?? `${item.company} logo`}
                                            loading="lazy"
                                        />
                                    </div>
                                )}

                                <div className={styles.copy}>
                                    <h3 className={styles.title}>{item.title}</h3>
                                    <p className={styles.company}>{item.company}</p>
                                </div>
                            </div>

                            <p className={styles.meta}>{item.dates}</p>
                        </div>

                        <ul className={styles.bullets}>
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
