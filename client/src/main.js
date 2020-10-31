import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('../node_modules/bootstrap/dist/js/bootstrap.min.js')

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
