// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import HomePage from './pages/homepage/homePage'

import './common/stylus/index.styl'
// starting with version 2.6.0, you need to manually introduce swiper's css
require('swiper/dist/css/swiper.css')

// mount with global
Vue.use(VueAwesomeSwiper)
Vue.prototype.FilePath = 'http://live.ranyes.cn/'

Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  routes: [{
      path: '/',
      redirect: '/homepage'
    },
    {
      path: '/homepage',
      component: HomePage
    }
  ]
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
