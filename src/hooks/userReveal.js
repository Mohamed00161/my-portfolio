import { useEffect } from 'react'

/**
 * useReveal — observes all [data-reveal] elements and adds
 * the `is-visible` class when they scroll into view.
 *
 * Usage in JSX: <div data-reveal data-delay="100" className="reveal" />
 *
 * CSS you need in index.css:
 *   .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.65s ease, transform 0.65s ease; }
 *   .reveal.is-visible { opacity: 1; transform: none; }
 */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')
    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0
            setTimeout(() => {
              entry.target.classList.add('is-visible')
            }, Number(delay))
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default useReveal