import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import main from '@/components/main'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/signin',
      component: SignIn
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/',
      component: main
    },
  ]
})
export default router