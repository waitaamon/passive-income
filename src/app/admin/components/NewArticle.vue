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

                <button type="submit" class="btn btn-primary mt-5">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
  import tinymce from 'vue-tinymce-editor'
  import { mapActions } from 'vuex'
    export default {
      name: 'new-article',
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
      methods: {
        ...mapActions({
          newArticle: 'article/newArticle'
        }),
        submit() {
          if(this.form.title === '' || this.form.description === '' || this.form.imagePath === '' ) {
            this.$toast.error({
              title:'Error',
              message:'All fields are required.'
            })
            return
          }
           this.newArticle(this.form).then(() => {
             this.$toast.success({
               title:'Successfully created',
               message:'Successfully created article.'
             })
             this.$router.replace({name: 'articles'})
           })
        }
      }
    }
</script>