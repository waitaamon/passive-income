import Vue from 'vue'

export const Dashboard = Vue.component('dashboard', require('./Dashboard.vue').default)
export const NewArticle = Vue.component('new-article', require('./NewArticle.vue').default)
export const EditArticle = Vue.component('edit-article', require('./EditArticle').default)
export const Articles = Vue.component('articles', require('./Articles.vue').default)