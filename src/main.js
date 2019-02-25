import Vue from 'vue'
import router from  './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  el:'#app',
  router,
  render: h => h(App)
})
