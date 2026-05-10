import './App.css'
import {
  skillGroups,
  experienceItems,
  educationItems,
  projectItems,
  gameJamItems,
} from './content/resume'
import { SkillsSection } from './components/SkillsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { EducationSection } from './components/EducationSection'
import { ProjectsSection } from './components/ProjectsSection'

function App() {
  return (
    <div className="app-shell">
      <main className="page-content">
        <header className="section-shell site-header">
          <p className="eyebrow">Vancouver, BC</p>
          <h1>Delaine Tan</h1>
          <p className="site-title">Game &amp; Software Engineer</p>
          <p className="site-summary">
            Software engineer focused on game systems, backend infrastructure, and gameplay architecture.
          </p>

          <div id="social">
            <ul>
              <li>
                <a href="https://github.com/DelaineWTan" target="_blank" rel="noopener noreferrer">
                  <svg className="button-icon" aria-hidden="true">
                    <use href="/icons.svg#github-icon"></use>
                  </svg>
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://delainetan.itch.io" target="_blank" rel="noopener noreferrer">
                  <svg className="button-icon" aria-hidden="true" viewBox="0 0 24 24">
                    <use href="/icons.svg#itchio-icon" />
                  </svg>
                  itch.io
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/delaine-tan" target="_blank" rel="noopener noreferrer">
                  <svg className="button-icon" aria-hidden="true">
                    <use href="/icons.svg#linkedin-icon"></use>
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:dtan32@my.bcit.ca" target="_blank" rel="noopener noreferrer">
                  <svg className="button-icon" aria-hidden="true">
                    <use href="/icons.svg#envelope-icon"></use>
                  </svg>
                  Email
                </a>
              </li>
            </ul>
          </div>
        </header>
        <SkillsSection items={skillGroups} />
        <ExperienceSection items={experienceItems} />
        <EducationSection items={educationItems} />
        <ProjectsSection items={projectItems} gameJams={gameJamItems} />
      </main>
    </div>
  )
}

export default App
