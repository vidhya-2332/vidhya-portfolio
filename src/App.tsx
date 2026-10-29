
import './App.css'
import { useEffect, useState } from 'react'

const projects = [
   {
    number: '01',
    name: 'JobShield AI',
    category: 'JOB SAFETY · FULL STACK',
    description:
      'A hybrid fake-job detection system combining rule-based checks, text analysis, and explainability to help assess suspicious job postings.',
    technologies: ['React', 'TypeScript', 'Django REST', 'PostgreSQL'],
    url: 'https://github.com/vidhya-2332/JobShield-AI',
    theme: 'violet-card',
    visual: 'violet-visual',
    symbol: '◇',
  },
  {
    number: '02',
    name: 'Weather Dashboard',
    category: 'REAL-TIME WEATHER · WEB APPLICATION',
    description:
      'A responsive weather dashboard that fetches current weather information for a selected city through a third-party weather API.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Weather API'],
    url: 'https://github.com/vidhya-2332/Live-Weather-Dashboard',
    theme: 'green-card',
    visual: 'green-visual',
    symbol: '☼',
  },
  {
    number: '03',
    name: 'Learning Path Engine',
    category: 'PERSONALIZED LEARNING · WEB APPLICATION',
    description:
      'A learning-path recommendation engine that uses skill-gap analysis, weighted scoring, and prerequisite-aware recommendations to help users plan their learning.',
    technologies: ['React', 'TypeScript', 'Supabase'],
    url: 'https://github.com/vidhya-2332/Learning-path-engine',
    theme: 'violet-card',
    visual: 'violet-visual',
    symbol: '⌘',
  },
{
  number: '04',
  name: 'Solar Power Output Predictor',
  category: 'RENEWABLE ENERGY · MACHINE LEARNING',
  description:
    'An interactive solar power prediction application that estimates power output from temperature, humidity, solar irradiance, and wind speed using a pre-trained Linear Regression model.',
  technologies: [
    'Python',
    'Streamlit',
    'Scikit-learn',
    'NumPy',
    'Joblib',
  ],
  url: 'https://github.com/vidhya-2332/solar_energy_predicted',
  theme: 'green-card',
  visual: 'green-visual',
  symbol: '☀',
},
{
    number: '05',
    name: 'GreenLoop AI',
    category: 'SUSTAINABILITY · WEB APPLICATION',
    description:
      'A waste-to-value assistant offering practical reuse, recycling, disposal, and safety guidance in English and Tamil, with a local activity tracker.',
    technologies: ['Python', 'Flask', 'SQLite'],
    url: 'https://github.com/vidhya-2332/Greenloop-AI',
    theme: 'green-card',
    visual: 'green-visual',
    symbol: '✳',
  },
    {
    number: '06',
    name: 'CO2 Emissions Predictor',
    category: 'CLIMATE DATA · MACHINE LEARNING',
    description:
      'An interactive dashboard that predicts CO2 emissions from energy consumption, renewable energy percentage, and GDP using polynomial regression, with model evaluation and visualizations.',
    technologies: [
      'Python',
      'Streamlit',
      'Pandas',
      'Scikit-learn',
      'Plotly',
    ],
    url: 'https://github.com/vidhya-2332/CO2-emission-predicted',
    theme: 'green-card',
    visual: 'green-visual',
    symbol: '♻',
  },
  {
    number: '07',
    name: 'Appliance Energy Predictor',
    category: 'ENERGY ANALYTICS · MACHINE LEARNING',
    description:
      'A machine-learning application that predicts appliance energy consumption in kWh from temperature using linear regression, with performance metrics and visualizations.',
    technologies: [
      'Python',
      'Streamlit',
      'Pandas',
      'Scikit-learn',
      'Matplotlib',
    ],
    url: 'https://github.com/vidhya-2332/appliance-energy',
    theme: 'violet-card',
    visual: 'violet-visual',
    symbol: '⚡',
  },
]

const skillGroups = [
  { title: 'LANGUAGES', skills: ['Python', 'Java', 'JavaScript'] },
  { title: 'FRONTEND', skills: ['HTML', 'CSS', 'Bootstrap', 'React'] },
  { title: 'BACKEND', skills: ['Django', 'REST APIs'] },
  { title: 'DATABASES', skills: ['MySQL', 'PostgreSQL'] },
  { title: 'TOOLS', skills: ['Git', 'GitHub'] },
  { title: 'CORE CONCEPTS', skills: ['OOP', 'DSA Basics', 'Responsive Web Design'] },
]

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
  return localStorage.getItem('portfolio-theme') === 'light'
    ? 'light'
    : 'dark'
})

