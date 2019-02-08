<template>
    <div class="row">
        <div class="col-sm-6 offset-3">
            <div class="alert alert-danger alert-dismissable" v-if="error !== null">
               {{ error.message }}
            </div>
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email"  placeholder="Enter email" v-model="form.email">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Password" v-model="form.password">
                </div>
                <button type="submit" class="btn btn-primary btn-block" v-if="!loading">Login</button>
                <div class="row">
                    <div class="col-sm-6 offset-3 text-center" v-if="loading">
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'login',
    data() {
      return {
        form: {
          email: null,
          password: null,
          returnSecureToken: true
        }
      }
    },
    computed: {
      ...mapGetters({
        error: 'getError',
        loading: 'loading'
      }),
    },
    methods: {
      ...mapActions({
        login: 'auth/login'
      }),
      submit() {
        this.login(this.form).then(() => {
            this.$router.replace({ name: 'articles' })
        })
      }
    }
  }
</script>

<style scoped>

</style>