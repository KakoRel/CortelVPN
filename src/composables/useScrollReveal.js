import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal(options = {}) {
  const isVisible = ref(false)
  const elementRef = ref(null)
  let observer = null

  const defaultOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
    ...options
  }

  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true
          observer.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { isVisible, elementRef }
}

export function useParallax() {
  const offset = ref(0)

  const handleScroll = () => {
    offset.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { offset }
}

export function useCountUp(target, duration = 2000) {
  const current = ref(0)
  let animationFrame = null

  const start = () => {
    const startTime = performance.now()
    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      current.value = Math.round(eased * target)
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }
    animationFrame = requestAnimationFrame(animate)
  }

  onUnmounted(() => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
  })

  return { current, start }
}
