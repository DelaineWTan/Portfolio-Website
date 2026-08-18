export type SkillGroup = {
    title: string
    items: string[]
}

export type ExperienceItem = {
    title: string
    company: string
    dates: string
    bullets: string[]
    logo?: string
    logoAlt?: string
}

export type ProjectTag =
    | 'game-jam'
    | 'playable-web'
    | 'unity'
    | 'godot'
    | 'custom-engine'
    | 'cpp'
    | 'raylib'
    | 'sdl3'
    | 'solo'
    | 'team'

export type ProjectItem = {
    name: string
    dates: string
    company: string
    link?: string
    linkLabel?: string
    description: string[]
    tags: ProjectTag[]
    thumbnail?: string
    thumbnailAlt?: string
}

export type EducationItem = {
    company: string
    dates: string
    qualification: string
    honours?: string
    description: string | string[]
    link?: string
}

export const skillGroups: SkillGroup[] = [
    {
        title: 'Programming Languages',
        items: ['C++', 'C#', 'C', 'Python', 'JavaScript', 'TypeScript', 'HTML5', 'CSS', 'Java', 'SQL', 'Bash', 'Swift', 'GDScript'],
    },
    {
        title: 'Development Tools',
        items: ['React', 'Redux', 'Git', 'Node.js', 'Express', 'Jest', 'Cypress', 'UnityEngine', 'Godot', 'Raylib', 'SDL3', 'XCode', 'Perforce', 'Ansible', 'Jira', 'Confluence', 'Trello'],
    },
    {
        title: 'Data Storage & Infrastructure',
        items: ['PostgreSQL', 'MySQL', 'AWS S3', 'CEPH S3', 'DynamoDB', 'Firestore', 'MongoDB', 'Kafka', 'Clickhouse', 'Spark', 'Kubernetes', 'Docker', 'Vector'],
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
        logo: '/images/logos/netskrt.png',
        logoAlt: 'Netskrt Systems logo',
        bullets: [
            'Trusted by my supervisor to open the company\'s annual international conference as the first presenter, delivering a D3.js visualization of the full production CDN infrastructure to an audience including C-suite executives and global employees.',
            'During a critical infrastructure crisis, proactively took full ownership without being asked, working late nights and through the weekend to migrate terabytes of log data from failing HDFS storage, iterating from single-file transfers to parallel TMUX batching, then building Bash scripts and cron jobs to automate daily S3 backups.',
            'Developed backend tooling using Python and Ansible in a production environment with Kubernetes, Kafka, ClickHouse, AWS S3, CEPH, and PostgreSQL, with day-to-day responsibilities centered on performance monitoring, debugging, and log analysis at terabyte scale.',
            'Researched workflow orchestration solutions, built a functioning Argo Workflows prototype, and presented findings to the engineering team at a monthly meeting.',
        ],
    },
    {
        title: 'Project Evaluator',
        company: 'Lighthouse Labs',
        dates: 'Sep 2019 — Apr 2020',
        logo: '/images/logos/lighthouse.png',
        logoAlt: 'Lighthouse Labs logo',
        bullets: [
            'Evaluated student projects across JavaScript, React, Redux, and Express, compressing technical expertise into feedback that helped students understand not just what was wrong but why, and how to improve.',
            'Developed a reputation for thorough, constructive feedback that went beyond the rubric, reflecting an instinct for knowledge transfer and mentorship carried into every role since.',
        ],
    },
    {
        title: 'Software Engineer',
        company: 'Rival Technologies',
        dates: 'Sep 2018 — Dec 2019',
        logo: '/images/logos/rivaltech.png',
        logoAlt: 'Rival Technologies logo',
        bullets: [
            'Hired before finishing my bootcamp after making a strong enough impression at a job fair speed interview that two team leads reached out immediately after to continue the conversation, eventually becoming lasting mentors and referrals.',
            'Progressed from frontend engineer to full stack contributor in under two years, gaining independence on important features remarkably quickly, including pair programming with senior engineers who became lasting mentors.',
            'Sole engineer to successfully debug a critical piece of legacy software that predated the entire current team, with no documentation and no colleagues who remembered the codebase, methodically working through unfamiliar code until the issue was resolved.',
            'Maintained and extended an enterprise SaaS market research web application using React, Redux, Express, and SQL, coordinating across DevOps, QA, UX, and engineering teams following Agile processes.',
        ],
    },
]

export const educationItems: EducationItem[] = [
    {
        company: 'British Columbia Institute of Technology',
        dates: 'Sep 2023 — Apr 2026',
        qualification: 'BSc in Applied Computer Science - Game Development Option',
        honours: 'With Distinction | GPA 91',
        description: [
            'Studied game development through advanced software engineering, mathematics, physics, graphics, and systems-focused computing. Coursework highlights include Advanced Games Architecture, Advanced Games Programming Techniques, Artificial Intelligence, Games Design Fundamentals, Project Management, and Interaction Design.',
            'Naturally assumed project leadership across every group assignment, scoping work, setting incremental milestones, and investing in teammates who were struggling, consistently delivering smoothly while most other groups scrambled under pressure.',
        ],
        link: 'https://www.bcit.ca/programs/applied-computer-science-games-development-option-bachelor-of-science-full-time-867absc/',
    },
    {
        company: 'British Columbia Institute of Technology',
        dates: 'Sep 2021 — Apr 2023',
        qualification: 'Computer Systems Technology Diploma - Predictive Analytics Option',
        honours: 'With Distinction | GPA 88',
        description: [
            'Built a strong foundation in software development, computer systems, algorithms, databases, networking, and applied programming.',
            'Completed a three-course Predictive Analytics specialization with near-perfect grades: Predictive Modelling (100%), Predictive Machine Learning (100%), and Big Data Analytics Methods (98%), covering SVMs, neural networks, CNNs, LSTMs, time series analysis, and PySpark.',
        ],
        link: 'https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma/',
    },
]

