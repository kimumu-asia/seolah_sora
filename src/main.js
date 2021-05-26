import Vue from 'vue'
import './plugins/base'
import vuetify from './plugins/vuetify'
import meta from './plugins/meta'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  vuetify,
  meta,
  router,
  render: h => h(App),
}).$mount('#app')
