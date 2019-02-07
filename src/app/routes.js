import home from './home/routes'
import auth from './auth/routes'
import admin from './admin/routes'

export default [...home, ...auth, ...admin ]