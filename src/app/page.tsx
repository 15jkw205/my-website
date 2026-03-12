"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

const PINNED_REPOS = [
  "notes-vault-api",
  "my-website",
  "devops-hivebox",
  "bluestaq_software_challenge",
  "t_random_bible",
  "titanic_machine_learning",
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572A5",
  Java: "#b07219",
  Go: "#00ADD8",
  CSS: "#563d7c",
  HTML: "#e34c26",
  Rust: "#dea584",
  default: "#ff6b35",
};

const SKILLS = [
  "Java", "Python", "TypeScript", "Go",
  "Spring Boot", "Next.js", "Docker", "Kubernetes",
  "Terraform", "Ansible", "AWS", "PostgreSQL",
  "GitHub Actions",
];

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const GithubIcon = ({ size = 26 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedInIcon = ({ size = 26 }: { size?: number }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    width="22" height="22">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m2 7 10 7 10-7" />
  </svg>
);

export default function Home() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [reposLoading, setReposLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDark(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    fetch("https://api.github.com/users/15jkw205/repos?sort=updated&per_page=100")
      .then((r) => r.json())
      .then((data: Repo[]) => {
        const pinned = PINNED_REPOS
          .map((name) => data.find((r) => r.name === name))
          .filter((r): r is Repo => r !== undefined);
        setRepos(pinned);
      })
      .catch(() => setRepos([]))
      .finally(() => setReposLoading(false));
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${styles.root} ${dark ? styles.dark : ""}`}>

      {/* NAV */}
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <a className={styles.navLogo} href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}>
          <span className={styles.logoAngle}>&lt;</span>JW
          <span className={styles.logoAngle}>/&gt;</span>
        </a>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                className={styles.navLink}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="https://github.com/15jkw205" target="_blank"
              rel="noopener noreferrer" className={styles.navCta}>
              GitHub
            </a>
          </li>
          <li>
            <button className={styles.themeToggle} onClick={() => setDark(!dark)}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>
              {dark ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
        </ul>
        {/* Mobile: theme toggle + burger */}
        <div className={styles.navRight}>
          <button className={styles.themeToggle} onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}>
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button className={styles.burger} aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? styles.burgerLineTop : ""} />
            <span className={menuOpen ? styles.burgerLineMid : ""} />
            <span className={menuOpen ? styles.burgerLineBot : ""} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.label} href={l.href}
            onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
            className={styles.mobileLink}>
            {l.label}
          </a>
        ))}
        <a href="https://github.com/15jkw205" target="_blank"
          rel="noopener noreferrer" className={styles.mobileLink}>
          GitHub
        </a>
      </div>

      {/* HERO */}
      <section id="hero" className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>
            <span className={styles.eyebrowLine} />
            Software Engineer and DevOps Enthusiast
          </p>
          <h1 className={styles.heroTitle}>
            Jakob
            <span className={styles.heroAccent}> West.</span>
          </h1>
          <p className={styles.heroSub}>
            Shipping code by the day, chasing summits by the weekend.
            Follower of Christ. Colorado born and keyboard driven.
          </p>
          <div className={styles.heroCtas}>
            <button className={styles.ctaPrimary}
              onClick={() => scrollTo("#projects")}>
              View Projects
            </button>
            <button className={styles.ctaSecondary}
              onClick={() => scrollTo("#contact")}>
              Get in Touch
            </button>
          </div>
        </div>
        <div className={styles.heroScroll}>
          <span>scroll</span>
          <div className={styles.heroScrollLine} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className={styles.about}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>01 — About</div>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutText}>
              <h2 className={styles.sectionTitle}>
                Building things<br />
                <span className={styles.accent}>that matter.</span>
              </h2>
              <p className={styles.aboutPara}>
                I&apos;m a Data Analytics and Systems Engineering graduate from UCCS
                focused on cloud, DevOps, and full-stack development. I love
                experimenting with new technologies and turning ideas into working software.
              </p>
              <p className={styles.aboutPara}>
                When I&apos;m not coding, you&apos;ll find me up in the
                mountains of Colorado.
              </p>
              <div className={styles.skillTags}>
                {SKILLS.map((s) => (
                  <span key={s} className={styles.tag}>{s}</span>
                ))}
              </div>
            </div>
            <div className={styles.aboutLinks}>
              <a href="https://github.com/15jkw205" target="_blank"
                rel="noopener noreferrer" className={styles.profileCard}>
                <div className={styles.profileCardIcon}><GithubIcon /></div>
                <div className={styles.profileCardBody}>
                  <span className={styles.profileCardTitle}>GitHub</span>
                  <span className={styles.profileCardSub}>@15jkw205</span>
                </div>
                <span className={styles.profileCardArrow}>↗</span>
              </a>
              <a href="https://www.linkedin.com/in/jwest21/" target="_blank"
                rel="noopener noreferrer" className={styles.profileCard}>
                <div className={styles.profileCardIcon}><LinkedInIcon /></div>
                <div className={styles.profileCardBody}>
                  <span className={styles.profileCardTitle}>LinkedIn</span>
                  <span className={styles.profileCardSub}>in/jwest21</span>
                </div>
                <span className={styles.profileCardArrow}>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className={styles.projects}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>02 — Projects</div>
          <h2 className={styles.sectionTitle}>
            Recent <span className={styles.accent}>Work.</span>
          </h2>
          {reposLoading ? (
            <div className={styles.repoGrid}>
              {[...Array(6)].map((_, i) => (
                <div key={i} className={styles.repoSkeleton} />
              ))}
            </div>
          ) : repos.length === 0 ? (
            <p className={styles.aboutPara}>
              Could not load repositories. Check back soon.
            </p>
          ) : (
            <div className={styles.repoGrid}>
              {repos.map((repo) => (
                <a key={repo.id} href={repo.html_url} target="_blank"
                  rel="noopener noreferrer" className={styles.repoCard}>
                  <div className={styles.repoTop}>
                    <span className={styles.repoName}>
                      {repo.name.replace(/_/g, " ")}
                    </span>
                    <span className={styles.repoArrow}>↗</span>
                  </div>
                  <p className={styles.repoDesc}>{repo.description}</p>
                  <div className={styles.repoBottom}>
                    {repo.language && (
                      <span className={styles.repoLang}>
                        <span className={styles.repoLangDot}
                          style={{
                            background:
                              LANG_COLORS[repo.language] || LANG_COLORS.default,
                          }} />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className={styles.repoStar}>
                        ★ {repo.stargazers_count}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          )}
          <div className={styles.projectsCta}>
            <a href="https://github.com/15jkw205" target="_blank"
              rel="noopener noreferrer" className={styles.ctaSecondary}>
              View all on GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className={styles.contact}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionLabel}>03 — Contact</div>
          <h2 className={styles.sectionTitle}>
            Let&apos;s <span className={styles.accent}>Connect.</span>
          </h2>
          <p className={styles.aboutPara}>
            Open to new opportunities, collaborations, or just a good conversation.
          </p>
          <div className={styles.contactLinks}>
            <a href="mailto:west-ise@outlook.com" className={styles.contactLink}>
              <EmailIcon />
              west-ise@outlook.com
            </a>
            <a href="https://github.com/15jkw205" target="_blank"
              rel="noopener noreferrer" className={styles.contactLink}>
              <GithubIcon size={22} />
              github.com/15jkw205
            </a>
            <a href="https://www.linkedin.com/in/jwest21/" target="_blank"
              rel="noopener noreferrer" className={styles.contactLink}>
              <LinkedInIcon size={22} />
              linkedin.com/in/jwest21
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <span>Jakob West — {new Date().getFullYear()}</span>
        <span className={styles.footerRight}>Built with Next.js + Cloudflare</span>
      </footer>
    </div>
  );
}