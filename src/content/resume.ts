export type SkillGroup = {
    title: string
    items: string[]
}

export type ExperienceItem = {
    title: string
    company: string
    dates: string
    bullets: string[]
}

export type ProjectItem = {
    name: string
    dates: string
    company: string
    link: string
    description: string[]
}

export type EducationItem = {
    company: string
    dates: string
    qualification: string
    description: string
}

export const skillGroups: SkillGroup[] = [
    {
        title: 'Programming Languages',
        items: ['C++', 'C', 'Python', 'JavaScript', 'C#', 'Swift', 'HTML5', 'CSS', 'Java', 'SQL', 'Bash'],
    },
    {
        title: 'Development Tools',
        items: ['Raylib', 'SDL3', 'Unity', 'XCode', 'Node.js', 'Express', 'React', 'Redux', 'Git', 'Ansible', 'Jira', 'Confluence'],
    },
    {
        title: 'Data Storage & Infrastructure',
        items: ['PostgreSQL', 'MySQL', 'AWS S3', 'CEPH S3', 'DynamoDB', 'Firestore', 'MongoDB', 'Kafka', 'Clickhouse'],
    },
    {
        title: 'Workflow and Methodologies',
        items: ['Version Control', 'ECS Architecture', 'State Machine AI', 'AGILE Development', 'Object Oriented Programming', 'Unit/Integration Testing', 'DevOps', 'CI/CD'],
    },
]

export const experienceItems: ExperienceItem[] = [
    {
        title: 'Software Engineer (Co-op)',
        company: 'Netskrt Systems Inc.',
        dates: 'Sep 2024 — Aug 2025',
        bullets: [
            'Developed backend systems for CDN infrastructure using Python, Ansible, and Vector.',
            'Automated ops tasks with Bash scripts and TMUX, with comprehensive documentation for reproducibility.',
            'Worked with K8s, Kafka, Spark, Clickhouse, AWS S3/CEPH, and Postgres in a DevOps environment.',
        ],
    },
    {
        title: 'Project Evaluator',
        company: 'Lighthouse Labs',
        dates: 'Sep 2019 — Apr 2020',
        bullets: [
            'Evaluated project submissions designed to teach students web development fundamentals (JavaScript, CSS, HTML5) and popular web development frameworks (i.e React, Redux, Express).',
            'Invested in student success and provided thorough feedback and supporting resources.',
        ],
    },
    {
        title: 'Software Engineer',
        company: 'Rival Technologies',
        dates: 'Sep 2018 — Dec 2019',
        bullets: [
            'Used React, Redux, Express, and SQL to maintain an enterprise market research web app.',
            'Worked flexibly, learning the basics of countless technologies along the way, establishing a reputation for adaptability and persistence.',
            'Coordinated closely with upper management, DevOps, QA, UX and other engineering teams to maintain and improve a market research web application using the AGILE process.',
        ],
    },
]

export const educationItems: EducationItem[] = [
    {
        company: 'British Columbia Institute of Technology',
        dates: 'Sep 2023 — Apr 2026',
        qualification: 'BSc in Applied Computer Science - Game Development Option',
        description: 'Learned game design, game development, higher-level mathematics, physics, advanced computing skills and theoretical knowledge.',
    },
    {
        company: 'British Columbia Institute of Technology',
        dates: 'Sep 2021 — Apr 2023',
        qualification: 'Computer Systems Technology Diploma',
        description: 'Learned computer systems theory, with hands-on practical experience in software development.',
    },
]

export const projectItems: ProjectItem[] = [
    {
        name: 'SyrupSaga',
        dates: 'Sep 2025 — Present',
        company: 'Capstone Project',
        link: 'https://delainetan.itch.io/syrup-saga',
        description: [
            'Ongoing capstone project with regular updates. Solo-developed adventure RPG on a custom C++17 (Raylib) ECS engine including rendering, physics, collision, combat, AI, and UI systems built from scratch.',
            'Features procedural map graph generation, state machine-driven enemy and companion AI, combo-based combat, and a data-driven JSON entity pipeline.',
        ],
    },
    {
        name: 'Last Harvest',
        dates: 'Sep — Dec 2025',
        company: 'Advanced Games Architecture Course (BCIT)',
        link: 'https://delainetan.itch.io/last-harvest',
        description: [
            'Co-developed a 2D isometric base defense RTS in C++20 and SDL3 with a 3-person team on a custom ECS engine.',
            'Owned UI, scene management, resource management, and a placement system refactor that eliminated mode-switching crashes.',
        ],
    },
    {
        name: 'Immunity Reborn',
        dates: 'Sep — Dec 2023',
        company: 'Intro to Computer Games Development (BCIT)',
        link: 'https://delainetan.itch.io/immunity-reborn',
        description: [
            'Developed enemy AI, wave spawning, and level design for a 3D survival action RPG in Unity.',
            'Handled SFX/VFX, music, and balance systems.',
        ],
    },
]

export const gameJamItems = [
    {
        name: 'Ori and the Blue Ocean',
        event: 'Gone Fishing Game Jam 2026',
        engine: 'Godot Engine',
        summary: '2D fishing game; worked on sound and gameplay systems.',
    },
    {
        name: 'Sloshed Simian',
        event: 'Global Game Jam 2026',
        engine: 'Unity',
        summary: 'Top-down adventure game; sole programmer plus game designer.',
    },
    {
        name: 'BattleGhoti',
        event: 'Global Game Jam 2025',
        engine: 'Unity',
        summary: 'Fishing gacha battler with collection gallery and tug-of-war battles; game designer, systems architecture, and gameplay balance.',
    },
    {
        name: 'Hakuna Banana',
        event: 'Global Game Jam 2024',
        engine: 'Unity',
        summary: 'Humorous 2D turn-based platformer; implemented state machine, turn manager, and gameplay polish.',
    },
]
