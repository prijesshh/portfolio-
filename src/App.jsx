import {
  profile,
  contact,
  education,
  skills,
  projects,
  experience,
  achievements,
  events,
  courses,
} from "./data.js";

const sections = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

function Section({ id, title, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="section-title">
        {title}
      </h2>
      <div className="section-body">{children}</div>
    </section>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a href="#top" className="brand">
          {profile.name}
        </a>
        <nav aria-label="Sections">
          <ul className="nav-list">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero wrap" aria-label="Introduction">
      <h1 className="hero-name">{profile.name}</h1>
      <p className="hero-title">{profile.title}</p>
      <p className="hero-school">
        {profile.school}, {profile.location}
      </p>
      <p className="hero-intro">{profile.intro}</p>
      <p className="hero-links">
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {contact.linkedin && (
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        )}
        <a href={`mailto:${contact.email}`}>Email</a>
      </p>
    </section>
  );
}

function Project({ project }) {
  const { name, tech, year, kind, description, href } = project;
  const descId = `desc-${name.replace(/\s+/g, "-").toLowerCase()}`;
  return (
    <li className="project">
      <div className="project-head">
        {href ? (
          <a
            className="project-name is-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-describedby={descId}
          >
            {name}
          </a>
        ) : (
          <span className="project-name" tabIndex={0} aria-describedby={descId}>
            {name}
          </span>
        )}
        <span className="project-meta">
          <span>{tech}</span>
          <span>
            {kind}, {year}
          </span>
        </span>
      </div>
      <div className="project-desc-wrap">
        <p id={descId} className="project-desc">
          {description}
          {href && <span className="project-hint"> Opens on GitHub.</span>}
        </p>
      </div>
    </li>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <div className="wrap">
          <Section id="about" title="About">
            {profile.about.map((p, i) => (
              <p key={i} className="prose">
                {p}
              </p>
            ))}
          </Section>

          <Section id="education" title="Education">
            <ul className="plain-list">
              {education.map((e) => (
                <li key={e.degree} className="entry">
                  <h3>{e.degree}</h3>
                  <p>{e.school}</p>
                  <p className="muted">{e.note}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="skills" title="Technical skills">
            <dl className="skills">
              {skills.map((s) => (
                <div key={s.group} className="skill-row">
                  <dt>{s.group}</dt>
                  <dd>{s.items.join(", ")}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="projects" title="Projects">
            <ul className="plain-list projects">
              {projects.map((p) => (
                <Project key={p.name} project={p} />
              ))}
            </ul>
          </Section>

          <Section id="experience" title="Experience & activities">
            <ul className="plain-list">
              {experience.map((e) => (
                <li key={e.org} className="entry">
                  <h3>
                    {e.org}
                    <span className="entry-role">{e.role}</span>
                  </h3>
                  <p className="muted">{e.period}</p>
                  <p>{e.description}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="achievements" title="Achievements & learning">
            <h3 className="sub">Award</h3>
            <ul className="plain-list">
              {achievements.map((a) => (
                <li key={a.title} className="entry">
                  <p className="strong">{a.title}</p>
                  <p>{a.detail}</p>
                </li>
              ))}
            </ul>

            <h3 className="sub">Conferences & workshops</h3>
            <ul className="plain-list events">
              {events.map((e) => (
                <li key={e.name}>
                  <span className="event-name">
                    {e.name}
                    {e.place ? `, ${e.place}` : ""}
                    {e.role ? ` (${e.role})` : ""}
                  </span>
                  <span className="muted event-date">{e.date}</span>
                </li>
              ))}
            </ul>

            <h3 className="sub">Courses</h3>
            <ul className="plain-list">
              {courses.map((c) => (
                <li key={c.name} className="entry">
                  <p className="strong">{c.name}</p>
                  <p className="muted">{c.detail}</p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="contact" title="Contact">
            <p className="prose">The best way to reach me is by email.</p>
            <ul className="plain-list contact-list">
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              {contact.linkedin && (
                <li>
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              )}
              <li>
                <a href={contact.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </Section>
        </div>
      </main>
      <footer className="site-footer">
        <div className="wrap">© 2026 {profile.name}</div>
      </footer>
    </>
  );
}
