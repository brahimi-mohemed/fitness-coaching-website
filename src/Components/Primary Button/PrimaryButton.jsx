import styles from './PrimaryButton.module.css'

function PrimaryButton({ children, href, onClick, className = '' }) {
    const buttonClassName = `${styles.primaryButton} ${className}`.trim()

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

export default PrimaryButton
