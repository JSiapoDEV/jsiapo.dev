export type Locale = "en" | "es";

export const links = {
  linkedin: "https://www.linkedin.com/in/jsiapo/",
  github: "https://github.com/JSiapoDEV",
  gitlab: "https://gitlab.com/JSiapoDEV",
  cv: "/jose-siapo-cv.pdf",
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
      cv: "Download CV",
      lang: "ES",
      langUrl: "/es/",
    },
    es: {
      summary: "Perfil",
      experience: "Experiencia",
      projects: "Proyectos",
      skills: "Habilidades",
      cv: "Descargar CV",
      lang: "EN",
      langUrl: "/en/",
    },
  },
  hero: {
    en: {
      eyebrow: "AI Coding Governance · Architecture · Delivery · Security",
      title: "Technical leadership for AI-assisted engineering",
      intro:
        "6+ years building production systems, formal Tech Lead experience at YAWI, and current hands-on work shaping safer AI Coding workflows with agents, skills, MCP servers, and engineering standards.",
      cv: "Download CV",
      linkedin: "LinkedIn",
      github: "GitHub",
      gitlab: "GitLab",
    },
    es: {
      eyebrow: "AI Coding · Arquitectura · Seguridad",
      title: "Liderazgo técnico para AI Coding",
      intro:
        "Más de 6 años construyendo sistemas productivos, experiencia formal como Tech Lead en YAWI y trabajo actual con agentes, skills, MCP y estándares de ingeniería.",
      cv: "Descargar CV",
      linkedin: "LinkedIn",
      github: "GitHub",
      gitlab: "GitLab",
    },
  },
  proof: {
    en: [
      { value: "6+", label: "years building production software" },
      { value: "3+", label: "years coordinating technical delivery" },
      { value: "50%+", label: "blocked workflow automated with MCP and agents" },
    ],
    es: [
      { value: "6+", label: "años construyendo software productivo" },
      { value: "3+", label: "años coordinando entregas técnicas" },
      { value: "50%+", label: "de un flujo bloqueado automatizado con MCP y agentes" },
    ],
  },
  summary: {
    en: {
      label: "Profile",
      title: "I work where systems, delivery, and engineering governance meet.",
      paragraphs: [
        "I build and modernize production systems where reliability, maintainability, traceability, and delivery coordination matter.",
        "I was Mobile Tech Lead at YAWI, leading delivery, technical decisions, standards, and mentoring for one of the company's main products. Today, as a Senior Backend Developer at Softtek/Rimac, I coordinate with development, QA, architecture, security, infrastructure, DevSecOps, and business teams in a regulated enterprise environment.",
        "I help teams adopt AI Coding tools in a controlled way: defining standards, designing agents and instructions, reusing artifacts, and keeping security, versioning, and technical review visible.",
      ],
    },
    es: {
      label: "Perfil",
      title: "Trabajo donde se cruzan sistemas, entrega y gobierno de ingeniería.",
      paragraphs: [
        "Construyo y modernizo sistemas productivos donde importan la confiabilidad, la mantenibilidad, la trazabilidad y la coordinación de entrega.",
        "Fui Tech Lead Mobile en YAWI, liderando entregas, decisiones técnicas, estándares y mentoring para uno de los principales productos de la empresa. Hoy, como Backend Senior en Softtek/Rimac, coordino con desarrollo, QA, arquitectura, seguridad, infraestructura, DevSecOps y negocio en un entorno enterprise regulado.",
        "Ayudo a equipos a adoptar herramientas de AI Coding de forma controlada: definiendo estándares, diseñando agentes e instrucciones, reutilizando artefactos y manteniendo visibles seguridad, versionamiento y revisión técnica.",
      ],
    },
  },
  operating: {
    en: {
      label: "AI Governance",
      title: "How I help teams adopt AI Coding responsibly",
      intro:
        "My strongest contribution is turning individual AI experiments into reusable, reviewable, and secure engineering practice.",
      items: [
        {
          title: "Standards and catalog",
          description:
            "Define reusable artifacts, naming conventions, review criteria, ownership, lifecycle, and versioning for agents, skills, and instructions.",
        },
        {
          title: "Agents and instructions",
          description:
            "Design and evaluate coding agents, repository analysis flows, MCP servers, and task-specific instructions around real development needs.",
        },
        {
          title: "Security and traceability",
          description:
            "Keep AI-assisted workflows aligned with access boundaries, compliance expectations, auditability, and technical review practices.",
        },
        {
          title: "Team enablement",
          description:
            "Coach developers, reduce duplicated efforts, document reusable patterns, and connect AI tooling with everyday delivery habits.",
        },
      ],
    },
    es: {
      label: "Gobierno de IA",
      title: "Cómo ayudo a equipos a adoptar AI Coding con orden",
      intro:
        "Mi mayor aporte está en convertir experimentos aislados con IA en práctica de ingeniería reutilizable, revisable y segura.",
      items: [
        {
          title: "Estándares y catálogo",
          description:
            "Defino artefactos reutilizables, convenciones, criterios de revisión, ownership, ciclo de vida y versionamiento para agentes, skills e instrucciones.",
        },
        {
          title: "Agentes e instrucciones",
          description:
            "Diseño y evalúo coding agents, flujos de análisis de repositorios, servidores MCP e instrucciones específicas alrededor de necesidades reales de desarrollo.",
        },
        {
          title: "Seguridad y trazabilidad",
          description:
            "Mantengo flujos asistidos por IA alineados a límites de acceso, expectativas de compliance, auditabilidad y prácticas de revisión técnica.",
        },
        {
          title: "Adopción por equipos",
          description:
            "Acompaño desarrolladores, reduzco duplicidad, documento patrones reutilizables y conecto el tooling de IA con hábitos diarios de entrega.",
        },
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
            "Modernizes Rimac's microservices ecosystem in a regulated insurance environment, upgrading Node.js and TypeScript repositories for compatibility, security, and maintainability.",
            "Coordinates with architecture, security, infrastructure, development, and DevSecOps teams to unblock technical delivery, standardize repositories, and support safer repeatable deployments.",
            "Designed and implemented a custom MCP server with GitHub Copilot Enterprise to automate repository analysis and recurring operational tasks, automating more than 50% of a blocked workflow.",
            "Collaborates on AI-assisted engineering initiatives that expand internal tooling with agents, skills, MCP servers, and database-connected workflows.",
          ],
        },
        {
          company: "YAWI",
          role: "Mobile Tech Lead and Developer Analyst",
          period: "Nov 2021 - Dec 2024",
          bullets: [
            "Served as Mobile Tech Lead for Agritracer Neo, coordinating sprint delivery, technical decisions, and implementation priorities for one of the company's main products.",
            "Owned mobile technical direction, guiding implementation standards, technical review, and key decisions such as the migration to Jetpack Compose and Kotlin 2.0.",
            "Designed backend services with Node.js, TypeScript, Clean Architecture, AWS Lambda, API Gateway, CloudWatch, S3, and DynamoDB.",
            "Mentored developers through task planning, technical feedback, autonomy-building, and adoption of new implementation standards.",
          ],
        },
        {
          company: "CEINTEC",
          role: "Full Stack Developer Analyst",
          period: "Aug 2020 - Oct 2021",
          bullets: [
            "Led development of an e-commerce platform in React and two mobile applications for Opticenter Vision, coordinating design, QA, and business requirements with multidisciplinary teams.",
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
            "Modernizo el ecosistema de microservicios de Rimac en un entorno asegurador regulado, actualizando repositorios Node.js y TypeScript para mejorar compatibilidad, seguridad y mantenibilidad.",
            "Coordino con arquitectura, seguridad, infraestructura, desarrollo y DevSecOps para destrabar entregas técnicas, estandarizar repositorios y sostener despliegues más seguros y repetibles.",
            "Diseñé e implementé un servidor MCP personalizado con GitHub Copilot Enterprise para automatizar análisis de repositorios y tareas operativas recurrentes, automatizando más del 50% de un flujo bloqueado.",
            "Colaboro en iniciativas de ingeniería asistida por IA que amplían las herramientas internas con agentes, skills, servidores MCP y flujos conectados a base de datos.",
          ],
        },
        {
          company: "YAWI",
          role: "Tech Lead Mobile y Analista Desarrollador",
          period: "Nov 2021 - Dic 2024",
          bullets: [
            "Fui Tech Lead del frente mobile de Agritracer Neo, coordinando entregas por sprint, decisiones técnicas y prioridades de implementación para uno de los principales productos de la empresa.",
            "Asumí ownership técnico del frente mobile, guiando estándares de implementación, revisión técnica y decisiones clave como la migración a Jetpack Compose y Kotlin 2.0.",
            "Diseñé servicios backend con Node.js, TypeScript, Clean Architecture, AWS Lambda, API Gateway, CloudWatch, S3 y DynamoDB.",
            "Acompañé a desarrolladores mediante planificación de tareas, feedback técnico, desarrollo de autonomía y adopción de nuevos estándares de implementación.",
          ],
        },
        {
          company: "CEINTEC",
          role: "Analista Desarrollador Full Stack",
          period: "Ago 2020 - Oct 2021",
          bullets: [
            "Lideré el desarrollo de un e-commerce en React y dos aplicaciones móviles para Opticenter Vision, coordinando diseño, QA y requisitos de negocio con equipos multidisciplinarios.",
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
      actionLabel: "View project",
      intro:
        "A small selection of personal projects that show product thinking, financial-domain curiosity, tooling, and practical engineering beyond day-to-day delivery.",
      items: [
        {
          name: "FinHub",
          url: "https://f-hub.pro/",
          description:
            "Personal finance and investment tooling focused on turning financial activity into clearer decisions through structured data, automation, and analysis. It reflects product thinking applied to financial workflows.",
          tags: ["Product engineering", "Finance data", "Automation"],
        },
        {
          name: "MD2PDF",
          url: "https://md2pdf.studio/",
          description:
            "Developer tool for converting Markdown into polished PDF documents, focused on practical document generation workflows.",
          tags: ["Developer tooling", "Markdown", "PDF workflows"],
        },
      ],
    },
    es: {
      label: "Proyectos personales",
      title: "Trabajo de ingeniería seleccionado",
      actionLabel: "Ver proyecto",
      intro:
        "Una selección pequeña de proyectos personales que muestran criterio de producto, interés por dominio financiero, herramientas e ingeniería práctica más allá de la entrega diaria.",
      items: [
        {
          name: "FinHub",
          url: "https://f-hub.pro/",
          description:
            "Proyecto personal de finanzas e inversiones enfocado en convertir actividad financiera en decisiones más claras mediante datos estructurados, automatización y análisis. Refleja criterio de producto aplicado a flujos financieros.",
          tags: ["Producto", "Datos financieros", "Automatización"],
        },
        {
          name: "MD2PDF",
          url: "https://md2pdf.studio/",
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
          name: "AI Coding governance",
          items: ["MCP servers", "AI agents", "Skills", "Instructions", "GitHub Copilot workflows", "Artifact cataloging"],
        },
        {
          name: "Security & traceability",
          items: ["DevSecOps coordination", "Security scans", "Compliance awareness", "Technical review", "Observability"],
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
          name: "Gobierno de AI Coding",
          items: ["Servidores MCP", "Agentes IA", "Skills", "Instructions", "GitHub Copilot workflows", "Catálogo de artefactos"],
        },
        {
          name: "Seguridad y trazabilidad",
          items: ["Coordinación DevSecOps", "Escaneos de seguridad", "Compliance", "Revisión técnica", "Observabilidad"],
        },
      ],
    },
  },
  footer: {
    en: "Focused on architecture, technical delivery, and governed AI-assisted engineering.",
    es: "Enfoque en arquitectura, entrega técnica y adopción gobernada de ingeniería asistida por IA.",
  },
} as const;
