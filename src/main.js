import Vue from 'vue'
import App from './App.vue'
//State
import {store} from './store/store'
//Bootstrap Vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router';
import {routes} from './router/routes';


Vue.config.productionTip = false

//Bootstrap Vue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


Vue.use(VueRouter)
const router = new VueRouter({
  routes:routes,
  mode:"history"
});

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
