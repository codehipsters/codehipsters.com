const images = [
  '/images/birth-venus.jpg',
  'https://media.giphy.com/media/l41lSeYuUleD8vG2Q/giphy.gif',
  'http://i.giphy.com/3o6EhOYMhOTANYgHMk.gif'
]

document.addEventListener('DOMContentLoaded', function () {
  const banner = document.querySelector('.banner')

  let slides = [
    banner.querySelector('.banner__image--first'),
    banner.querySelector('.banner__image--second')
  ]

  let imageIdx = 0

  const swapImages = () => {
    const [previous, current] = slides
    previous.classList.remove('banner__image--active')

    setTimeout(() => previous.classList.remove('banner__image--zoom'), 2000)

    current.style = `background-image: url(${images[imageIdx]});`
    current.classList.add('banner__image--zoom')
    current.classList.add('banner__image--active')

    imageIdx = (imageIdx + 1) % images.length

    slides = [slides[1], slides[0]]
  }

  setTimeout(() => {
    swapImages()
    setInterval(swapImages, 5000)
  }, 1000)
})
