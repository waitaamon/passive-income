<template>
    <div class="row mb-5">
        <div class="col-sm-8 offset-sm-2">
            <form @submit.prevent="submit">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input type="text" class="form-control" id="title" placeholder="Enter title" v-model="form.title">
                </div>
                <div class="form-group">
                    <label for="image">Image Url</label>
                    <input type="text" class="form-control" id="image" placeholder="Featured image"
                           v-model="form.imagePath">
                </div>

                <tinymce id="d1" v-model="form.description"></tinymce>

                <button type="submit" class="btn btn-primary mt-5">Update</button> &nbsp;
            </form>
            <button class="btn btn-danger mt-5" @click="deleteArt">Delete</button>
        </div>
    </div>
</template>

<script>
  import tinymce from 'vue-tinymce-editor'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'edit-article',
    components: {
      tinymce,
    },
    data() {
      return {
        form: {
          id: '',
          description: '',
          imagePath: '',
          title: ''
        }
      }
    },
    computed: {
      ...mapGetters({
        article: 'article/getArticle',
      }),
    },
    methods: {
      ...mapActions({
        updateArticle: 'article/updateArticle',
        deleteArticle: 'article/deleteArticle'
      }),
      submit() {
        if (this.form.title === '' || this.form.description === '' || this.form.imagePath === '') {
          this.$toast.error({
            title: 'Error',
            message: 'All fields are required.'
          })
          return
        }
        this.updateArticle(this.form).then(() => {
          this.$toast.success({
            title: 'Success',
            message: 'Successfully updated article.'
          })
          this.$router.replace({name: 'articles'})
        })
      },
      deleteArt() {
        this.deleteArticle(this.article.id)
          .then(() => {
            this.$toast.success({
              title: 'Success',
              message: 'Successfully deleted article.'
            })
            this.$router.replace({name: 'articles'})
          })
      }
    },
    mounted() {
      this.form.id = this.article.id
      this.form.title = this.article.title
      this.form.imagePath = this.article.imagePath
      this.form.description = this.article.description
    }
  }
</script>