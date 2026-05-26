import { useMemo, useState } from 'react'
import { SectionShell } from './SectionShell'
import styles from './ProjectsSection.module.css'
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
      current.includes(tag) ? current.filter((t) => t !== tag) : [...current, tag]
    )
  }

  const filteredItems = useMemo(() => {
    if (activeTags.length === 0) return items
    return items.filter((item) => activeTags.every((tag) => item.tags.includes(tag)))
  }, [items, activeTags])

  return (
    <SectionShell
      id="projects"
      title="Projects"
      intro="Selected game development work across capstone, course, and jam projects."
    >
      <div className={styles.filterPanel}>
        <span className={styles.filterLabel}>Filters:</span>
        <div className={styles.projectFilters} role="group" aria-label="Project filters">
          {FILTERS.map((filter) => {
            const active = activeTags.includes(filter.key)
            return (
              <button
                key={filter.key}
                type="button"
                className={active ? `${styles.filterChip} ${styles.pillActive}` : styles.filterChip}
                onClick={() => toggleTag(filter.key)}
                aria-pressed={active}
              >
                {filter.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className={styles.projectList}>
        {filteredItems.length === 0 ? (
          <p className={styles.emptyState}>No projects match the selected filters.</p>
        ) : (
          filteredItems.map((item) => (
            <article key={item.name} className={styles.projectCard}>
              {item.thumbnail && (
                <a
                  className={styles.thumbnailWrap}
                  href={item.link ?? '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.linkLabel ?? `${item.name} project link`}
                >
                  <img
                    className={styles.thumbnail}
                    src={item.thumbnail}
                    alt={item.thumbnailAlt ?? item.name}
                    loading="lazy"
                  />
                </a>
              )}

              <div className={styles.projectBody}>
                <div className={styles.projectHeading}>
                  <div>
                    <h3 className={styles.projectTitle}>{item.name}</h3>
                    <p className={styles.projectMetaLine}>
                      {item.dates} · {item.company}
                    </p>
                  </div>
                </div>

                <div className={styles.projectTagRow}>
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className={
                        activeTags.includes(tag)
                          ? `${styles.projectTag} ${styles.pillActive}`
                          : styles.projectTag
                      }
                    >
                      {TAG_LABELS[tag]}
                    </span>
                  ))}
                </div>

                {item.description.map((line) => (
                  <p key={line} className={styles.projectDescription}>
                    {line}
                  </p>
                ))}

                {item.link && (
                  <p className={styles.projectLinkWrap}>
                    <a
                      className={styles.projectLink}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.linkLabel ?? 'View project'}
                    </a>
                  </p>
                )}
              </div>
            </article>
          ))
        )}
      </div>
    </SectionShell>
  )
}