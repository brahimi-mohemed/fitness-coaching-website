import styles from './AboutTheCoach.module.css'
import checkIcon from './check.svg'
import image from './portrait3.webp'

const coachingPrinciples = [
  {
    title: 'Sustainable habits',
    description: 'No extreme approaches or quick fixes.',
  },
  {
    title: 'Personalized guidance',
    description: 'Your plan adapts to your lifestyle and goals.',
  },
  {
    title: 'Long-term progress',
    description: 'Focus on habits you can maintain beyond coaching.',
  },
]

function AboutTheCoach() {
  return (
    <section className={styles.section} id="about-the-coach">
        <div className={styles.coachContent}>
          <h3>MEET YOUR COACH</h3>
          <h2>Meet the coach behind your progress.</h2>
          <p>
            I help you approach weight loss through sustainable habits, with
            guidance built around your routine, preferences, and goals.
          </p>
          <p>
            I coach this way because lasting change needs to fit real life.
            Together, we focus on realistic steps you can keep taking, even
            when life gets busy.
          </p>

          <ul className={styles.principles}>
            {coachingPrinciples.map(({ title, description }) => (
              <li className={styles.principle} key={title}>
                <img className={styles.check} src={checkIcon} alt="" loading="lazy" />
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>

        <img
          className={styles.portraitPlaceholder}
          src={image}
          alt="Personal trainer smiling"
          loading="lazy"
        />
    </section>
  )
}

export default AboutTheCoach
