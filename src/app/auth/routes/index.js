import { Login } from '../components'


export default [
  {
    path: '/',
    component: Login,
    name: 'login',
    meta: {
      needsAuth: false
    }
  }
]