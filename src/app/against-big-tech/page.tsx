import styles from '../page.module.css'
import Link from 'next/link'

export default function AgainstBigTech() {
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
            Against <span className={styles.highlight}>Big-tech</span>
          </h1>
          <p className={styles.heroSubtitle}>
            My Journey Through Innovation and Failed Ventures
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.about}>
        <h2>The UCCS BI Program Journey</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          This section will share my story of going through the UCCS Bachelor of Innovation (BI) program
          and the lessons learned from my entrepreneurial ventures.
        </p>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ color: 'var(--orange-primary)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
            The Failed Ventures That Shaped My Perspective
          </h3>

          <div className={styles.projectCard} style={{ marginBottom: '2rem' }}>
            <h3>Dumbify</h3>
            <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
              [Your story about Dumbify will go here - what it was, what you learned,
              and how it shaped your views on technology and innovation]
            </p>
          </div>

          <div className={styles.projectCard} style={{ marginBottom: '2rem' }}>
            <h3>Redirectly</h3>
            <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
              [Your story about Redirectly will go here - the challenges you faced,
              insights gained, and how it influenced your current path]
            </p>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ color: 'var(--orange-primary)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
            Where I Am Today
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            [This section will detail how these experiences - both successes and failures -
            have led you to where you are today in your career and perspective on technology]
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
          "Sometimes the greatest lessons come from the ventures that didn't succeed."
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className={styles.contact}>
        <h2>More to Come</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          This story is still being written. Check back soon for the full narrative
          of innovation, failure, and growth.
        </p>
      </section>
    </div>
  )
}
