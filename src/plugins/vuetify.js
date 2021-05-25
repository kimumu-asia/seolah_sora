import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@/assets/stylesheets/vuetify.sass'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#BBBAAA',
        secondary: '#1e62ff',
        accent: '#D8EBF1',
        info: '#10316b',
      },
    },
  },
})
