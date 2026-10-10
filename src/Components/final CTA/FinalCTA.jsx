import PrimaryButton from '../Primary Button/PrimaryButton.jsx'
import styles from './FinalCTA.module.css'

function FinalCTA() {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.content}>
                <h3>READY TO GET STARTED?</h3>
                <h2>Your weight-loss journey starts here.</h2>
                <p>Get personalized guidance, accountability, and a plan built around your life.</p>
                <PrimaryButton href="#tally-open=2Eqkgp&tally-layout=modal&tally-width=800">
                    Book a Free Consultation
                </PrimaryButton>
            </div>
        </section>
    )
}

export default FinalCTA
