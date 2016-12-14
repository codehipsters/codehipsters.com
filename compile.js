const pug = require('pug')
const path = require('path')
const mkdirp = require('mkdirp')
const fs = require('fs')
const marked = require('marked')
const glob = require('glob')
const ncp = require('ncp').ncp

const isProduction = process.env.NODE_ENV === 'production'

const templatesPath = path.join(__dirname, 'app', 'templates')
const publicPath = path.join(__dirname, 'public')

const pugOptions = {
  basedir: path.join(__dirname, 'app'),
  pretty: !isProduction
}

/*
 * Compile static pages
 * TODO: move to brunch
 */
const staticPages = {
  'main.pug': 'index.html'
}

for (const page in staticPages) {
  const filename = path.join(templatesPath, page)
  const html = pug.renderFile(filename, pugOptions)

  const outputFile = path.join(publicPath, staticPages[page])

  mkdirp(path.dirname(outputFile), () => {
    fs.writeFile(outputFile, html)
    console.log(`-> ${outputFile}`)
  })
}

/*
 * Compiles a post within a given dir
 */
const compilePost = (postPath, onDone) => {
  const postConfig = require(path.join(postPath, 'post.json'))

  fs.readFile(path.join(postPath, 'post.md'), (err, data) => {
    if (err) return

    const postMarkdown = data.toString()
    const postContent = marked(postMarkdown)

    const outputDir = path.join(publicPath, postConfig.output || postPath)

    mkdirp(outputDir, () => {
      const template = path.join(templatesPath, 'post.pug')
      const html = pug.renderFile(template, Object.assign({}, pugOptions, {
        page: {
          title: postConfig.title
        },

        post: Object.assign({
          content: postContent
        }, postConfig)
      }))

      const outputFile = path.join(outputDir, 'index.html')
      fs.writeFile(outputFile, html, () => {
        const assetsPath = path.join(postPath, 'assets')

        ncp(assetsPath, publicPath)

        console.log(`Assets ${assetsPath} linked`)
        onDone && onDone(null)
      })

      console.log(`-> ${outputFile}`)
    })
  })
}

/*
 * Compile all posts in /posts dir
 */
glob(path.join(__dirname, 'posts', '*/'), (err, files) => {
  if (err) return

  files.forEach((file) => compilePost(file))
})

