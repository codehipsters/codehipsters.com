const pug = require('pug')
const path = require('path')
const mkdirp = require('mkdirp')
const fs = require('fs')

const isProduction = process.env.NODE_ENV === 'production'

const templatesPath = path.join(__dirname, 'app', 'templates')
const publicPath = path.join(__dirname, 'public')

const options = {
  basedir: path.join(__dirname, 'app'),
  pretty: !isProduction
}

const staticPages = {
  'main.pug': 'index.html'
}

for (const page in staticPages) {
  const filename = path.join(templatesPath, page)
  const html = pug.renderFile(filename, options)

  const outputFile = path.join(publicPath, staticPages[page])

  mkdirp(path.dirname(outputFile), () => {
    fs.writeFile(outputFile, html)
  })
}
