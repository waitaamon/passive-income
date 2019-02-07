import { Login } from '../components'


export default [
  {
    path: '/sign-in',
    component: Login,
    name: 'login',
    meta: {
      needsAuth: false
    }
  }
]