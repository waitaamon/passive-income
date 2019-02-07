import {Dashboard, NewArticle, EditArticle, Articles } from "../components"


export default [
  {
    path: '/admin',
    component: Dashboard,
    name: 'dashboard',
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/admin/articles',
    component: Articles,
    name: 'articles',
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/admin/article/new',
    component: NewArticle,
    name: 'new-article',
    meta: {
      needsAuth: true
    }
  },
  {
    path: '/admin/article/edit',
    component: EditArticle,
    name: 'edit-article',
    meta: {
      needsAuth: true
    }
  }
]