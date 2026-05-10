import { SectionShell } from './SectionShell'
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
      <div className="skill-grid">
        {items.map((group) => (
          <article key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  )
}
