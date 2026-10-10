import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div>
                    <h3>Alex Morgan</h3>
                    <h4>Personalized weight-loss coaching built around real life, sustainable habits, and long-term progress.</h4>
                </div>
                <div>
                    <h3>Explore</h3>
                    <a href="#about-the-coach">About</a>
                    <a href="#coaching-services">Services</a>
                    <a href="#coaching-process">Process</a>
                    <a href="#client-results">Results</a>
                    <a href="#faq">FAQ</a>
                </div>
                <div>
                    <h3>Contact</h3>
                    <a href=''>Instagram</a>
                    <a href="#tally-open=2Eqkgp&tally-layout=modal&tally-width=800">
                        Book a Free Consultation
                    </a>
                    <p>hello@coachname.com</p>
                    <p>+1 000 000 0000</p>
                </div>
            </div>
            <div className={styles.footerRights}>
                <p>© 2026 Alex Morgan. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
