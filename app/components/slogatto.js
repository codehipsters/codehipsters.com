import Velocity from 'velocity-animate'

/*
 * Animated text slideshow
 */
class Slogatto {
  constructor (el, options = {}) {
    this.el = el

    this.slogans = options.slogans || []
    this.interval = options.interval || 4000

    this.currentIndex = 0

    options.autostart && this.start()
  }

  /*
   * Performs exit animation and calls callback
   * on complete
   */
  unanimateSlogan (done) {
    const words = this.el.querySelectorAll('.slogatto__word')
    if (!words || !words.length) return done()

    const durationFn = x => 600
    const delayFn = x => 50 * x

    words.forEach((word, idx) => {
      Velocity(word, { opacity: 0, translateY: -60 },
        {
          delay: delayFn(idx),
          duration: durationFn(idx),
          easing: 'easeInOutQuint'
        })
    })

    setTimeout(done, delayFn(words.length - 1) + durationFn(words.length - 1))
  }

  changeSlogan () {
    this.unanimateSlogan(() => {
      const phrase = this.slogans[this.currentIndex]

      // Clear the text and change it to new one
      this.el.innerHTML = ''
      this.spanified(phrase)
        .forEach(s => this.el.appendChild(s))

      const words = this.el.querySelectorAll('.slogatto__word')

      words.forEach((word, idx) => {
        Velocity(word, { translateY: 30 },
          { duration: 0 })

        Velocity(word, { translateY: 0 },
          {
            delay: 30 * idx,
            duration: 1000 + 65 * Math.pow(idx, 1.5),
            easing: 'easeInOutQuint'
          })
      })

      this.currentIndex = (this.currentIndex + 1) % this.slogans.length

      // Schedule slogan change after `interval` ms
      setTimeout(this.changeSlogan.bind(this), this.interval)
    })
  }

  start () {
    this.el && this.changeSlogan()
  }

  /*
   * Returns corresponding markup for a slogan phrase
   */
  spanified (phrase) {
    return phrase.split(' ').map((word) => {
      const wrapper = document.createElement('span')
      const span = document.createElement('span')

      span.textContent = word + ' '
      span.className = 'slogatto__word'
      wrapper.className = 'slogatto__wrapper'

      wrapper.appendChild(span)
      return wrapper
    })
  }
}

export default Slogatto

