<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                &nbsp;
            </ul>
            <ul class="nav navbar-nav navbar-right" v-if="!user.authenticated">
                <li><router-link :to="{ name: 'login'}">Login</router-link></li>
            </ul>
            <!-- Right Side Of Navbar -->
            <ul class="nav navbar-nav navbar-right" v-if="user.authenticated">
                <!-- Authentication Links -->

                <li><router-link :to="{ name: 'dashboard'}">All Articles</router-link></li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        username  <span class="caret"></span>
                    </a>

                    <ul class="dropdown-menu" role="menu">
                        <li>
                            <a href="#" @click.prevent="signOut">
                                Logout
                            </a>


                        </li>
                    </ul>
                </li>

            </ul>

        </div>
    </nav>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default{
    computed: mapGetters({
      user: 'auth/user',
    })
    ,
    methods: {
      ...mapActions({
        logout: 'auth/logout'
      }),

      signOut(){
        this.logout().then(() => {

          this.$router.replace({ name: 'homepage' })
        })

      }
    }
  }
</script>

<style scoped>

</style>