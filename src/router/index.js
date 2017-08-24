import Vue from 'vue'
import VueRouter from 'vue-router'
// import Hello from '@/components/Hello'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({ routes })

export default router
