// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
const Vue = require('vue')
const server = require('express')()
const createApp = require('./app')
const { createRouter } = require('./router')
const renderer = require('vue-server-renderer').createRenderer({template: require('fs').readFileSync('./pages/index.template.html', 'utf-8')})
server.get('*', (req, res) => {
  const context = {
    title: 'hello2',
    meta: `
    <meta ...>
    <meta ...>`,
    url: req.url
  }
  const app = createApp(context)
  renderer.renderToString(app, context, (err, html) => {
    if (err) {
      res.status(500).end('Internal Server Error')
      return
    }
    res.end(`
      ${html}
    `)
  })
})
server.listen(8080)
