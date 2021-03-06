// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// library import section
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import 'bulma/css/bulma.css'
import vmodal from 'vue-js-modal'
import VueParticles from 'vue-particles'
import moment from 'moment'
// import VueSocketio from 'vue-socket.io'
import VueFire from 'vuefire'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.use(vmodal)
Vue.use(VueParticles)
Vue.use(VueFire)
// Vue.use(VueSocketio, 'http://192.168.123.102:4000') // 접속 포트 등록

// date filtering library 추가 (usage: | )
Vue.filter('timeAgo', function (value) {
  return moment(value).format('LLLL')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})

