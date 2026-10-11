import styles from './WhoIHelp.module.css'
import compass from './compass.svg'
import briefcase from './case.svg'
import reset from './reset.svg'

function WhoIHelp() {
    return (
        <section id="who-i-help" className={styles.section}>
            <h3>WHO I HELP</h3>
            <h2>Built for real life.</h2>
            <p>Coaching for people who want to lose weight without extreme diets, complicated routines, or starting over every Monday.</p>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <img src={briefcase} alt="" loading="lazy" />
                    <h4>Busy Professionals</h4>
                    <p>A realistic approach that fits around your schedule. Build healthier habits without letting a busy lifestyle get in the way.</p>
                </div>
                <div className={styles.card}>
                    <img src={compass} alt="" loading="lazy" />
                    <h4>Weight-Loss Beginners</h4>
                    <p>Clear guidance on what to eat, how to train, and where to start. Build confidence with a plan that's simple to follow.</p>
                </div>
                <div className={styles.card}>
                    <img src={reset} alt="" loading="lazy" />
                    <h4>Starting Over</h4>
                    <p>Build habits and consistency instead of relying on short-term motivation. Create a sustainable approach you can stick with long term.</p>
                </div>
            </div>
        </section>
    )
}

export default WhoIHelp
