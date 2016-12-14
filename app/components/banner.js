import Velocity from 'velocity-animate'
const { Image } = window

import Slogatto from './slogatto'

// Waits until the image is loaded
const loadImage = (src, done) => {
  const image = new Image()
  image.addEventListener('load', done)
  image.src = src
}

const SLOGANS = [
  'Постмодерн умер, а веб — еще нет',
  'Подливаем смузи в ваш Virtual DOM с 2014',
  'Табы или пробелы? Главное, чтобы ты хорошо учился!',
  'Code Ergo Sum',
  'Кладем усталость от джаваскрипта на лопатки и щекочем'
]

class Banner {
  constructor (el, options = {}) {
    this.el = el

    this.images = options.images || []
    this.imageIdx = 0
    this.changeInterval = options.interval || 4000

    this.slides = [
      this.el.querySelector('.banner__image--first'),
      this.el.querySelector('.banner__image--second')
    ]

    this.start()
  }

  swapSlide () {
    const currentImage = this.images[this.imageIdx]

    loadImage(currentImage, () => {
      const slides = this.slides
      const [previous, current] = slides

      current.style = `background-image: url(${currentImage});`

      // slow appear
      Velocity(current, 'stop')
      Velocity(current, { scale: 1.0, translateY: '0px' },
        { duration: 0 })
      Velocity(current, { scale: 1.3, translateY: '-150px' },
        { duration: 36000, easing: 'linear' })

      // Fade in/out slides
      previous.classList.remove('banner__image--active')
      current.classList.add('banner__image--active')

      this.imageIdx = (this.imageIdx + 1) % this.images.length
      this.slides = [slides[1], slides[0]]

      setTimeout(this.swapSlide.bind(this), this.changeInterval)
    })
  }

  start () {
    const logo = this.el.querySelector('.banner__logo')

    if (logo) {
      Velocity(logo, { opacity: 0, translateY: 30, scale: 0.98 })
      Velocity(logo, { opacity: 1, translateY: 0, scale: 1 }, {
        easing: 'easeOutQuint',
        duration: 2000 })
    }

    setTimeout(() => {
      const sloganEl = this.el.querySelector('.banner__slogan')

      if (sloganEl) {
        this.slogatto = new Slogatto(sloganEl, {
          slogans: SLOGANS,
          interval: 6000
        })

        this.slogatto.start()
      }

      this.swapSlide()
    }, 500)
  }
}

export default Banner

