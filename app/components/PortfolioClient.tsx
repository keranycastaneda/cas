"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="scene-placeholder" />,
});

const projects = [
  {
    number: "01",
    title: "ReggaeTONED Gym",
    type: "Full-Stack Web Application",
    description:
      "A tropical, reggaeton-inspired gym platform featuring membership registration, responsive design, Next.js, Vercel, and Neon database integration.",
    technologies: ["Next.js", "TypeScript", "Neon", "Vercel"],
  },
  {
    number: "02",
    title: "Smart Park System",
    type: "Software Engineering Project",
    description:
      "A parking-management system using license plate recognition, membership verification, automated pricing, gate controls, and exit validation.",
    technologies: ["System Design", "UML", "OOP", "Requirements"],
  },
  {
    number: "03",
    title: "Search Algorithms",
    type: "Java Application",
    description:
      "A Java comparison of linear and binary search that tracks results, comparisons, and runtime behavior across different data sets.",
    technologies: ["Java", "Algorithms", "Data Structures"],
  },
  {
    number: "04",
    title: "Candy Store Database",
    type: "Relational Database",
    description:
      "A MySQL database covering table design, foreign keys, CRUD operations, joins, subqueries, transactions, and user permissions.",
    technologies: ["MySQL", "SQL", "Database Design"],
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Java",
  "C++",
  "SQL",
  "HTML & CSS",
  "Git",
  "Vercel",
  "Neon",
  "Networking",
];

export default function PortfolioClient() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          window.clearInterval(interval);
          window.setTimeout(() => setLoading(false), 350);
          return 100;
        }

        return current + 2;
      });
    }, 24);

    return () => window.clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="portfolio-loader">
        <div className="loader-inner">
          <span className="loader-name">KC</span>
          <span className="loader-count">
            {String(progress).padStart(3, "0")}
          </span>
          <div className="loader-track">
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="portfolio">
      <header className="portfolio-header">
        <Link href="#home" className="portfolio-logo">
          KC<span>.</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "portfolio-nav open" : "portfolio-nav"}>
          <Link href="#about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
          <Link href="#experience" onClick={() => setMenuOpen(false)}>
            Experience
          </Link>
          <Link href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </Link>
          <Link href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </Link>
          <Link href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>

        <a
          href="/Kerany-Castaneda-Resume.pdf"
          className="header-resume"
          target="_blank"
          rel="noreferrer"
        >
          Résumé
        </a>
      </header>

      <section className="hero-section" id="home">
        <HeroScene />

        <div className="hero-grid" />

        <div className="hero-copy">
          <p className="eyebrow">PORTFOLIO / 2026</p>

          <h1>
            KERANY
            <br />
            <span>CASTANEDA</span>
          </h1>

          <p className="hero-role">
            Developer · Computer Science Student
            <br />
            Former Marine Communications Specialist
          </p>

          <p className="hero-description">
            I build reliable systems, modern web experiences, and technology
            designed to solve real problems.
          </p>

          <div className="hero-actions">
            <Link href="#projects" className="action-primary">
              View my work
              <span>↗</span>
            </Link>

            <Link href="#contact" className="action-secondary">
              Contact me
            </Link>
          </div>
        </div>

        <div className="hero-index">
          <span>01</span>
          <span>/</span>
          <span>05</span>
        </div>

        <a className="scroll-indicator" href="#about">
          <span>Scroll</span>
          <i />
        </a>
      </section>

      <section className="content-section about-section" id="about">
        <div className="section-number">01</div>

        <div className="section-heading">
          <p>About me</p>
          <h2>
            Discipline shaped me.
            <br />
            Technology drives me.
          </h2>
        </div>

        <div className="about-layout">
          <div className="about-statement">
            <p>
              I am a computer science student and former United States Marine
              with hands-on experience in communications equipment,
              maintenance operations, accountability, networking, and team
              leadership.
            </p>
          </div>

          <div className="about-details">
            <p>
              My military experience taught me how to remain dependable,
              organized, and calm when the work matters. I now bring that same
              mindset into software development and information technology.
            </p>

            <p>
              I enjoy building responsive websites, working with databases,
              solving programming problems, and turning complex requirements
              into practical systems.
            </p>

            <a
              href="/Kerany-Castaneda-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-link"
            >
              Download my résumé <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section
        className="content-section experience-section"
        id="experience"
      >
        <div className="section-number">02</div>

        <div className="section-heading">
          <p>Experience</p>
          <h2>Built through responsibility.</h2>
        </div>

        <div className="timeline">
          <article className="timeline-item">
            <div className="timeline-date">2022—2026</div>

            <div>
              <p className="timeline-company">United States Marine Corps</p>
              <h3>Communications Maintenance Chief</h3>
              <p>
                Led maintenance, accountability, troubleshooting, inventory,
                training, and readiness efforts for communications systems and
                equipment.
              </p>
            </div>
          </article>

          <article className="timeline-item">
            <div className="timeline-date">Present</div>

            <div>
              <p className="timeline-company">Computer Science</p>
              <h3>Student and Developer</h3>
              <p>
                Building projects with React, Next.js, Java, C++, SQL,
                databases, system design, networking, and modern deployment
                platforms.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="content-section projects-section" id="projects">
        <div className="section-number">03</div>

        <div className="section-heading projects-heading">
          <div>
            <p>Selected work</p>
            <h2>Projects with purpose.</h2>
          </div>

          <span>{String(projects.length).padStart(2, "0")} projects</span>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">{project.number}</div>

              <div className="project-content">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>

              <div className="project-arrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section skills-section" id="skills">
        <div className="section-number">04</div>

        <div className="section-heading">
          <p>Capabilities</p>
          <h2>Technical skills.</h2>
        </div>

        <div className="skills-layout">
          <div className="skills-copy">
            <p>
              I work across front-end development, programming, database
              design, deployment, troubleshooting, and technical
              communication.
            </p>
          </div>

          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill-row" key={skill}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{skill}</p>
                <i />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="contact-label">Have a project or opportunity?</p>

        <h2>
          LET&apos;S BUILD
          <br />
          SOMETHING <span>REAL.</span>
        </h2>

        <a
          href="keranycastaneda@gmail.com"
          className="contact-email"
        >
          keranycastaneda@gmail.com
          <span>↗</span>
        </a>

        <div className="contact-footer">
          <p>Kerany Castaneda © 2026</p>

          <div>
            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="#" aria-label="GitHub">
              GitHub
            </a>
          </div>

          <a href="#home">Back to top ↑</a>
        </div>
      </section>
    </main>
  );
}