import Vue from 'vue'
import './plugins/base'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './routes/index'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
