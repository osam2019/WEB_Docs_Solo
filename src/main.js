import Vue from 'vue'
import VueGoodTablePlugin from 'vue-good-table';
import Trend from "vuetrend"
import ElementUI from 'element-ui';
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'element-ui/lib/theme-chalk/index.css';
import 'vue-good-table/dist/vue-good-table.css'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.use(Trend)
Vue.use(ElementUI);
Vue.use(BootstrapVue);
Vue.use(VueGoodTablePlugin);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
