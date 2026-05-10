type Props = {
  id: string
  title: string
  intro: string
  children: React.ReactNode
}

export function SectionShell({ id, title, intro, children }: Props) {
  return (
    <section id={id} className="section-shell">
      <h2>{title}</h2>
      <p>{intro}</p>
      {children}
    </section>
  )
}
