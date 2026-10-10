import { useState } from 'react'
import FAQArrow from './FAQArrow.svg'
import styles from './FAQ.module.css'

const faqs = [
    {
        question: 'How does the free consultation work?',
        answer:
            'The consultation is a chance to talk about your goals, current routine, challenges, and what you want to achieve. We’ll use that conversation to understand where you are now and whether coaching is the right fit for you.',
    },
    {
        question: 'Do you offer online coaching?',
        answer:
            'Yes. Online coaching gives you personalized guidance, regular check-ins, and ongoing support wherever you are. Your approach is built around your goals, lifestyle, and the level of support you need.',
    },
    {
        question: 'Do I need gym experience to start?',
        answer:
            'Not at all. Coaching is designed around your current fitness level, so you can start whether you are completely new to training or already have some experience. We’ll build from where you are and progress at a realistic pace.',
    },
    {
        question: 'Will I have a specific meal plan?',
        answer:
            'The focus is on building sustainable eating habits rather than relying on extreme restrictions. Your nutrition guidance will be adapted to your goals, preferences, routine, and lifestyle so you can make changes you can actually maintain.',
    },
    {
        question: 'How often will we check in?',
        answer:
            'Check-ins are scheduled regularly so we can review your progress, discuss any challenges, and make adjustments when needed. The exact frequency depends on your coaching plan and the level of support you need.',
    },
    {
        question: 'How long does coaching usually last?',
        answer:
            'There is no single timeline that works for everyone. Coaching length depends on your goals, starting point, progress, and the type of support you need. The focus is on building habits and making progress that can continue beyond coaching.',
    },
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section id="faq" className={styles.section}>
            <h3>FAQ</h3>
            <h2>Questions Before We Get Started?</h2>
            <div className={styles.list}>
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index
                    const answerId = `faq-answer-${index}`

                    return (
                        <div className={styles.item} key={faq.question}>
                            <button
                                type="button"
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                aria-expanded={isOpen}
                                aria-controls={answerId}
                            >
                                <span>{faq.question}</span>
                                <img
                                    src={FAQArrow}
                                    alt=""
                                    loading="lazy"
                                    className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}
                                />
                            </button>
                            <div
                                id={answerId}
                                className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}
                                aria-hidden={!isOpen}
                            >
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default FAQ
