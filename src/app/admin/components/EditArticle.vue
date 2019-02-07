<template>
    <div class="row">
        <div class="col-sm-8 offset-sm-2">
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Enter title" v-model="form.title">
                </div>
                <div class="form-group">
                    <label for="image">Image Url</label>
                    <input type="text" class="form-control" id="image" placeholder="Featured image" v-model="form.imagePath">
                </div>

                <tinymce id="d1" v-model="form.description"></tinymce>

                <button type="submit" class="btn btn-primary mt-5">Update</button>
            </form>
        </div>
    </div>
</template>

<script>
  import tinymce from 'vue-tinymce-editor'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'edit-article',
    components: {
      tinymce,
    },
    data() {
      return {
        form: {
          description: '',
          imagePath: '',
          title: ''
        }

      }
    },
    computed: {
      ...mapGetters({
        articles: 'article/getArticles'
      }),
    },
    methods: {
      ...mapActions({
        updateArticle: 'article/updateArticle'
      }),
      submit() {
        this.updateArticle(this.form).then(() => {
          this.$router.replace({name: 'articles'})
        })
      }
    }
  }
</script>