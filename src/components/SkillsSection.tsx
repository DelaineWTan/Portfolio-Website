import { SectionShell } from './SectionShell'
import styles from './SkillsSection.module.css'
import type { SkillGroup } from '../content/resume'

type Props = {
    items: SkillGroup[]
}

export function SkillsSection({ items }: Props) {
    return (
        <SectionShell
            id="skills"
            title="Skills"
            intro="Programming languages, development tools, infrastructure platforms, and engineering workflows used across web, backend, and game development work."
        >
            <div className={styles.skillGrid}>
                {items.map((group) => (
                    <article key={group.title} className={styles.card}>
                        <h3 className={styles.title}>{group.title}</h3>
                        <ul className={styles.list}>
                            {group.items.map((item) => (
                                <li key={item} className={styles.tag}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </SectionShell>
    )
}
