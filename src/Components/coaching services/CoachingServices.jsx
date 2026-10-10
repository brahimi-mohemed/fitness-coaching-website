import styles from './CoachingServices.module.css'
import service1 from './service1.webp'
import service2 from './service2.webp'
import service3 from './service3.webp'
import PrimaryButton from '../Primary Button/PrimaryButton'

function CoachingServices() {
    return (
        <section id="coaching-services" className={styles.section}>
            <h3>COACHING SERVICES</h3>
            <h2>Support built around your goals.</h2>
            <p>Personalized coaching to help you lose weight, build better habits, and stay consistent.</p>
            <div className={styles.container}>
                <div className={styles.item}>
                    <img className={styles.image} src={service1} loading="lazy" alt="One-to-one weight loss coaching" />
                    <div className={styles.copy}>
                        <h3>1-on-1 Weight Loss Coaching</h3>
                        <p>Get personalized coaching built around your goals, lifestyle, and current level. We'll work together to create sustainable habits, stay consistent, and make steady progress over time.</p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.copy}>
                        <h3>Online Coaching</h3>
                        <p>Get structured guidance and regular check-ins wherever you are. Follow a personalized approach to training, nutrition, and habits while having ongoing support and accountability along the way.</p>
                    </div>
                    <img className={styles.image} src={service3} loading="lazy" alt="Online personal training and coaching" />
                </div>
                <div className={styles.item}>
                    <img className={styles.image} src={service2} loading="lazy" alt="Nutrition and habit coaching" />
                    <div className={styles.copy}>
                        <h3>Nutrition & Habit Coaching</h3>
                        <p>Build sustainable eating habits and daily routines without extreme restrictions or complicated rules. Learn how to make better choices, stay consistent, and create habits that fit your everyday life.</p>
                    </div>
                </div>
            </div>
            <h4>Ready to start your journey?</h4>
            <PrimaryButton href="#tally-open=2Eqkgp&tally-layout=modal&tally-width=800">
                Book a Free Consultation
            </PrimaryButton>
        </section>
    )
}

export default CoachingServices
