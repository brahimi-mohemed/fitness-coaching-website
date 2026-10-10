import styles from './Hero.module.css'
import PrimaryButton from '../Primary Button/PrimaryButton.jsx'
import SecondaryButton from '../Secondary Button/SecondaryButton.jsx'
import hero from "./hero.webp" 

function Hero() {
    return (
        <section id="home" className={styles.section}>
            <div className={styles.content}>
                <h2>PERSONAL TRAINING & ONLINE COACHING</h2>
                <h1>A Healthier You Starts Here.</h1>
                <p>Personalized training and coaching designed around your goals, your schedule, and your lifestyle — whether you train in the gym or from home</p>
                <div className={styles.actions}>
                    <PrimaryButton href="#tally-open=2Eqkgp&tally-layout=modal&tally-width=800">
                        Book a Consultation
                    </PrimaryButton>
                    <SecondaryButton href="#coaching-process">See How It Works</SecondaryButton>
                </div>
            </div>
            <img
                src={hero}
                className={styles.image}
                alt="Personal training and online coaching"
            />
        </section>
    )
}

export default Hero
