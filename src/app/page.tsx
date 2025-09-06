import Head from 'next/head'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jakob West - Developer</title>
        <meta name="description" content="Jakob West's Portfolio - Beginner DevOps Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>Jakob West</div>
          <div className={styles.navLinks}>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Hi, I'm <span className={styles.highlight}>Jakob West</span>
          </h1>
          <p className={styles.heroSubtitle}>
            From Data Analytics and Systems Engineering student to DevOps Engineer
          </p>
          <p className={styles.heroDescription}>
            Building modern web applications with cutting-edge technologies
          </p>
          <div className={styles.heroButtons}>
            <a href="#projects" className={styles.btnPrimary}>View My Work</a>
            <a href="#contact" className={styles.btnSecondary}>Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={styles.container}>
          <h2>About Me</h2>
          <p>
            lol
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <h2>Featured Projects</h2>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard}>
              <h3>Portfolio Website</h3>
              <p>Modern portfolio built with Next.js and Cloudflare Pages</p>
              <div className={styles.techStack}>
                <span>Next.js</span>
                <span>Cloudflare</span>
                <span>CSS</span>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.container}>
          <h2>Let's Connect</h2>
          <p>Ready to work together or just want to say hello?</p>
          <a href="mailto:jwest21@uccs.edu" className={styles.btnPrimary}>
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  )
}
