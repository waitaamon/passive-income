import { HomePage } from '../components'

export default [
  {
    path: '/',
    component: HomePage,
    name: 'homepage',
    meta: {
      needsAuth: false
    }
  }
]