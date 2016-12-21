import makeSampler from 'components/utils/poisson-sampler'

function Poissonator (canvas) {
  const context = canvas.getContext('2d')

  const width = canvas.width
  const height = canvas.height

  const radius = 4
  const distance = 18

  let sampler = makeSampler(width, height, distance)
  let points = []

  function drawPoints () {
    for (let i = 0; i < 1000; ++i) {
      const point = sampler()
      if (!point) {
        break
      }

      points.push({ x: point[0], y: point[1] })
    }

    context.clearRect(0, 0, width, height)
    context.beginPath()

    points.forEach((p) => {
      context.moveTo(p.x, p.y)
      context.arc(p.x, p.y, radius, 0, 2 * Math.PI)
    })

    context.fillStyle = 'black'
    context.fill()
  }

  drawPoints()
}

export default Poissonator
