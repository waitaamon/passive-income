import store from '@/store'

const beforeEach = ((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.user) {
      next({
        path: '/'
      });
    } else {
      store.dispatch('clearError')
      next();
    }
  } else {
    store.dispatch('clearError')
    next();
  }
})

export default  beforeEach