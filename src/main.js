// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/Main'
import router from './router'
import store from './vuex'
import Loader from './plugins/loader'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
// const router = new VueRouter({})

Vue.use(Loader, store)

new Vue({
	data: {
		name: 'xobi'
	},
  el: '#app',
  router,
	store,
  template: '<App/>',
  components: { App }
})
