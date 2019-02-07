<template>
    <div class="col-sm-6 offset-3">
        <form @submit.prevent="submit">
            <div class="form-group" :class="{ 'has-error': 'validation.email'}">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email"  placeholder="Enter email" v-model="form.email">
                <small class="help-block text-muted" v-if="validation.email">
                    {{ validation.email[0] }}
                </small>
            </div>
            <div class="form-group" :class="{ 'has-error': 'validation.password'}">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" v-model="form.password">
                <small class="help-block text-muted" v-if="validation.email">
                    {{ validation.email[0] }}
                </small>
            </div>
            <button type="submit" class="btn btn-primary btn-block">Login</button>
        </form>
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
        validation: 'getValidationErrors'
      })
    },
    methods: {
      ...mapActions({
        login: 'auth/login'
      }),
      submit() {
        this.login(this.form).then(() => {
            this.$router.replace({name: 'dashboard'})
        })
      }
    }
  }
</script>

<style scoped>

</style>