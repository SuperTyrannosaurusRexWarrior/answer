<<<<<<< HEAD
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false
=======
import ElementUI from "element-ui";
import 'element-ui/lib/theme-chalk'
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.use(ElementUI)
Vue.config.productionTip = false;
>>>>>>> f7ddb4e781473e300592a44d9c1eecb2330a848d

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
