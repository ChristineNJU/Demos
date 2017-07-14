// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import '../theme/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
})
