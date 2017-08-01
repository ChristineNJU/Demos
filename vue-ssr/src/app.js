const Vue = require('vue')
const App = require('./App.vue')
const { createRouter } = require('./router')
function createApp () {
  // 创建 router 实例
  const router = createRouter()
  const app = new Vue({
    // 注入 router 到根 Vue 实例
    router,
    render: h => h(App)
  })
  // 注入 router 到根 Vue 实例
  return { app, router }
}
module.exports = {createApp}
