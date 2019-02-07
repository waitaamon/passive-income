import store from '@/store'

const beforeEach = ((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.user) {
      next({
        path: '/sign-in'
      });
    } else {
      store.dispatch('clearValidationErrors')
      next();
    }
  } else {
    store.dispatch('clearValidationErrors')
    next();
  }
})

export default  beforeEach