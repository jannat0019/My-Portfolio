"use client";
import {
  ArrowDown,
  ArrowUpRight,
  Brain,
  Code2,
  Download,
  ExternalLink,
  Mail,
  Menu,
  MessageCircle,
  Terminal,
  X,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "PartnerLinQ",
    subtitle: "Live Enterprise Product",
    description:
      "Contributing to the customization and delivery of PartnerLinQ, a live enterprise integration platform, for clients across the United States and Europe.",
    highlights: [
      "End-to-end client onboarding and technical communication",
      "Translated business requirements into product customizations",
      "Contributed to system and solution design",
      "Identified workflow improvements and product enhancement opportunities",
      "Supported enterprise implementations for international clients",
    ],
    tags: [
      "Enterprise Software",
      "Client Onboarding",
      "System Design",
      "Product Customization",
    ],
    website: "https://www.partnerlinq.com/",
    logo: "/Images/PLQ.png",
    live: true,
    featured: true,
  },
  {
    title: "ClimaLung",
    subtitle: "AI & Machine Learning Research Project",
    description:
      "An AI-based research project investigating the relationship between climate and air pollution factors and lung cancer using medical imaging and machine learning.",
    tags: ["Python", "PyTorch", "Deep Learning", "Medical AI"],
    github: "https://github.com/jannat0019",
    demo: "/demo/climalung",
    icon: Brain,
    featured: true,
  },
  {
    title: "Chatbot RAG Assistant",
    subtitle: "AI Research Assistant",
    description:
      "An AI-powered research assistant combining Retrieval-Augmented Generation with document Q&A, conversational memory, multi-turn chat, and vector search.",
    tags: [
      "Python",
      "LangChain",
      "RAG",
      "Streamlit",
      "Groq",
      "ChromaDB",
    ],
    github:
      "https://github.com/jannat0019/Chatbot-RAGAssistant",
    icon: MessageCircle,
    featured: true,
  },
  {
    title: "MoviesHouse",
    description:
      "A modern web application built around discovering and exploring movie-related content.",
    tags: ["Web Development", "JavaScript", "Frontend"],
    github: "https://github.com/jannat0019/MoviesHouse",
    icon: Code2,
    featured: false,
  },
  {
    title: "Custom Shell",
    description:
      "A systems programming project implementing a custom shell using the C programming language.",
    tags: ["C", "Systems Programming", "Operating Systems"],
    github: "https://github.com/jannat0019/Custom-Shell",
    icon: Terminal,
    featured: false,
  },
];

const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C++", "C", "C#"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Flask", "REST APIs", "API Integration"],
  },
  {
    category: "AI Engineering",
    items: ["LangChain", "LangGraph", "RAG", "OpenAI APIs", "ChromaDB"],
  },
  {
    category: "Machine Learning",
    items: ["PyTorch", "TensorFlow", "Deep Learning"],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <main>
      {/* NAVBAR */}

      <nav className="navbar">
        <div className="container nav-container">
          <button
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            JN<span>.</span>
          </button>

          <div className="desktop-nav">
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("experience")}>Experience</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
          </div>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("experience")}>
              Experience
            </button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
          </div>
        )}
      </nav>

      {/* HERO */}

    {/* =====================================================
    HERO
===================================================== */}

