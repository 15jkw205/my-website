import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>Jakob West</div>
          <div className={styles.navLinks}>
            <a href="#technical">Technical</a>
            <a href="#christianity">Christianity</a>
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
            <a href="#technical" className={styles.btnPrimary}>View My Work</a>
            <a href="#contact" className={styles.btnSecondary}>Get In Touch</a>
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section id="technical" className={styles.projects}>
        <h2>Technical Projects</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <h3>Portfolio Website</h3>
            <p>Modern portfolio built with Next.js and deployed on Cloudflare Pages with continuous deployment from GitHub</p>
            <div className={styles.techStack}>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>Cloudflare</span>
              <span>CSS Modules</span>
            </div>
          </div>
          
          <div className={styles.projectCard}>
            <h3>DevOps Pipeline</h3>
            <p>Automated CI/CD pipeline for seamless deployment and testing</p>
            <div className={styles.techStack}>
              <span>GitHub Actions</span>
              <span>Docker</span>
              <span>Node.js</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>Infrastructure as Code</h3>
            <p>Cloud infrastructure management using modern IaC practices</p>
            <div className={styles.techStack}>
              <span>Terraform</span>
              <span>AWS</span>
              <span>Kubernetes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Christianity Section */}
      <section id="christianity" className={styles.about}>
        <h2>Christianity</h2>
        <p>
          My faith in Jesus Christ is the foundation of who I am and how I approach life. 
          As a follower of Christ, I strive to live with integrity, serve others, and honor God 
          in everything I do - including my work in technology.
        </p>
        <p style={{ marginTop: '1.5rem' }}>
          I believe that excellence in my craft is a way to glorify God, and that the skills 
          He's given me are meant to be used to serve others and make a positive impact in the world.
        </p>
        <blockquote style={{ 
          borderLeft: '4px solid var(--orange-primary)', 
          paddingLeft: '1.5rem', 
          marginTop: '2rem',
          fontStyle: 'italic',
          color: 'var(--black-secondary)'
        }}>
          "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters." 
          <br />- Colossians 3:23
        </blockquote>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <h2>Let's Connect</h2>
        <p>Whether you want to collaborate on a project, discuss opportunities, or just say hello - I'd love to hear from you!</p>
        <div style={{ marginTop: '2rem' }}>
          <a href="mailto:jwest21@uccs.edu" className={styles.btnPrimary}>
            Send Me an Email
          </a>
        </div>
      </section>
    </div>
  )
}
