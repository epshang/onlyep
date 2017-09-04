// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import HomePage from './components/homepage/homePage'

import './common/stylus/index.styl'

Vue.use(VueRouter)
let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: HomePage
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
	components: { App }  
})
