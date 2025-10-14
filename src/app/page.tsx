import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
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
            Howdy! My name is <span className={styles.highlight}>Jakob West</span>
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
        <h2>About Me</h2>
        <p>
          I'm a Data Analytics and Systems Engineering student transitioning into DevOps Engineering. 
          I'm passionate about building scalable infrastructure, automating workflows, and creating 
          efficient deployment pipelines. When I'm not coding, you can find me exploring new technologies 
          and learning about cloud architecture.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className={styles.projects}>
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
          
          <div className={styles.projectCard}>
            <h3>Project Name</h3>
            <p>Description of your project goes here. What problem does it solve?</p>
            <div className={styles.techStack}>
              <span>Technology</span>
              <span>Technology</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>Another Project</h3>
            <p>Add more projects to showcase your work and skills</p>
            <div className={styles.techStack}>
              <span>Tech</span>
              <span>Stack</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <h2>Want to connect?</h2>
        <p>Ready to work together or just want to say hello?</p>
        <a href="mailto:jwest21@uccs.edu" className={styles.btnPrimary}>
          Get In Touch
        </a>
      </section>
    </div>
  )
}
