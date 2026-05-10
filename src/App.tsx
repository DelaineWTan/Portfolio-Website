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
    <>
      <SkillsSection items={skillGroups} />
      <ExperienceSection items={experienceItems} />
      <EducationSection items={educationItems} />
      <ProjectsSection items={projectItems} gameJams={gameJamItems} />
    </>
  )
}

export default App
