import Vue from 'vue'
import Router  from 'vue-router'
import SearchPage from '../pages/SearchPage.vue'
import AssestPage from '../pages/AssestPage.vue'


Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'search', component: SearchPage },
    { path: '/Assest', name: 'Assest', component: AssestPage }
  ]
})
