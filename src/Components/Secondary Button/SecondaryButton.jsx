import styles from './SecondaryButton.module.css'

function SecondaryButton({ children, href, onClick, className = '' }) {
    const buttonClassName = `${styles.secondaryButton} ${className}`.trim()

    if (href) {
        return (
            <a className={buttonClassName} href={href}>
                {children}
            </a>
        )
    }

    return (
        <button className={buttonClassName} type="button" onClick={onClick}>
            {children}
        </button>
    )
}

export default SecondaryButton