export const projectItems: ProjectItem[] = [
    {
        name: 'SyrupSaga',
        dates: 'Sep 2025 — Present',
        company: 'Capstone Project',
        link: 'https://delainetan.itch.io/syrup-saga',
        linkLabel: 'Play on itch.io',
        description: [
            'Solo-built a complete adventure RPG and a custom C++17 game engine simultaneously from scratch, with no off-the-shelf systems to lean on — producing a result that held its own against and in several respects surpassed classmates\' projects built on Unity and Unreal.',
            'Engine covers rendering, physics, collision, a custom ECS architecture, state machine AI for enemies and companions, real-time action combat, rule-based randomized map graph generation, and a full custom UI suite built without any framework.',
            'All game content including enemy types, quests, and class skills defined in JSON and hot-loaded through typed registries, enabling zero-recompile iteration across a data pipeline mature enough to scale.',
            'Playtest key: alphatest',
        ],
        tags: ['custom-engine', 'cpp', 'raylib', 'solo'],
        thumbnail: '/images/projects/syrup-saga.png',
        thumbnailAlt: 'SyrupSaga project screenshot',
    },
    {
        name: 'Last Harvest',
        dates: 'Sep — Dec 2025',
        company: 'Advanced Games Architecture Course (BCIT)',
        link: 'https://delainetan.itch.io/last-harvest',
        linkLabel: 'Play on itch.io',
        description: [
            'Applied engine architecture knowledge from Syrup Saga to rapidly bootstrap a custom C++20/SDL3 ECS engine for a completely different genre — a 2D isometric base defense RTS with distinct control schemes and camera systems.',
            'Owned UI, scene management, resource management, and led a placement system refactor that eliminated a class of mode-switching crashes.',
        ],
        tags: ['custom-engine', 'cpp', 'sdl3', 'team'],
        thumbnail: '/images/projects/last-harvest.png',
        thumbnailAlt: 'Last Harvest project screenshot',
    },
    {
        name: 'Immunity Reborn',
        dates: 'Sep — Dec 2023',
        company: 'Intro to Computer Games Development (BCIT)',
        link: 'https://delainetan.itch.io/immunity-reborn',
        linkLabel: 'Play on itch.io',
        description: [
            'Shipped a fully complete 3D survival action RPG over 4 months with a 3-person team, delivering multiple enemy types, 4 bosses, and 5 fully fleshed levels — having entered the project with almost no prior Unity experience.',
            'Engineered core gameplay systems including enemy AI, wave spawning, and progression, designed and balanced all levels across multiple difficulties with scripted enemy sequences, and handled the full audio and VFX pass.',
        ],
        tags: ['unity', 'team'],
        thumbnail: '/images/projects/immunity-reborn.png',
        thumbnailAlt: 'Immunity Reborn project screenshot',
    },
    {
        name: 'Ori and the Blue Ocean',
        dates: '2026',
        company: 'Gone Fishing Game Jam 2026',
        description: ['2D fishing game completed in 24 hours; contributed sound design and gameplay systems.'],
        tags: ['game-jam', 'godot', 'team', 'playable-web'],
        thumbnail: '/images/projects/ori-and-the-blue-ocean.png',
        thumbnailAlt: 'Ori and the Blue Ocean project screenshot',
    },
    {
        name: 'Sloshed Simian',
        dates: '2026',
        company: 'Global Game Jam 2026',
        description: ['Top-down adventure game completed in 48 hours; sole programmer and primary creative driver, working alongside experienced industry professionals in game design and UI.'],
        tags: ['game-jam', 'unity', 'solo', 'playable-web'],
        thumbnail: '/images/projects/sloshed-simian.png',
        thumbnailAlt: 'Sloshed Simian project screenshot',
    },
    {
        name: 'BattleGhoti',
        dates: '2025',
        company: 'Global Game Jam 2025',
        description: ['Fishing gacha battler with collection gallery and tug-of-war battles completed in 48 hours; led systems architecture, gameplay balance, and game design.'],
        tags: ['game-jam', 'unity', 'team', 'playable-web'],
        thumbnail: '/images/projects/battleghoti.png',
        thumbnailAlt: 'BattleGhoti project screenshot',
    },
    {
        name: 'Hakuna Banana',
        dates: '2024',
        company: 'Global Game Jam 2024',
        description: ['Humorous 2D turn-based platformer completed in 48 hours; implemented state machine, turn manager, and gameplay polish while contributing to game design.'],
        tags: ['game-jam', 'unity', 'team', 'playable-web'],
        thumbnail: '/images/projects/hakuna-banana.png',
        thumbnailAlt: 'Hakuna Banana project screenshot',
    },
]
