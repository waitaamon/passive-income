<template>
    <div class="container">
        <hr>
        <div class="row mb-5">
            <div class="col-sm-6">
                <router-link :to="{name: 'new-article'}" class="btn btn-primary">New Article</router-link> &nbsp;

            </div>
            <div class="col-sm-6">
                <button class="btn btn-danger" @click="logout">Logout</button>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm-6 mb-5" v-for="(article, index) in articles" :key="index">
                <div class="card">
                    <img :src="article.imagePath" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ article.title}}</h5>
                        <p class="card-text"><p v-html="article.description.substring(0, 200)"></p>
                        <button @click="edit(article)" class="btn btn-success btn-block btn-outline">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
      name: 'all-article',
      data () {
        return {

        }
      },
      computed: {
        ...mapGetters({
          articles: 'article/getArticles'
        })
      },
      methods: {
        ...mapActions({
          allArticles: 'article/getArticles',
          setArticle: 'article/setArticle',
          logout: 'auth/logout'
        }),
        getArticles() {
          this.allArticles()
        },
        edit(article) {
           this.setArticle(article).then(() => {
             this.$router.replace({name: 'edit-article'})
           })
        },
        logout(){
            this.logout().then(() =>{
              this.$router.replace({path: '/'})
            })
        }
      },
      created() {
        this.getArticles()
      }
    }
</script>