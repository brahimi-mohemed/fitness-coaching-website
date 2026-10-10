import styles from './CoachingProcess.module.css'

const processSteps = [
  {
    title: 'Book a Consultation',
    description:
      'We talk about your goals, current routine, challenges, and what you want to achieve.',
  },
  {
    title: 'Build Your Plan',
    description:
      'You get a personalized approach to training, nutrition, and habits based on your lifestyle.',
  },
  {
    title: 'Put It Into Action',
    description:
      'Follow your plan with ongoing guidance, adjustments, and accountability.',
  },
  {
    title: 'Track Your Progress',
    description:
      'Review your progress together and adapt your approach as your goals and needs change.',
  },
]

function CoachingProcess() {
  return (
    <section className={styles.section} id="coaching-process">
          <h3>HOW IT WORKS</h3>
          <h2>A simple approach to lasting progress.</h2>
          <p >
            From your first consultation to your ongoing coaching, every step is
            built around your goals.
          </p>

        <ol className={styles.timeline}>
          {processSteps.map(({ title, description }, index) => (
            <li className={styles.step} key={title}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className={styles.stepContent}>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
    </section>
  )
}

export default CoachingProcess
