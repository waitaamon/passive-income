<template>
    <div class="row">
        <div class="col-sm-6 mb-5" v-for="(article, index) in articles" :key="index">
            <div class="card">
                <img :src="article.imagePath" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ article.title}}</h5>
                    <p class="card-text"><p v-html="article.description.substring(0, 200)"></p>
                    <button @click="edit(index)" class="btn btn-success btn-block btn-outline">Edit</button>
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
          updateArticle: 'article/updateArticle'
        }),
        getArticles() {
          this.allArticles()
        },
        edit(id) {
          this.updateArticle(id)
        }
      },
      created() {
        this.getArticles()
      }
    }
</script>