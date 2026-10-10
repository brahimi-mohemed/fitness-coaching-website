import { useState } from 'react'
import styles from './Navbar.module.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleMenuClick = (event) => {
        if (event.target.closest('a, button')) {
            setIsMenuOpen(false)
        }
    }

    return (
        <header className={styles.header}>
            <nav className={styles.nav} aria-label="Main navigation">
                <a href="#home" className={styles.logo}>Alex Morgan</a>
                <div className={styles.links}>
                    <a href="#about-the-coach">About</a>
                    <a href="#coaching-services">Services</a>
                    <a href="#coaching-process">Process</a>
                    <a href="#client-results">Results</a>
                    <a href="#faq">FAQ</a>
                </div>
                <a
                    className={styles.CTAbtn}
                    href="#tally-open=2Eqkgp&tally-layout=modal&tally-width=800"
                >
                    Book a Free Consultation
                </a>
                <button
                    type="button"
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMenuOpen((previous) => !previous)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMenuOpen}
                >
                    ☰
                </button>
            </nav>

            <div
                className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}
                onClick={handleMenuClick}
                aria-hidden={!isMenuOpen}
            >
                <button
                    type="button"
                    className={styles.closeMenuBtn}
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close navigation menu"
                >
                    ✕
                </button>
                <a href="#about-the-coach">About</a>
                <a href="#coaching-services">Services</a>
                <a href="#coaching-process">Process</a>
                <a href="#client-results">Results</a>
                <a href="#faq">FAQ</a>
                <a
                    className={styles.CTA}
                    href="#tally-open=2Eqkgp&tally-layout=modal&tally-width=800"
                >
                    Book a Free Consultation
                </a>
            </div>
        </header>
    )
}

export default Navbar
