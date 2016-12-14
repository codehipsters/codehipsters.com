import Velocity from 'velocity-animate'
const { Image } = window

// Waits until the image is loaded
const loadImage = (src, done) => {
  const image = new Image()
  image.addEventListener('load', done)
  image.src = src
}

class Banner {
  constructor (el, images) {
    this.el = el

    this.images = images
    this.imageIdx = 0
    this.changeInterval = 4000

    this.slides = [
      this.el.querySelector('.banner__image--first'),
      this.el.querySelector('.banner__image--second')
    ]

    this.start()
  }

  changeSlogan () {
    const sloganEl = this.el.querySelector('.banner__slogan')
    if (!sloganEl) {
      return
    }
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
    logo && Velocity(logo, { opacity: 1 }, { duration: 300 })

    this.changeSlogan()
    setTimeout(this.swapSlide.bind(this), 500)
  }
}

export default Banner

