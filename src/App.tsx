import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <section id="skills">
        <h2>Skills</h2>
        <p>
          Programming languages, development tools, infrastructure platforms, and engineering workflows used across web, backend, and game development work.
        </p>

        <div className="skill-grid">
          <article>
            <h3>Programming Languages</h3>
            <ul>
              <li>C++</li>
              <li>C</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>C#</li>
              <li>Swift</li>
              <li>HTML5</li>
              <li>CSS</li>
              <li>Java</li>
              <li>SQL</li>
              <li>Bash</li>
            </ul>
          </article>

          <article>
            <h3>Development Tools</h3>
            <ul>
              <li>Raylib</li>
              <li>SDL3</li>
              <li>Unity</li>
              <li>XCode</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>React</li>
              <li>Redux</li>
              <li>Git</li>
              <li>Ansible</li>
              <li>Jira</li>
              <li>Confluence</li>
            </ul>
          </article>

          <article>
            <h3>Data Storage & Infrastructure</h3>
            <ul>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>AWS S3</li>
              <li>CEPH S3</li>
              <li>DynamoDB</li>
              <li>Firestore</li>
              <li>MongoDB</li>
              <li>Kafka</li>
              <li>Clickhouse</li>
            </ul>
          </article>

          <article>
            <h3>Workflow and Methodologies</h3>
            <ul>
              <li>Version Control</li>
              <li>ECS Architecture</li>
              <li>State Machine AI</li>
              <li>AGILE Development</li>
              <li>Object Oriented Programming</li>
              <li>Unit/Integration Testing</li>
              <li>DevOps</li>
              <li>CI/CD</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="experience" className="section-shell">
        <h2>Experience</h2>
        <p>
          Professional experience across software engineering, infrastructure, and technical evaluation.
        </p>

        <div className="experience-list">
          <article>
            <div className="experience-heading">
              <div>
                <h3>Software Engineer (Co-op)</h3>
                <p className="experience-company">Netskrt Systems Inc.</p>
              </div>
              <p className="experience-meta">Sep 2024 — Aug 2025</p>
            </div>

            <ul>
              <li>Developed backend systems for CDN infrastructure using Python, Ansible, and Vector.</li>
              <li>Automated ops tasks with Bash scripts and TMUX, with comprehensive documentation for reproducibility.</li>
              <li>Worked with K8s, Kafka, Spark, Clickhouse, AWS S3/CEPH, and Postgres in a DevOps environment.</li>
            </ul>
          </article>

          <article>
            <div className="experience-heading">
              <div>
                <h3>Project Evaluator</h3>
                <p className="experience-company">Lighthouse Labs</p>
              </div>
              <p className="experience-meta">Sep 2019 — Apr 2020</p>
            </div>

            <ul>
              <li>Evaluated project submissions designed to teach students web development fundamentals (Javascript, CSS, HTML5) and popular web development frameworks (i.e React, Redux, Express).</li>
              <li>Invested in student success and provided thorough feedback and supporting resources.</li>
            </ul>
          </article>

          <article>
            <div className="experience-heading">
              <div>
                <h3>Software Engineer</h3>
                <p className="experience-company">Rival Technologies</p>
              </div>
              <p className="experience-meta">Sep 2018 — Dec 2019</p>
            </div>

            <ul>
              <li>Used React, Redux, Express, and SQL to maintain an enterprise market research web app.</li>
              <li>Worked flexibly, learning the basics of countless technologies along the way, establishing a reputation for adaptability and persistence.</li>
              <li>Coordinated closely with upper management, DevOps, QA, UX and other engineering teams to maintain and improve a market research web application using the AGILE process.</li>
            </ul>
          </article>
        </div>
      </section>

      <section id="projects" className="section-shell">
        <h2>Projects</h2>
        <p>
          Selected game development work across capstone, course, and jam projects.
        </p>

        <div className="project-list">
          <article>
            <div className="project-heading">
              <div>
                <h3>SyrupSaga</h3>
                <p className="project-meta-line">Sep 2025 — Present · Capstone Project</p>
              </div>
            </div>

            <p>
              Ongoing capstone project with regular updates. Solo-developed adventure RPG on a custom
              C++17 (Raylib) ECS engine including rendering, physics, collision, combat, AI, and UI
              systems built from scratch.
            </p>
            <p>
              Features procedural map graph generation, state machine-driven enemy and companion AI,
              combo-based combat, and a data-driven JSON entity pipeline.
            </p>
            <p>
              <a href="https://delainetan.itch.io/syrup-saga" target="_blank" rel="noopener noreferrer">
                Play on itch.io
              </a>
            </p>
          </article>

          <article>
            <div className="project-heading">
              <div>
                <h3>Last Harvest</h3>
                <p className="project-meta-line">Sep — Dec 2025 · Advanced Games Architecture Course (BCIT)</p>
              </div>
            </div>

            <p>
              Co-developed a 2D isometric base defense RTS in C++20 and SDL3 with a 3-person team on a
              custom ECS engine.
            </p>
            <p>
              Owned UI, scene management, resource management, and a placement system refactor that
              eliminated mode-switching crashes.
            </p>
            <p>
              <a href="https://delainetan.itch.io/last-harvest" target="_blank" rel="noopener noreferrer">
                Play on itch.io
              </a>
            </p>
          </article>

          <article>
            <div className="project-heading">
              <div>
                <h3>Immunity Reborn</h3>
                <p className="project-meta-line">Sep — Dec 2023 · Intro to Computer Games Development (BCIT)</p>
              </div>
            </div>

            <p>
              Developed enemy AI, wave spawning, and level design for a 3D survival action RPG in Unity.
            </p>
            <p>
              Handled SFX/VFX, music, and balance systems.
            </p>
            <p>
              <a href="https://delainetan.itch.io/immunity-reborn" target="_blank" rel="noopener noreferrer">
                Play on itch.io
              </a>
            </p>
          </article>

          <article>
            <div className="project-heading">
              <div>
                <h3>Recent Game Jams</h3>
                <p className="project-meta-line">2024 — Present · Itch.io</p>
              </div>
            </div>

            <ul className="jam-list">
              <li>
                <strong>Ori and the Blue Ocean</strong> — Gone Fishing Game Jam 2026, Godot Engine. 2D fishing
                game; worked on sound and gameplay systems.
              </li>
              <li>
                <strong>Sloshed Simian</strong> — Global Game Jam 2026, Unity. Top-down adventure game;
                sole programmer plus game designer.
              </li>
              <li>
                <strong>BattleGhoti</strong> — Global Game Jam 2025, Unity. Fishing gacha battler with
                collection gallery and tug-of-war battles; game designer, systems architecture, and gameplay
                balance.
              </li>
              <li>
                <strong>Hakuna Banana</strong> — Global Game Jam 2024, Unity. Humorous 2D turn-based
                platformer; implemented state machine, turn manager, and gameplay polish.
              </li>
            </ul>

            <p>
              <a href="https://delainetan.itch.io/" target="_blank" rel="noopener noreferrer">
                Browse all games
              </a>
            </p>
          </article>
        </div>
      </section>

      <section id="education" className="section-shell">
        <h2>Education</h2>
        <p>
          Academic background in computer science, game development, and computer systems.
        </p>

        <div className="education-list">
          <article>
            <div className="education-heading">
              <div>
                <h3>British Columbia Institute of Technology</h3>
                <p className="education-qualification">
                  BSc in Applied Computer Science - Game Development Option
                </p>
              </div>
              <p className="education-meta">Sep 2023 — Apr 2026</p>
            </div>
            <p>
              Learned game design, game development, higher-level mathematics, physics, advanced computing
              skills and theoretical knowledge.
            </p>
          </article>

          <article>
            <div className="education-heading">
              <div>
                <h3>British Columbia Institute of Technology</h3>
                <p className="education-qualification">
                  Computer Systems Technology Diploma
                </p>
              </div>
              <p className="education-meta">Sep 2021 — Apr 2023</p>
            </div>
            <p>
              Learned computer systems theory, with hands-on practical experience in software development.
            </p>
          </article>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>

          <h2>Connect with me</h2>
          <p>Code, games, and contact.</p>

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
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
