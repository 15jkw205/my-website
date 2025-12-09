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
            When Innovation Meets the Walled Garden
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.about}>
        <h2>The Problem With Big Tech&apos;s Control</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
          Through my journey in the UCCS Bachelor of Innovation program, I learned a hard truth: 
          sometimes the best ideas die not because they&apos;re bad, but because they threaten the 
          status quo. Here&apos;s the story of how Apple and Google&apos;s terms of service killed 
          two ventures that could have genuinely helped people reclaim their digital lives.
        </p>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ color: 'var(--orange-primary)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
            The Ventures That Hit the Wall
          </h3>

          <div className={styles.projectCard} style={{ marginBottom: '2rem' }}>
            <h3>Dumbify (Summer 2023)</h3>
            <p style={{ marginTop: '1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              <strong>The Vision:</strong> A mobile app that gave users granular control over their 
              social media experience. Don&apos;t like short-form content? Toggle it off. Tired of 
              endless scrolling features? Hide them. Want to use Instagram without Reels? Done.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              <strong>The Reality:</strong> The concept died in the research phase. Both Apple&apos;s 
              App Store and Google Play have explicit policies against apps that modify the behavior 
              or appearance of other applications. The very feature that made Dumbify useful—giving 
              users control over addictive design patterns—was exactly what made it forbidden.
            </p>
            <p style={{ lineHeight: '1.8', fontStyle: 'italic', color: 'var(--black-secondary)' }}>
              The lesson: Big tech doesn&apos;t want you to have control over how you use their platforms. 
              Their business model depends on engagement, even when that engagement is harmful.
            </p>
          </div>

          <div className={styles.projectCard} style={{ marginBottom: '2rem' }}>
            <h3>Redirectly (2023-2024)</h3>
            <p style={{ marginTop: '1rem', lineHeight: '1.8', marginBottom: '1rem' }}>
              <strong>The Vision:</strong> A beautifully simple solution to digital addiction. Pick 
              any app you&apos;re trying to quit (like YouTube), and redirect it to a healthier 
              alternative (like Messages). The app intercepts your muscle memory and helps break 
              the habit loop.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              <strong>The Build:</strong> I built the entire app in Android Studio using Kotlin and 
              Gradle. It worked perfectly. The user experience was seamless, the concept was sound, 
              and I couldn&apos;t understand why something this simple didn&apos;t already exist.
            </p>
            <p style={{ lineHeight: '1.8', marginBottom: '1rem' }}>
              <strong>The Kill Shot:</strong> One line of code. That&apos;s all it took to violate 
              Google Play Store&apos;s terms of service. You cannot modify system-level app routing. 
              The exact functionality that made Redirectly work was the exact functionality that made 
              it unpublishable.
            </p>
            <p style={{ lineHeight: '1.8', fontStyle: 'italic', color: 'var(--black-secondary)' }}>
              The lesson: If your innovation helps users escape addictive app ecosystems, it&apos;s 
              not innovation—it&apos;s a threat to revenue streams.
            </p>
          </div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ color: 'var(--orange-primary)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
            What These Failures Taught Me
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            Both ventures failed, but they crystallized something important: the digital landscape 
            isn&apos;t failing us by accident. It&apos;s designed this way. The walled gardens, the 
            restrictive terms of service, the impossible-to-enforce policies—they all serve to 
            protect existing power structures and business models.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
            But here&apos;s the thing: these failures didn&apos;t discourage me. They made me more 
            determined to find ways to build technology that serves people, not corporations. Whether 
            that means working within the system differently, contributing to open-source alternatives, 
            or finding companies that align technology with human flourishing rather than mere engagement 
            metrics.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
            These experiences have driven me toward companies like Covenant Eyes and Gloo—organizations 
            using technology to genuinely help people rather than exploit their psychological 
            vulnerabilities for profit. That&apos;s the kind of innovation I want to be part of.
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
          &quot;The best ideas aren&apos;t always the ones that succeed—sometimes they&apos;re the 
          ones that reveal what&apos;s broken in the system.&quot;
        </blockquote>
      </section>

      {/* Call to Action */}
      <section className={styles.contact}>
        <h2>The Journey Continues</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          These aren&apos;t my last attempts at building something meaningful. I&apos;m actively 
          exploring new ideas—both conventional and unconventional approaches to technology that 
          serves human dignity.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          Currently, I&apos;m looking into more apps that push the limits of what&apos;s allowed—tools 
          designed for my own productivity and wellbeing, and potentially for others who want to reclaim 
          control over their digital lives.
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
          If you&apos;re working on similar challenges or have ideas to explore, let&apos;s connect.
        </p>
      </section>
    </div>
  )
}
