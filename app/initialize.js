import Banner from 'components/banner'

const images = [
  '/images/birth-venus.jpg',
  'https://media.giphy.com/media/l41lSeYuUleD8vG2Q/giphy.gif',
  'http://i.giphy.com/3o6EhOYMhOTANYgHMk.gif'
]

document.addEventListener('DOMContentLoaded', function () {
  // Init banner slideshow
  const bannerEl = document.querySelector('.banner')
  bannerEl && new Banner(bannerEl, { images })
})
