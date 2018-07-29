import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue"
import VueRouter from 'vue-router';
import SearchPage from './pages/SearchPage.vue'
import AssestPage from './pages/AssestPage.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: SearchPage },
    { path: '/asset/', component: AssestPage },
  ]
});

const store = new Vuex.Store({
  state: {
    Data: []
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