<section id="home" className="hero">

  {/* Soft background decoration */}
  <div className="hero-gradient hero-gradient-one" />
  <div className="hero-gradient hero-gradient-two" />

  <div className="hero-container">

    {/* =================================================
        LEFT SIDE
    ================================================= */}

    <motion.div
      className="hero-left"
      initial={{ opacity: 0, x: -35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >

      <div className="hero-label">
        <span className="hero-status-dot" />
        SOFTWARE ENGINEER
      </div>

      <h1>
        Hi, I&apos;m
        <span> Jannat.</span>
      </h1>

      <h2>
        I build intelligent
        <br />
        software & AI systems.
      </h2>

      <p className="hero-description">
        Software Engineer specializing in AI-powered applications,
        scalable backend systems, Retrieval-Augmented Generation,
        and modern full-stack development.
      </p>

      {/* Resume buttons */}

      <div className="hero-buttons">

        <a
          href="/Jannat_Nasir.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-resume-button hero-resume-primary"
        >
          View Resume
          <ExternalLink size={17} />
        </a>

        <a
          href="/Jannat_Nasir.pdf"
          download
          className="hero-resume-button hero-resume-secondary"
        >
          Download Resume
          <Download size={17} />
        </a>

      </div>

      {/* Technology area */}

      {/* <div className="hero-tech">

        <p className="hero-tech-label">
          TECHNOLOGIES I WORK WITH
        </p>

        <div className="floating-tech">

          <div className="tech-pill tech-one">
            <span>Py</span>
            Python
          </div>

          <div className="tech-pill tech-two">
            <span>⚡</span>
            FastAPI
          </div>

          <div className="tech-pill tech-three">
            <span>R</span>
            React
          </div>

          <div className="tech-pill tech-four">
            <span>N</span>
            Next.js
          </div>

          <div className="tech-pill tech-five">
            <span>TS</span>
            TypeScript
          </div>

          <div className="tech-pill tech-six">
            <span>LC</span>
            LangChain
          </div>

          <div className="tech-pill tech-seven">
            <span>AI</span>
            LLMs
          </div>

        </div>

      </div> */}

    </motion.div>


    {/* =================================================
        FLASH / DIAGONAL DIVIDER
    ================================================= */}

    <div className="hero-divider">

      <div className="hero-divider-line" />

      <div className="hero-divider-glow" />

    </div>


    {/* =================================================
        RIGHT SIDE / PHOTO
    ================================================= */}

   {/* =================================================
    RIGHT SIDE / FLOATING TECHNOLOGIES
================================================= */}

{/* =================================================
    RIGHT SIDE / FLOATING TECHNOLOGIES
================================================= */}

<motion.div
  className="hero-tech-orbit"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.9, delay: 0.2 }}
>
  <div className="tech-orbit-glow" />

  {/* Python */}
  <div className="floating-tech-icon tech-icon-1">
    <Image
      src="/Images/tech/python.svg"
      alt="Python"
      width={85}
      height={85}
      className="tech-logo"
    />
  </div>

  {/* React */}
  <div className="floating-tech-icon tech-icon-2">
    <Image
      src="/Images/tech/react.svg"
      alt="React"
      width={78}
      height={78}
      className="tech-logo"
    />
  </div>

  {/* Next.js */}
  <div className="floating-tech-icon tech-icon-3">
    <Image
      src="/Images/tech/nextjs.svg"
      alt="Next.js"
      width={88}
      height={88}
      className="tech-logo"
    />
  </div>

  {/* TypeScript */}
  <div className="floating-tech-icon tech-icon-4">
    <Image
      src="/Images/tech/typescript.svg"
      alt="TypeScript"
      width={78}
      height={78}
      className="tech-logo"
    />
  </div>

  {/* FastAPI */}
  <div className="floating-tech-icon tech-icon-5">
    <Image
      src="/Images/tech/FastAPI.svg"
      alt="FastAPI"
      width={82}
      height={82}
      className="tech-logo"
    />
  </div>

  {/* LangChain */}
  <div className="floating-tech-icon tech-icon-6">
    <Image
      src="/Images/tech/langchain.svg"
      alt="LangChain"
      width={82}
      height={82}
      className="tech-logo"
    />
  </div>

  {/* OpenAI */}
  <div className="floating-tech-icon tech-icon-7">
    <Image
      src="/Images/tech/dotnet.svg"
      alt=".Net"
      width={84}
      height={84}
      className="tech-logo"
    />
  </div>

  {/* PyTorch */}
  <div className="floating-tech-icon tech-icon-8">
    <Image
      src="/Images/tech/pytorch.svg"
      alt="PyTorch"
      width={82}
      height={82}
      className="tech-logo"
    />
  </div>

  {/* TensorFlow */}
  <div className="floating-tech-icon tech-icon-9">
    <Image
      src="/Images/tech/tensorflow.svg"
      alt="TensorFlow"
      width={78}
      height={78}
      className="tech-logo"
    />
  </div>

  {/* ChromaDB */}
  <div className="floating-tech-icon tech-icon-10">
    <Image
      src="/Images/tech/chromadb.svg"
      alt="ChromaDB"
      width={80}
      height={80}
      className="tech-logo"
    />
  </div>
</motion.div>

  </div>

