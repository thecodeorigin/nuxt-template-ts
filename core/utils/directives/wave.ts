/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { DirectiveOptions } from 'vue'

export default {
  inserted (el: any, binding: any) {
    el.addEventListener('click', (event: any) => {
      const duration = binding.value && !isNaN(binding.value) ? binding.value : 600

      el.classList.add('my-wave-effect')

      const circle = document.createElement('div')
      const diameter = Math.max(el.clientWidth, el.clientHeight)
      const radius = diameter / 2

      circle.style.width = circle.style.height = `${diameter}px`
      circle.style.left = `${event.clientX - el.offsetLeft - radius}px`
      circle.style.top = `${event.clientY - el.offsetTop - radius}px`
      circle.classList.add('ripple')

      circle.style.animationDuration = `${duration}ms`

      // Trigger ripple
      const oldCircle = el.getElementsByClassName('ripple')[0]
      // If exist, remove
      if (oldCircle) {
        oldCircle.remove()
      }

      el.appendChild(circle)

      // Remove element after animation end
      setTimeout(() => {
        circle.remove()
      }, duration)
    })
  },
} as DirectiveOptions
