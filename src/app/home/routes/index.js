import { HomePage } from '../components'

export default [
  {
    path: '/home',
    component: HomePage,
    name: 'homepage',
    meta: {
      needsAuth: false
    }
  }
]