</section>
      {/* ABOUT */}

      <section id="about" className="section">
        <div className="container">
          <SectionHeading
            label="ABOUT ME"
            title="Engineering software for the age of AI."
          />

          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a Computer Science graduate and software engineer with
                experience building scalable backend systems, modern web
                applications, and AI-powered software solutions.
              </p>

              <p>
                My work focuses on combining strong software engineering
                principles with modern artificial intelligence technologies to
                build practical, maintainable, and intelligent systems.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <span>AI</span>
                <p>Powered Applications</p>
              </div>

              <div className="stat-card">
                <span>RAG</span>
                <p>Intelligent Retrieval Systems</p>
              </div>

              <div className="stat-card">
                <span>API</span>
                <p>Backend Engineering</p>
              </div>

              <div className="stat-card">
                <span>FS</span>
                <p>Full-Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}

    <section id="projects" className="projects-section">
  <div className="container">

    <div className="section-heading">
      <span className="section-eyebrow">SELECTED WORK</span>
      <h2>Projects & Products</h2>
      <p>
        A selection of enterprise products, AI systems, and software projects
        I&apos;ve built or contributed to.
      </p>
    </div>

    <div className="projects-grid">
      {projects.map((project, index) => {
        const Icon = project.icon;

        return (
          <motion.article
            key={project.title}
            className={`project-card ${
              project.featured ? "project-card-featured" : ""
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
          >
            <div className="project-card-top">

              <div className="project-icon">
                {project.logo ? (
                  <Image
                    src={project.logo}
                    alt={project.title}
                    width={55}
                    height={55}
                    className="project-logo"
                  />
                ) : (
                  Icon && <Icon size={28} />
                )}
              </div>

              {project.live && (
                <span className="project-live">
                  <span className="project-live-dot" />
                  LIVE
                </span>
              )}

            </div>

            <div className="project-content">

              {project.subtitle && (
                <span className="project-subtitle">
                  {project.subtitle}
                </span>
              )}

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              {project.highlights && (
                <ul className="project-highlights">
                  {project.highlights.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-actions">

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button project-button-secondary"
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    className="project-button project-button-primary"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                )}

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button project-button-primary"
                  >
                    <ExternalLink size={16} />
                    Visit Product
                  </a>
                )}

              </div>

            </div>
          </motion.article>
        );
      })}
    </div>

  </div>
</section>

      {/* EXPERIENCE */}

      <section id="experience" className="section">
        <div className="container">
          <SectionHeading
            label="EXPERIENCE"
            title="My professional journey."
          />

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2026 — PRESENT</div>

              <div className="timeline-content">
                <h3>Junior Consultant</h3>
                <h4>Systems Limited</h4>

                <p>
                  Taking increased ownership of designing and developing
                  scalable software applications, backend services, system
                  architectures, and AI-powered solutions.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2025 — 2026</div>

              <div className="timeline-content">
                <h3>Associate Consultant</h3>
                <h4>Systems Limited</h4>

                <p>
                  Developed Python and FastAPI backend services, RAG-based
                  systems using LangChain and ChromaDB, and responsive
                  full-stack applications with React and Next.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}

      <section id="skills" className="section skills-section">
        <div className="container">
          <SectionHeading
            label="TECH STACK"
            title="Technologies I work with."
          />

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.category}>
                <h3>{skill.category}</h3>

                <div className="skill-list">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}

      <section className="section">
        <div className="container">
          <SectionHeading
            label="EDUCATION"
            title="Academic foundation."
          />

          <div className="education-grid">
            <div className="education-card">
              <span>🎓</span>

              <div>
                <h3>FAST NUCES</h3>
                <p>Bachelor of Science in Computer Science</p>
                <small>CGPA: 3.73 / 4.00</small>
              </div>
            </div>

            <div className="education-card">
              <span>🌎</span>

              <div>
                <h3>University of Wisconsin–La Crosse</h3>
                <p>Computer Science Exchange Semester</p>
                <small>CGPA: 3.75 / 4.00</small>
              </div>
            </div>

            <div className="education-card">
              <span>🏆</span>

              <div>
                <h3>Global UGRAD Scholarship</h3>
                <p>Pakistan Exchange Program Scholarship</p>
                <small>Semester-long academic exchange in the USA</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="contact-section">
        <div className="contact-glow" />

        <div className="container contact-content">
          <p className="section-label">LET'S CONNECT</p>

          <h2>
            Let&apos;s build something
            <span> intelligent.</span>
          </h2>

          <p>
            Interested in AI, software engineering, or building scalable
            applications? Feel free to reach out.
          </p>

          <div className="contact-links">
            <a href="mailto:jannatnasir222@gmail.com">
              <Mail size={19} />
              Email
            </a>

            <a
              href="https://github.com/jannat0019"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={19} />
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/jannat-nasir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={19} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer>
        <div className="container footer-content">
          <p>© {new Date().getFullYear()} Jannat Nasir</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to top <ArrowUpRight size={16} />
          </button>
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
    </div>
  );
}