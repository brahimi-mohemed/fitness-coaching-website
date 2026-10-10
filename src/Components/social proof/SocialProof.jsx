import client from "./client.svg"
import star from "./star.svg"
import trophy from "./trophy.svg"
import styles from './SocialProof.module.css'

function SocialProof() {
    return (
        <section className={styles.section}>
            <div className={styles.value}>
                <img src={client} alt="" loading="lazy" />
                <span>100+ Clients Coached</span>
            </div>
            <div className={styles.value}>
                <img src={star} alt="" loading="lazy" />
                <span>95% Client Satisfaction </span>
            </div>
            <div className={styles.value}>
                <img src={trophy} alt="" loading="lazy" />
                <span>5+ Years Coaching</span>
            </div>
        </section>
    )
}

export default SocialProof
