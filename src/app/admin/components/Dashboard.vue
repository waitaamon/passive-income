<template>
    <div>
        <div class="row">
            <div class="col-sm-8"></div>
            <div class="col-sm-4">
                <router-link :to="{name: 'new-article'}" class="btn btn-block btn-primary">New Article</router-link>
            </div>
        </div>
    </div>

</template>

<script>
    import { mapGetters, mapActions } from  'vuex'
    export default {
      name: 'admin-dashboard',
      computed: {
        ...mapGetters({
          token: 'auth/token'
        })
      },
      methods: {
        ...mapActions({
          articles: 'admin/articles'
        })
      },
      created () {
        this.getArticles
      }
    }
</script>