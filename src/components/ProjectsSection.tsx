import { useMemo, useState } from 'react'
import { SectionShell } from './SectionShell'
import type { ProjectItem, ProjectTag } from '../content/resume'

const FILTERS: { key: ProjectTag; label: string }[] = [
  { key: 'game-jam', label: 'Game Jam' },
  { key: 'playable-web', label: 'Playable on Web' },
  { key: 'unity', label: 'Unity' },
  { key: 'godot', label: 'Godot' },
  { key: 'custom-engine', label: 'Custom Engine' },
]

const TAG_LABELS: Record<ProjectTag, string> = {
  'game-jam': 'Game Jam',
  'playable-web': 'Playable on Web',
  unity: 'Unity',
  godot: 'Godot',
  'custom-engine': 'Custom Engine',
  cpp: 'C++',
  raylib: 'Raylib',
  sdl3: 'SDL3',
  solo: 'Solo',
  team: 'Team',
}

type Props = {
  items: ProjectItem[]
}

export function ProjectsSection({ items }: Props) {
  const [activeTags, setActiveTags] = useState<ProjectTag[]>([])

  const toggleTag = (tag: ProjectTag) => {
    setActiveTags((current) =>
      current.includes(tag)
        ? current.filter((t) => t !== tag)
        : [...current, tag]
    )
  }

  const filteredItems = useMemo(() => {
    if (activeTags.length === 0) return items
    return items.filter((item) =>
      activeTags.every((tag) => item.tags.includes(tag))
    )
  }, [items, activeTags])

  return (
    <SectionShell
      id="projects"
      title="Projects"
      intro="Selected game development work across capstone, course, and jam projects."
    >
      <div className="project-filters" role="group" aria-label="Project filters">
        {FILTERS.map((filter) => {
          const active = activeTags.includes(filter.key)
          return (
            <button
              key={filter.key}
              type="button"
              className={active ? 'filter-chip active' : 'filter-chip'}
              onClick={() => toggleTag(filter.key)}
              aria-pressed={active}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      <div className="project-list">
        {filteredItems.length === 0 ? (
          <p>No projects match the selected filters.</p>
        ) : (
          filteredItems.map((item) => (
            <article key={item.name}>
              <div className="project-heading">
                <div>
                  <h3>{item.name}</h3>
                  <p className="project-meta-line">
                    {item.dates} · {item.company}
                  </p>
                </div>
              </div>

              <div className="project-tag-row">
                {item.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {TAG_LABELS[tag]}
                  </span>
                ))}
              </div>

              {item.description.map((line) => (
                <p key={line}>{line}</p>
              ))}

              {item.link && (
                <p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.linkLabel ?? 'View project'}
                  </a>
                </p>
              )}
            </article>
          ))
        )}
      </div>
    </SectionShell>
  )
}