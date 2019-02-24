import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/Home.vue'
import querySelector from '../query/querySelector.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        default: HomePage
      }
    },
    {
      path: '/query/:id',
      name: 'queryselector',
      component: querySelector,
      props: true
    }
  ]

})
