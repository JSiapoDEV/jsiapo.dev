export type Locale = "en" | "es";

export const links = {
  linkedin: "https://www.linkedin.com/in/jsiapo/",
  github: "https://github.com/JSiapoDEV",
  gitlab: "https://gitlab.com/JSiapoDEV",
  cv: "/Jose-Siapo-Rodriguez-CV.pdf",
};

export const profile = {
  name: "José Siapo Rodríguez",
  location: {
    en: "Peru",
    es: "Perú",
  },
  nav: {
    en: {
      summary: "Profile",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      cv: "View Resume",
      lang: "ES",
      langUrl: "/es/",
    },
    es: {
      summary: "Perfil",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Skills",
      cv: "Ver CV",
      lang: "EN",
      langUrl: "/en/",
    },
  },
  hero: {
    en: {
      eyebrow: "Architecture · Delivery · Mentoring · AI workflows",
      title: "Technical Leadership Through Hands-On Engineering",
      intro:
        "6+ years building production systems, coordinating delivery, mentoring developers, modernizing platforms, and automating engineering workflows with AI.",
      cv: "View Resume",
      linkedin: "LinkedIn",
      github: "GitHub",
      gitlab: "GitLab",
    },
    es: {
      eyebrow: "Arquitectura · Entrega · Mentoría · Flujos con IA",
      title: "Liderazgo técnico desde la ingeniería práctica",
      intro:
        "Más de 6 años construyendo sistemas productivos, coordinando entregas, mentoreando desarrolladores, modernizando plataformas y automatizando flujos de ingeniería con IA.",
      cv: "Ver CV",
      linkedin: "LinkedIn",
      github: "GitHub",
      gitlab: "GitLab",
    },
  },
  proof: {
    en: [
      { value: "6+", label: "years building production software" },
      { value: "3+", label: "years coordinating technical delivery" },
      { value: "50%+", label: "recurring workflow automated with MCP tooling" },
    ],
    es: [
      { value: "6+", label: "años construyendo software productivo" },
      { value: "3+", label: "años coordinando entregas técnicas" },
      { value: "50%+", label: "de flujo recurrente automatizado con tooling MCP" },
    ],
  },
  summary: {
    en: {
      label: "Profile",
      title: "I work where systems, delivery, and engineering practice meet.",
      paragraphs: [
        "I build and modernize production services with Node.js, TypeScript, AWS, CI/CD pipelines, automated testing, and observability practices.",
        "Beyond implementation, I coordinate technical delivery across development, QA, architecture, security, infrastructure, and business teams. I mentor developers, standardize engineering practices, and introduce AI-assisted workflows using agents, skills, and MCP servers to reduce operational friction.",
      ],
    },
    es: {
      label: "Perfil",
      title: "Trabajo donde se cruzan sistemas, entrega y práctica de ingeniería.",
      paragraphs: [
        "Construyo y modernizo servicios productivos con Node.js, TypeScript, AWS, pipelines CI/CD, pruebas automatizadas y prácticas de observabilidad.",
        "Además de implementar, coordino entregas técnicas con desarrollo, QA, arquitectura, seguridad, infraestructura y negocio. Mentoreo desarrolladores, estandarizo prácticas e introduzco flujos asistidos por IA usando agentes, skills y servidores MCP para reducir fricción operativa.",
      ],
    },
  },
  experience: {
    en: {
      label: "Experience",
      title: "Selected work history",
      items: [
        {
          company: "Softtek · Rimac Seguros",
          role: "Senior Backend Developer",
          period: "Jan 2025 - Present",
          bullets: [
            "Modernizes Rimac's microservices ecosystem by upgrading Node.js and TypeScript repositories for compatibility, security, and maintainability.",
            "Coordinates with architecture, security, infrastructure, development, and DevSecOps teams to support branch standardization, CI/CD configuration, scans, and automated deployments.",
            "Designed and implemented a custom MCP server with GitHub Copilot Enterprise to automate repository analysis and recurring operational tasks, automating more than 50% of a blocked workflow.",
          ],
        },
        {
          company: "YAWI",
          role: "Mobile Technical Lead and Developer Analyst",
          period: "Nov 2021 - Dec 2024",
          bullets: [
            "Led the mobile engineering front for Agritracer Neo, coordinating sprint delivery and technical decisions for one of the company's main products.",
            "Guided key technical decisions such as the migration to Jetpack Compose and Kotlin 2.0, evaluating impact, complexity, and implementation priority.",
            "Designed backend services with Node.js, TypeScript, Clean Architecture, AWS Lambda, API Gateway, CloudWatch, S3, and DynamoDB.",
          ],
        },
        {
          company: "CEINTEC",
          role: "Full Stack Developer Analyst",
          period: "Aug 2020 - Oct 2021",
          bullets: [
            "Led development of an e-commerce platform in React and two mobile applications for Opticenter Vision, coordinating with multidisciplinary teams.",
            "Implemented backend services with Node.js, TypeScript, Express, and PostgreSQL.",
            "Managed servers, databases, and CI/CD processes for efficient deployments.",
          ],
        },
      ],
    },
    es: {
      label: "Experiencia",
      title: "Experiencia seleccionada",
      items: [
        {
          company: "Softtek · Rimac Seguros",
          role: "Analista Desarrollador Backend Senior",
          period: "Ene 2025 - Actualidad",
          bullets: [
            "Modernizo el ecosistema de microservicios de Rimac actualizando repositorios Node.js y TypeScript para mejorar compatibilidad, seguridad y mantenibilidad.",
            "Coordino con arquitectura, seguridad, infraestructura, desarrollo y DevSecOps para apoyar estandarización de ramas, CI/CD, escaneos y despliegues automatizados.",
            "Diseñé e implementé un servidor MCP personalizado con GitHub Copilot Enterprise para automatizar análisis de repositorios y tareas operativas recurrentes, automatizando más del 50% de un flujo bloqueado.",
          ],
        },
        {
          company: "YAWI",
          role: "Líder Técnico Mobile y Analista Desarrollador",
          period: "Nov 2021 - Dic 2024",
          bullets: [
            "Lideré el frente técnico mobile de Agritracer Neo, coordinando entregas por sprint y decisiones técnicas para uno de los principales productos de la empresa.",
            "Guié decisiones técnicas clave como la migración a Jetpack Compose y Kotlin 2.0, evaluando impacto, complejidad y prioridad.",
            "Diseñé servicios backend con Node.js, TypeScript, Clean Architecture, AWS Lambda, API Gateway, CloudWatch, S3 y DynamoDB.",
          ],
        },
        {
          company: "CEINTEC",
          role: "Analista Desarrollador Full Stack",
          period: "Ago 2020 - Oct 2021",
          bullets: [
            "Lideré el desarrollo de un e-commerce en React y dos aplicaciones móviles para Opticenter Vision, coordinando con equipos multidisciplinarios.",
            "Implementé servicios backend con Node.js, TypeScript, Express y PostgreSQL.",
            "Gestioné servidores, bases de datos y procesos CI/CD para despliegues eficientes.",
          ],
        },
      ],
    },
  },
  projects: {
    en: {
      label: "Personal Projects",
      title: "Selected engineering work",
      intro:
        "A small selection of personal projects that show product thinking, tooling, and practical engineering beyond day-to-day delivery.",
      items: [
        {
          name: "FinHub",
          description:
            "Personal finance and investment tooling focused on turning financial activity into clearer decisions through structured data, automation, and analysis.",
          tags: ["Product engineering", "Finance data", "Automation"],
        },
        {
          name: "MD2PDF",
          description:
            "Developer tool for converting Markdown into polished PDF documents, focused on practical document generation workflows.",
          tags: ["Developer tooling", "Markdown", "PDF workflows"],
        },
      ],
    },
    es: {
      label: "Proyectos personales",
      title: "Trabajo de ingeniería seleccionado",
      intro:
        "Una selección pequeña de proyectos personales que muestran criterio de producto, tooling e ingeniería práctica más allá de la entrega diaria.",
      items: [
        {
          name: "FinHub",
          description:
            "Proyecto personal de finanzas e inversiones enfocado en convertir actividad financiera en decisiones más claras mediante datos estructurados, automatización y análisis.",
          tags: ["Producto", "Datos financieros", "Automatización"],
        },
        {
          name: "MD2PDF",
          description:
            "Herramienta para convertir Markdown en documentos PDF pulidos, enfocada en flujos prácticos de generación documental.",
          tags: ["Tooling", "Markdown", "PDF"],
        },
      ],
    },
  },
  skills: {
    en: {
      label: "Capabilities",
      title: "Core strengths",
      groups: [
        {
          name: "Technical coordination",
          items: ["Delivery planning", "Developer mentoring", "Cross-functional work", "Engineering standards"],
        },
        {
          name: "Backend architecture",
          items: ["Node.js", "TypeScript", "NestJS", "REST APIs", "Microservices", "Clean Architecture"],
        },
        {
          name: "Cloud & reliability",
          items: ["AWS Lambda", "API Gateway", "S3", "CloudWatch", "Docker", "CI/CD"],
        },
        {
          name: "AI-assisted engineering",
          items: ["MCP servers", "AI agents", "Skills", "GitHub Copilot workflows", "Repository automation"],
        },
      ],
    },
    es: {
      label: "Capacidades",
      title: "Fortalezas principales",
      groups: [
        {
          name: "Coordinación técnica",
          items: ["Planificación de entregas", "Mentoría", "Trabajo cross-functional", "Estándares de ingeniería"],
        },
        {
          name: "Arquitectura backend",
          items: ["Node.js", "TypeScript", "NestJS", "REST APIs", "Microservicios", "Clean Architecture"],
        },
        {
          name: "Cloud y confiabilidad",
          items: ["AWS Lambda", "API Gateway", "S3", "CloudWatch", "Docker", "CI/CD"],
        },
        {
          name: "Ingeniería asistida por IA",
          items: ["Servidores MCP", "Agentes IA", "Skills", "GitHub Copilot workflows", "Automatización de repositorios"],
        },
      ],
    },
  },
  footer: {
    en: "Focused on architecture, technical delivery, and AI-assisted engineering.",
    es: "Enfoque en arquitectura, entrega técnica e ingeniería asistida por IA.",
  },
} as const;
