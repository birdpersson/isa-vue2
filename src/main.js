import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

Vue.config.productionTip = false

axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem("accessToken");

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