useEffect(() => {
  document.documentElement.dataset.theme = theme
  localStorage.setItem('portfolio-theme', theme)
}, [theme])
useEffect(() => {
  const cards = document.querySelectorAll(
    '.skill-card, .project-card, .education-card, .experience-card, .certificate-card'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -30px 0px',
    }
  );

  cards.forEach((card, index) => {
    card.classList.add('scroll-reveal');

    (card as HTMLElement).style.transitionDelay =
      `${(index % 3) * 120}ms`;

    observer.observe(card);
  });

  return () => observer.disconnect();
}, []);
  return (
    <main className="portfolio">
      <nav className="navbar">
        <a className="logo" href="#home">VS<span>.</span></a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        
<div className="nav-actions">
  <button
    className="theme-toggle"
    onClick={() =>
      setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
    }
    aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    title="Toggle color theme"
  >
    {theme === 'dark' ? '☀ Light' : '☾ Dark'}
  </button>

  <a className="nav-cta" href="mailto:vidhyasri5932@gmail.com">
    Let's talk ↗
  </a>
</div>

      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            OPEN TO OPPORTUNITIES
          </div>

          <p className="eyebrow">HELLO, I'M</p>

<h1 className="hero-name">
  Vidhya Sri <span className="gradient-text">A J</span>
  <span className="period">.</span>
</h1>

<h2 className="hero-tagline">
  Building <span className="gradient-text">digital experiences.</span>
</h2>

          <p className="hero-description">
            Final-year Computer Science and Engineering student at Anna
            University Regional Campus, Madurai. I enjoy building practical
            web applications and learning technologies that solve real
            problems.
          </p>

          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              Explore my work <span>↗</span>
            </a>
            <a className="secondary-button" href="#about">
              More about me ↓
            </a>
          </div>

          <div className="hero-meta">
            <span>TAMIL NADU, INDIA</span>
            <span className="meta-divider" />
            <span>SOFTWARE DEVELOPER</span>
          </div>
        </div>

        <div className="visual-stage" aria-label="Abstract violet artwork">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="orb-glow" />
          <div className="orb">
            <div className="orb-highlight" />
            <div className="orb-ring" />
          </div>

          <div className="floating-card card-top">
            <span className="mini-icon">✳</span>
            <div>
              <strong>Creative thinking</strong>
              <small>Ideas into experiences</small>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <span className="code-icon">&lt;/&gt;</span>
            <div>
              <strong>Built with curiosity</strong>
              <small>Always learning · Always building</small>
            </div>
          </div>

          <span className="spark spark-one">✳</span>
          <span className="spark spark-two">✦</span>
          <span className="spark spark-three">·</span>

          <div className="visual-caption">
            <span>01 / THE CREATIVE DEVELOPER</span>
            <span>FIG. 001</span>
          </div>
        </div>
      </section>

      <section className="intro-strip">
        <span>DESIGN MINDED.</span>
        <span>CODE DRIVEN.</span>
        <span>ALWAYS EVOLVING.</span>
      </section>

      <section className="about section" id="about">
        <p className="eyebrow">A LITTLE ABOUT ME</p>
        <h2>
          Curious by nature.
          <br />
          <span className="muted-heading">Developer by choice.</span>
        </h2>

        <p className="section-description">
          I am pursuing a B.E. in Computer Science and Engineering at Anna
          University Regional Campus, Madurai. I enjoy turning problems into
          practical digital solutions, building web applications and
          collaborating with others. I am looking for opportunities to learn,
          contribute and grow as a software developer.
        </p>

        <div className="education-card">
          <p className="project-type">EDUCATION · 2023–2027</p>
          <h3>B.E. Computer Science and Engineering</h3>
          <p>Anna University Regional Campus, Madurai</p>
          <span className="education-score">CGPA: 7.99</span>
        </div>
      </section>

      <section className="skills-section section" id="skills">
        <div className="section-heading">
          <div>
            <p className="eyebrow">MY TOOLKIT</p>
            <h2>Skills & <span className="gradient-text">strengths.</span></h2>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <p className="project-type">{group.title}</p>
              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Things I've <span className="gradient-text">built.</span></h2>
          </div>
          <span className="project-count">07 PROJECTS</span>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.theme}`} key={project.name}>
              <div className={`project-visual ${project.visual}`}>
                <span className="project-number">PROJECT / {project.number}</span>
                <div className={project.theme === 'green-card' ? 'leaf-symbol' : 'shield-symbol'}>
                  {project.symbol}
                </div>
                <span className="visual-label">{project.category}</span>
              </div>

              <div className="project-info">
                <p className="project-type">{project.category}</p>
                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                
<div className="project-actions">
  <a
    className="project-link"
    href={project.url}
    target="_blank"
    rel="noreferrer"
  >
    View Source Code ↗
  </a>

  {project.name === 'Learning Path Engine' && (
    <a
      className="project-link"
      href="https://vidhya-2332.github.io/Learning-path-engine/"
      target="_blank"
      rel="noreferrer"
    >
      Live Demo ↗
    </a>
  )}
  
{project.name === 'Solar Power Output Predictor' && (
  <a
    className="project-link"
    href="https://vidhya-2332-solar-energy-predicted-app-jftaar.streamlit.app/"
    target="_blank"
    rel="noreferrer"
  >
    Live Demo ↗
  </a>
)}
{project.name === 'CO2 Emissions Predictor' && (
  <a
    className="project-link"
    href="https://vidhya-2332-co2-emission-predicted-app-z5wwiw.streamlit.app/"
    target="_blank"
    rel="noreferrer"
  >
    Live Demo ↗
  </a>
)}
</div>

              </div>
            </article>
          ))}
        </div>
        <div className="more-projects">
  <a
    href="https://github.com/vidhya-2332?tab=repositories"
    target="_blank"
    rel="noreferrer"
    className="all-repositories-link"
  >
    Explore All Repositories ↗
  </a>
</div>
        
      </section>

      <section className="experience-section section" id="experience">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WHERE I'VE LEARNED BY DOING</p>
            <h2>Internship <span className="gradient-text">experience.</span></h2>
          </div>
        </div>

        <div className="experience-list">
          <article className="experience-card">
            <span className="experience-date">JUN 2026 — JUL 2026</span>
            <div>
              <h3>Full Stack Developer Intern</h3>
              <p className="experience-company">CodeBonding Technology</p>
              <p>
                Developed React-based web features integrating REST APIs and
                database functionality, contributing to feature delivery.
              </p>
            </div>
          </article>

          <article className="experience-card">
            <span className="experience-date">JAN 2026 — FEB 2026</span>
            <div>
              <h3>Web Developer Intern</h3>
              <p className="experience-company">Cognifyz Technologies</p>
              <p>
                Rebuilt responsive, interactive web interface components in
                React, focusing on usability and consistency.
              </p>
            </div>
          </article>
        </div>
      </section>
      
      
<section className="certificates-section section" id="certificates">
  <p className="eyebrow">MY ACHIEVEMENTS</p>
  <h2>
    Certifications<span className="gradient-text">.</span>
  </h2>
  <p className="section-description">
    Continuous learning, one step at a time.
  </p>

  <div className="certificate-card">
    <div className="certificate-preview">
      <img
        src="/certificates/web-development-certificate.jpeg"
        alt="Udemy Foundations of Web Development certificate"
      />
    </div>

    <div className="certificate-details">
      <p className="project-type">UDEMY · PROPER DOT INSTITUTE</p>
      <h3>Foundations of Web Development: CSS, Bootstrap, JS, React</h3>
      <p>Completed on May 2, 2026</p>
      <p>Duration: 5.5 hours</p>

      <a
        className="project-link"
        href="/certificates/web-development-certificate.jpeg"
        target="_blank"
        rel="noreferrer"
      >
        View Certificate ↗
      </a>
    </div>
  </div>
  
<div className="certificate-card">
  <div className="certificate-preview">
    <img
      src="/certificates/generative-ai-mastery.jpeg"
      alt="NxtWave Generative AI Mastery Workshop certificate"
    />
  </div>

  <div className="certificate-details">
    <p className="project-type">NXTWAVE · OPENAI ACADEMY LEARNING COMMUNITY</p>
    <h3>Generative AI Mastery Workshop</h3>
    <p>Certificate of Participation</p>
    <p>Issued on August 15, 2025</p>

    <a
      className="project-link"
      href="/certificates/generative-ai-mastery.jpeg"
      target="_blank"
      rel="noreferrer"
    >
      View Certificate ↗
    </a>
  </div>
</div>

</section>

      <section className="contact-section" id="contact">
        <p className="eyebrow">LET'S CONNECT</p>
        <h2>
          Let's build something
          <br />
          <span className="gradient-text">meaningful.</span>
        </h2>

        <div className="contact-links">
          <a href="mailto:vidhyasri5932@gmail.com">✉ Email me</a>
          <a href="tel:+916380722467">☎ 6380722467</a>
          <a
            href="https://www.linkedin.com/in/vidhyasri2332/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/vidhya-2332"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <footer className="footer">
        <a className="logo" href="#home">VS<span>.</span></a>
        <p>Designed with curiosity. Built with care.</p>
        <span>© 2026 VIDHYA SRI</span>
      </footer>
    </main>
  )
}

export default App
