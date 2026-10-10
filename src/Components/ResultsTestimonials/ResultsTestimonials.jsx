import { useState } from 'react'
import styles from './ResultsTestimonials.module.css'
import arrowLeft from './arrow-left.svg'
import arrowRight from './arrow-right.svg'

import sarah from "./sarah.webp"
import daniel from "./daniel.webp"
import james from "./james.webp"
import emma from "./emma.webp"

const testimonials = [
  {
    image: sarah,
    quote:
      '“I used to struggle to fit exercise into my week. We built a plan around my schedule, and for the first time, staying consistent felt realistic.”',
    name: 'Sarah M.',
    result: 'Built a routine that fits her life',
  },
  {
    image: james,
    quote:
      '“I always thought I needed to push harder to see progress. Having a clear plan helped me train with more purpose and stop guessing what to do.”',
    name: 'James R.',
    result: 'More confidence in training',
  },
  {
    image: emma,
    quote:
      '“I expected weight loss to mean strict diets and giving up the foods I enjoy. Instead, I learned to make better choices without making food stressful.”',
    name: 'Emma L.',
    result: 'Developed healthier eating habits',
  },
  {
    image: daniel,
    quote:
      '“Some weeks were harder than others, but I never felt like one setback meant starting over. Having someone help me adjust the plan made a real difference.”',
    name: 'Daniel K.',
    result: 'Learned to stay consistent',
  },
]

function ResultsTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const testimonial = testimonials[activeIndex]

  const changeTestimonial = (direction) => {
    setActiveIndex(
      (current) => (current + direction + testimonials.length) % testimonials.length,
    )
  }

  return (
    <section className={styles.section} id="client-results">
      <h3>CLIENT RESULTS</h3>
      <h2>Real progress. Real people.</h2>
      <p>
        See how personalized coaching has helped clients build healthier habits
        and make lasting progress.
      </p>

      <div className={styles.testimonial} aria-live="polite">
        {testimonials.map(({ image, name }, index) => (
          <img
            className={`${styles.image} ${index === activeIndex ? styles.activeImage : ''}`}
            key={name}
            src={image}
            alt={index === activeIndex ? `${name}, coaching client` : ''}
            aria-hidden={index !== activeIndex}
            loading="eager"
            decoding="sync"
          />
        ))}
        <div className={styles.quoteContent}>
          <blockquote>{testimonial.quote}</blockquote>
          <h3>{testimonial.name}</h3>
          <p>{testimonial.result}</p>

          <nav className={styles.controls} aria-label="Testimonial navigation">
            <button
              className={styles.previous}
              type="button"
              onClick={() => changeTestimonial(-1)}
              aria-label="Show previous testimonial"
            >
              <img src={arrowLeft} alt="" loading="lazy" />
              <span>Previous</span>
            </button>

            <div
              className={styles.pagination}
              role="group"
              aria-label="Choose testimonial"
            >
              {testimonials.map((item, index) => (
                <button
                  className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ''}`}
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1} from ${item.name}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                />
              ))}
            </div>

            <button
              className={styles.next}
              type="button"
              onClick={() => changeTestimonial(1)}
              aria-label="Show next testimonial"
            >
              <span>Next</span>
              <img src={arrowRight} alt="" loading="lazy" />
            </button>
          </nav>
          <p className={styles.message}>Testimonials and client results on this demo website are fictional and provided for illustrative purposes.</p>
        </div>
      </div>
    </section>
  )
}

export default ResultsTestimonials
