import styles from '../page.module.css'
import Link from 'next/link'

export default function Motivation() {
  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>Jakob West</Link>
          <div className={styles.navLinks}>
            <Link href="/portfolio">Technical Portfolio</Link>
            <Link href="/against-big-tech">Against Big-tech</Link>
            <Link href="/motivation">My Motivation</Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            My <span className={styles.highlight}>Motivation</span>
          </h1>
          <p className={styles.heroSubtitle}>
            The Dual Path: For Tech and Against Big Tech
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.about}>
        <h2>The Paradox of Technology</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          This section explores the complex relationship between my passion for technology
          and my concerns about how Big Tech operates, particularly regarding social media.
        </p>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ color: 'var(--orange-primary)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
            Why I Love Technology
          </h3>
          <div className={styles.projectCard}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              [This section will detail your passion for technology - the problem-solving,
              the creativity, the ability to build things that matter, and how tech can
              be a force for good when used responsibly]
            </p>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ color: 'var(--orange-primary)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
            Why I Stand Against Big Tech (Especially Social Media)
          </h3>
          <div className={styles.projectCard}>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              [This section will explore your concerns about Big Tech companies,
              particularly social media platforms - their business models, impact on
              society, privacy concerns, and how they've strayed from technology's
              original promise]
            </p>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ color: 'var(--orange-primary)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
            Finding Balance: Building Technology Differently
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            [Here you'll discuss how you reconcile these two perspectives - how you plan
            to build technology that serves people rather than exploits them, and how
            your DevOps and engineering skills can contribute to a better tech ecosystem]
          </p>
        </div>

        <blockquote style={{
          borderLeft: '4px solid var(--orange-primary)',
          paddingLeft: '1.5rem',
          marginTop: '3rem',
          fontStyle: 'italic',
          fontSize: '1.2rem',
          color: 'var(--black-secondary)'
        }}>
          "Technology is a tool. The question is: who does it serve?"
        </blockquote>
      </section>

      {/* Values Section */}
      <section className={styles.projects} style={{ background: 'var(--light-gray)' }}>
        <h2>Core Values</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <h3>Privacy First</h3>
            <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
              Building technology that respects user privacy and data ownership
            </p>
          </div>

          <div className={styles.projectCard}>
            <h3>Open Source</h3>
            <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
              Contributing to transparent, community-driven development
            </p>
          </div>

          <div className={styles.projectCard}>
            <h3>Human-Centric Design</h3>
            <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
              Creating tools that enhance human capability without exploitation
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.contact}>
        <h2>Join the Conversation</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          These are complex topics that deserve thoughtful discussion.
          More detailed thoughts coming soon.
        </p>
      </section>
    </div>
  )
}
