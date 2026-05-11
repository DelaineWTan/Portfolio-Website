import './App.css'
import {
  skillGroups,
  experienceItems,
  educationItems,
  projectItems,
  gameJamItems,
} from './content/resume'
import { Header } from './components/Header'
import { SkillsSection } from './components/SkillsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { EducationSection } from './components/EducationSection'
import { ProjectsSection } from './components/ProjectsSection'

function App() {
  return (
    <div className="app-shell">
      <main className="page-content">
        <Header/>
        <SkillsSection items={skillGroups} />
        <ExperienceSection items={experienceItems} />
        <ProjectsSection items={projectItems} gameJams={gameJamItems} />
        <EducationSection items={educationItems} />
      </main>
    </div>
  )
}

export default App
