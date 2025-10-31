import styles from '../page.module.css'
import Link from 'next/link'

export default function Portfolio() {
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
            Technical <span className={styles.highlight}>Portfolio</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Software Engineering & DevOps Experience
          </p>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className={styles.projects}>
        <h2>Work Experience</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <h3>Software Engineering Internship</h3>
            <p style={{ color: 'var(--orange-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
              Infinity Systems Engineering | May 2024 - Aug 2024
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
              <li>Deployed Docker containerized Elastic Beats (Filebeat, Metricbeat, Packetbeat, and Heartbeat) on 11 servers (EC2 instances) for logging purposes in Elasticsearch</li>
              <li>Created 32 Kibana visualizations showing service logs, system metrics, network traffic, and uptime vs downtime across two dashboards</li>
              <li>Automated the deployment of Elastic Beats for two programs; implemented capabilities for automation with future programs using Bash and Ansible</li>
              <li>Contributed Terraform code for all 42 EC2 instances on AWS; moved team towards a professional, production environment</li>
            </ul>
            <div className={styles.techStack}>
              <span>Elasticsearch</span>
              <span>Docker</span>
              <span>Bash</span>
              <span>Ansible</span>
              <span>Terraform</span>
              <span>AWS</span>
              <span>Kibana</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>Web Services Student Assistant</h3>
            <p style={{ color: 'var(--orange-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
              UCCS | Feb 2023 - May 2024
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
              <li>Designed and built a simple web app, manual reading tracker of specific books</li>
              <li>Designed database schema and database tables using MySQL - index ID, book, sub books, chapters, page numbers, line numbers, verses, and date added</li>
              <li>Created a simple localhost website using Spring Boot API; implemented CRUD Postman operations - add, view, edit, remove</li>
            </ul>
            <div className={styles.techStack}>
              <span>Java</span>
              <span>Spring Boot</span>
              <span>MySQL</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projects} style={{ background: 'var(--light-gray)' }}>
        <h2>Projects</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <h3>Titanic Machine Learning Double Project</h3>
            <p style={{ color: 'var(--orange-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
              Aug 2024 - Present
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
              <li>Team project of two; Submitted unique machine learning models to the leaderboards for two competitions on Kaggle</li>
              <li>Focused on "Titanic – Machine Learning from Disaster" Kaggle competition - Simpler dataset, fewer features, straightforward demographic data</li>
              <li>Continued project with "Spaceship Titanic" Kaggle competition; More complex data, multi-level categorical features, featured engineering required</li>
              <li>Generated unique models with distinct leaderboard positions for both competitions</li>
            </ul>
            <div className={styles.techStack}>
              <span>Python</span>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Scikit-learn</span>
              <span>TensorFlow</span>
              <span>Kaggle</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>Simple Personal Portfolio Website</h3>
            <p style={{ color: 'var(--orange-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
              Sep 2024 - Present
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
              <li>Created and programmed a simple personal portfolio website</li>
              <li>Built an "About me" page using HTML, CSS, JavaScript tech stack; talked about interests and background</li>
              <li>Constructed a "My Projects" page; showcased details list of my projects</li>
              <li>Hosted on Cloudflare for public domain access</li>
            </ul>
            <div className={styles.techStack}>
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>Cloudflare</span>
              <span>Tailwind</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>Matrix Manipulation and Computational Linear Algebra</h3>
            <p style={{ color: 'var(--orange-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
              Sep 2024
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
              <li>Manipulated matrices in Python; applied computational linear algebra</li>
              <li>Created functions to generate matrices, then wrote matrices to separate files</li>
              <li>Read matrices from a file, then added two matrices together, and wrote to new files</li>
              <li>Utilized NumPy libraries; verified result</li>
            </ul>
            <div className={styles.techStack}>
              <span>Python</span>
              <span>NumPy</span>
              <span>Git</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>Robotics Final Lab - Arduino on wheels</h3>
            <p style={{ color: 'var(--orange-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
              Apr 2024
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
              <li>Programmed and built an Arduino robot that drove on the table, completed the final objectives, and ended by following a line indefinitely using a light sensor</li>
              <li>Drove around the table by itself (motors), indicated where to turn (servo), played sounds (speaker), flashed lights (LEDs), responded to buttons (analog), made a series of turns (motors)</li>
              <li>Followed a ring of tape; used a photoresistor to detect light values of black table and white tape</li>
            </ul>
            <div className={styles.techStack}>
              <span>Arduino</span>
              <span>C/C++</span>
              <span>Robotics</span>
            </div>
          </div>

          <div className={styles.projectCard}>
            <h3>Data Mining with Python</h3>
            <p style={{ color: 'var(--orange-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
              Mar 2024
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
              <li>Created a program that used a series of functions to data mine; started from a large, parent zip file and outputted the sum of all five-digit numbers across all files</li>
              <li>Started with unzipping a chosen file using the zipfile library in Python; counted the number of subdirectories using Path from pathlib library in Python</li>
              <li>Added up the total number of files; found the total number of five-digit numbers; completed the sum of all the five-digit numbers</li>
            </ul>
            <div className={styles.techStack}>
              <span>Python</span>
              <span>Data Mining</span>
              <span>File I/O</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.about}>
        <h2>Skills & Technologies</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div>
            <h3 style={{ color: 'var(--orange-primary)', marginBottom: '1rem' }}>Languages</h3>
            <div className={styles.techStack}>
              <span>Java</span>
              <span>Python</span>
              <span>R</span>
              <span>C</span>
              <span>SQL</span>
              <span>Swift</span>
              <span>JavaScript</span>
              <span>Kotlin</span>
            </div>
          </div>
          <div>
            <h3 style={{ color: 'var(--orange-primary)', marginBottom: '1rem' }}>DevOps</h3>
            <div className={styles.techStack}>
              <span>Docker</span>
              <span>Elasticsearch</span>
              <span>Ansible</span>
              <span>Terraform</span>
              <span>Kibana</span>
              <span>Jenkins</span>
            </div>
          </div>
          <div>
            <h3 style={{ color: 'var(--orange-primary)', marginBottom: '1rem' }}>Cloud Services</h3>
            <div className={styles.techStack}>
              <span>AWS EC2</span>
              <span>AWS RDS</span>
              <span>AWS S3</span>
              <span>AWS VPC</span>
            </div>
          </div>
          <div>
            <h3 style={{ color: 'var(--orange-primary)', marginBottom: '1rem' }}>Data Science</h3>
            <div className={styles.techStack}>
              <span>Pandas</span>
              <span>NumPy</span>
              <span>Matplotlib</span>
              <span>Scikit-learn</span>
              <span>TensorFlow</span>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Leadership */}
      <section className={styles.projects} style={{ background: 'var(--light-gray)' }}>
        <h2>Education & Leadership</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <h3>Bachelor of Innovation in Data Analytics and Systems Engineering</h3>
            <p style={{ color: 'var(--orange-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
              UCCS | Jan 2023 - Dec 2025 | GPA: 3.878
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
              <li>General Track</li>
              <li>Cross-Discipline Core in Business</li>
              <li>Pending Secret Security Clearance</li>
            </ul>
          </div>

          <div className={styles.projectCard}>
            <h3>President of Computer Science Club at UCCS</h3>
            <p style={{ color: 'var(--orange-primary)', fontWeight: 600, marginBottom: '0.5rem' }}>
              Jan 2024 - Present
            </p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
              <li>Hosted a Computer Science Club Movie Night at UCCS; received funding for food and supplies</li>
              <li>Held a Career Fair Prep event and Resume Review; created and shared Career Fair document and resume resources</li>
              <li>Ran tech demos throughout the semester showcasing Ansible, Terraform, AWS, Elasticsearch, GitHub</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
